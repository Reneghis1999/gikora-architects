import { Plus } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/site/ui";

export const faqs = [
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Nous réalisons des projets résidentiels, commerciaux, intérieurs et urbains, de la conception à la supervision.",
  },
  {
    q: "Comment démarre une collaboration avec votre équipe ?",
    a: "Un premier échange permet de comprendre vos besoins, suivi d’une proposition de conception adaptée.",
  },
  {
    q: "Proposez-vous des visualisations 3D réalistes ?",
    a: "Oui, nous réalisons des rendus 3D photoréalistes pour valider chaque projet avant construction.",
  },
  {
    q: "Quels sont vos délais moyens ?",
    a: "Les délais varient selon la complexité du projet, généralement entre quelques semaines et plusieurs mois.",
  },
  {
    q: "Travaillez-vous à distance avec des clients étrangers ?",
    a: "Oui, nous collaborons avec des clients internationaux grâce aux outils digitaux et aux échanges à distance.",
  },
];

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.q}
          className="group rounded-[1.5rem] bg-white px-6 py-6 sm:px-9 sm:py-7"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg tracking-[-0.01em] text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-canvas text-ink transition-transform duration-300 group-open:rotate-45">
              <Plus size={16} strokeWidth={1.6} />
            </span>
          </summary>
          <p className="mt-5 max-w-2xl pr-10 text-[15px] leading-8 text-taupe">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              badge="FAQ"
              title={
                <>
                  Gikora répond
                  <span className="text-taupe"> à vos questions.</span>
                </>
              }
              intro="Vous ne trouvez pas votre réponse ? Écrivez-nous, nous vous répondons rapidement."
            />
            <div className="mt-8">
              <ButtonLink href="/contact" variant="outline">
                Poser une question
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
