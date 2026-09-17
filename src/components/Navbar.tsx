"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

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

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     BLOQUER LE SCROLL QUAND LE MENU MOBILE EST OUVERT
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     STYLE DES ICONES
  ========================================================= */

  const iconClass = `
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    transition-all
    duration-300
    hover:scale-105
  `;

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-[100]
          transition-all
          duration-500
          ${
            isScrolled
              ? "bg-white/95 shadow-sm backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-24
            items-center
            justify-between
            px-6
            sm:px-8
            lg:px-12
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="relative z-[120] transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/images/gikorawhite1.png"
              alt="GIKORA"
              width={180}
              height={60}
              priority
              className="w-[125px] sm:w-[145px] lg:w-[165px]"
            />
          </Link>

          {/* =================================================
              DESKTOP ACTIONS
              TELEPHONE + MENU
          ================================================== */}

          <div className="hidden items-center gap-3 lg:flex">

            {/* =================================================
                WHATSAPP / TELEPHONE
            ================================================== */}

            <a
              href="https://wa.me/22893631578"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter GIKORA sur WhatsApp"
              className={`
                ${iconClass}
                ${
                  isScrolled
                    ? "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100"
                    : "border-white/60 bg-black/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
                }
              `}
            >
              <Phone
                size={18}
                strokeWidth={1.5}
              />
            </a>

            {/* =================================================
                MENU
            ================================================== */}

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              className={`
                ${iconClass}
                ${
                  isScrolled
                    ? "border-neutral-900 bg-neutral-900 text-white hover:bg-white hover:text-black"
                    : "border-white/60 bg-black/10 text-white backdrop-blur-md hover:bg-white hover:text-black"
                }
              `}
            >
              <Menu
                size={21}
                strokeWidth={1.5}
              />
            </button>

          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className={`
              relative
              z-[160]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              lg:hidden
              ${
                isScrolled
                  ? "border-neutral-900 text-neutral-900"
                  : "border-white/70 text-white"
              }
            `}
          >
            <Menu
              size={21}
              strokeWidth={1.5}
            />
          </button>

        </div>
      </header>

      {/* =====================================================
          OVERLAY
      ====================================================== */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[140]
          bg-black/50
          backdrop-blur-sm
          transition-opacity
          duration-500
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MENU FULLSCREEN
      ====================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[150]
          flex
          flex-col
          bg-[#f7f6f3]
          transition-all
          duration-500
          ${
            open
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-full opacity-0"
          }
        `}
      >

        {/* =================================================
            CLOSE
        ================================================== */}

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
          className="
            absolute
            right-6
            top-6
            z-[200]
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-neutral-300
            transition-all
            duration-300
            hover:rotate-90
            hover:bg-black
            hover:text-white
          "
        >
          <X
            size={22}
            strokeWidth={1.5}
          />
        </button>

        {/* =================================================
            MENU CONTENT
        ================================================== */}

        <div
          className="
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            flex-col
            justify-center
            px-8
            lg:px-16
          "
        >

          {/* LABEL */}

          <div className="mb-10">
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#5A3E2B]
              "
            >
              GIKORA ARCHITECTS
            </span>
          </div>

          {/* =================================================
              LINKS
          ================================================== */}

          <nav className="flex flex-col">

            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  border-b
                  border-neutral-300
                  py-5
                  transition-all
                  duration-300
                  hover:pl-4
                "
              >

                {/* NUMERO */}

                <span
                  className="
                    w-8
                    text-[10px]
                    tracking-[0.2em]
                    text-neutral-400
                  "
                >
                  0{index + 1}
                </span>

                {/* NOM */}

                <span
                  className="
                    text-3xl
                    font-light
                    tracking-[-0.04em]
                    text-neutral-900
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  {link.label}
                </span>

                {/* FLECHE */}

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.3}
                  className="
                    ml-auto
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                />

              </Link>
            ))}

          </nav>

          {/* =================================================
              INFORMATIONS
          ================================================== */}

          <div
            className="
              mt-12
              flex
              flex-col
              gap-3
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >

            <span>Lomé</span>

            <span className="hidden h-px w-8 bg-neutral-300 sm:block" />

            <span>Togo</span>

            <span className="hidden h-px w-8 bg-neutral-300 sm:block" />

            <span>Architecture & Design</span>

          </div>

        </div>
      </div>
    </>
  );
}