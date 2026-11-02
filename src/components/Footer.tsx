import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import { ButtonLink, Container, LogoLockup } from "@/components/site/ui";
import { siteConfig, whatsappUrl } from "@/lib/site";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects" },
  { label: "À propos", href: "/#about" },
  { label: "Équipe", href: "/team" },
  { label: "Espace Diaspora", href: "/diaspora" },
  { label: "Contact", href: "/contact" },
];

const expertises = [
  "Études architecturales",
  "Design d’intérieur",
  "Modélisation 3D",
  "Suivi de chantier",
  "Aménagement urbain",
];

const socials = [
  { label: "WhatsApp", href: whatsappUrl(), icon: FaWhatsapp },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: FaInstagram },
  { label: "TikTok", href: siteConfig.socials.tiktok, icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="pb-3 pt-3 sm:pb-5">
      <Container>
        <div className="rounded-[2rem] bg-deep px-6 py-14 text-white sm:px-10 lg:px-16 lg:py-20">
          {/* CTA */}

          <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-3xl text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Construisons ensemble
              <span className="text-white/45"> les espaces de demain.</span>
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Démarrer un projet
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="outline-light" external>
                Écrire sur WhatsApp
              </ButtonLink>
            </div>
          </div>

          {/* COLONNES */}

          <div className="grid gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <LogoLockup tone="light" />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                Cabinet d’architecture contemporain basé à Lomé, spécialisé dans
                la conception d’espaces modernes, fonctionnels et intemporels.
              </p>
            </div>

            <div>
              <p className="text-[13px] text-white/45">Navigation</p>
              <ul className="mt-5 space-y-3 text-[15px]">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/80 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[13px] text-white/45">Expertises</p>
              <ul className="mt-5 space-y-3 text-[15px] text-white/80">
                {expertises.map((item) => (
                  <li key={item}>
                    <Link href="/#services" className="transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[13px] text-white/45">Contact</p>
              <address className="mt-5 space-y-3 text-[15px] not-italic text-white/80">
                <p>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.countryName}
                </p>
                <p>
                  <a href={`tel:${siteConfig.phoneE164}`} className="transition-colors hover:text-white">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                    {siteConfig.email}
                  </a>
                </p>
              </address>

              <div className="mt-6 flex gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white hover:text-ink"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BAS DE PAGE */}

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Gikora Architects. Tous droits réservés.</p>
            <p>Architecture · Design · 3D · Urbanisme</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
