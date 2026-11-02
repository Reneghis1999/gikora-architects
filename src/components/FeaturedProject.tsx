import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Complexe scolaire",
    category: "Établissement scolaire",
    location: "Lomé",
    image: "/images/projets/complexe-scolaire/2.webp",
  },
  {
    title: "Villa Oasis",
    category: "Résidence familiale",
    location: "Lomé",
    image: "/images/projets/villa-oasis/1.webp",
  },
  {
    title: "HM Resort",
    category: "Équipement touristique",
    location: "Lomé",
    image: "/images/projets/hm-resort/b3.webp",
  },
  {
    title: "Église La Colonne",
    category: "Bâtiment cultuel",
    location: "Togo",
    image: "/images/projets/eglise/gs1.webp",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="pb-20 sm:pb-28">
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

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={cn(
                index === 0 && "md:col-span-2 lg:row-span-2",
                index === 3 && "md:col-span-2"
              )}
            >
              <Link
                href="/projects"
                className={cn(
                  "group relative block h-full overflow-hidden rounded-[2rem] bg-sand-soft",
                  index === 0 ? "min-h-[420px] lg:min-h-[640px]" : "min-h-[300px]"
                )}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category}, ${project.location} — Gikora Architects`}
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-[1.25rem] bg-white/95 p-3 pl-5 backdrop-blur">
                  <div className="min-w-0">
                    <p className="truncate text-[17px] tracking-[-0.01em] text-ink">{project.title}</p>
                    <p className="truncate text-[13px] text-taupe">
                      {project.category} · {project.location}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={16} strokeWidth={1.6} />
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
