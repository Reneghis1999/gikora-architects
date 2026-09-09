import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

export default function About() {
  const missions = [
    "Études architecturales",
    "Design d’intérieur",
    "Modélisation 3D",
    "Aménagement urbain",
    "Expertise immobilière",
    "Assistance à la maîtrise d’ouvrage",
    "Construction et suivi des travaux",
  ];

  return (
    <section
      id="about"
      className="scroll-mt-28 w-full overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-24">
          
          {/* =====================================================
              LEFT — ARCHITECTURAL IMAGE COMPOSITION
          ====================================================== */}
          <div className="relative">
            {/* Desktop composition */}
            <div className="relative hidden h-[620px] lg:block">
              
              {/* Main image */}
              <div className="absolute left-0 top-0 h-[78%] w-[76%] overflow-hidden">
                <Image
                  src="/projects/projet4.png"
                  alt="Projet architectural Gikora Architects"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 0vw, 55vw"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Small image */}
              <div className="absolute bottom-0 right-0 h-[52%] w-[58%] overflow-hidden border-[10px] border-white shadow-2xl">
                <Image
                  src="/projects/projet5.png"
                  alt="Visualisation 3D d'un projet architectural"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 0vw, 40vw"
                />
              </div>

              {/* Floating architectural detail */}
              <div className="absolute bottom-[9%] left-[8%] z-10 flex h-24 w-24 items-center justify-center bg-[#5A3E2B] text-white shadow-xl">
                <div className="text-center">
                  <span className="block text-2xl font-light">245</span>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/70">
                    ONAT
                  </span>
                </div>
              </div>

              {/* Vertical label */}
              <div className="absolute right-[-42px] top-[12%] hidden xl:block">
                <p className="rotate-90 origin-center text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                  Architecture · Design · Vision
                </p>
              </div>
            </div>

            {/* Mobile image composition */}
            <div className="relative h-[420px] lg:hidden">
              <div className="absolute left-0 top-0 h-[75%] w-[82%] overflow-hidden">
                <Image
                  src="/projects/projet4.png"
                  alt="Projet architectural Gikora Architects"
                  fill
                  priority
                  className="object-cover"
                  sizes="90vw"
                />
              </div>

              <div className="absolute bottom-0 right-0 h-[55%] w-[62%] overflow-hidden border-[6px] border-white shadow-xl">
                <Image
                  src="/projects/projet5.png"
                  alt="Visualisation 3D d'un projet architectural"
                  fill
                  className="object-cover"
                  sizes="60vw"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#5A3E2B]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#5A3E2B]">
                À propos de nous
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-light leading-[1.08] tracking-tight text-[#5A3E2B] sm:text-5xl lg:text-[56px]">
              Nous imaginons
              <br />
              <span className="italic">les espaces</span> de demain.
            </h2>

            {/* Intro */}
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-neutral-600">
              Créée à Lomé, au Togo,{" "}
              <strong className="font-medium text-neutral-800">
                Gikora_Architects
              </strong>{" "}
              est une agence fondée à l’initiative de Arthur Kofi AWAGA,
              architecte agréé à l’Ordre National des Architectes du Togo
              (ONAT), sous le numéro 245.
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-600">
              Notre approche repose sur une vision contemporaine et
              futuriste de l’architecture : créer des espaces singuliers,
              fonctionnels et profondément intégrés à leur environnement.
            </p>

            {/* Divider */}
            <div className="my-10 h-px w-full bg-neutral-200" />

            {/* Vision */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Notre vision
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Transformer les idées en espaces qui conjuguent créativité,
                  fonctionnalité et identité.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Notre approche
                </p>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Une architecture exigeante, pensée pour dialoguer avec son
                  contexte et évoluer avec le temps.
                </p>
              </div>
            </div>

            {/* Missions */}
            <div className="mt-12">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                    Ce que nous faisons
                  </p>

                  <h3 className="mt-2 text-xl font-medium text-[#5A3E2B]">
                    Nos expertises
                  </h3>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.2}
                  className="text-[#5A3E2B]"
                />
              </div>

              <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {missions.map((mission) => (
                  <div
                    key={mission}
                    className="group flex items-center gap-3 border-b border-neutral-100 py-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-neutral-200">
                      <Check
                        size={11}
                        strokeWidth={1.5}
                        className="text-[#5A3E2B]"
                      />
                    </span>

                    <span className="text-sm text-neutral-600 transition-colors group-hover:text-[#5A3E2B]">
                      {mission}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 text-sm font-medium text-[#5A3E2B]"
              >
                <span className="border-b border-[#5A3E2B] pb-1">
                  Parlons de votre projet
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}