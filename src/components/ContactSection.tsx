import { Check, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/site/Reveal";
import { Badge, Container } from "@/components/site/ui";
import { siteConfig, whatsappUrl } from "@/lib/site";

const advantages = [
  "Architecte agréé ONAT",
  "Rendus 3D avant travaux",
  "Suivi de chantier transparent",
  "Accompagnement à distance",
];

export function ContactDetails() {
  const rows = [
    {
      icon: Phone,
      label: "Téléphone",
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phoneE164}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: siteConfig.phoneDisplay,
      href: whatsappUrl(),
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: `${siteConfig.address.street}, ${siteConfig.address.city}`,
    },
  ];

  return (
    <ul className="grid gap-2">
      {rows.map(({ icon: Icon, label, value, href, external }) => {
        const content = (
          <>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
              <Icon size={17} strokeWidth={1.6} />
            </span>
            <span className="min-w-0">
              <span className="block text-[12px] text-white/50">{label}</span>
              <span className="block truncate text-[15px] text-white">{value}</span>
            </span>
          </>
        );

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5"
              >
                {content}
              </a>
            ) : (
              <div className="flex items-center gap-4 p-2">{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28">
      <Container>
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col justify-between gap-12 rounded-[2rem] bg-brand px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-12">
            <div>
              <Badge tone="outline-light">Contact</Badge>
              <h2 className="mt-7 text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">
                Vous avez un projet à nous confier ?
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/70">
                Décrivez-nous votre projet : nous revenons vers vous rapidement
                pour en discuter et vous proposer un accompagnement adapté.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {advantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-white/85">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <Check size={13} strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ContactDetails />
          </Reveal>

          <Reveal delay={0.08} className="rounded-[2rem] bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
            <p className="text-[13px] text-taupe">Formulaire</p>
            <h3 className="mt-2 text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
              Planifiez un premier échange
            </h3>
            <div className="mt-8">
              <ContactForm idPrefix="home-contact" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
