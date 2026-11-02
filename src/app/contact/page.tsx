import type { Metadata } from "next";
import { FaInstagram, FaTiktok } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import { ContactDetails } from "@/components/ContactSection";
import { Badge, Container, PageHero } from "@/components/site/ui";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact — Parlons de votre projet",
  description:
    "Contactez Gikora Architects à Lomé (Atigangomé Sanol) pour votre projet de construction, de rénovation ou de design d'intérieur. Téléphone, WhatsApp, email et formulaire.",
  path: "/contact",
});

const socials = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "TikTok", href: siteConfig.socials.tiktok, icon: FaTiktok },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        badge="Contact"
        title={
          <>
            Parlons de
            <span className="text-brand"> votre projet.</span>
          </>
        }
        intro="Une idée, un projet de construction ou simplement une première réflexion ? Échangeons ensemble et donnons forme à votre vision."
        aside={
          <div className="flex flex-col justify-between gap-10 rounded-[2rem] bg-brand px-6 py-10 text-white sm:px-10 lg:px-12">
            <div>
              <Badge tone="outline-light">Nos coordonnées</Badge>
              <p className="mt-6 max-w-sm text-lg leading-8 text-white/80">
                Chaque projet commence par une conversation. Nous vous
                accueillons sur rendez-vous à Lomé.
              </p>
            </div>

            <ContactDetails />

            <div className="flex items-center gap-3 border-t border-white/10 pt-6">
              <span className="text-[13px] text-white/55">Suivez notre travail</span>
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 transition-colors hover:bg-white hover:text-ink"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        }
      />

      <section className="pt-3">
        <Container>
          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
            {/* FORMULAIRE */}

            <div className="rounded-[2rem] bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
              <p className="text-[13px] text-taupe">Formulaire</p>
              <h2 className="mt-2 text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
                Décrivez-nous votre projet.
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-taupe">
                Votre message est transmis directement à notre équipe. Nous vous
                répondons dans les meilleurs délais.
              </p>
              <div className="mt-8">
                <ContactForm idPrefix="contact-page" />
              </div>
            </div>

            {/* CARTE */}

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-sand-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de Gikora Architects à Lomé"
              />

              <div className="absolute bottom-3 left-3 right-3 rounded-[1.25rem] bg-white/95 p-4 backdrop-blur sm:right-auto sm:p-5">
                <p className="text-[12px] text-taupe">Venez nous rencontrer</p>
                <p className="mt-1 text-[15px] text-ink">
                  {siteConfig.address.street} · {siteConfig.address.city},{" "}
                  {siteConfig.address.countryName}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
