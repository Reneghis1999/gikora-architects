
import Link from "next/link";

import WordReveal from "@/components/site/WordReveal";
import { LogoLockup } from "@/components/site/ui";
import { siteConfig, whatsappUrl } from "@/lib/site";

const pages = [
  { label: "Projets", href: "/projects" },
  { label: "Expertises", href: "/#services" },
  { label: "À propos", href: "/#about" },
  { label: "Équipe", href: "/team" },
  { label: "Espace Diaspora", href: "/diaspora" },
  { label: "Contact", href: "/contact" },
];

const contacts = [
  { label: "WhatsApp", href: whatsappUrl(), external: true },
  { label: "Instagram", href: siteConfig.socials.instagram, external: true },
  { label: "TikTok", href: siteConfig.socials.tiktok, external: true },
  { label: "Téléphone", href: `tel:${siteConfig.phoneE164}` },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

const linkClass =
  "flex min-h-11 items-center text-white/75 transition-colors duration-150 hover:text-white";

export default function Footer() {
  return (
    <footer className="mt-16 overflow-hidden rounded-t-[3rem] bg-deep text-white">
      {/* pb-24 : la dernière ligne reste au-dessus du bouton « Retourner en haut » */}
      <div className="@container mx-auto max-w-[1440px] px-6 pb-24 pt-16 md:px-10 md:pt-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link href="/" aria-label="Gikora Architects — Accueil" className="block w-fit">
              <LogoLockup tone="light" />
            </Link>

            <p className="mt-6 text-base leading-relaxed text-white/75">
              Cabinet d’architecture contemporain basé à Lomé, spécialisé dans
              la conception d’espaces modernes, fonctionnels et intemporels.
            </p>
          </div>

          <ul className="grid grid-flow-col grid-cols-2 grid-rows-6 gap-x-12 text-base">
            {pages.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}

            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={linkClass}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Texte géant en bas du footer */}
        <WordReveal
          text="Gikora Architects"
          className="mt-16 whitespace-nowrap text-[length:calc(100cqw/6.98)] leading-[0.9] tracking-[-0.04em]"
        />

        {/* Copyright, adresse et signature ASAP DIGITAL */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/20 pt-6 text-sm text-white/70 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Gikora Architects. Tous droits réservés.
          </p>

          <address className="not-italic">
            {siteConfig.address.street}, {siteConfig.address.city},{" "}
            {siteConfig.address.countryName}
          </address>

          <p>
            Site réalisé par{" "}
            <a
              href="https://asap-digital-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white transition-colors duration-200 hover:text-white/60"
              aria-label="Découvrir ASAP DIGITAL"
            >
              ASAP DIGITAL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
