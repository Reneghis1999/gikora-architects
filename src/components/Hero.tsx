"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Badge, ButtonLink, Container } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/projets/complexe-scolaire/2.webp",
    alt: "Complexe scolaire conçu par Gikora Architects à Lomé",
    title: "Complexe scolaire",
    category: "Établissement scolaire",
  },
  {
    src: "/images/accueil/residence-abt.webp",
    alt: "Rendu 3D d'une résidence familiale contemporaine — Projet ABT, Gikora Architects",
    title: "Projet ABT",
    category: "Résidence familiale",
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

/** Même condition que la variante CSS `pin:` (globals.css). */
const PIN_QUERY = "(min-width: 1024px) and (min-height: 620px)";

const RADIUS = 25.6; // 1.6rem

const clamp = (value: number) => Math.min(1, Math.max(0, value));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  // Images chargées au fil du diaporama (et non toutes d'un coup)
  const [loadedUpTo, setLoadedUpTo] = useState(1);
  const [paused, setPaused] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const next = (index + slides.length) % slides.length;
    setCurrent(next);
    setLoadedUpTo((prev) => Math.max(prev, next + 1));
  };

  /* =========================================================
     DIAPORAMA AUTOMATIQUE
  ========================================================== */

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setLoadedUpTo((loaded) => Math.min(slides.length, loaded + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  /* =========================================================
     ANIMATION AU DÉFILEMENT (façon Reinvent Labs)
     Le hero est épinglé ; en défilant, le panneau de droite
     s'agrandit jusqu'à couvrir tout l'écran, puis un titre
     apparaît. La page reprend ensuite son défilement normal.
  ========================================================== */

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const cell = cellRef.current;
    const panel = panelRef.current;
    const shade = shadeRef.current;
    const headline = headlineRef.current;
    const card = cardRef.current;
    if (!section || !sticky || !cell || !panel || !shade || !headline || !card) return;

    const mq = window.matchMedia(PIN_QUERY);
    let frame = 0;
    let gaps = { top: 0, right: 0, bottom: 0, left: 0 };

    const measure = () => {
      const s = sticky.getBoundingClientRect();
      const c = cell.getBoundingClientRect();
      gaps = {
        top: c.top - s.top,
        right: s.right - c.right,
        bottom: s.bottom - c.bottom,
        left: c.left - s.left,
      };
    };

    const reset = () => {
      panel.style.inset = "";
      panel.style.borderRadius = "";
      shade.style.opacity = "";
      headline.style.opacity = "";
      headline.style.transform = "";
      headline.style.pointerEvents = "";
      card.style.right = "";
      card.style.bottom = "";
    };

    const update = () => {
      frame = 0;

      if (!mq.matches) {
        reset();
        return;
      }

      const rect = section.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = distance > 0 ? clamp(-rect.top / distance) : 0;

      const expand = easeInOut(clamp(progress / 0.45));
      const reveal = clamp((progress - 0.45) / 0.25);

      panel.style.inset = `${-gaps.top * expand}px ${-gaps.right * expand}px ${-gaps.bottom * expand}px ${-gaps.left * expand}px`;
      panel.style.borderRadius = `${RADIUS * (1 - expand)}px`;

      // Le panneau s'assombrit en s'agrandissant (comme le panneau
      // sombre de Reinvent), puis le titre apparaît.
      shade.style.opacity = String(expand);
      headline.style.opacity = String(reveal);
      headline.style.transform = `translateY(${(1 - reveal) * 40}px)`;
      headline.style.pointerEvents = reveal > 0.6 ? "auto" : "none";

      // La carte "Projet à la une" glisse du coin vers le centre-droit
      const cardRight = 20 + (window.innerWidth * 0.11 - 20) * expand;
      const cardBottom = 20 + (window.innerHeight * 0.13 - 20) * expand;
      card.style.right = `${cardRight}px`;
      card.style.bottom = `${cardBottom}px`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    mq.addEventListener("change", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mq.removeEventListener("change", onResize);
      reset();
    };
  }, []);

  const slide = slides[current];

  return (
    <section ref={sectionRef} data-scroll-top-after className="relative pin:h-[210svh]">
      <div
        ref={stickyRef}
        className="pt-3 sm:pt-5 pin:sticky pin:top-0 pin:flex pin:h-svh pin:flex-col"
      >
        <Container className="pin:flex pin:min-h-0 pin:flex-1 pin:flex-col">
          {/* =================================================
              BLOC UNIQUE : le menu (fixe) se pose en haut de ce
              cadre blanc ; les chiffres clés le ferment en bas.
          ================================================== */}

          <div className="rounded-[2rem] bg-white px-3 pb-3 pt-[88px] sm:px-5 sm:pb-5 sm:pt-[100px] pin:flex pin:min-h-0 pin:flex-1 pin:flex-col">
            <div className="grid gap-3 sm:gap-5 lg:grid-cols-[1fr_1.05fr] pin:min-h-0 pin:flex-1">
              {/* TEXTE */}

              <div className="flex flex-col justify-between px-3 py-8 sm:px-5 sm:py-10 lg:py-[clamp(1rem,3svh,2.5rem)] lg:pr-8">
                <div>
                  <Badge>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Cabinet d’architecture · Lomé, Togo
                  </Badge>

                  <h1 className="mt-7 text-[3.1rem] leading-[0.95] tracking-[-0.045em] text-ink sm:text-7xl lg:mt-[clamp(1rem,2.6svh,1.75rem)] lg:text-[min(5.8rem,8svh,7vw)]">
                    Au-delà
                    <br />
                    de bâtir,
                    <br />
                    <span className="text-brand">nous créons.</span>
                  </h1>

                  <p className="mt-7 max-w-xl text-base leading-7 text-taupe sm:text-lg sm:leading-8 lg:mt-[clamp(1rem,2.6svh,1.75rem)] lg:text-[clamp(0.95rem,2svh,1.125rem)] lg:leading-[1.7]">
                    Conception architecturale, design d’intérieur, rendus 3D et
                    suivi de chantier : nous accompagnons vos projets au Togo,
                    de la première esquisse jusqu’à la remise des clés.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-[clamp(1.25rem,4svh,2.5rem)]">
                  <ButtonLink href="/contact">Démarrer un projet</ButtonLink>
                  <ButtonLink href="/projects" variant="secondary">
                    Voir nos réalisations
                  </ButtonLink>
                </div>
              </div>

              {/* =================================================
                  PANNEAU DE DROITE — s'agrandit au défilement
              ================================================== */}

              <div
                ref={cellRef}
                className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[560px] pin:min-h-0"
              >
                <div
                  ref={panelRef}
                  className="absolute inset-0 z-20 overflow-hidden rounded-[1.6rem] bg-deep"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Voile brun : le panneau devient sombre en s'agrandissant */}
                  <div
                    ref={shadeRef}
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/60 to-deep/25 opacity-0"
                  />

                  {/* Grand titre révélé quand le panneau couvre tout l'écran */}
                  <div
                    ref={headlineRef}
                    className="pointer-events-none absolute bottom-12 left-6 hidden text-white opacity-0 pin:block lg:left-12 xl:bottom-16 xl:left-16"
                  >
                    <h2 className="text-[clamp(4rem,7.4vw,7.8rem)] leading-[0.94] tracking-[-0.05em]">
                      Vos projets,
                      <br />
                      conçus pour
                      <br />
                      durer.
                    </h2>
                  </div>

                  {/* Projet à la une */}
                  <div
                    ref={cardRef}
                    className="absolute inset-x-3 bottom-3 rounded-[1.25rem] bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[360px] sm:p-5"
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
                        <p className="text-xl leading-tight tracking-[-0.02em] text-ink">{slide.title}</p>
                        <p className="mt-1 text-[13px] text-taupe">{slide.category}</p>
                      </div>

                      <div className="flex shrink-0 gap-1.5">
                        <button
                          type="button"
                          onClick={() => goTo(current - 1)}
                          aria-label="Projet précédent"
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-canvas text-ink transition-colors hover:bg-sand"
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
              </div>
            </div>

            {/* CHIFFRES CLÉS — intégrés au hero */}

            <dl className="mt-3 grid grid-cols-2 rounded-[1.6rem] bg-canvas sm:mt-5 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col-reverse gap-2 px-6 py-6 sm:px-8 lg:py-[clamp(0.9rem,2.4svh,1.5rem)]",
                    index % 2 === 1 && "border-l border-line",
                    index >= 2 && "border-t border-line lg:border-t-0",
                    index === 2 && "lg:border-l"
                  )}
                >
                  <dt className="text-[13px] text-taupe sm:text-[14px]">{stat.label}</dt>
                  <dd className="text-3xl leading-none tracking-[-0.04em] text-ink sm:text-[2.6rem] lg:text-[clamp(1.6rem,4svh,2.6rem)]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>
    </section>
  );
}
