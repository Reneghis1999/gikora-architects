import { Quote } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { Container, SectionHeading } from "@/components/site/ui";

const testimonials = [
  {
    name: "Client privé",
    project: "Villa familiale",
    text: "Une approche très professionnelle. Le rendu 3D nous a permis de visualiser parfaitement notre future villa avant même le début des travaux.",
  },
  {
    name: "Promoteur immobilier",
    project: "Immeuble résidentiel",
    text: "Gikora Architects a transformé notre vision en un projet concret, moderne et parfaitement exécuté.",
  },
  {
    name: "Partenaire construction",
    project: "Suivi de chantier",
    text: "Un suivi de chantier rigoureux et une vraie maîtrise technique. Collaboration fluide et efficace.",
  },
];

export default function Testimonials() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <SectionHeading
            badge="Témoignages"
            title={
              <>
                Ce que disent
                <span className="text-taupe"> nos clients.</span>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.06}
              className="flex flex-col justify-between rounded-[2rem] bg-white p-8"
            >
              <figure className="flex h-full flex-col justify-between gap-10">
                <div>
                  <Quote size={28} strokeWidth={1.2} className="text-brand" />
                  <blockquote className="mt-6 text-lg leading-8 tracking-[-0.01em] text-ink">
                    {item.text}
                  </blockquote>
                </div>
                <figcaption className="flex items-center gap-3 border-t border-line pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-[15px] text-ink">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[15px] text-ink">{item.name}</span>
                    <span className="block text-[13px] text-taupe">{item.project}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
