"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Villa Contemporaine",
    category: "Résidentiel",
    location: "Lomé",
    image: "/projects/projet1.jpg",
    featured: true,
  },
  {
    title: "Résidence Moderne",
    category: "Architecture",
    location: "Lomé",
    image: "/projects/projet2.png",
  },
  {
    title: "Design d'intérieur",
    category: "Intérieur",
    location: "Lomé",
    image: "/projects/projet3.png",
  },
  {
    title: "Complexe Premium",
    category: "Commercial",
    location: "Lomé",
    image: "/projects/projet4.png",
    featured: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#faf9f7] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[#5A3E2B]">
            Nos réalisations
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-light leading-tight text-black md:text-5xl">
            Projets phares
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600">
            Une sélection de réalisations illustrant notre approche de
            l'architecture contemporaine, de la conception à la visualisation.
          </p>
        </div>

        {/* PROJECT 1 */}
        <Link
          href="/projects"
          className="group relative mb-6 sm:mb-8 block h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden"
        >
          <Image
            src={projects[0].image}
            alt={projects[0].title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/70">
              {projects[0].category} • {projects[0].location}
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-light text-white">
              {projects[0].title}
            </h3>
          </div>
        </Link>

        {/* PROJECT 2 & 3 */}
        <div className="mb-6 sm:mb-8 grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.slice(1, 3).map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group relative block h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70">
                  {project.category} • {project.location}
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-light text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* PROJECT 4 */}
        <Link
          href="/projects"
          className="group relative block h-[320px] sm:h-[420px] lg:h-[520px] overflow-hidden"
        >
          <Image
            src={projects[3].image}
            alt={projects[3].title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/70">
              {projects[3].category} • {projects[3].location}
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-light text-white">
              {projects[3].title}
            </h3>
          </div>
        </Link>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="
                w-full sm:w-auto
                rounded-none 
                bg-[#5A3E2B] 
                px-6 sm:px-8 
                py-5 sm:py-6
                text-sm sm:text-base
                uppercase tracking-[0.18em] 
                hover:bg-[#4B3324]
              "
            >
              Découvrir tous les projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}