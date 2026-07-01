"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "#about" },
  { label: "Équipe", href: "/team" },
  { label: "Projets", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL LOCK SIMPLE (PAS DE BUG)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* LOGO */}
          <Link href="/">
            <Image
              src="/images/gikoralogo.png"
              alt="GIKORA"
              width={180}
              height={60}
              className="w-[150px] lg:w-[180px]"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.18em] ${
                  isScrolled ? "text-neutral-800" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <Button
                className={`rounded-none px-8 uppercase tracking-[0.18em] ${
                  isScrolled
                    ? "bg-black text-white"
                    : "bg-white/10 text-white border border-white/30"
                }`}
              >
                Commencer
              </Button>
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden z-[120] ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* OVERLAY (séparé du menu) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[140] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MENU FULL SCREEN */}
      <div
        className={`fixed inset-0 z-[150] bg-white flex flex-col items-center justify-center transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >

        {/* CROIX (FORCÉE AU-DESSUS DE TOUT) */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 z-[200]"
        >
          <X size={34} />
        </button>

        {/* LINKS */}
        <nav className="flex flex-col items-center gap-10 text-2xl font-light">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="uppercase tracking-[0.2em] text-neutral-700 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-12">
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button className="rounded-none bg-black px-10 uppercase tracking-[0.2em] text-white">
              Commencer
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}