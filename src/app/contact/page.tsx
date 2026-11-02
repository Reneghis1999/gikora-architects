import type { Metadata } from "next";
import { CalendarCheck, Globe2, MessagesSquare } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import { ContactDetails } from "@/components/ContactSection";
import Reveal from "@/components/site/Reveal";
import { Badge, Container, PageHero, SectionHeading } from "@/components/site/ui";
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

const reassurance = [
  {
    icon: CalendarCheck,
    title: "Sur rendez-vous",
    text: "Nous vous accueillons au cabinet, à Atigangomé Sanol, pour échanger autour de votre projet.",
  },
  {
    icon: MessagesSquare,
    title: "À distance aussi",
    text: "Échanges possibles en visioconférence ou sur WhatsApp, où que vous soyez.",
  },
  {
    icon: Globe2,
    title: "Togo et diaspora",
    text: "Nous accompagnons des projets à Lomé, partout au Togo et pour la diaspora.",
  },
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
          <div className="flex flex-col justify-between gap-12 rounded-[2rem] bg-brand px-6 py-12 text-white sm:px-10 lg:px-12 lg:pb-12 lg:pt-36">
            <div>
              <Badge tone="outline-light">Nos coordonnées</Badge>
              <p className="mt-6 max-w-sm text-lg leading-8 text-white/80">
                Chaque projet commence par une conversation.
              </p>
            </div>

            <ContactDetails />

            <div className="flex items-center gap-3 border-t border-white/10 pt-7">
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

      {/* =====================================================
          FORMULAIRE
      ====================================================== */}

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <Reveal>
              <SectionHeading
                badge="Formulaire"
                title={
                  <>
                    Décrivez-nous
                    <span className="text-taupe"> votre projet.</span>
                  </>
                }
                intro="Votre message est transmis directement à notre équipe. Plus vous nous donnez de détails (type de projet, ville, surface, budget, délais), plus notre réponse sera précise."
              />

              <ul className="mt-12 space-y-8 border-t border-line pt-10">
                {reassurance.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand ring-1 ring-black/5">
                      <Icon size={20} strokeWidth={1.4} />
                    </span>
                    <span>
                      <span className="block text-lg tracking-[-0.01em] text-ink">{title}</span>
                      <span className="mt-1.5 block text-[15px] leading-7 text-taupe">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="rounded-[2rem] bg-white px-6 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
              <p className="text-[13px] text-taupe">Les champs marqués * sont obligatoires</p>
              <div className="mt-8">
                <ContactForm idPrefix="contact-page" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CARTE
      ====================================================== */}

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <SectionHeading
              badge="Localisation"
              title={
                <>
                  Venez nous
                  <span className="text-brand"> rencontrer.</span>
                </>
              }
              intro={`Notre cabinet est situé à ${siteConfig.address.street}, à ${siteConfig.address.city}. Nous vous accueillons sur rendez-vous pour imaginer ensemble les premières lignes de votre projet.`}
            />
          </Reveal>

          <Reveal delay={0.08} className="relative mt-14 h-[420px] overflow-hidden rounded-[2rem] bg-sand-soft sm:h-[520px] lg:mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.405004675778!2d1.1401157749902824!3d6.2101935937776735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInMzYuNyJOIDHCsDA4JzMzLjciRQ!5e0!3m2!1sfr!2stg!4v1761693680740!5m2!1sfr!2stg"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de Gikora Architects à Lomé"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] bg-white/95 p-5 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:p-6">
              <p className="text-[12px] text-taupe">Gikora Architects</p>
              <p className="mt-1 text-[15px] text-ink">
                {siteConfig.address.street} · {siteConfig.address.city},{" "}
                {siteConfig.address.countryName}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
