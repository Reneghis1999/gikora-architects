"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Project = {
  title: string;
  location?: string;
  category?: string;
  description?: string;
  intention?: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "DUPLEX AKP",
    location: "Lomé, Togo",
    category: "Architecture résidentielle",
    description:
      "Un projet résidentiel pensé autour d'une architecture contemporaine, de la qualité des espaces et d'une relation équilibrée entre intérieur et extérieur.",
    intention:
      "Le projet cherche à créer un cadre de vie cohérent, fonctionnel et élégant, dans lequel chaque espace trouve naturellement sa place.",
    images: [
      "/images/projectss/Duplex AKP/1.jpg",
      "/images/projectss/Duplex AKP/2.jpg",
      "/images/projectss/Duplex AKP/3.jpg",
    ],
  },

  {
    title: "F-E APPARTEMENT",
    location: "Lomé, Togo",
    category: "Architecture résidentielle",
    description:
      "Un projet d'appartement conçu avec une attention particulière portée aux volumes, aux circulations et à la qualité des espaces de vie.",
    intention:
      "Créer des espaces simples et contemporains où fonctionnalité et confort dialoguent avec l'identité architecturale du projet.",
    images: [
      "/images/projectss/F-E appartement/1.jpg",
      "/images/projectss/F-E appartement/2.jpg",
    ],
  },

  {
    title: "HM RESORT",
    location: "Lomé, Togo",
    category: "Hospitalité",
    description:
      "Un projet pensé autour de l'expérience des espaces, de leur rapport à la lumière et de la relation entre architecture et environnement.",
    intention:
      "Développer une architecture accueillante et contemporaine capable de créer une expérience cohérente pour ses utilisateurs.",
    images: [
      "/images/projectss/HM Resort/b3.png",
      "/images/projectss/HM Resort/e4.png",
    ],
  },

  {
    title: "MECPIP",
    category: "Architecture",
    description:
      "Un projet architectural développé autour d'une écriture contemporaine et d'une organisation claire des espaces.",
    intention:
      "Rechercher un équilibre entre expression architecturale, fonctionnalité et intégration au contexte.",
    images: [
      "/images/projectss/MECPIP/m1r.png",
      "/images/projectss/MECPIP/m2r.png",
      "/images/projectss/MECPIP/m3r.png",
    ],
  },

  {
    title: "VILLA KPL",
    category: "Architecture résidentielle",
    description:
      "Une villa contemporaine conçue autour de volumes affirmés et d'une recherche de simplicité dans les lignes architecturales.",
    intention:
      "Créer une résidence à la fois expressive et fonctionnelle, pensée pour accompagner les usages quotidiens.",
    images: [
      "/images/projectss/Villa KPL/t2_3 - Photo.png",
      "/images/projectss/Villa KPL/test 1_7 - Photo.png",
    ],
  },

  {
    title: "VILLA OASIS",
    location: "Lomé, Togo",
    category: "Architecture résidentielle",
    description:
      "Une résidence conçue autour d'une architecture contemporaine et d'une attention particulière portée aux espaces de vie.",
    intention:
      "Créer une continuité entre les différents espaces de la maison et proposer une architecture à la fois sobre et distinctive.",
    images: [
      "/images/projectss/Villa OASIS/1.png",
      "/images/projectss/Villa OASIS/22.png",
    ],
  },

  {
    title: "Villa OASIS",
    category: "Aménagement intérieur",
    description:
      "Une réflexion complète sur les espaces intérieurs de la Villa Oasis, depuis les pièces de vie jusqu'aux espaces privés.",
    intention:
      "Créer une continuité esthétique entre les différents espaces tout en donnant à chaque pièce sa propre identité.",
    images: [
      "/images/projectss/Villa OASIS ( A I)/bureau.jpg",
      "/images/projectss/Villa OASIS ( A I)/CHBR1.jpg",
      "/images/projectss/Villa OASIS ( A I)/CHBR2.jpg",
      "/images/projectss/Villa OASIS ( A I)/dressing.jpg",
      "/images/projectss/Villa OASIS ( A I)/gym.jpg",
      "/images/projectss/Villa OASIS ( A I)/SAM R+1.jpg",
      "/images/projectss/Villa OASIS ( A I)/SAM rDC.jpg",
      "/images/projectss/Villa OASIS ( A I)/SDB1.jpg",
      "/images/projectss/Villa OASIS ( A I)/SDB2.jpg",
      "/images/projectss/Villa OASIS ( A I)/SDS1.jpg",
      "/images/projectss/Villa OASIS ( A I)/SDS2.jpg",
    ],
  },

  {
    title: "Immeuble ETN",
    category: "Architecture",
    description:
      "Un projet immobilier développé autour d'une composition architecturale contemporaine et d'une organisation fonctionnelle des volumes.",
    intention:
      "Donner au bâtiment une identité architecturale claire tout en répondant aux exigences d'usage et de fonctionnalité.",
    images: [
      "/images/projectss/Immeuble ETN/1.png",
      "/images/projectss/Immeuble ETN/2.png",
      "/images/projectss/Immeuble ETN/3.png",
      "/images/projectss/Immeuble ETN/5.png",
    ],
  },

  {
    title: "Immeuble ATG",
    category: "Architecture",
    description:
      "Un projet architectural marqué par une composition contemporaine et une attention portée aux proportions du bâtiment.",
    intention:
      "Développer une architecture lisible et cohérente, capable de donner au projet une présence forte dans son environnement.",
    images: [
      "/images/projectss/Immeuble ATG/t1.png",
      "/images/projectss/Immeuble ATG/t2.png",
      "/images/projectss/Immeuble ATG/t3_4 - Photo.png",
    ],
  },

  {
    title: "Projet SEDO",
    category: "Architecture",
    description:
      "Un projet développé autour d'une recherche sur les volumes, les façades et les relations entre les différents espaces.",
    intention:
      "Construire une identité architecturale contemporaine tout en conservant une lecture claire et fonctionnelle du projet.",
    images: [
      "/images/projectss/projet SEDO/r1_1 - Photo.png",
      "/images/projectss/projet SEDO/r1_7 - Photo.png",
      "/images/projectss/projet SEDO/r1_8 - Photo.png",
      "/images/projectss/projet SEDO/r2_2 - Photo.png",
    ],
  },

  {
    title: "ELIKE INDUSTRY",
    category: "Aménagement intérieur",
    description:
      "Un projet d'aménagement intérieur destiné à structurer et valoriser les espaces professionnels.",
    intention:
      "Créer des espaces de travail cohérents, fonctionnels et représentatifs de l'identité du lieu.",
    images: [
      "/images/projectss/ELIKE INDUSTRY/1.jpg",
      "/images/projectss/ELIKE INDUSTRY/2.jpg",
      "/images/projectss/ELIKE INDUSTRY/3.jpg",
      "/images/projectss/ELIKE INDUSTRY/559.png",
    ],
  },

  {
    title: "Immeuble SRJ",
    category: "Architecture",
    description:
      "Un projet immobilier pensé autour d'une composition sobre et contemporaine.",
    intention:
      "Associer une expression architecturale maîtrisée à une organisation fonctionnelle des espaces.",
    images: [
      "/images/projectss/Immeuble SRJ/rd_5 - Photo (2).png",
      "/images/projectss/Immeuble SRJ/rd_7 - Photo.png",
      "/images/projectss/Immeuble SRJ/rd_9 - Photo.png",
    ],
  },

  {
    title: "Projet ABT",
    category: "Architecture",
    description:
      "Un projet développé autour d'une recherche volumétrique et d'une écriture architecturale contemporaine.",
    intention:
      "Travailler les proportions, les ouvertures et les volumes afin de créer une architecture cohérente et durable.",
    images: [
      "/images/projectss/projet ABT/rt_1 - Photo.png",
      "/images/projectss/projet ABT/rt_2 - Photo.png",
      "/images/projectss/projet ABT/rt_5 - Photo.png",
      "/images/projectss/projet ABT/rt_6 - Photo.png",
    ],
  },

  {
    title: "Projet EGLISE",
    category: "Architecture religieuse",
    description:
      "Un projet architectural consacré à la conception d'un espace destiné à accueillir une communauté et différents usages collectifs.",
    intention:
      "Créer un espace identifiable et rassembleur, où architecture, lumière et expérience collective participent à l'identité du lieu.",
    images: [
      "/images/projectss/Eglise/audi1.jpg",
      "/images/projectss/Eglise/4.jpg",
      "/images/projectss/Eglise/audi2.jpg",
      "/images/projectss/Eglise/bu1.jpg",
      "/images/projectss/Eglise/bu2.jpg",
      "/images/projectss/Eglise/gs1.jpg",
      "/images/projectss/Eglise/gs2.jpg",
      "/images/projectss/Eglise/gs3.jpg",
      "/images/projectss/Eglise/gs4.jpg",
    ],
  },

  {
    title: "Projet FA",
    category: "Architecture",
    description:
      "Un projet architectural explorant une composition contemporaine et une organisation claire des espaces.",
    intention:
      "Développer une architecture équilibrée, adaptée à ses usages et à son environnement.",
    images: [
      "/images/projectss/Projet FA/i1.png",
      "/images/projectss/Projet FA/i2.png",
      "/images/projectss/Projet FA/i3.png",
    ],
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIndex(0);
  };

  const openLightbox = (images: string[], startIndex = 0) => {
    setSelectedImages(images);
    setIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-[#faf9f7] text-neutral-900">
      {/* =========================================================
          BACK
      ========================================================= */}

      <div className="fixed left-6 top-6 z-50 lg:left-10 lg:top-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#5A3E2B] transition-colors duration-300 hover:text-black"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-[#5A3E2B]/30 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </span>

          <span>Retour</span>
        </Link>
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-20 lg:pb-32 lg:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#5A3E2B]" />

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#5A3E2B]">
                Portfolio
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-light leading-[1.03] tracking-[-0.04em] text-black md:text-6xl lg:text-8xl">
              Des espaces
              <br />
              <span className="text-neutral-400">
                pensés pour durer.
              </span>
            </h1>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-base leading-7 text-neutral-600 md:text-lg">
              Découvrez une sélection de projets conçus par GIKORA Architects,
              de l&apos;architecture résidentielle aux espaces professionnels
              et aux aménagements intérieurs.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              <span>Architecture</span>

              <span className="h-px w-8 bg-neutral-300" />

              <span>Design</span>

              <span className="h-px w-8 bg-neutral-300" />

              <span>Construction</span>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-neutral-200 lg:mt-28" />

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            01 — Projets
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {projects.length} réalisations
          </span>
        </div>
      </section>

      {/* =========================================================
          PROJECT GRID
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
              onClick={() => openProject(project)}
            >
              <div
                className={`relative w-full overflow-hidden bg-neutral-200 ${
                  i % 5 === 1 || i % 5 === 3
                    ? "aspect-[4/5]"
                    : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/20" />

                <div className="absolute left-5 top-5">
                  <span className="text-[10px] tracking-[0.2em] text-white opacity-0 drop-shadow-md transition-opacity duration-500 group-hover:opacity-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center bg-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>

              <div className="border-b border-neutral-200 pb-5 pt-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    {project.location && (
                      <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#5A3E2B]">
                        {project.location}
                      </p>
                    )}

                    <h2 className="max-w-[280px] text-lg font-light leading-snug tracking-[-0.01em] text-black transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                      {project.title}
                    </h2>

                    {project.category && (
                      <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        {project.category}
                      </p>
                    )}
                  </div>

                  <span className="pt-1 text-[9px] tracking-[0.15em] text-neutral-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-neutral-400 transition-colors duration-300 group-hover:text-black">
                  <span>Voir le projet</span>

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================= */}

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A3E2B]">
                GIKORA Architects
              </p>

              <div className="mt-5 h-px w-16 bg-[#5A3E2B]" />
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-light leading-tight tracking-[-0.03em] text-black md:text-4xl lg:text-5xl">
                Chaque projet commence par une idée,
                <span className="text-neutral-400">
                  {" "}
                  puis prend forme.
                </span>
              </h2>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black"
              >
                <span>Parler de votre projet</span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CASE STUDY OVERLAY
      ========================================================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] overflow-y-auto bg-[#faf9f7]"
          >
            {/* CLOSE */}

            <button
              onClick={closeProject}
              aria-label="Fermer le projet"
              className="fixed right-5 top-5 z-[220] flex h-11 w-11 items-center justify-center border border-neutral-300 bg-[#faf9f7] transition-all duration-300 hover:border-black hover:bg-black hover:text-white sm:right-8 sm:top-8"
            >
              <X size={20} strokeWidth={1.2} />
            </button>

            {/* CASE STUDY */}

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-10 md:pt-36 lg:px-20">
              {/* HEADER */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"
              >
                <div>
                  <div className="mb-7 flex items-center gap-4">
                    <span className="h-px w-10 bg-[#5A3E2B]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#5A3E2B]">
                      Étude de projet
                    </span>
                  </div>

                  <h1 className="max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                    {selectedProject.title}
                  </h1>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {selectedProject.location && (
                      <>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                          {selectedProject.location}
                        </span>

                        <span className="h-px w-6 bg-neutral-300" />
                      </>
                    )}

                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                      {selectedProject.category || "Architecture"}
                    </span>
                  </div>
                </div>

                <div className="lg:pt-16">
                  <p className="text-sm leading-7 text-neutral-600 md:text-base">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>

              {/* MAIN IMAGE */}

              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative mt-16 aspect-[16/9] w-full overflow-hidden bg-neutral-200 md:mt-24"
              >
                <button
                  onClick={() =>
                    openLightbox(selectedProject.images, 0)
                  }
                  className="group absolute inset-0 z-10"
                  aria-label={`Voir ${selectedProject.title} en plein écran`}
                >
                  <Image
                    src={selectedProject.images[0]}
                    alt={selectedProject.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                  <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white px-5 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span className="text-[9px] uppercase tracking-[0.2em]">
                      Agrandir
                    </span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                    />
                  </div>
                </button>
              </motion.div>

              {/* PROJECT INFORMATION */}

              <section className="border-t border-neutral-200 py-20 md:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
                  {/* LABEL */}

                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        01
                      </span>

                      <span className="h-px w-8 bg-neutral-300" />

                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Le projet
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="max-w-3xl">
                    <h2 className="text-3xl font-light leading-tight md:text-4xl">
                      Une architecture pensée dans son contexte.
                    </h2>

                    <p className="mt-7 text-sm leading-8 text-neutral-500 md:text-base">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </section>

              {/* INTENTION */}

              <section className="border-t border-neutral-200 py-20 md:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        02
                      </span>

                      <span className="h-px w-8 bg-neutral-300" />

                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Intention
                      </span>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    <p className="text-2xl font-light leading-relaxed md:text-4xl">
                      {selectedProject.intention}
                    </p>
                  </div>
                </div>
              </section>

              {/* KEY INFORMATION */}

              <section className="border-t border-neutral-200 py-20 md:py-28">
                <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        03
                      </span>

                      <span className="h-px w-8 bg-neutral-300" />

                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Informations
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-t border-neutral-200 sm:grid-cols-3">
                    <div className="border-b border-r border-neutral-200 py-6 pr-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        Typologie
                      </p>

                      <p className="mt-3 text-sm">
                        {selectedProject.category || "Architecture"}
                      </p>
                    </div>

                    <div className="border-b border-neutral-200 py-6 sm:px-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        Localisation
                      </p>

                      <p className="mt-3 text-sm">
                        {selectedProject.location || "—"}
                      </p>
                    </div>

                    <div className="border-b border-r border-neutral-200 py-6 pr-5 sm:border-r-0 sm:pl-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        Images
                      </p>

                      <p className="mt-3 text-sm">
                        {selectedProject.images.length} vues
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* GALLERY */}

              <section className="border-t border-neutral-200 py-20 md:py-28">
                <div className="mb-12 flex items-end justify-between">
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        04
                      </span>

                      <span className="h-px w-8 bg-neutral-300" />

                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                        Galerie
                      </span>
                    </div>

                    <h2 className="text-3xl font-light md:text-5xl">
                      Explorer le projet.
                    </h2>
                  </div>

                  <span className="hidden text-[9px] uppercase tracking-[0.2em] text-neutral-400 sm:block">
                    Cliquez sur une image
                  </span>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {selectedProject.images.map((image, imageIndex) => (
                    <motion.button
                      key={image}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: imageIndex * 0.05,
                      }}
                      onClick={() =>
                        openLightbox(
                          selectedProject.images,
                          imageIndex
                        )
                      }
                      className={`group relative overflow-hidden bg-neutral-200 text-left ${
                        imageIndex === 0
                          ? "md:col-span-2 aspect-[16/9]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedProject.title} — vue ${
                          imageIndex + 1
                        }`}
                        fill
                        sizes={
                          imageIndex === 0
                            ? "100vw"
                            : "(max-width: 768px) 100vw, 50vw"
                        }
                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                      <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <span className="text-[9px] uppercase tracking-[0.2em]">
                          0{imageIndex + 1}
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.3}
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>

              {/* PROJECT FOOTER */}

              <section className="border-t border-neutral-200 py-20 md:py-28">
                <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                      Projet suivant
                    </p>

                    <h2 className="mt-4 text-3xl font-light md:text-5xl">
                      Continuer à explorer.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={closeProject}
                      className="group flex items-center gap-3 border border-neutral-300 px-6 py-4 text-[9px] uppercase tracking-[0.22em] transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
                    >
                      <ArrowLeft
                        size={14}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />

                      Tous les projets
                    </button>

                    <Link
                      href="/contact"
                      onClick={closeProject}
                      className="group flex items-center gap-3 border border-black bg-black px-6 py-4 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-transparent hover:text-black"
                    >
                      Votre projet

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          LIGHTBOX
      ========================================================= */}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={index}
        slides={selectedImages.map((src) => ({
          src,
        }))}
        on={{
          view: ({ index: currentIndex }) => {
            setIndex(currentIndex);
          },
        }}
      />
    </main>
  );
}