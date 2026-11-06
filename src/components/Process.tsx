"use client";

import { useRef } from "react";
import {
  Box,
  ClipboardCheck,
  DraftingCompass,
  FileCheck2,
  HardHat,
  KeyRound,
  MessagesSquare,
  PencilLine,
} from "lucide-react";

import { Badge, ButtonLink, Container } from "@/components/site/ui";
import { clamp, pinnedProgress, useScrub, type Scrub } from "@/components/site/useScrub";
import { cn } from "@/lib/utils";

const steps = [
  { label: "Premier échange", icon: MessagesSquare },
  { label: "Esquisse", icon: PencilLine },
  { label: "Plans", icon: DraftingCompass },
  { label: "Rendus 3D", icon: Box },
  { label: "Permis de construire", icon: FileCheck2 },
  { label: "Suivi de chantier", icon: HardHat },
  { label: "Contrôle qualité", icon: ClipboardCheck },
  { label: "Remise des clés", icon: KeyRound },
];

// Étapes réparties sur un cercle, depuis le haut et dans le sens des
// aiguilles d'une montre. Arrondies : serveur et navigateur doivent
// produire exactement les mêmes styles (sinon erreur d'hydratation).
const nodes = steps.map((step, index) => {
  const angle = (index / steps.length) * Math.PI * 2 - Math.PI / 2;
  return {
    ...step,
    x: Number((50 + 40 * Math.cos(angle)).toFixed(3)),
    y: Number((50 + 40 * Math.sin(angle)).toFixed(3)),
  };
});

/** Même condition que les classes `pin:motion-safe:` de la section. */
const PIN_QUERY =
  "(min-width: 1024px) and (min-height: 620px) and (prefers-reduced-motion: no-preference)";

/** Décalage de départ (px) de chaque étape : elles arrivent de tous les côtés. */
const FROM = [
  [-700, -500],
  [600, -600],
  [900, 100],
  [700, 500],
  [-600, 600],
  [-900, 50],
  [400, -700],
  [-400, 700],
];

const DURATION = 1.35; // durée de la chronologie, répartie sur 130svh de défilement
const SMOOTHING = 0.3; // retard (s) de l'animation sur le défilement

const phase = (time: number, start: number) => clamp((time - start) / 0.5);
const easeOut = (t: number) => 1 - (1 - t) * (1 - t);
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
const easeOutBack = (t: number) => 1 + 2.6 * Math.pow(t - 1, 3) + 1.6 * Math.pow(t - 1, 2);

/* =========================================================
   ANIMATION AU DÉFILEMENT (façon Reinvent Labs)
   La section est épinglée ; en défilant, les étapes arrivent
   en tournant, le cœur « Votre projet » apparaît, les liens se
   tracent puis des points circulent vers le centre.
========================================================== */

function orbit(section: HTMLElement): Scrub | null {
  const texts = Array.from(section.querySelectorAll<HTMLElement>("[data-orbit-text] > *"));
  const tiles = Array.from(section.querySelectorAll<HTMLElement>("[data-orbit-tool]"));
  const lines = Array.from(section.querySelectorAll<SVGPathElement>("[data-orbit-line]"));
  const core = section.querySelector<HTMLElement>("[data-orbit-core]");
  const dots = section.querySelector<SVGGElement>("[data-orbit-dots]");
  if (!core || !dots) return null;

  return {
    target: () => pinnedProgress(section) * DURATION,

    render(t) {
      texts.forEach((el, index) => {
        const p = easeOut(phase(t, 0.1 + 0.08 * index));
        el.style.opacity = p < 1 ? String(p) : "";
        el.style.transform = p < 1 ? `translateY(${50 * (1 - p)}px)` : "";
      });

      tiles.forEach((el, index) => {
        const p = easeOutQuart(phase(t, 0.04 * index));
        const rest = 1 - p;
        const [x, y] = FROM[index];
        el.style.opacity = p < 1 ? String(p) : "";
        el.style.transform =
          p < 1
            ? `translate(${x * rest}px, ${y * rest}px) rotate(${(index % 2 ? 160 : -160) * rest}deg) scale(${0.3 + 0.7 * p})`
            : "";
      });

      const c = phase(t, 0.15);
      const scale = easeOutBack(c);
      core.style.transform = c < 1 ? `scale(${scale}) rotate(${-90 * (1 - scale)}deg)` : "";

      lines.forEach((el, index) => {
        const p = phase(t, 0.45 + 0.03 * index);
        el.style.strokeDashoffset = p < 1 ? String(100 * (1 - p)) : "";
      });

      const d = easeOut(phase(t, 0.85));
      dots.style.opacity = d < 1 ? String(d) : "";
    },

    reset() {
      for (const el of [...texts, ...tiles, core]) {
        el.style.opacity = "";
        el.style.transform = "";
      }
      for (const el of lines) el.style.strokeDashoffset = "";
      dots.style.opacity = "";
    },
  };
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrub(sectionRef, PIN_QUERY, SMOOTHING, orbit);

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip pb-20 sm:pb-28 pin:motion-safe:h-[230svh] pin:motion-safe:pb-0"
    >
      <div className="pin:motion-safe:sticky pin:motion-safe:top-0 pin:motion-safe:flex pin:motion-safe:h-svh pin:motion-safe:items-center pin:motion-safe:overflow-hidden">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* TEXTE */}

            <div data-orbit-text className="max-w-[30rem]">
              <Badge>Notre méthode</Badge>
              <h2 className="mt-6 text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[min(3.6rem,7.5svh)]">
                Du premier échange
                <span className="text-taupe"> à la remise des clés.</span>
              </h2>
              <p className="mt-6 text-base leading-7 text-taupe sm:text-lg sm:leading-8">
                Une démarche claire et transparente, pensée pour vous accompagner
                sereinement à chaque étape de votre projet.
              </p>
              <div className="mt-10">
                <ButtonLink href="/contact">Planifier un échange</ButtonLink>
              </div>
            </div>

            {/* ÉTAPES EN ORBITE AUTOUR DU PROJET */}

            <div className="relative mx-auto aspect-square w-full max-w-[40rem] lg:max-w-[min(40rem,calc(100svh-11rem))]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  className="stroke-taupe/40"
                  strokeWidth="0.3"
                  strokeDasharray="1 1.4"
                />
                {nodes.map((node, index) => (
                  <path
                    key={node.label}
                    id={`methode-lien-${index}`}
                    data-orbit-line
                    d={`M${node.x} ${node.y} L50 50`}
                    pathLength={100}
                    strokeDasharray="100"
                    strokeDashoffset="0"
                    className="stroke-brand/40"
                    strokeWidth="0.35"
                    fill="none"
                  />
                ))}
                <g data-orbit-dots className="motion-reduce:hidden">
                  {nodes.map((node, index) => (
                    <circle key={node.label} r="0.9" className={index % 2 ? "fill-taupe" : "fill-brand"}>
                      <animateMotion
                        dur={`${2.2 + (index % 3) * 0.5}s`}
                        begin={`${0.3 * index}s`}
                        repeatCount="indefinite"
                      >
                        <mpath href={`#methode-lien-${index}`} />
                      </animateMotion>
                    </circle>
                  ))}
                </g>
              </svg>

              <div
                data-orbit-core
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-deep text-center text-white shadow-[0_0_0_12px_rgb(90_62_43/0.12),0_0_0_26px_rgb(90_62_43/0.06)] sm:h-36 sm:w-36 sm:shadow-[0_0_0_14px_rgb(90_62_43/0.12),0_0_0_30px_rgb(90_62_43/0.06)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-brand/20 motion-safe:animate-ping [animation-duration:2.4s]"
                />
                <span className="relative text-base leading-tight sm:text-lg">Votre projet</span>
              </div>

              <ol className="absolute inset-0">
                {nodes.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <li
                      key={node.label}
                      data-orbit-tool
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_18px_40px_-18px_rgba(38,29,22,0.35)] sm:h-16 sm:w-16 md:h-20 md:w-20">
                        <Icon className="h-6 w-6 text-brand sm:h-7 sm:w-7 md:h-8 md:w-8" strokeWidth={1.5} />
                      </span>
                      <span
                        className={cn(
                          "absolute whitespace-nowrap text-[12px] leading-none text-ink md:text-[13px]",
                          node.y < 50 ? "bottom-full mb-2.5" : "top-full mt-2.5",
                          node.x < 20 ? "left-0" : node.x > 80 ? "right-0" : "left-1/2 -translate-x-1/2"
                        )}
                      >
                        <span className="text-taupe">{String(index + 1).padStart(2, "0")}</span>{" "}
                        {node.label}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
