"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import { ButtonLink, LogoLockup } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappUrl } from "@/lib/site";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects" },
  { label: "Services", href: "/#services" },
  { label: "Équipe", href: "/team" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Ombre légère une fois la page défilée */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Menu mobile : blocage du scroll + fermeture avec Échap */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  // En haut de page, le menu est intégré au bloc d'en-tête de la page
  // (pastilles beiges sur la carte blanche). Une fois la page défilée,
  // il redevient une barre flottante blanche.
  const tinted = !scrolled;
  const accent = tinted ? "bg-white" : "bg-canvas";

  const pill = cn(
    "rounded-2xl ring-1 ring-black/5 transition-[background-color,box-shadow] duration-300",
    tinted ? "bg-canvas" : "bg-white",
    scrolled && "shadow-[0_8px_30px_-12px_rgba(38,29,22,0.25)]"
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[9999] transition-[padding] duration-300",
          scrolled ? "pt-3 sm:pt-4" : "pt-6 sm:pt-10"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-3 sm:px-5">
        <div
          className={cn(
            "flex items-center justify-between gap-2 transition-[padding] duration-300",
            scrolled ? "px-0" : "px-3 sm:px-5"
          )}
        >
          {/* LOGO + NAVIGATION */}

          <div className="flex items-center gap-2">
            <Link
              href="/"
              aria-label="Gikora Architects — Accueil"
              className={cn(pill, "flex h-14 items-center px-4 sm:h-[60px] sm:px-5")}
            >
              <LogoLockup />
            </Link>

            <nav
              aria-label="Navigation principale"
              className={cn(pill, "hidden h-[60px] items-center gap-1 px-2 lg:flex")}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-[15px] text-ink transition-colors duration-200",
                    tinted ? "hover:bg-white" : "hover:bg-canvas",
                    isActive(link.href) && accent
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phoneE164}`}
              className={cn(
                pill,
                "hidden h-[60px] items-center gap-3 pl-2 pr-5 text-[15px] text-ink xl:flex"
              )}
            >
              <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300", accent)}>
                <Phone size={17} strokeWidth={1.6} />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-taupe">Appelez-nous</span>
                {siteConfig.phoneDisplay}
              </span>
            </a>

            <ButtonLink
              href="/contact"
              className="hidden h-[60px] shadow-[0_8px_30px_-12px_rgba(38,29,22,0.45)] sm:inline-flex"
            >
              Démarrer un projet
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              className={cn(pill, "flex h-14 w-14 items-center justify-center text-ink sm:h-[60px] sm:w-[60px] lg:hidden")}
            >
              <Menu size={22} strokeWidth={1.6} />
            </button>
          </div>
        </div>
        </div>
      </header>

      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      <div
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "fixed inset-0 z-[10002] flex flex-col bg-canvas px-3 pb-6 pt-3 transition-all duration-300 sm:px-5 sm:pt-4 lg:hidden",
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex h-14 items-center rounded-2xl bg-white px-4 ring-1 ring-black/5"
          >
            <LogoLockup />
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-black/5"
          >
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="mt-4 flex-1 overflow-y-auto rounded-[2rem] bg-white p-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-2xl px-4 py-4 text-3xl tracking-[-0.03em] text-ink transition-colors hover:bg-canvas",
                isActive(link.href) && "bg-canvas"
              )}
            >
              {link.label}
              <ArrowUpRight size={22} strokeWidth={1.4} className="text-taupe" />
            </Link>
          ))}
        </nav>

        <div className="mt-3 grid gap-3">
          <ButtonLink href="/contact" onClick={() => setOpen(false)} className="justify-between">
            Démarrer un projet
          </ButtonLink>

          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
            <a href={`tel:${siteConfig.phoneE164}`} className="text-[15px] text-ink">
              {siteConfig.phoneDisplay}
            </a>
            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas"
              >
                <FaWhatsapp size={17} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas"
              >
                <FaTiktok size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
