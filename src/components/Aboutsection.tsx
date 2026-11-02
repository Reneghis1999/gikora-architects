import Image from "next/image";
import { Compass, Layers, PencilRuler, ShieldCheck } from "lucide-react";

import Reveal from "@/components/site/Reveal";
import { ButtonLink, Container, SectionHeading } from "@/components/site/ui";

const values = [
  {
    icon: Compass,
    title: "Notre vision",
    text: "Transformer les idées en espaces qui conjuguent créativité, fonctionnalité et identité.",
  },
  {
    icon: Layers,
    title: "Notre approche",
    text: "Une architecture exigeante, pensée pour dialoguer avec son contexte et évoluer avec le temps.",
  },
  {
    icon: PencilRuler,
    title: "Maîtrise technique",
    text: "Des plans précis et des rendus 3D réalistes pour valider chaque choix avant de construire.",
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement",
    text: "Un suivi rigoureux, du premier échange à la livraison, sur place ou à distance.",
  },
];

export default function Aboutsection() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              badge="À propos"
              title={
                <>
                  Nous imaginons
                  <span className="text-brand"> les espaces de demain.</span>
                </>
              }
              intro={
                <>
                  Créée à Lomé, au Togo, Gikora Architects est une agence fondée à
                  l’initiative d’Arthur Kofi AWAGA, architecte agréé à l’Ordre
                  National des Architectes du Togo. Notre approche repose sur une
                  vision contemporaine de l’architecture : créer des espaces
                  singuliers, fonctionnels et profondément intégrés à leur
                  environnement.
                </>
              }
            />

            <div className="mt-10">
              <ButtonLink href="/team" variant="outline">
                Découvrir l’équipe
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-sand-soft">
            <Image
              src="/images/accueil/projet-4.webp"
              alt="Projet architectural contemporain conçu par Gikora Architects"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
              <p className="text-[12px] text-taupe">Architecte agréé</p>
              <p className="text-[15px] text-ink">Ordre National des Architectes du Togo</p>
            </div>
          </Reveal>
        </div>

        {/* VALEURS */}

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.06} className="rounded-[1.75rem] bg-white p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas text-brand">
                <Icon size={22} strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-xl tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-taupe">{text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
