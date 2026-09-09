import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Veuillez entrer une adresse email valide.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // ENVIRONMENT
    // -----------------------------

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY manquante.");

      return NextResponse.json(
        {
          error: "Service email non configuré.",
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // SANITIZATION
    // -----------------------------

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "Nouveau message");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    // -----------------------------
    // SEND EMAIL
    // -----------------------------

    const { data, error } = await resend.emails.send({
      from:
        process.env.EMAIL_FROM ||
        "Gikora Contact <onboarding@resend.dev>",

      to: [
        process.env.CONTACT_EMAIL ||
          "gikoragroup@gmail.com",
      ],

      replyTo: email,

      subject: subject
        ? `Gikora Architects — ${subject}`
        : "Nouveau message — Gikora Architects",

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 40px 24px;
            color: #222;
            background: #ffffff;
          "
        >

          <div
            style="
              border-bottom: 1px solid #e5e5e5;
              padding-bottom: 20px;
              margin-bottom: 30px;
            "
          >
            <p
              style="
                margin: 0;
                color: #5A3E2B;
                font-size: 12px;
                letter-spacing: 3px;
                text-transform: uppercase;
              "
            >
              Gikora Architects
            </p>

            <h2
              style="
                margin: 12px 0 0;
                font-size: 24px;
                font-weight: 400;
              "
            >
              Nouveau message
            </h2>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #888; font-size: 12px;">
              NOM
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${safeName}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #888; font-size: 12px;">
              EMAIL
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${safeEmail}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #888; font-size: 12px;">
              SUJET
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${safeSubject}
            </p>
          </div>

          <div
            style="
              border-top: 1px solid #e5e5e5;
              padding-top: 24px;
            "
          >
            <p style="margin: 0 0 10px; color: #888; font-size: 12px;">
              MESSAGE
            </p>

            <p
              style="
                margin: 0;
                font-size: 15px;
                line-height: 1.7;
                color: #444;
              "
            >
              ${safeMessage}
            </p>
          </div>

          <div
            style="
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e5e5;
            "
          >
            <p
              style="
                margin: 0;
                font-size: 11px;
                color: #999;
              "
            >
              Message envoyé depuis le formulaire de contact
              de gikoraarchitects.com
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Impossible d'envoyer le message.",
        },
        { status: 500 }
      );
    }

    console.log("Email envoyé :", data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Une erreur est survenue lors de l'envoi.",
      },
      { status: 500 }
    );
  }
}