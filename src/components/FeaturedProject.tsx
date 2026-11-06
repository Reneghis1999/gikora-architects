"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { Badge, ButtonLink, Container } from "@/components/site/ui";
import { clamp, pinnedProgress, useScrub, type Scrub } from "@/components/site/useScrub";

const projects = [
  {
    title: "Complexe scolaire",
    category: "Établissement scolaire",
    location: "Lomé, Togo",
    image: "/images/projets/complexe-scolaire/2.webp",
  },
  {
    title: "Villa Oasis",
    category: "Résidence familiale",
    location: "Lomé, Togo",
    image: "/images/projets/villa-oasis/1.webp",
  },
  {
    title: "HM Resort",
    category: "Équipement touristique",
    location: "Lomé, Togo",
    image: "/images/projets/hm-resort/b3.webp",
  },
  {
    title: "Église La Colonne",
    category: "Bâtiment cultuel",
    location: "Togo",
    image: "/images/projets/eglise/gs1.webp",
  },
];

/** Même condition que les classes `pin:motion-safe:` de la section. */
const PIN_QUERY =
  "(min-width: 1024px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)";

const SMOOTHING = 0.25; // retard (s) de la piste sur le défilement

/* Apparition d'une carte (réglages de Reinvent Labs) : la chronologie se
   déroule pendant que la carte passe de « bord gauche à 70 % de l'écran »
   à « centre à 55 % ». */
const CARD_DURATION = 1.1;
const phase = (time: number, start: number) => clamp((time - start) / 0.5);
const power1Out = (t: number) => 1 - (1 - t) ** 2;
const power3Out = (t: number) => 1 - (1 - t) ** 3;
const backOut = (t: number) => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2;

function show(el: HTMLElement, p: number, opacity: number, transform: string) {
  el.style.opacity = p < 1 ? String(opacity) : "";
  el.style.transform = p < 1 ? transform : "";
}

type Card = {
  card: HTMLElement;
  image: HTMLElement;
  number: HTMLElement;
  steps: HTMLElement[];
  line: HTMLElement;
  action: HTMLElement;
  left: number;
  width: number;
};

/* =========================================================
   DÉFILEMENT HORIZONTAL (façon « Voir un agent travailler »
   de Reinvent Labs). La section est épinglée : le défilement
   fait glisser la piste vers la gauche et chaque carte
   assemble son contenu en entrant.
========================================================== */

function gallery(section: HTMLElement): Scrub | null {
  const track = section.querySelector<HTMLElement>("[data-track]");
  if (!track) return null;

  const tabs = Array.from(section.querySelectorAll<HTMLElement>("[data-tab]"));
  const cards: Card[] = [];
  for (const card of track.querySelectorAll<HTMLElement>("[data-case]")) {
    const image = card.querySelector<HTMLElement>("[data-in]");
    const number = card.querySelector<HTMLElement>("[data-agent]");
    const line = card.querySelector<HTMLElement>("[data-line]");
    const action = card.querySelector<HTMLElement>("[data-out]");
    if (!image || !number || !line || !action) return null;
    const steps = Array.from(card.querySelectorAll<HTMLElement>("[data-step]"));
    cards.push({ card, image, number, steps, line, action, left: 0, width: 0 });
  }

  let viewport = 0;
  let distance = 0;

  return {
    measure() {
      track.style.transform = "";
      const origin = section.getBoundingClientRect().left;
      viewport = section.clientWidth;
      distance = Math.max(0, track.getBoundingClientRect().right - origin - viewport);

      cards.forEach((item, index) => {
        const rect = item.card.getBoundingClientRect();
        item.left = rect.left - origin;
        item.width = rect.width;
        // Avancement qui centre ce projet : lu par son onglet au clic.
        const tab = tabs[index];
        if (tab) {
          const centered = distance ? (item.left + item.width / 2 - viewport / 2) / distance : 0;
          tab.dataset.progress = String(clamp(centered));
        }
      });
    },

    target: () => pinnedProgress(section),

    render(progress) {
      const x = -progress * distance;
      track.style.transform = `translate3d(${x}px, 0, 0)`;

      cards.forEach((item, index) => {
        const left = item.left + x;
        const centered = left <= viewport / 2 && left + item.width > viewport / 2;
        if (centered) tabs[index]?.setAttribute("aria-current", "true");
        else tabs[index]?.removeAttribute("aria-current");

        const t =
          clamp((0.7 * viewport - left) / (0.15 * viewport + item.width / 2)) * CARD_DURATION;

        const image = phase(t, 0);
        const imageEase = power3Out(image);
        show(item.image, image, imageEase, `translateX(${-80 * (1 - imageEase)}px)`);

        const number = phase(t, 0.1);
        const numberEase = backOut(number);
        show(
          item.number,
          number,
          numberEase,
          `scale(${0.4 + 0.6 * numberEase}) rotate(${-40 * (1 - numberEase)}deg)`
        );

        item.steps.forEach((step, stepIndex) => {
          const p = phase(t, 0.2 + 0.12 * stepIndex);
          const ease = power1Out(p);
          show(step, p, ease, `translateY(${30 * (1 - ease)}px)`);
        });

        const line = phase(t, 0.2);
        item.line.style.transform = line < 1 ? `scaleX(${line})` : "";

        const action = phase(t, 0.6);
        const actionEase = power3Out(action);
        show(item.action, action, actionEase, `translateX(${80 * (1 - actionEase)}px)`);
      });
    },

    reset() {
      track.style.transform = "";
      for (const item of cards) {
        for (const el of [item.image, item.number, ...item.steps, item.line, item.action]) {
          el.style.opacity = "";
          el.style.transform = "";
        }
      }
      for (const tab of tabs) tab.removeAttribute("aria-current");
    },
  };
}

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrub(sectionRef, PIN_QUERY, SMOOTHING, gallery);

  // Les cartes hors champ sont masquées par la section : le chargement
  // différé du navigateur ne les verrait qu'au moment où elles entrent.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        for (const image of section.querySelectorAll("img")) image.loading = "eager";
        observer.disconnect();
      },
      { rootMargin: "100% 0px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const goTo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const progress = Number(event.currentTarget.dataset.progress ?? 0);
    window.scrollTo({
      top: window.scrollY + rect.top + progress * (rect.height - window.innerHeight),
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="realisations"
      // 260vw ≈ débordement horizontal de la piste (4 cartes de 78vw + la carte finale) :
      // à ajuster si l'on change le nombre de projets, pour garder un défilement d'environ 1 pour 1.
      className="mb-24 overflow-x-clip rounded-[2rem] bg-deep py-20 text-white sm:mb-32 sm:py-28 lg:rounded-[3rem] pin:motion-safe:h-[calc(100svh+260vw)] pin:motion-safe:py-0"
    >
      <div className="pin:motion-safe:sticky pin:motion-safe:top-0 pin:motion-safe:flex pin:motion-safe:h-svh pin:motion-safe:flex-col pin:motion-safe:justify-center pin:motion-safe:overflow-hidden pin:motion-safe:pt-20">
        <Container>
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge>Réalisations</Badge>
              <h2 className="mt-6 max-w-[40rem] text-balance text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[min(3.6rem,7.5svh)]">
                Projets phares
                <span className="text-white/45"> conçus au Togo.</span>
              </h2>
            </div>

            <div className="hidden flex-wrap justify-end gap-2 pin:motion-safe:flex">
              {projects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  data-tab
                  onClick={goTo}
                  className="cursor-pointer rounded-full px-5 py-2.5 text-[14px] ring-1 ring-inset ring-white/25 transition-colors duration-500 hover:ring-white/60 aria-[current=true]:bg-sand aria-[current=true]:text-ink aria-[current=true]:ring-sand"
                >
                  {project.title}
                </button>
              ))}
            </div>
          </Reveal>

          <div
            data-track
            className="mt-10 flex flex-col gap-6 lg:mt-[min(3rem,5svh)] pin:motion-safe:w-max pin:motion-safe:flex-row pin:motion-safe:gap-8 pin:motion-safe:pr-[10vw] pin:motion-safe:will-change-transform"
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-case
                className="flex flex-col gap-6 rounded-[2rem] bg-white/[0.06] p-4 sm:p-6 lg:flex-row lg:gap-10 lg:p-8 pin:motion-safe:h-[56svh] pin:motion-safe:w-[78vw] pin:motion-safe:shrink-0"
              >
                <Link
                  href="/projects"
                  data-in
                  tabIndex={-1}
                  aria-hidden="true"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/5 sm:aspect-[16/10] lg:w-[55%] lg:shrink-0 pin:motion-safe:h-full"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}, ${project.location} — Gikora Architects`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-6">
                  <span
                    data-agent
                    className="flex size-14 items-center justify-center rounded-full bg-sand text-[15px] tabular-nums text-ink shadow-[0_0_0_10px_rgb(230_217_198/0.12)] pin:size-[min(5rem,9svh)] pin:text-lg"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p data-step className="text-[14px] text-white/60">
                      {project.category} · {project.location}
                    </p>
                    <h3
                      data-step
                      className="mt-3 text-3xl leading-[1.05] tracking-[-0.035em] sm:text-4xl pin:text-[min(3rem,5.4svh)]"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <span
                      data-line
                      aria-hidden="true"
                      className="block h-px origin-left bg-gradient-to-r from-sand via-white/25 to-transparent"
                    />
                    <div data-out className="mt-5">
                      <ButtonLink href="/projects" variant="secondary">
                        Découvrir le projet
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <Link
              href="/projects"
              className="group flex min-h-48 flex-col justify-between gap-10 rounded-[2rem] bg-sand p-6 text-ink sm:p-8 pin:motion-safe:h-[56svh] pin:motion-safe:w-[min(30rem,32vw)] pin:motion-safe:shrink-0 pin:motion-safe:p-10"
            >
              <span className="text-[14px] text-ink/65">
                Résidences, immeubles, équipements et intérieurs
              </span>
              <span className="flex items-end justify-between gap-6">
                <span className="text-3xl leading-[1.05] tracking-[-0.035em] sm:text-4xl">
                  Voir tous les projets
                </span>
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-deep text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} strokeWidth={1.6} />
                </span>
              </span>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
