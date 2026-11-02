import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/* =========================================================
   CONTENT SECURITY POLICY
   - Les polices (next/font) et les images sont auto-hébergées.
   - Seule la carte Google Maps (page Contact) est chargée
     depuis un domaine externe, dans une iframe.
========================================================== */

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "frame-src https://www.google.com https://maps.google.com",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Ne pas révéler la technologie utilisée (en-tête "X-Powered-By: Next.js")
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Images, icônes et logos du dossier /public
        source: "/:dir(images|projects|team|icones)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Les réponses de l'API ne doivent jamais être mises en cache
        source: "/api/:path*",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },

  async redirects() {
    return [
      // Anciennes URLs / URLs intuitives en français
      { source: "/equipe", destination: "/team", permanent: true },
      { source: "/projets", destination: "/projects", permanent: true },
      { source: "/about", destination: "/#about", permanent: true },
    ];
  },
};

export default nextConfig;
