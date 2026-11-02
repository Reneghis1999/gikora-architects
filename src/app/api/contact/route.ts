import { NextResponse } from "next/server";
import { Resend } from "resend";

import { autoReplyEmail, notificationEmail } from "@/lib/email-templates";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

/* =========================================================
   CONFIGURATION
   Variables d'environnement (voir .env.example) :
   - RESEND_API_KEY   (obligatoire) clé API Resend
   - CONTACT_EMAIL    adresse(s) qui reçoivent les messages,
                      séparées par des virgules
   - EMAIL_FROM       expéditeur, sur un domaine vérifié dans Resend
                      ex : "Gikora Architects <contact@votre-domaine.com>"
   - CONTACT_AUTOREPLY "true" pour envoyer un accusé de réception
                      au visiteur (nécessite un domaine vérifié)
========================================================== */

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT = { limit: 8, windowMs: 10 * 60 * 1000 };

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  country: 80,
  projectType: 100,
  subject: 150,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;
const PHONE_REGEX = /^\+?[0-9 ().-]{6,30}$/;
const RESEND_TEST_SENDER = "Gikora Architects <onboarding@resend.dev>";

type Field = keyof typeof LIMITS;

function json(body: Record<string, unknown>, status: number, headers?: HeadersInit) {
  return NextResponse.json(body, { status, headers });
}

/** Nettoie une valeur : type texte, sans caractères de contrôle, longueur bornée. */
function clean(value: unknown, field: Field, { multiline = false } = {}) {
  if (typeof value !== "string") return "";

  const controlChars = multiline
    ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g
    : /[\u0000-\u001F\u007F]/g;

  return value.replace(controlChars, multiline ? "" : " ").trim().slice(0, LIMITS[field] + 1);
}

function recipients() {
  return (process.env.CONTACT_EMAIL || siteConfig.email)
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);
}

function fail(message: string) {
  return json({ error: message }, 400);
}

const FALLBACK_ERROR = `Le message n'a pas pu être envoyé. Écrivez-nous directement à ${siteConfig.email} ou sur WhatsApp au ${siteConfig.phoneDisplay}.`;

export async function POST(req: Request) {
  /* -------------------------------------------------------
     1. Requête : origine, type, taille
  ------------------------------------------------------- */

  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");

  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return json({ error: "Origine non autorisée." }, 403);
      }
    } catch {
      return json({ error: "Origine non autorisée." }, 403);
    }
  }

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Format de requête invalide." }, 415);
  }

  const declaredLength = Number(req.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return json({ error: "Message trop volumineux." }, 413);
  }

  const ip = getClientIp(req);
  const limited = rateLimit(`contact:${ip}`, RATE_LIMIT);

  if (!limited.allowed) {
    return json(
      {
        error:
          "Trop de messages envoyés. Merci de patienter quelques minutes avant de réessayer.",
      },
      429,
      { "Retry-After": String(limited.retryAfter) }
    );
  }

  let body: Record<string, unknown>;

  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return json({ error: "Message trop volumineux." }, 413);
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return fail("Requête invalide.");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return fail("Requête invalide.");
  }

  /* -------------------------------------------------------
     2. Anti-spam : champ piège invisible (honeypot)
     Les robots le remplissent, les humains ne le voient pas.
     On répond "succès" pour ne pas les renseigner.
  ------------------------------------------------------- */

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ success: true, message: "Message envoyé avec succès." }, 200);
  }

  /* -------------------------------------------------------
     3. Validation
  ------------------------------------------------------- */

  const source = body.source === "diaspora" ? "diaspora" : "contact";

  const name = clean(body.name, "name");
  const email = clean(body.email, "email").toLowerCase();
  const phone = clean(body.phone, "phone");
  const country = clean(body.country, "country");
  const projectType = clean(body.projectType, "projectType");
  const subject = clean(body.subject, "subject");
  const message = clean(body.message, "message", { multiline: true });

  if (name.length < 2) return fail("Veuillez indiquer votre nom.");

  for (const [field, value] of Object.entries({
    name,
    email,
    phone,
    country,
    projectType,
    subject,
    message,
  }) as [Field, string][]) {
    if (value.length > LIMITS[field]) {
      return fail("Un des champs dépasse la longueur autorisée.");
    }
  }

  if (email && !EMAIL_REGEX.test(email)) {
    return fail("Veuillez entrer une adresse email valide.");
  }

  if (phone && !PHONE_REGEX.test(phone)) {
    return fail("Veuillez entrer un numéro de téléphone valide.");
  }

  if (source === "contact") {
    if (!email) return fail("Veuillez indiquer votre adresse email.");
    if (message.length < 2) return fail("Veuillez écrire votre message.");
  } else {
    if (!email && !phone) {
      return fail("Veuillez indiquer un téléphone ou une adresse email.");
    }
  }

  /* -------------------------------------------------------
     4. Configuration Resend
  ------------------------------------------------------- */

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY manquante : aucun email ne peut être envoyé.");
    return json({ error: FALLBACK_ERROR }, 503);
  }

  const from = process.env.EMAIL_FROM || RESEND_TEST_SENDER;
  const usesTestSender = from.includes("@resend.dev");

  if (usesTestSender) {
    console.warn(
      "[contact] EMAIL_FROM non configuré : utilisation de onboarding@resend.dev. " +
        "Resend n'enverra les emails qu'à l'adresse du propriétaire du compte Resend. " +
        "Vérifiez votre domaine sur resend.com/domains puis définissez EMAIL_FROM."
    );
  }

  const resend = new Resend(apiKey);

  /* -------------------------------------------------------
     5. Email de notification au cabinet
  ------------------------------------------------------- */

  const isDiaspora = source === "diaspora";

  const heading = isDiaspora
    ? "Nouvelle demande — Espace Diaspora"
    : "Nouveau message — Formulaire de contact";

  const emailSubject = isDiaspora
    ? `[Diaspora] ${projectType || "Nouvelle demande"} — ${name}`
    : `[Contact] ${subject || "Nouveau message"} — ${name}`;

  const { html, text } = notificationEmail({
    heading,
    origin: `${siteConfig.url}${isDiaspora ? "/diaspora" : "/contact"}`,
    replyEmail: email || undefined,
    message: message || undefined,
    fields: [
      { label: "Nom", value: name },
      { label: "Email", value: email },
      { label: "Téléphone / WhatsApp", value: phone },
      { label: "Pays de résidence", value: country },
      { label: "Type de projet", value: projectType },
      { label: "Sujet", value: subject },
    ],
  });

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: recipients(),
      replyTo: email || undefined,
      subject: emailSubject,
      html,
      text,
      tags: [{ name: "source", value: source }],
    });

    if (error) {
      console.error("[contact] Erreur Resend :", error.name, error.message);
      return json({ error: FALLBACK_ERROR }, 502);
    }

    console.info("[contact] Email envoyé :", data?.id);
  } catch (error) {
    console.error("[contact] Échec de l'envoi :", error);
    return json({ error: FALLBACK_ERROR }, 502);
  }

  /* -------------------------------------------------------
     6. Accusé de réception (optionnel, domaine vérifié requis)
  ------------------------------------------------------- */

  if (email && process.env.CONTACT_AUTOREPLY === "true" && !usesTestSender) {
    const reply = autoReplyEmail();

    try {
      const { error } = await resend.emails.send({
        from,
        to: [email],
        replyTo: recipients()[0],
        subject: reply.subject,
        html: reply.html,
        text: reply.text,
        tags: [{ name: "source", value: "autoreply" }],
      });

      if (error) {
        console.warn("[contact] Accusé de réception non envoyé :", error.message);
      }
    } catch (error) {
      console.warn("[contact] Accusé de réception non envoyé :", error);
    }
  }

  return json({ success: true, message: "Message envoyé avec succès." }, 200);
}
