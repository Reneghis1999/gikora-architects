import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Gikora Architects — Cabinet d'architecture à Lomé, Togo",
};

/**
 * Métadonnées SEO cohérentes pour chaque page :
 * titre, description, URL canonique, Open Graph et Twitter.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title: socialTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage.url],
    },
  };
}
