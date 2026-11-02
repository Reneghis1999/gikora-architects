import { siteConfig } from "@/lib/site";

export type EmailField = { label: string; value: string };

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const BRAND = "#5A3E2B";

function layout(content: string, preheader: string) {
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(siteConfig.name)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f1ec;">
    <span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#222222;">
            <tr>
              <td style="padding:32px 32px 20px;border-bottom:1px solid #e5e5e5;">
                <p style="margin:0;color:${BRAND};font-size:12px;letter-spacing:3px;text-transform:uppercase;">${escapeHtml(siteConfig.name)}</p>
              </td>
            </tr>
            ${content}
            <tr>
              <td style="padding:20px 32px 32px;border-top:1px solid #e5e5e5;">
                <p style="margin:0;font-size:11px;line-height:1.6;color:#999999;">
                  ${escapeHtml(siteConfig.name)} · ${escapeHtml(siteConfig.address.street)}, ${escapeHtml(siteConfig.address.city)}, ${escapeHtml(siteConfig.address.countryName)}<br />
                  ${escapeHtml(siteConfig.phoneDisplay)} · ${escapeHtml(siteConfig.email)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/* =========================================================
   EMAIL REÇU PAR LE CABINET
========================================================== */

export function notificationEmail({
  heading,
  fields,
  message,
  origin,
  replyEmail,
}: {
  heading: string;
  fields: EmailField[];
  message?: string;
  origin: string;
  replyEmail?: string;
}) {
  const rows = fields
    .filter((field) => field.value)
    .map(
      (field) => `
            <tr>
              <td style="padding:0 32px 18px;">
                <p style="margin:0 0 4px;color:#888888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">${escapeHtml(field.label)}</p>
                <p style="margin:0;font-size:16px;color:#222222;">${escapeHtml(field.value)}</p>
              </td>
            </tr>`
    )
    .join("");

  const messageBlock = message
    ? `
            <tr>
              <td style="padding:8px 32px 28px;">
                <div style="border-top:1px solid #e5e5e5;padding-top:20px;">
                  <p style="margin:0 0 10px;color:#888888;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Message</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#444444;">${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
                </div>
              </td>
            </tr>`
    : "";

  const replyButton = replyEmail
    ? `
            <tr>
              <td style="padding:0 32px 28px;">
                <a href="mailto:${encodeURIComponent(replyEmail)}" style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;font-size:12px;letter-spacing:2px;text-transform:uppercase;padding:14px 22px;">Répondre au client</a>
              </td>
            </tr>`
    : "";

  const html = layout(
    `
            <tr>
              <td style="padding:28px 32px 20px;">
                <h1 style="margin:0;font-size:24px;font-weight:400;color:#222222;">${escapeHtml(heading)}</h1>
                <p style="margin:8px 0 0;font-size:13px;color:#888888;">Envoyé depuis ${escapeHtml(origin)}</p>
              </td>
            </tr>
            ${rows}
            ${messageBlock}
            ${replyButton}`,
    heading
  );

  const text = [
    heading,
    `Envoyé depuis ${origin}`,
    "",
    ...fields.filter((f) => f.value).map((f) => `${f.label} : ${f.value}`),
    ...(message ? ["", "Message :", message] : []),
  ].join("\n");

  return { html, text };
}

/* =========================================================
   ACCUSÉ DE RÉCEPTION ENVOYÉ AU VISITEUR
   Contenu volontairement fixe (aucune donnée saisie par le
   visiteur) pour que le formulaire ne puisse pas servir à
   envoyer du spam à des tiers.
========================================================== */

export function autoReplyEmail() {
  const heading = "Nous avons bien reçu votre message";

  const html = layout(
    `
            <tr>
              <td style="padding:28px 32px 32px;">
                <h1 style="margin:0 0 18px;font-size:24px;font-weight:400;color:#222222;">${heading}</h1>
                <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#444444;">Bonjour,</p>
                <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#444444;">Merci d'avoir contacté ${escapeHtml(siteConfig.name)}. Votre demande a bien été transmise à notre équipe, qui reviendra vers vous dans les meilleurs délais.</p>
                <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#444444;">Pour toute urgence, vous pouvez également nous joindre sur WhatsApp au ${escapeHtml(siteConfig.phoneDisplay)}.</p>
                <p style="margin:24px 0 0;font-size:15px;line-height:1.7;color:#444444;">L'équipe ${escapeHtml(siteConfig.name)}</p>
              </td>
            </tr>`,
    heading
  );

  const text = [
    heading,
    "",
    "Bonjour,",
    "",
    `Merci d'avoir contacté ${siteConfig.name}. Votre demande a bien été transmise à notre équipe, qui reviendra vers vous dans les meilleurs délais.`,
    "",
    `Pour toute urgence, vous pouvez également nous joindre sur WhatsApp au ${siteConfig.phoneDisplay}.`,
    "",
    `L'équipe ${siteConfig.name}`,
  ].join("\n");

  return { subject: `${heading} — ${siteConfig.name}`, html, text };
}
