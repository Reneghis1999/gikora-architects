"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Badge, ButtonLink, Container } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/accueil/residence-abt.webp",
    alt: "Rendu 3D d'une résidence familiale contemporaine — Projet ABT, Gikora Architects",
    title: "Projet ABT",
    category: "Résidence familiale",
  },
  {
    src: "/images/projets/complexe-scolaire/2.webp",
    alt: "Complexe scolaire conçu par Gikora Architects à Lomé",
    title: "Complexe scolaire",
    category: "Établissement scolaire",
  },
  {
    src: "/images/accueil/villa-kpl.webp",
    alt: "Villa KPL, résidence familiale contemporaine — rendu 3D",
    title: "Villa KPL",
    category: "Résidence familiale",
  },
  {
    src: "/images/accueil/interieur-cuisine-escalier.webp",
    alt: "Cuisine contemporaine avec escalier hélicoïdal — design d'intérieur Gikora Architects",
    title: "Intérieur contemporain",
    category: "Design d’intérieur",
  },
  {
    src: "/images/accueil/architecture-contemporaine.webp",
    alt: "Projet d'architecture contemporaine au Togo par Gikora Architects",
    title: "Architecture contemporaine",
    category: "Lomé, Togo",
  },
];

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "9", label: "Membres dans l’équipe" },
  { value: "6+", label: "Années d’expérience" },
  { value: "6", label: "Pays d’intervention" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  // Images chargées au fil du diaporama (et non toutes d'un coup)
  const [loadedUpTo, setLoadedUpTo] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    setCurrent(next);
    setLoadedUpTo((prev) => Math.max(prev, next + 1));
  };

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setLoadedUpTo((loaded) => Math.min(slides.length, loaded + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  const slide = slides[current];

  return (
    <section className="pt-3 sm:pt-5">
      <Container>
        {/* Bloc unique : le menu (fixe) vient se poser en haut de ce cadre */}
        <div className="relative flex min-h-[calc(100svh-24px)] flex-col overflow-hidden rounded-[2rem] bg-deep text-white sm:min-h-[calc(100svh-40px)]">
          {/* =================================================
              DIAPORAMA
          ================================================== */}

          {slides.map((item, index) => (
            <div
              key={item.src}
              aria-hidden={index !== current}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === current ? "opacity-100" : "opacity-0"
              )}
            >
              {index <= loadedUpTo && (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  preload={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              )}
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

          {/* =================================================
              CONTENU
          ================================================== */}

          <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-5 pt-32 sm:px-10 sm:pb-8 sm:pt-44 lg:px-12 lg:pb-10">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-4xl">
                <Badge tone="outline-light" className="backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-sand" />
                  Cabinet d’architecture · Lomé, Togo
                </Badge>

                <h1 className="mt-7 text-[3rem] leading-[0.95] tracking-[-0.045em] sm:text-7xl xl:text-[6rem]">
                  Au-delà de bâtir,
                  <br />
                  <span className="text-sand">nous créons.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  Conception architecturale, design d’intérieur, rendus 3D et
                  suivi de chantier : nous accompagnons vos projets au Togo, de
                  la première esquisse jusqu’à la remise des clés.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="light">
                    Démarrer un projet
                  </ButtonLink>
                  <ButtonLink href="/projects" variant="outline-light" className="backdrop-blur">
                    Voir nos réalisations
                  </ButtonLink>
                </div>
              </div>

              {/* Projet à la une */}

              <div
                className="hidden w-[360px] rounded-[1.5rem] bg-white/95 p-5 text-ink backdrop-blur md:block"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex items-center justify-between text-[12px] text-taupe">
                  <span>Projet à la une</span>
                  <span className="flex items-center gap-2 tabular-nums">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div aria-live="polite" className="min-w-0">
                    <p className="text-xl leading-tight tracking-[-0.02em]">{slide.title}</p>
                    <p className="mt-1 text-[13px] text-taupe">{slide.category}</p>
                  </div>

                  <div className="flex shrink-0 gap-1.5">
                    <button
                      type="button"
                      onClick={() => goTo(current - 1)}
                      aria-label="Projet précédent"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-canvas transition-colors hover:bg-sand"
                    >
                      <ArrowLeft size={16} strokeWidth={1.6} />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(current + 1)}
                      aria-label="Projet suivant"
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-deep text-white transition-colors hover:bg-brand"
                    >
                      <ArrowRight size={16} strokeWidth={1.6} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex gap-1.5">
                  {slides.map((item, index) => (
                    <button
                      key={item.src}
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`Afficher ${item.title}`}
                      className={cn(
                        "h-1 flex-1 cursor-pointer rounded-full transition-colors duration-300",
                        index === current ? "bg-deep" : "bg-line hover:bg-sand"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                CHIFFRES CLÉS — intégrés au hero
            ================================================== */}

            <dl className="mt-10 grid grid-cols-2 rounded-[1.5rem] bg-white/10 ring-1 ring-inset ring-white/15 backdrop-blur-md sm:mt-12 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col-reverse gap-1 px-5 py-5 sm:px-7 sm:py-6",
                    index % 2 === 1 && "border-l border-white/15",
                    index >= 2 && "border-t border-white/15 lg:border-t-0",
                    index === 2 && "lg:border-l"
                  )}
                >
                  <dt className="text-[13px] text-white/65 sm:text-[14px]">{stat.label}</dt>
                  <dd className="text-3xl tracking-[-0.04em] sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
