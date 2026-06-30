"use client";

const faqs = [
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

export default function FAQ() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-[#5A3E2B]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-light text-black">
            Gikora répond à vos questions
          </h2>
        </div>

        <div className="space-y-10">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-neutral-200 pb-6">
              <h3 className="text-lg font-medium text-black">
                {item.q}
              </h3>
              <p className="mt-3 text-neutral-600 leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}