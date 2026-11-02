"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   Le rendu serveur affiche les VRAIS chiffres (lisibles par
   Google et sans JavaScript). L'animation de comptage se
   lance seulement quand la section devient visible.
========================================================== */

function useCountUp(end: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration]);

  return count;
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(50, inView);
  const team = useCountUp(9, inView);
  const years = useCountUp(6, inView);
  const countries = useCountUp(6, inView);

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 text-center">

          {/* PROJETS */}
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#5A3E2B]">
              {projects}+
            </p>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-600">
              Projets réalisés
            </p>
          </div>

          {/* ÉQUIPE */}
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#5A3E2B]">
              {team}
            </p>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-600">
              Membres dans l’équipe
            </p>
          </div>

          {/* EXPÉRIENCE */}
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#5A3E2B]">
              {years}+
            </p>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-600">
              Années d’expérience
            </p>
          </div>

          {/* PAYS */}
          <div>
            <p className="text-3xl sm:text-4xl font-light text-[#5A3E2B]">
              {countries}
            </p>
            <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-600">
              Pays d’intervention
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}