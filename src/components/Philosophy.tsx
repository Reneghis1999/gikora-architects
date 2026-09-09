"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative isolate overflow-hidden bg-black py-28 sm:py-36 lg:min-h-[850px] lg:py-44"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0">
        <Image
          src="/projects/projet2.png"
          alt="Projet architectural Gikora Architects"
          fill
          className="scale-105 object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/95" />

      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.25fr_1fr_0.35fr] lg:gap-10">
          
          {/* LEFT — INDEX */}
          <div className="hidden lg:block">
            <div className="flex h-full flex-col justify-between">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                02
              </p>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-white/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Gikora Architects
                </span>
              </div>
            </div>
          </div>

          {/* CENTER — MAIN MESSAGE */}
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-white/50" />

              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/60 sm:text-xs">
                Notre philosophie
              </p>
            </div>

            {/* Main title */}
            <h2 className="mt-8 text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[76px]">
              L’architecture n’est pas
              <br />
              seulement une{" "}
              <span className="italic text-white/70">forme.</span>
            </h2>

            <div className="mt-8 max-w-2xl">
              <p className="text-lg font-light leading-8 text-white/70 sm:text-xl">
                Elle est une manière de penser, de vivre et de ressentir
                l’espace.
              </p>
            </div>

            {/* Divider */}
            <div className="my-12 h-px w-full max-w-2xl bg-white/15" />

            {/* Philosophy text */}
            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Nous ne concevons pas simplement des bâtiments. Nous imaginons
                des lieux capables de créer une relation entre l’homme, la
                matière et son environnement.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Chaque projet naît d’une intention précise : trouver
                l’équilibre entre fonctionnalité, esthétique et identité pour
                donner naissance à une architecture qui traverse le temps.
              </p>
            </div>

            {/* Quote */}
            <div className="relative mt-14 max-w-2xl border-l border-white/30 pl-6 sm:mt-16 sm:pl-8">
              <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-white/80" />

              <p className="text-xl font-light italic leading-8 text-white/85 sm:text-2xl sm:leading-9">
                « Chaque ligne tracée doit avoir un sens. Chaque lumière doit
                raconter quelque chose. Chaque espace doit respirer. »
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-6 bg-white/40" />

                <p className="text-[9px] uppercase tracking-[0.35em] text-white/45">
                  Gikora_Architects
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — DECORATIVE ELEMENT */}
          <div className="hidden lg:flex lg:items-end lg:justify-end">
            <div className="flex flex-col items-center gap-5">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/35 [writing-mode:vertical-rl]">
                Architecture · Design · Vision
              </p>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <ArrowDownRight
                  size={17}
                  strokeWidth={1}
                  className="text-white/60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom architectural line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-white/10 py-5">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Lomé · Togo
            </span>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
              Architecture contemporaine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}