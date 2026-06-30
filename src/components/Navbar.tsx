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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/gikoralogo.png"
            alt="GIKORA Architects"
            width={180}
            height={60}
            priority
            className="h-auto w-[150px] lg:w-[180px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm uppercase tracking-[0.18em] transition-all duration-300 px-3 py-2 group ${
                isScrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {link.label}
              </span>

              <span className="absolute inset-0 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-[#4a2f1b] rounded-sm -z-0"></span>
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP → CONTACT */}
        <div className="hidden lg:flex">
          <Link href="/contact">
            <Button
              className={`rounded-none px-8 uppercase tracking-[0.18em] transition-all duration-300 ${
                isScrolled
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white hover:text-black"
              }`}
            >
              Commencer
            </Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden transition-colors ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <Menu size={28} />
        </button>

        {/* OVERLAY */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-300 ${
            open
              ? "opacity-100 scale-100"
              : "pointer-events-none opacity-0 scale-95"
          }`}
        >
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6"
          >
            <X size={30} />
          </button>

          {/* LINKS */}
          <nav className="flex flex-col items-center gap-8 text-xl font-light">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="relative px-6 py-3 uppercase tracking-[0.2em] text-neutral-700 transition-all duration-300 hover:text-white group"
              >
                <span className="absolute inset-0 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-[#4a2f1b] -z-10"></span>

                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA MOBILE → CONTACT */}
          <div className="mt-10">
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="rounded-none bg-black px-10 uppercase tracking-[0.2em] text-white hover:bg-neutral-800">
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}