import type { Metadata } from "next";
import Image from "next/image";

import Reveal from "@/components/site/Reveal";
import { Badge, ButtonLink, Container } from "@/components/site/ui";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Notre équipe — Architectes et ingénieurs à Lomé",
  description:
    "Découvrez l'équipe de Gikora Architects à Lomé : architectes, ingénieurs et professionnels de la construction réunis autour d'une même exigence de qualité.",
  path: "/team",
});

const founder = {
  name: "Arthur Kofi AWAGA",
  role: "Architecte Fondateur",
  credential: "Architecte agréé à l’Ordre National des Architectes du Togo",
  image: "/team/dg.png",
};

const team = [
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
    // Plus d'espace au-dessus de la tête que les portraits studio
    focus: "object-[50%_20%]",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* HERO — la photo d'équipe occupe tout le cadre */}

      <section className="pt-3 sm:pt-5">
        <Container>
          {/* Le menu (fixe) se pose en haut de ce cadre blanc */}
          <div className="rounded-[2rem] bg-white p-3 pt-[88px] sm:p-5 sm:pt-[100px] pin:flex pin:h-[calc(100svh-1.25rem)] pin:flex-col">
            <div className="relative flex flex-col gap-8 lg:block pin:min-h-0 pin:flex-1">
              <div className="px-3 pt-4 sm:px-5 lg:absolute lg:bottom-0 lg:left-0 lg:z-10 lg:p-12 xl:p-14">
                <Badge tone="white">Notre équipe</Badge>
                <h1 className="mt-6 text-[2.6rem] leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[clamp(3rem,4.6vw,4.6rem)] lg:text-white">
                  Des regards <br className="hidden lg:inline" />
                  différents, <br className="hidden lg:inline" />
                  <span className="text-taupe lg:text-white/70">une même vision.</span>
                </h1>
              </div>

              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem] bg-sand sm:aspect-[16/10] lg:aspect-[16/9] pin:aspect-auto pin:h-full">
                <Image
                  src="/team/gikorateam.jpg"
                  alt="L’équipe de Gikora Architects réunie à Lomé"
                  fill
                  preload
                  sizes="(max-width: 1440px) 100vw, 1400px"
                  className="object-cover object-[50%_18%]"
                />
                {/* Voile limité au coin du titre : les visages restent nets */}
                <div className="absolute inset-0 hidden bg-[linear-gradient(to_top,rgb(38_29_22/0.9),rgb(38_29_22/0.62)_36%,transparent_70%)] [mask-image:linear-gradient(to_right,black_36%,transparent_55%)] lg:block" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MEMBRES — le fondateur occupe la hauteur des deux rangées */}

      <section className="py-16 sm:py-24">
        <Container>
          <Reveal className="max-w-[62rem]">
            <p className="text-2xl leading-[1.3] tracking-[-0.02em] text-ink sm:text-3xl lg:text-[2.4rem] lg:leading-[1.22]">
              Derrière chaque projet Gikora se trouve une équipe engagée,
              réunissant architectes, ingénieurs et professionnels de la
              construction autour d’une même exigence&nbsp;: imaginer des
              espaces justes, durables et profondément ancrés dans leur
              contexte.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-16 md:grid-cols-4 md:gap-y-6">
            <li className="col-span-2 md:row-span-2">
              <Reveal className="md:h-full">
                <article className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand md:aspect-auto md:h-full">
                  <Image
                    src={founder.image}
                    alt={`${founder.name}, ${founder.role} — Gikora Architects`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/15 via-45% to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
                    <Badge>Fondateur</Badge>
                    <h2 className="mt-5 text-3xl leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                      {founder.name}
                    </h2>
                    <p className="mt-3 text-base text-white/85 sm:text-lg">{founder.role}</p>
                    <p className="mt-1 text-[13px] leading-5 text-white/60 sm:text-[14px]">
                      {founder.credential}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>

            {team.map((member, index) => (
              <li key={member.name}>
                <Reveal delay={0.06 * (index + 1)}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-sand-soft md:aspect-square">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} — Gikora Architects`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={cn("object-cover", member.focus ?? "object-top")}
                    />
                  </div>
                  <h2 className="mt-4 text-lg leading-tight tracking-[-0.01em] text-ink">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-[13px] leading-5 text-taupe">{member.role}</p>
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
