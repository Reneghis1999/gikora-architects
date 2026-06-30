"use client";

import { useEffect, useState } from "react";

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

export default function StatsSection() {
  const projects = useCountUp(50);
  const team = useCountUp(9);
  const years = useCountUp(6);
  const countries = useCountUp(6);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
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