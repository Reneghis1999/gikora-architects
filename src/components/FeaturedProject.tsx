"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Complexe Scolaire",
    category: "Etablissement Scolaire",
    location: "Lomé",
    image:  "/images/projectss/Complexe Scolaire/2.jpeg",
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
    <section
      className="
        relative
        bg-[#faf9f7]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* =========================================================
          DIAGONAL SEPARATOR
          Séparation entre le Hero et cette section
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-[70px]
          left-0
          z-10
          h-[70px]
          w-full
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-0
            bg-[#faf9f7]
            [clip-path:polygon(0_0,100%_68%,100%_100%,0_100%)]
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div className="mb-12 max-w-3xl sm:mb-16">
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#5A3E2B]
              sm:text-sm
            "
          >
            Nos réalisations
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-light
              leading-tight
              text-black
              sm:text-4xl
              md:text-5xl
            "
          >
            Projets phares
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-neutral-600
              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Une sélection de réalisations illustrant notre approche de
            l'architecture contemporaine, de la conception à la visualisation.
          </p>
        </div>

        {/* =======================================================
            PROJECT 1
        ======================================================= */}

        <Link
          href="/projects"
          className="
            group
            relative
            mb-6
            block
            h-[320px]
            overflow-hidden
            sm:mb-8
            sm:h-[420px]
            lg:h-[520px]
          "
        >
          <Image
            src={projects[0].image}
            alt={projects[0].title}
            fill
            sizes="100vw"
            className="
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              sm:bottom-10
              sm:left-10
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/70
                sm:text-sm
              "
            >
              {projects[0].category} • {projects[0].location}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-light
                text-white
                sm:text-3xl
                lg:text-4xl
              "
            >
              {projects[0].title}
            </h3>
          </div>
        </Link>

        {/* =======================================================
            PROJECT 2 & 3
        ======================================================= */}

        <div
          className="
            mb-6
            grid
            gap-6
            sm:mb-8
            sm:gap-8
            md:grid-cols-2
          "
        >
          {projects.slice(1, 3).map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="
                group
                relative
                block
                h-[260px]
                overflow-hidden
                sm:h-[320px]
                lg:h-[420px]
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  sm:bottom-8
                  sm:left-8
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                    sm:text-xs
                  "
                >
                  {project.category} • {project.location}
                </p>

                <h3
                  className="
                    mt-2
                    text-xl
                    font-light
                    text-white
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* =======================================================
            PROJECT 4
        ======================================================= */}

        <Link
          href="/projects"
          className="
            group
            relative
            block
            h-[320px]
            overflow-hidden
            sm:h-[420px]
            lg:h-[520px]
          "
        >
          <Image
            src={projects[3].image}
            alt={projects[3].title}
            fill
            sizes="100vw"
            className="
              object-cover
              transition
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/10
              to-transparent
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              sm:bottom-10
              sm:left-10
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/70
                sm:text-sm
              "
            >
              {projects[3].category} • {projects[3].location}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-light
                text-white
                sm:text-3xl
                lg:text-4xl
              "
            >
              {projects[3].title}
            </h3>
          </div>
        </Link>

        {/* =======================================================
            CTA
        ======================================================= */}

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/projects"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="
                w-full
                cursor-pointer
                rounded-none
                bg-black
                px-6
                py-5
                text-sm
                uppercase
                tracking-[0.18em]
                hover:bg-[#4B3324]
                sm:w-auto
                sm:px-8
                sm:py-6
                sm:text-base
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