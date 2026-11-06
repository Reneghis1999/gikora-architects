"use client";

import { useRef } from "react";

import Reveal from "@/components/site/Reveal";
import { Badge, Container } from "@/components/site/ui";
import { clamp, useScrub, type Scrub } from "@/components/site/useScrub";
import { cn } from "@/lib/utils";

const statement = {
  before:
    "L’architecture n’est pas seulement une forme. C’est une manière de penser, de vivre et de ressentir l’espace\u00a0: trouver",
  mark: "l’équilibre entre fonctionnalité, esthétique et identité",
  after: "pour donner naissance à une architecture qui traverse le temps.",
};

const words = (text: string) => text.split(" ");

/* Réglages de la section « chatbot » de Reinvent Labs : les mots passent
   un à un de 12 % à 100 % d'opacité, puis le surligneur passe. */
const DIM = 0.12;
const WORD = 0.5; // durée d'apparition d'un mot
const STAGGER = 0.05; // décalage entre deux mots
const MARKER = 0.6; // durée du surlignage
const SMOOTHING = 0.15; // retard (s) de l'animation sur le défilement

/* =========================================================
   TEXTE QUI S'ALLUME AU DÉFILEMENT (façon Reinvent Labs)
========================================================== */

function statementReveal(section: HTMLElement): Scrub | null {
  const text = section.querySelector<HTMLElement>("[data-statement]");
  if (!text) return null;

  const wordEls = Array.from(text.querySelectorAll<HTMLElement>("[data-word]"));
  const marks = Array.from(text.querySelectorAll<HTMLElement>("[data-marker]"));
  // Le surligneur avance à vitesse constante : chaque mot en reçoit une
  // part proportionnelle à sa longueur.
  const lengths = marks.map((el) => el.textContent?.length ?? 1);
  const total = lengths.reduce((sum, length) => sum + length, 0);
  const markStart = STAGGER * (wordEls.length - 1) + WORD - 0.4;
  const duration = markStart + MARKER;

  return {
    // Du haut du texte à 90 % de l'écran jusqu'à son bas à 70 % : plus long
    // que celui de Reinvent, il doit finir de s'allumer en restant entier à l'écran.
    target() {
      const rect = text.getBoundingClientRect();
      const viewport = window.innerHeight;
      return clamp((0.9 * viewport - rect.top) / (0.2 * viewport + rect.height)) * duration;
    },

    render(t) {
      wordEls.forEach((el, index) => {
        const p = clamp((t - STAGGER * index) / WORD);
        el.style.opacity = p < 1 ? String(DIM + (1 - DIM) * p) : "";
      });

      let start = markStart;
      marks.forEach((el, index) => {
        const share = (MARKER * lengths[index]) / total;
        const p = clamp((t - start) / share);
        if (p < 1) el.style.setProperty("--mark", `${p * 100}%`);
        else el.style.removeProperty("--mark");
        start += share;
      });
    },

    reset() {
      for (const el of wordEls) el.style.opacity = "";
      for (const el of marks) el.style.removeProperty("--mark");
    },
  };
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrub(sectionRef, "(prefers-reduced-motion: no-preference)", SMOOTHING, statementReveal);

  const marked = words(statement.mark);

  return (
    <section id="philosophy" ref={sectionRef} className="pb-20 sm:pb-28">
      <Container>
        <Badge>Notre philosophie</Badge>

        <p
          data-statement
          className="mt-8 max-w-[78rem] text-[clamp(2.1rem,4.6vw,4.6rem)] leading-[1.06] tracking-[-0.035em] text-ink"
        >
          {words(statement.before).map((word, index) => (
            <span key={`avant-${index}`} data-word>
              {word}{" "}
            </span>
          ))}
          {marked.map((word, index) => (
            <span
              key={`cle-${index}`}
              data-word
              data-marker
              className={cn(
                "bg-[linear-gradient(var(--color-sand),var(--color-sand))] bg-no-repeat [background-position:0_60%] [background-size:var(--mark,100%)_82%]",
                index === 0 && "-ml-[0.12em] rounded-l-[0.2em] pl-[0.12em]",
                index === marked.length - 1 && "-mr-[0.12em] rounded-r-[0.2em] pr-[0.12em]"
              )}
            >
              {index < marked.length - 1 ? `${word} ` : word}
            </span>
          ))}{" "}
          {words(statement.after).map((word, index) => (
            <span key={`apres-${index}`} data-word>
              {word}{" "}
            </span>
          ))}
        </p>

        <Reveal className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <blockquote className="max-w-2xl text-base leading-7 text-taupe sm:text-lg">
            « Chaque ligne tracée doit avoir un sens. Chaque lumière doit
            raconter quelque chose. Chaque espace doit respirer. »
          </blockquote>
          <p className="shrink-0 text-[14px] text-ink">— Gikora Architects</p>
        </Reveal>
      </Container>
    </section>
  );
}
