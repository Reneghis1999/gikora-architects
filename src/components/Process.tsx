import Reveal from "@/components/site/Reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/site/ui";

const steps = [
  {
    title: "Premier échange",
    text: "Nous écoutons vos besoins, votre budget et vos contraintes, sur place à Lomé ou à distance.",
  },
  {
    title: "Conception & 3D",
    text: "Esquisses, plans et rendus 3D photoréalistes pour valider chaque choix avant de construire.",
  },
  {
    title: "Dossiers & autorisations",
    text: "Constitution du dossier de permis de construire et accompagnement dans les démarches administratives.",
  },
  {
    title: "Suivi de chantier",
    text: "Contrôle de la qualité, du budget et des délais, avec des rapports réguliers jusqu’à la livraison.",
  },
];

export default function Process() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="rounded-[2rem] bg-deep px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <Reveal>
            <SectionHeading
              tone="light"
              badge="Notre méthode"
              title={
                <>
                  Du premier échange
                  <span className="text-white/45"> à la remise des clés.</span>
                </>
              }
              intro="Une démarche claire et transparente, pensée pour vous accompagner sereinement à chaque étape de votre projet."
              action={
                <ButtonLink href="/contact" variant="light">
                  Planifier un échange
                </ButtonLink>
              }
            />
          </Reveal>

          <Reveal delay={0.08}>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
                <li key={step.title} className="flex h-full flex-col rounded-[1.5rem] bg-white/[0.06] p-8 ring-1 ring-inset ring-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-[15px] text-ink">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 text-xl tracking-[-0.02em] text-white">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/60">{step.text}</p>
                </li>
            ))}
          </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
