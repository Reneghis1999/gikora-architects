import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Parlons de votre projet",
  description:
    "Contactez Gikora Architects à Lomé (Atigangomé Sanol) pour votre projet de construction, de rénovation ou de design d'intérieur. Téléphone, WhatsApp, email et formulaire.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
