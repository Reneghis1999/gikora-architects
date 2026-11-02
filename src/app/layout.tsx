import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Questrial } from "next/font/google";
import AppClient from "@/components/AppClient";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { pageMetadata } from "@/lib/seo";
import { jsonLd, siteConfig } from "@/lib/site";

// Police utilisée par veone.net (Questrial)
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...pageMetadata({ description: siteConfig.description, path: "/" }),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "architecture",
  formatDetection: { telephone: false, email: false, address: false },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f0ea",
  width: "device-width",
  initialScale: 1,
};

/* =========================================================
   DONNÉES STRUCTURÉES (schema.org)
   Aident Google à afficher la fiche du cabinet : adresse,
   téléphone, réseaux sociaux, zone d'intervention…
========================================================== */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icons/icon-512.png`,
      image: `${siteConfig.url}/og-image.jpg`,
      email: siteConfig.email,
      telephone: siteConfig.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: [
        { "@type": "Country", name: "Togo" },
        { "@type": "City", name: "Lomé" },
      ],
      knowsAbout: [
        "Architecture",
        "Design d'intérieur",
        "Visualisation 3D",
        "Suivi de chantier",
        "Urbanisme",
        "Permis de construire",
      ],
      sameAs: [siteConfig.socials.instagram, siteConfig.socials.tiktok],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={questrial.variable} suppressHydrationWarning>
      <head>
        {/* Masque le loader avant l'hydratation s'il a déjà été vu dans la session */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('gikora-loader-seen')==='1'||matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('loader-seen')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }}
        />
      </head>
      <body className={questrial.className}>
        <AppClient>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </AppClient>
      </body>
    </html>
  );
}
