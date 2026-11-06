"use client";

import { useEffect, useRef } from "react";

const MIN_SCALE = 0.9;
const MIN_BRIGHTNESS = 0.8;
const BOTTOM_GAP = 24;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Cartes empilées au défilement (façon Reinvent Labs). Chaque enfant
 * doit être `sticky` avec un `top` : la carte suivante vient le
 * recouvrir pendant qu'il recule et s'assombrit.
 */
export default function StackedCards({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    if (cards.length < 2) return;

    const stickyTop = parseFloat(getComputedStyle(cards[0]).top) || 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    // Une carte plus haute que l'écran se fixe par le bas : sinon la fin
    // de son contenu serait recouverte avant d'avoir pu être lue.
    const measure = () => {
      for (const card of cards) {
        card.style.top = `min(${stickyTop}px, calc(100svh - ${card.offsetHeight + BOTTOM_GAP}px))`;
      }
    };

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;

      cards.forEach((card, index) => {
        const next = cards[index + 1];
        const progress =
          next && !reducedMotion.matches
            ? clamp((viewport - next.getBoundingClientRect().top) / (viewport - stickyTop))
            : 0;

        card.style.transform = progress ? `scale(${1 - (1 - MIN_SCALE) * progress})` : "";
        card.style.filter = progress ? `brightness(${1 - (1 - MIN_BRIGHTNESS) * progress})` : "";
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new ResizeObserver(() => {
      measure();
      update();
    });
    cards.forEach((card) => observer.observe(card));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reducedMotion.addEventListener("change", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reducedMotion.removeEventListener("change", onScroll);
      for (const card of cards) {
        card.style.top = "";
        card.style.transform = "";
        card.style.filter = "";
      }
    };
  }, []);

  return (
    <div ref={listRef} className={className}>
      {children}
    </div>
  );
}
