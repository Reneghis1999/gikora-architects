import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/site/ui";

const featured = {
  title: "Complexe scolaire",
  category: "Établissement scolaire",
  location: "Lomé, Togo",
  image: "/images/projets/complexe-scolaire/2.webp",
  description:
    "Un projet pensé autour de l’expérience des espaces, de leur rapport à la lumière et de la relation entre architecture et environnement.",
};

const projects = [
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

const total = projects.length + 1;

export default function FeaturedProjects() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Réalisations"
            title={
              <>
                Projets phares
                <span className="text-taupe"> conçus au Togo.</span>
              </>
            }
            intro="Une sélection de réalisations illustrant notre approche de l’architecture contemporaine, de la conception à la visualisation."
            action={
              <ButtonLink href="/projects" variant="outline">
                Tous les projets
              </ButtonLink>
            }
          />
        </Reveal>

        {/* =================================================
            PROJET MIS EN AVANT
        ================================================== */}

        <Reveal className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-14">
          <Link
            href="/projects"
            className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-sand-soft sm:aspect-[16/10] lg:col-span-8"
          >
            <Image
              src={featured.image}
              alt={`${featured.title} — ${featured.category}, ${featured.location} — Gikora Architects`}
              fill
              sizes="(max-width: 1024px) 100vw, 64vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-[13px] tabular-nums text-taupe">01 / {String(total).padStart(2, "0")}</p>
            <h3 className="mt-4 text-4xl tracking-[-0.035em] text-ink lg:text-5xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-[15px] text-taupe">
              {featured.category} · {featured.location}
            </p>
            <p className="mt-6 max-w-md border-t border-line pt-6 text-base leading-7 text-taupe">
              {featured.description}
            </p>
            <div className="mt-8">
              <ButtonLink href="/projects" variant="secondary">
                Découvrir le projet
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* =================================================
            AUTRES PROJETS
        ================================================== */}

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3 lg:mt-24 lg:gap-x-10">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <Link href="/projects" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand-soft">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}, ${project.location} — Gikora Architects`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[13px] tabular-nums text-taupe">
                      {String(index + 2).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl tracking-[-0.025em] text-ink">{project.title}</h3>
                    <p className="mt-1.5 text-[14px] text-taupe">
                      {project.category} · {project.location}
                    </p>
                  </div>
                  <span className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-deep group-hover:text-white">
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
