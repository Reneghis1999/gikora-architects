import type { Metadata } from "next";
import Image from "next/image";

import Reveal from "@/components/site/Reveal";
import { Badge, ButtonLink, Container, PageHero } from "@/components/site/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Notre équipe — Architectes et ingénieurs à Lomé",
  description:
    "Découvrez l'équipe de Gikora Architects à Lomé : architectes, ingénieurs et professionnels de la construction réunis autour d'une même exigence de qualité.",
  path: "/team",
});

const team = [
  {
    name: "Arthur Kofi AWAGA",
    role: "Architecte Fondateur",
    image: "/team/dg.png",
  },
  {
    name: "Théodore GAMISSO",
    role: "Ingénieur des travaux & Chef Mission de Contrôle",
    image: "/team/2.jpg",
  },
  {
    name: "Walter LAKMATE",
    role: "Directeur Technique & Chef projet",
    image: "/team/5.jpg",
  },
  {
    name: "Luc GBAMADO",
    role: "Ingénieur des Travaux & Chef projet",
    image: "/team/6.jpg",
  },
  {
    name: "Judith AWAGA",
    role: "Assistante Architecte",
    image: "/team/22.jpeg",
  },
];

const disciplines = ["Architecture", "Ingénierie", "Design d’intérieur", "Suivi de chantier"];

export default function TeamPage() {
  return (
    <main>
      <PageHero
        badge="Notre équipe"
        title={
          <>
            Des regards différents,
            <span className="text-taupe"> une même vision.</span>
          </>
        }
        intro="Derrière chaque projet Gikora se trouve une équipe engagée, réunissant architectes, ingénieurs et professionnels de la construction autour d’une même exigence : imaginer des espaces justes, durables et profondément ancrés dans leur contexte."
        aside={
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-sand">
            <Image
              src="/team/gikorateam.jpg"
              alt="L'équipe de Gikora Architects à Lomé"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </div>
        }
      >
        <ul className="mt-10 flex flex-wrap gap-2">
          {disciplines.map((item) => (
            <li key={item}>
              <Badge tone="white" className="px-4 py-2.5 text-[14px] ring-line">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* MEMBRES */}

      <section className="pb-3 pt-3">
        <Container>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {team.map((member, index) => (
              <li key={member.name}>
                <Reveal delay={index * 0.05} className="h-full rounded-[2rem] bg-white p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-sand-soft">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} — Gikora Architects`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-5">
                    <h2 className="text-lg tracking-[-0.01em] text-ink">{member.name}</h2>
                    <p className="mt-1 text-[13px] leading-5 text-taupe">{member.role}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* APPROCHE */}

      <section>
        <Container>
          <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-deep px-6 py-14 text-white sm:px-10 lg:px-14 lg:py-16">
              <Badge tone="outline-light">Notre approche</Badge>
              <h2 className="mt-7 text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">
                Concevoir ensemble des espaces qui ont du sens.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/65">
                Chaque projet est suivi par une équipe pluridisciplinaire, de la
                conception architecturale jusqu’au contrôle des travaux sur le
                chantier.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-10 rounded-[2rem] bg-sand px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
              <p className="text-2xl leading-[1.3] tracking-[-0.02em] text-ink sm:text-3xl">
                Vous avez un projet de construction, de rénovation ou
                d’aménagement ? Parlons-en avec l’équipe.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Parler de votre projet</ButtonLink>
                <ButtonLink href="/projects" variant="light">
                  Voir nos projets
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
