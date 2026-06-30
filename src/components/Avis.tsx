"use client";

const testimonials = [
  {
    name: "Client Privé",
    text: "Une approche très professionnelle. Le rendu 3D nous a permis de visualiser parfaitement notre future villa avant même le début des travaux.",
  },
  {
    name: "Promoteur immobilier",
    text: "Gikora Architects a transformé notre vision en un projet concret, moderne et parfaitement exécuté.",
  },
  {
    name: "Partenaire construction",
    text: "Un suivi de chantier rigoureux et une vraie maîtrise technique. Collaboration fluide et efficace.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F4F1EC] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#5A3E2B]">
            Témoignages
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light text-black">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l border-[#5A3E2B]/30 pl-6">
              <p className="text-neutral-700 leading-7">
                “{t.text}”
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#5A3E2B]">
                {t.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}