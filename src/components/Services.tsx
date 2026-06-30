"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Études architecturales",
    description:
      "Conception de projets architecturaux contemporains, de l'esquisse à la validation technique.",
  },
  {
    id: "02",
    title: "Design d’intérieur",
    description:
      "Création d’espaces intérieurs élégants, fonctionnels et adaptés aux usages modernes.",
  },
  {
    id: "03",
    title: "Modélisation 3D",
    description:
      "Visualisation architecturale photoréaliste pour donner vie aux projets avant leur construction.",
  },
  {
    id: "04",
    title: "Suivi de chantier",
    description:
      "Supervision rigoureuse des travaux pour garantir fidélité entre conception et réalisation.",
  },
  {
    id: "05",
    title: "Aménagement urbain",
    description:
      "Conception d’espaces urbains harmonieux, pensés pour les usages et les flux humains.",
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.35em] text-[#5A3E2B]">
            Expertise
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light text-black">
            Nos services
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            Une approche globale de l’architecture, combinant créativité,
            technique et vision contemporaine.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT - LIST */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setActive(index)}
                className={`group cursor-pointer border-b pb-6 transition-all duration-300 ${
                  active === index
                    ? "border-[#5A3E2B]"
                    : "border-neutral-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-neutral-400">
                      {service.id}
                    </p>

                    <h3
                      className={`mt-2 text-xl font-light transition-colors duration-300 ${
                        active === index ? "text-[#5A3E2B]" : "text-black"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      active === index
                        ? "text-[#5A3E2B] translate-x-1 -translate-y-1"
                        : "text-neutral-300"
                    }`}
                  />
                </div>

                {/* DESCRIPTION */}
                <p
                  className={`mt-4 text-sm leading-6 text-neutral-600 transition-all duration-300 ${
                    active === index
                      ? "opacity-100 max-h-40"
                      : "opacity-60 max-h-0 overflow-hidden"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT - VISUAL BLOCK */}
          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-[url('/projects/projet5.png')] bg-cover bg-center" />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-10 left-10 max-w-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Gikora Architects
              </p>

              <h3 className="mt-3 text-3xl font-light text-white leading-tight">
                Une approche complète de l’architecture moderne
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}