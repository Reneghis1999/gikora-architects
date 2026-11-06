import { useEffect, type RefObject } from "react";

export type Scrub = {
  /** Valeur visée pour la position de défilement actuelle. */
  target: () => number;
  /** Applique l'état correspondant à une valeur (déjà lissée). */
  render: (value: number) => void;
  /** Retire tout ce que `render` a posé : la section redevient statique. */
  reset: () => void;
  /** Relit les dimensions utiles, au montage puis à chaque redimensionnement. */
  measure?: () => void;
};

export const clamp = (value: number) => Math.min(1, Math.max(0, value));

/** Avancement (0 → 1) d'une section épinglée, de son haut en haut de l'écran à son bas en bas de l'écran. */
export function pinnedProgress(section: HTMLElement) {
  const rect = section.getBoundingClientRect();
  const distance = rect.height - window.innerHeight;
  return distance > 0 ? clamp(-rect.top / distance) : 0;
}

/**
 * Anime une section au fil du défilement, avec un léger retard qui adoucit
 * les crans de la molette (l'équivalent du `scrub` de GSAP). Tant que `query`
 * ne correspond pas (mobile, mouvements réduits…), la section reste statique.
 *
 * `setup` doit être stable (définie hors du composant) : sinon l'animation
 * serait recréée à chaque rendu.
 */
export function useScrub<T extends HTMLElement>(
  ref: RefObject<T | null>,
  query: string,
  smoothing: number,
  setup: (element: T) => Scrub | null
) {
  useEffect(() => {
    const element = ref.current;
    const scrub = element && setup(element);
    if (!scrub) return;

    const mq = window.matchMedia(query);
    let frame = 0;
    let value = 0;
    let goal = 0;
    let last = 0;

    const tick = (now: number) => {
      frame = 0;
      const dt = last ? (now - last) / 1000 : 1 / 60;
      last = now;
      value += (goal - value) * (1 - Math.exp(-dt / smoothing));
      if (Math.abs(goal - value) < 1e-4) value = goal;
      scrub.render(value);
      if (value !== goal) frame = requestAnimationFrame(tick);
      else last = 0;
    };

    const onScroll = () => {
      if (!mq.matches) return;
      goal = scrub.target();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      if (!mq.matches) {
        scrub.reset();
        return;
      }
      scrub.measure?.();
      value = goal = scrub.target();
      scrub.render(value);
    };

    sync();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    mq.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      mq.removeEventListener("change", sync);
      scrub.reset();
    };
  }, [ref, query, smoothing, setup]);
}
