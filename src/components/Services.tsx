"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Études architecturales",
    description:
      "Conception de projets architecturaux contemporains, de l’esquisse à la validation technique.",
    image: "/images/etude.jpg",
    label: "Conception architecturale",
  },
  {
    id: "02",
    title: "Design d’intérieur",
    description:
      "Création d’espaces intérieurs élégants, fonctionnels et adaptés aux usages modernes.",
    image: "/projects/projet3.png",
    label: "Design intérieur",
  },
  {
    id: "03",
    title: "Modélisation 3D",
    description:
      "Visualisation architecturale photoréaliste pour donner vie aux projets avant leur construction.",
    image: "/projects/projet2.png",
    label: "Visualisation 3D",
  },
  {
    id: "04",
    title: "Suivi de chantier",
    description:
      "Supervision rigoureuse des travaux pour garantir la fidélité entre la conception et la réalisation.",
    image: "/images/suividechantier.jpg",
    label: "Suivi & réalisation",
  },
  {
    id: "05",
    title: "Aménagement urbain",
    description:
      "Conception d’espaces urbains harmonieux, pensés pour les usages, les flux humains et leur environnement.",
    image: "/images/amenagementurbain.jpg" ,
    label: "Urbanisme & territoire",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const currentService = services[active];

  return (
    <section
      id="services"
      className="w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-px w-10 bg-[#5A3E2B]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#5A3E2B]">
              Expertise
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-light leading-[1.08] tracking-tight text-[#171412] sm:text-5xl lg:text-6xl">
              Une approche globale
              <br />
              de l’architecture.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
              Nous combinons créativité, maîtrise technique et vision
              contemporaine pour accompagner chaque projet, de la première
              idée jusqu’à sa réalisation.
            </p>
          </div>
        </div>

        {/* =====================================================
            SERVICES + IMAGE
        ====================================================== */}
        <div className="mt-20 grid items-start lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          {/* ===================================================
              SERVICES LIST
          ==================================================== */}
          <div>
            {services.map((service, index) => {
              const isActive = active === index;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`group border-b transition-colors duration-500 ${
                    isActive
                      ? "border-[#5A3E2B]"
                      : "border-neutral-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="w-full cursor-pointer py-7 text-left sm:py-8"
                  >
                    {/* TOP ROW */}
                    <div className="flex items-start justify-between gap-8">
                      <div className="flex items-start gap-6 sm:gap-10">
                        <span
                          className={`pt-1 text-[10px] tracking-[0.3em] transition-colors duration-300 ${
                            isActive
                              ? "text-[#5A3E2B]"
                              : "text-neutral-400"
                          }`}
                        >
                          {service.id}
                        </span>

                        <h3
                          className={`text-xl font-light tracking-tight transition-colors duration-300 sm:text-2xl ${
                            isActive
                              ? "text-[#5A3E2B]"
                              : "text-[#171412]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.2}
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-1 -translate-y-1 text-[#5A3E2B]"
                            : "text-neutral-300"
                        }`}
                      />
                    </div>

                    {/* DESCRIPTION */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isActive
                          ? "mt-5 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden pl-[44px] sm:pl-[66px]">
                        <p className="max-w-xl pb-1 text-sm leading-7 text-neutral-500">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              IMAGE — DESKTOP
          ==================================================== */}
          <div className="hidden lg:block">
            <div className="relative h-[650px] overflow-hidden bg-neutral-100">
              {/* Image */}
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "scale-[1.03] opacity-0"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 600px"
                  />
                </div>
              ))}

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              {/* Image information */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-white/60">
                      {currentService.id} — Gikora Architects
                    </p>

                    <h3 className="mt-3 text-2xl font-light text-white sm:text-3xl">
                      {currentService.label}
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30">
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image counter */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                Architecture · Design · Vision
              </p>

              <p className="text-[10px] tracking-[0.25em] text-neutral-400">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </p>
            </div>
          </div>

          {/* ===================================================
              MOBILE VISUAL
          ==================================================== */}
          <div className="mt-10 lg:hidden">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              <Image
                src={currentService.image}
                alt={currentService.label}
                fill
                className="object-cover transition-all duration-700"
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                  {currentService.id} — Gikora Architects
                </p>

                <h3 className="mt-2 text-2xl font-light text-white">
                  {currentService.label}
                </h3>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                Architecture · Design · Vision
              </p>

              <p className="text-[10px] tracking-[0.25em] text-neutral-400">
                {String(active + 1).padStart(2, "0")} / 05
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <div className="mt-20 border-t border-neutral-200 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs uppercase leading-6 tracking-[0.18em] text-neutral-400">
              De l’idée à la réalisation, une vision architecturale pensée
              dans chaque détail.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm font-medium text-[#5A3E2B]"
            >
              <span className="border-b border-[#5A3E2B] pb-1">
                Parlons de votre projet
              </span>

              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}