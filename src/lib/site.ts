/* =========================================================
   CONFIGURATION CENTRALE DU SITE
   Toutes les informations de contact / SEO sont définies ici
   pour éviter les incohérences entre les pages.
========================================================== */

function resolveSiteUrl() {
  // 1. URL définie explicitement (recommandé en production)
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  // 2. Domaine de production fourni automatiquement par Vercel
  const vercelProduction =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  // 3. Développement local
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Gikora Architects",
  legalName: "GIKORA ARCHITECTS",
  url: resolveSiteUrl(),
  locale: "fr_FR",
  title: "Gikora Architects | Cabinet d'architecture à Lomé, Togo",
  description:
    "Cabinet d'architecture à Lomé (Togo) : conception architecturale, design d'intérieur, rendus 3D, suivi de chantier et accompagnement de la diaspora pour vos projets immobiliers.",
  keywords: [
    "architecte Lomé",
    "cabinet d'architecture Lomé",
    "architecte Togo",
    "cabinet d'architecture Togo",
    "architecture contemporaine",
    "design d'intérieur Lomé",
    "rendu 3D architecture",
    "suivi de chantier Togo",
    "permis de construire Togo",
    "construire au Togo diaspora",
    "Gikora Architects",
  ],
  email: "gikoragroup@gmail.com",
  phoneDisplay: "(+228) 93 63 15 78",
  phoneE164: "+22893631578",
  whatsappNumber: "22893631578",
  address: {
    street: "Atigangomé Sanol",
    city: "Lomé",
    countryCode: "TG",
    countryName: "Togo",
  },
  geo: {
    latitude: 6.2101935937776735,
    longitude: 1.1401157749902824,
  },
  socials: {
    instagram: "https://www.instagram.com/gikora_aarchitects/",
    tiktok: "https://www.tiktok.com/@gikora_group1",
  },
  ogImage: "/opengraph-image.jpg",
} as const;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}${
    text ? `?text=${encodeURIComponent(text)}` : ""
  }`;

/** Sérialise un objet JSON-LD en échappant les caractères dangereux (XSS). */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
