"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function EquipePage() {
  const team = [
    {
      name: "Arthur Kofi AWAGA",
      role: "Architecte Fondateur",
      image: "/team/dg.png",
    },
    {
      name: "Stephane MILOGO",
      role: "Architecte Associé",
      image: "/team/4.jpg",
    },
    {
      name: "Théodore GAMISSO",
      role: "Ingénieur des travaux & Chef Mission de Controle",
      image: "/team/2.jpg",
    },
    {
      name: "Walter LAKMATE",
      role: "Directeur Technique & Chef projet",
      image: "/team/5.jpg",
    },
    {
      name: "Luc GBAMADO",
      role: "Ingénieur des Travaux & Chef projet",
      image: "/team/6.jpg",
    },
    {
      name: "Judith AWAGA",
      role: "Assistante Architecte",
      image: "/team/22.jpeg",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#faf9f7]">
      {/* =========================
          BACK TO HOME
      ========================== */}
      <div className="fixed left-6 top-6 z-50 lg:left-10 lg:top-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#5A3E2B] transition-colors duration-300 hover:text-black"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-[#5A3E2B]/30 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>

          <span>Retour</span>
        </Link>
      </div>

      {/* =========================
          HERO
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-20 lg:pb-28 lg:pt-44">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#5A3E2B]" />

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#5A3E2B]">
                Notre équipe
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.05] tracking-[-0.03em] text-black md:text-6xl lg:text-7xl">
              Des regards différents,
              <br />
              <span className="text-neutral-400">une même vision.</span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-7 text-neutral-600 md:text-lg">
              Derrière chaque projet GIKORA se trouve une équipe engagée,
              réunissant architectes, ingénieurs et professionnels de la
              construction autour d’une même exigence : imaginer des espaces
              justes, durables et profondément ancrés dans leur contexte.
            </p>

            <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              <span>Architecture</span>

              <span className="h-px w-8 bg-neutral-300" />

              <span>Design</span>

              <span className="h-px w-8 bg-neutral-300" />

              <span>Construction</span>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px w-full bg-neutral-200 lg:mt-28" />

        {/* INTRO NUMBER */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            01 — L’équipe
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            GIKORA Architects
          </span>
        </div>
      </div>

      {/* =========================
          TEAM GRID
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={member.name} className="group">
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />

                {/* NUMBER */}
                <div className="absolute left-5 top-5">
                  <span className="text-[10px] tracking-[0.2em] text-white opacity-0 drop-shadow-md transition-opacity duration-500 group-hover:opacity-100">
                    0{index + 1}
                  </span>
                </div>

                {/* ARROW */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center bg-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>

              {/* INFO */}
              <div className="mt-5 border-t border-neutral-200 pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-light tracking-[-0.01em] text-black md:text-xl">
                      {member.name}
                    </h3>

                    <p className="mt-2 max-w-[280px] text-[10px] uppercase leading-5 tracking-[0.18em] text-neutral-500">
                      {member.role}
                    </p>
                  </div>

                  <span className="pt-1 text-[9px] tracking-[0.15em] text-neutral-300">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          BOTTOM STATEMENT
      ========================== */}
      <div className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A3E2B]">
                Notre approche
              </p>

              <div className="mt-5 h-px w-16 bg-[#5A3E2B]" />
            </div>

            <div>
              <h2 className="text-3xl font-light leading-tight tracking-[-0.02em] text-black md:text-4xl lg:text-5xl">
                Concevoir ensemble des espaces qui ont du sens.
              </h2>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-black"
              >
                <span>Parler de votre projet</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}