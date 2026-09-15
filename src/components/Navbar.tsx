"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "border-b border-neutral-200 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-[120] transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/images/image (2).webp"
              alt="GIKORA"
              width={180}
              height={60}
              className="w-[150px] lg:w-[180px]"
              priority
            />
          </Link>

          {/* =========================
              DESKTOP NAV
          ========================== */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-2 py-3 text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                  isScrolled
                    ? "text-neutral-800"
                    : "text-white"
                }`}
              >
                {/* Ligne animée */}
                <span
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 ease-out group-hover:w-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                />

                {/* Petit numéro / marqueur */}
                <span
                  className={`absolute -left-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                    isScrolled ? "bg-black" : "bg-white"
                  }`}
                />

                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  {link.label}
                </span>

                {/* Flèche */}
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </Link>
            ))}
          </nav>

          {/* =========================
              CTA
          ========================== */}
          <div className="hidden lg:flex">
            <Link href="/contact">
              <Button
                className={`cursor-pointer group relative h-12 overflow-hidden rounded-none border px-8 uppercase tracking-[0.18em] transition-all duration-500 ${
                  isScrolled
                    ? "border-black bg-black text-white hover:bg-white hover:text-black"
                    : "border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Commencer
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Button>
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className={`relative z-[120] transition-transform duration-300 hover:scale-105 lg:hidden ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* =========================
          OVERLAY
      ========================== */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[140] bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =========================
          MOBILE FULLSCREEN MENU
      ========================== */}
      <div
        className={`fixed inset-0 z-[150] flex flex-col items-center justify-center bg-white transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
          className="absolute right-6 top-6 z-[200] transition-transform duration-300 hover:rotate-90"
        >
          <X size={34} strokeWidth={1.5} />
        </button>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 text-2xl font-light uppercase tracking-[0.16em] text-neutral-700 transition-colors duration-300 hover:text-black"
            >
              {/* numéro */}
              <span className="text-[10px] tracking-normal text-neutral-400 transition-colors duration-300 group-hover:text-black">
                0{index + 1}
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                {link.label}
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              />
            </Link>
          ))}
        </nav>

        {/* MOBILE CTA */}
        <div className="mt-14">
          <Link href="/contact" onClick={() => setOpen(false)}>
            <Button className="group h-12 rounded-none bg-black px-10 uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-neutral-800">
              <span className="flex items-center gap-3">
                Commencer
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </Button>
          </Link>
        </div>

        {/* SMALL FOOTER */}
        <div className="absolute bottom-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
          <span>Lomé</span>
          <span className="h-px w-8 bg-neutral-300" />
          <span>Togo</span>
        </div>
      </div>
    </>
  );
}