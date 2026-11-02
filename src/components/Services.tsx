import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { Badge, Container, SectionHeading } from "@/components/site/ui";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Études architecturales",
    description:
      "Conception de projets architecturaux contemporains, de l’esquisse à la validation technique.",
    points: ["Esquisse et avant-projet", "Plans techniques", "Dossier de permis de construire"],
    image: "/images/services/etude-conception.webp",
    theme: "white",
  },
  {
    id: "02",
    title: "Design d’intérieur",
    description:
      "Création d’espaces intérieurs élégants, fonctionnels et adaptés aux usages modernes.",
    points: ["Aménagement des espaces", "Choix des matériaux", "Ambiances et finitions"],
    image: "/images/accueil/projet-3.webp",
    theme: "deep",
  },
  {
    id: "03",
    title: "Modélisation 3D",
    description:
      "Visualisation architecturale photoréaliste pour donner vie aux projets avant leur construction.",
    points: ["Rendus photoréalistes", "Vues intérieures et extérieures", "Validation avant travaux"],
    image: "/images/accueil/projet-2.webp",
    theme: "sand",
  },
  {
    id: "04",
    title: "Suivi de chantier",
    description:
      "Supervision rigoureuse des travaux pour garantir la fidélité entre la conception et la réalisation.",
    points: ["Contrôle de la qualité", "Maîtrise du budget et des délais", "Rapports réguliers"],
    image: "/images/services/suivi-de-chantier.webp",
    theme: "white",
  },
  {
    id: "05",
    title: "Aménagement urbain",
    description:
      "Conception d’espaces urbains harmonieux, pensés pour les usages, les flux humains et leur environnement.",
    points: ["Espaces publics", "Organisation des flux", "Intégration paysagère"],
    image: "/images/services/amenagement-urbain.jpg",
    theme: "deep",
  },
] as const;

const otherExpertises = [
  "Expertise immobilière",
  "Assistance à la maîtrise d’ouvrage",
  "Construction et suivi des travaux",
];

const themes = {
  white: { card: "bg-white text-ink", muted: "text-taupe", line: "border-line", chip: "sand" as const },
  deep: { card: "bg-deep text-white", muted: "text-white/60", line: "border-white/10", chip: "outline-light" as const },
  sand: { card: "bg-sand text-ink", muted: "text-ink/65", line: "border-ink/10", chip: "white" as const },
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Expertises"
            title={
              <>
                Une approche globale
                <span className="text-taupe"> de l’architecture.</span>
              </>
            }
            intro="Nous combinons créativité, maîtrise technique et vision contemporaine pour accompagner chaque projet, de la première idée jusqu’à sa réalisation."
          />
        </Reveal>

        <div className="mt-12 space-y-3">
          {services.map((service, index) => {
            const theme = themes[service.theme];

            return (
              <article
                key={service.id}
                className={cn(
                  "grid gap-8 rounded-[2rem] p-6 sm:p-10 lg:sticky lg:grid-cols-[1fr_1fr] lg:gap-14 lg:p-12",
                  theme.card
                )}
                style={{ top: `${112 + index * 14}px` }}
              >
                <div className="flex flex-col justify-between gap-10">
                  <div>
                    <Badge tone={theme.chip}>{service.id}</Badge>
                    <h3 className="mt-6 text-3xl tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>
                    <p className={cn("mt-5 max-w-md text-base leading-7", theme.muted)}>
                      {service.description}
                    </p>
                  </div>

                  <ul className={cn("border-t", theme.line)}>
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className={cn("flex items-center justify-between border-b py-4 text-[15px]", theme.line)}
                      >
                        {point}
                        <ArrowUpRight size={16} strokeWidth={1.5} className={theme.muted} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] sm:min-h-[340px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Gikora Architects`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* AUTRES EXPERTISES */}

        <div className="mt-3 flex flex-col gap-5 rounded-[2rem] bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[15px] text-taupe">Également :</p>
          <ul className="flex flex-wrap gap-2">
            {otherExpertises.map((item) => (
              <li key={item}>
                <Badge tone="sand" className="px-4 py-2.5 text-[14px]">
                  {item}
                </Badge>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] text-ink"
          >
            <span className="border-b border-ink/30 pb-0.5 transition-colors group-hover:border-ink">
              Parlons de votre projet
            </span>
            <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
