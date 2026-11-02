"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { ButtonLink, Container, PageHero } from "@/components/site/ui";
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
    title: "Maison AKP",
    location: "Lomé, Togo",
    category: "Résidence familiale",
    description:
      "Un projet résidentiel pensé autour d'une architecture contemporaine, de la qualité des espaces et d'une relation équilibrée entre intérieur et extérieur.",
    intention:
      "Le projet cherche à créer un cadre de vie cohérent, fonctionnel et élégant, dans lequel chaque espace trouve naturellement sa place.",
    images: [
      "/images/projets/duplex-akp/1.webp",
      "/images/projets/duplex-akp/3.webp",
      "/images/projets/duplex-akp/4.webp",
      "/images/projets/duplex-akp/p1.webp",
      "/images/projets/duplex-akp/p2.webp",
      "/images/projets/duplex-akp/p3.webp",
      "/images/projets/duplex-akp/test1.webp",
      "/images/projets/duplex-akp/test2.webp",
    ],
  },

  {
    title: "F-E Appartement",
    location: "Lomé, Togo",
    category: "Résidence Airbnb",
    description:
      "Un projet d'appartement conçu avec une attention particulière portée aux volumes, aux circulations et à la qualité des espaces de vie.",
    intention:
      "Créer des espaces simples et contemporains où fonctionnalité et confort dialoguent avec l'identité architecturale du projet.",
    images: [
      "/images/projets/f-e-appartement/1.webp",
      "/images/projets/f-e-appartement/2.webp",
      "/images/projets/f-e-appartement/3.webp",
      "/images/projets/f-e-appartement/4.webp",
      "/images/projets/f-e-appartement/5.webp",
      "/images/projets/f-e-appartement/6.webp",
      "/images/projets/f-e-appartement/7.webp",
    ],
  },
  {
    title: "Complexe scolaire",
    location: "Lomé, Togo",
    category: "Établissement scolaire",
    description:
      "Un projet pensé autour de l'expérience des espaces, de leur rapport à la lumière et de la relation entre architecture et environnement.",
    intention:
      "Développer une architecture accueillante et contemporaine capable de créer une expérience cohérente pour ses utilisateurs.",
    images: [
      "/images/projets/complexe-scolaire/1.webp",
      "/images/projets/complexe-scolaire/2.webp",
      "/images/projets/complexe-scolaire/3.webp",
    ],
  },

  {
    title: "HM Resort",
    location: "Lomé, Togo",
    category: "Équipement touristique",
    description:
      "Un projet pensé autour de l'expérience des espaces, de leur rapport à la lumière et de la relation entre architecture et environnement.",
    intention:
      "Développer une architecture accueillante et contemporaine capable de créer une expérience cohérente pour ses utilisateurs.",
    images: [
      "/images/projets/hm-resort/b3.webp",
      "/images/projets/hm-resort/e4.webp",
      "/images/projets/hm-resort/be2.webp",
      "/images/projets/hm-resort/r1.webp",
      "/images/projets/hm-resort/restau.webp",
      "/images/projets/hm-resort/e1.webp",
    ],
  },

  {
    title: "MECPIP",
    category: "Immeuble de bureaux",
    description:
      "Un projet architectural développé autour d'une écriture contemporaine et d'une organisation claire des espaces.",
    intention:
      "Rechercher un équilibre entre expression architecturale, fonctionnalité et intégration au contexte.",
    images: [
      "/images/projets/mecpip/m1r.webp",
      "/images/projets/mecpip/m2r.webp",
      "/images/projets/mecpip/m3r.webp",
    ],
  },

  {
    title: "Villa KPL",
    category: "Résidence familiale",
    description:
      "Une villa contemporaine conçue autour de volumes affirmés et d'une recherche de simplicité dans les lignes architecturales.",
    intention:
      "Créer une résidence à la fois expressive et fonctionnelle, pensée pour accompagner les usages quotidiens.",
    images: [
     
      "/images/projets/villa-kpl/test-1-7-photo.webp",
      "/images/projets/villa-kpl/t2-3-photo.webp",
    ],
  },

  {
    title: "Villa Oasis",
    location: "Lomé, Togo",
    category: "Résidence familiale",
    description:
      "Une résidence conçue autour d'une architecture contemporaine et d'une attention particulière portée aux espaces de vie.",
    intention:
      "Créer une continuité entre les différents espaces de la maison et proposer une architecture à la fois sobre et distinctive.",
    images: [
      "/images/projets/villa-oasis/1.webp",
      "/images/projets/villa-oasis/22.webp",
      "/images/projets/villa-oasis-a-i/bureau.webp",
      "/images/projets/villa-oasis-a-i/chbr1.webp",
      "/images/projets/villa-oasis-a-i/chbr2.webp",
      "/images/projets/villa-oasis-a-i/dressing.jpg",
      "/images/projets/villa-oasis-a-i/gym.webp",
      "/images/projets/villa-oasis-a-i/sam-r-1.webp",
      "/images/projets/villa-oasis-a-i/sam-rdc.webp",
      "/images/projets/villa-oasis-a-i/sdb1.webp",
      "/images/projets/villa-oasis-a-i/sdb2.webp",
      "/images/projets/villa-oasis-a-i/sds1.webp",
      "/images/projets/villa-oasis-a-i/sds2.webp",
    ],
  },


  {
    title: "Immeuble ETN",
    category: "Résidence multifamiliale",
    description:
      "Un projet immobilier développé autour d'une composition architecturale contemporaine et d'une organisation fonctionnelle des volumes.",
    intention:
      "Donner au bâtiment une identité architecturale claire tout en répondant aux exigences d'usage et de fonctionnalité.",
    images: [
      "/images/projets/immeuble-etn/1.webp",
      "/images/projets/immeuble-etn/2.webp",
      "/images/projets/immeuble-etn/3.webp",
      "/images/projets/immeuble-etn/5.webp",
    ],
  },

  {
    title: "Immeuble ATG",
    category: "Immeuble mixte commerces et appartements",
    description:
      "Un projet architectural marqué par une composition contemporaine et une attention portée aux proportions du bâtiment.",
    intention:
      "Développer une architecture lisible et cohérente, capable de donner au projet une présence forte dans son environnement.",
    images: [
      "/images/projets/immeuble-atg/t1.webp",
      "/images/projets/immeuble-atg/t2.webp",
      "/images/projets/immeuble-atg/t3-4-photo.webp",
    ],
  },

  {
    title: "Projet SEDO",
    category: "Résidence familiale",
    description:
      "Un projet développé autour d'une recherche sur les volumes, les façades et les relations entre les différents espaces.",
    intention:
      "Construire une identité architecturale contemporaine tout en conservant une lecture claire et fonctionnelle du projet.",
    images: [
      "/images/projets/projet-sedo/r1-1-photo.webp",
      "/images/projets/projet-sedo/r1-7-photo.webp",
      "/images/projets/projet-sedo/r1-8-photo.webp",
      "/images/projets/projet-sedo/r2-2-photo.webp",
    ],
  },

  {
    title: "Elike Industry",
    category: "Aménagement intérieur",
    description:
      "Un projet d'aménagement intérieur destiné à structurer et valoriser les espaces professionnels.",
    intention:
      "Créer des espaces de travail cohérents, fonctionnels et représentatifs de l'identité du lieu.",
    images: [
      "/images/projets/elike-industry/1.webp",
      "/images/projets/elike-industry/2.webp",
      "/images/projets/elike-industry/3.webp",
      "/images/projets/elike-industry/559.webp",
    ],
  },

  {
    title: "Immeuble SRJ",
    category: "Immeuble mixte commerces et appartements",
    description:
      "Un projet immobilier pensé autour d'une composition sobre et contemporaine.",
    intention:
      "Associer une expression architecturale maîtrisée à une organisation fonctionnelle des espaces.",
    images: [
      "/images/projets/immeuble-srj/rd-5-photo-2.webp",
      "/images/projets/immeuble-srj/rd-7-photo.webp",
      "/images/projets/immeuble-srj/rd-9-photo.webp",
    ],
  },

  {
    title: "Immeuble MJ",
    category: "Immeuble de bureaux",
    description:
      "Un projet immobilier développé autour d'une architecture contemporaine, avec une attention particulière portée à la composition des volumes et à l'organisation des espaces.",
    intention:
      "Proposer une architecture cohérente et fonctionnelle, en associant expression contemporaine, lisibilité des volumes et qualité des espaces.",
    images: [
      "/images/projets/immeuble-mj/3.webp",
      "/images/projets/immeuble-mj/7.webp",
    ],
  },

  {
    title: "Projet ABT",
    category: "Résidence familiale",
    description:
      "Un projet développé autour d'une recherche volumétrique et d'une écriture architecturale contemporaine.",
    intention:
      "Travailler les proportions, les ouvertures et les volumes afin de créer une architecture cohérente et durable.",
    images: [
      "/images/projets/projet-abt/rt-1-photo.webp",
      "/images/projets/projet-abt/rt-2-photo.webp",
      "/images/projets/projet-abt/rt-5-photo.webp",
      "/images/projets/projet-abt/rt-6-photo.webp",
    ],
  },

  {
    title: "Église La Colonne",
    category: "Bâtiment cultuel",
    description:
      "Un projet architectural consacré à la conception d'un espace destiné à accueillir une communauté et différents usages collectifs.",
    intention:
      "Créer un espace identifiable et rassembleur, où architecture, lumière et expérience collective participent à l'identité du lieu.",
    images: [
      "/images/projets/eglise/gs1.webp",
      "/images/projets/eglise/audi1.webp",
      "/images/projets/eglise/4.webp",
      "/images/projets/eglise/audi2.webp",
      "/images/projets/eglise/bu1.webp",
      "/images/projets/eglise/bu2.webp",
      "/images/projets/eglise/gs2.webp",
      "/images/projets/eglise/gs3.webp",
      "/images/projets/eglise/gs4.webp",
     
    ],
  },

  {
    title: "Projet FA",
    category: "Résidence familiale en triplex",
    description:
      "Un projet architectural explorant une composition contemporaine et une organisation claire des espaces.",
    intention:
      "Développer une architecture équilibrée, adaptée à ses usages et à son environnement.",
    images: [
      "/images/projets/projet-fa/i1.webp",
      "/images/projets/projet-fa/i2.webp",
      "/images/projets/projet-fa/i3.webp",
    ],
  },
];

const filters = ["Tous", "Résidentiel", "Immeubles", "Équipements", "Intérieur"] as const;
type Filter = (typeof filters)[number];

function projectGroup(project: Project): Filter {
  const category = (project.category ?? "").toLowerCase();
  if (category.includes("intérieur")) return "Intérieur";
  if (category.includes("immeuble")) return "Immeubles";
  if (category.includes("résidence")) return "Résidentiel";
  return "Équipements";
}

export default function ProjectsClient() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) => projectGroup(project) === activeFilter);

  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  /* Index du Lightbox */
  const [index, setIndex] = useState(0);

  /* Index du slider principal */
  const [projectImageIndex, setProjectImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setProjectImageIndex(0);
  };

  const openLightbox = (
    images: string[],
    startIndex = 0
  ) => {
    setSelectedImages(images);
    setIndex(startIndex);
    setLightboxOpen(true);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setProjectImageIndex(0);
  };

  /* =========================================================
     SLIDER — IMAGE SUIVANTE
  ========================================================== */

  const nextProjectImage = () => {
    if (!selectedProject) return;

    setProjectImageIndex((current) =>
      current === selectedProject.images.length - 1
        ? 0
        : current + 1
    );
  };

  /* =========================================================
     SLIDER — IMAGE PRECEDENTE
  ========================================================== */

  const previousProjectImage = () => {
    if (!selectedProject) return;

    setProjectImageIndex((current) =>
      current === 0
        ? selectedProject.images.length - 1
        : current - 1
    );
  };

  /* =========================================================
     FERMETURE AU CLAVIER (Échap) + BLOCAGE DU SCROLL
  ========================================================== */

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !lightboxOpen) {
        setSelectedProject(null);
        setProjectImageIndex(0);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject, lightboxOpen]);

  /* =========================================================
     AUTO SLIDE
  ========================================================== */

  useEffect(() => {
    if (!selectedProject) return;

    if (selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setProjectImageIndex((current) =>
        current === selectedProject.images.length - 1
          ? 0
          : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <main>
      <PageHero
        badge="Portfolio"
        title={
          <>
            Des espaces
            <span className="text-taupe"> pensés pour durer.</span>
          </>
        }
        intro="Découvrez une sélection de projets conçus par Gikora Architects, de l’architecture résidentielle aux espaces professionnels et aux aménagements intérieurs."
      >
        <div
          className="mt-10 flex flex-wrap gap-2"
          aria-label="Filtrer les projets par type"
        >
          {filters.map((filter) => {
            const count =
              filter === "Tous"
                ? projects.length
                : projects.filter((p) => projectGroup(p) === filter).length;
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={active}
                className={`inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[14px] transition-colors duration-200 ${
                  active
                    ? "bg-deep text-white"
                    : "bg-canvas text-ink hover:bg-sand"
                }`}
              >
                {filter}
                <span className={active ? "text-white/60" : "text-taupe"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </PageHero>

      {/* =========================================================
          GRILLE DES PROJETS
      ========================================================= */}

      <section className="pb-24 pt-16 sm:pb-32 sm:pt-20">
        <Container>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <p className="text-[15px] text-ink">
              {activeFilter === "Tous" ? "Toutes nos réalisations" : activeFilter}
            </p>
            <p className="text-[14px] tabular-nums text-taupe">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""}
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group cursor-pointer rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                role="button"
                tabIndex={0}
                aria-label={`Découvrir le projet ${project.title}`}
                onClick={() => openProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-sand-soft">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} — ${project.category ?? "Projet"}, ${
                      project.location ?? "Togo"
                    } — Gikora Architects`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[12px] text-ink backdrop-blur">
                    {project.images.length} vues
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[13px] text-taupe">{projectGroup(project)}</p>
                    <h2 className="mt-2 text-2xl tracking-[-0.025em] text-ink">
                      {project.title}
                    </h2>
                    <p className="mt-1.5 text-[14px] text-taupe">
                      {project.category}
                      {project.location ? ` · ${project.location}` : ""}
                    </p>
                  </div>

                  <span className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-black/5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-deep group-hover:text-white">
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================
          APPEL À L'ACTION
      ========================================================= */}

      <section className="pb-0 pt-0">
        <Container>
          <div className="flex flex-col gap-8 rounded-[2rem] bg-sand px-6 py-14 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
            <h2 className="max-w-3xl text-4xl leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl">
              Chaque projet commence par une idée,
              <span className="text-ink/50"> puis prend forme.</span>
            </h2>
            <ButtonLink href="/contact">Parler de votre projet</ButtonLink>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CASE STUDY OVERLAY
      ========================================================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="fixed inset-0 z-[10010] overflow-y-auto bg-canvas"
            role="dialog"
            aria-modal="true"
            aria-label={`Projet ${selectedProject.title}`}
          >

            {/* =================================================
                CLOSE
            ================================================== */}

            <button
              onClick={closeProject}
              aria-label="Fermer le projet"
              type="button"
              className="fixed right-4 top-4 z-[10020] flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-ink ring-1 ring-black/5 transition-colors duration-300 hover:bg-deep hover:text-white sm:right-6 sm:top-6"
            >
              <X
                size={20}
                strokeWidth={1.2}
              />
            </button>

            {/* =================================================
                CASE STUDY CONTENT
            ================================================== */}

            <div className="mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-10 md:pt-36 lg:px-20">

              {/* =================================================
                  HEADER
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]"
              >

                <div>

                  <span className="mb-7 inline-flex items-center rounded-full bg-sand px-3.5 py-1.5 text-[13px] leading-none text-ink">
                    Étude de projet
                  </span>

                  <h2 className="max-w-5xl text-5xl leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[6rem]">
                    {selectedProject.title}
                  </h2>

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

              {/* =================================================
                  MAIN IMAGE SLIDER
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="relative mt-12 w-full overflow-hidden rounded-[2rem] bg-sand-soft md:mt-16"
              >

                {/* IMAGE */}

                <div className="relative aspect-[16/9] w-full overflow-hidden">

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={projectImageIndex}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -40,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0"
                    >
                      <button
                        onClick={() =>
                          openLightbox(
                            selectedProject.images,
                            projectImageIndex
                          )
                        }
                        className="group absolute inset-0 h-full w-full"
                        aria-label={`Voir ${
                          selectedProject.title
                        } en plein écran`}
                      >

                        <Image
                          src={
                            selectedProject.images[
                              projectImageIndex
                            ]
                          }
                          alt={`${selectedProject.title} — vue ${
                            projectImageIndex + 1
                          }`}
                          fill
                          loading="eager"
                          sizes="100vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                        {/* AGRANDIR */}

                        <div className="absolute bottom-6 right-6 hidden items-center gap-3 rounded-full bg-white px-5 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:flex">
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
                  </AnimatePresence>

                  {/* =================================================
                      LEFT ARROW
                  ================================================== */}

                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        previousProjectImage();
                      }}
                      aria-label="Image précédente"
                      className="
                        absolute
                        left-4
                        top-1/2
                        z-20
                        flex
                        h-11
                        w-11
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-black/20
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                        sm:left-6
                        sm:h-12
                        sm:w-12
                      "
                    >
                      <ArrowLeft
                        size={18}
                        strokeWidth={1.2}
                      />
                    </button>
                  )}

                  {/* =================================================
                      RIGHT ARROW
                  ================================================== */}

                  {selectedProject.images.length > 1 && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        nextProjectImage();
                      }}
                      aria-label="Image suivante"
                      className="
                        absolute
                        right-4
                        top-1/2
                        z-20
                        flex
                        h-11
                        w-11
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-black/20
                        text-white
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                        sm:right-6
                        sm:h-12
                        sm:w-12
                      "
                    >
                      <ArrowRight
                        size={18}
                        strokeWidth={1.2}
                      />
                    </button>
                  )}

                  {/* =================================================
                      COUNTER
                  ================================================== */}

                  <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-full bg-black/35 px-4 py-2.5 text-white backdrop-blur-md">
                    <span className="text-[10px] tracking-[0.2em]">
                      {String(projectImageIndex + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="h-px w-5 bg-white/50" />

                    <span className="text-[10px] tracking-[0.2em] text-white/60">
                      {String(
                        selectedProject.images.length
                      ).padStart(2, "0")}
                    </span>
                  </div>

                </div>

                {/* =================================================
                    SLIDER INDICATORS
                ================================================== */}

                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-5 right-5 z-20 flex items-center gap-1.5 sm:right-6">

                    {selectedProject.images.map(
                      (_, imageIndex) => (
                        <button
                          key={imageIndex}
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setProjectImageIndex(
                              imageIndex
                            );
                          }}
                          aria-label={`Afficher la vue ${
                            imageIndex + 1
                          }`}
                          className="flex h-5 items-center justify-center"
                        >
                          <span
                            className={`
                              block
                              h-[2px]
                              transition-all
                              duration-500
                              ${
                                projectImageIndex ===
                                imageIndex
                                  ? "w-8 bg-white"
                                  : "w-4 bg-white/40 hover:bg-white/70"
                              }
                            `}
                          />
                        </button>
                      )
                    )}

                  </div>
                )}

              </motion.div>

              {/* =================================================
                  PROJECT INFORMATION
              ================================================== */}

              <section className="border-t border-line py-20 md:py-28">

                <div className="grid gap-14 lg:grid-cols-[0.6fr_1.4fr]">

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

              {/* =================================================
                  INTENTION
              ================================================== */}

              <section className="border-t border-line py-20 md:py-28">

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

              {/* =================================================
                  KEY INFORMATION
              ================================================== */}

              <section className="border-t border-line py-20 md:py-28">

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

                  <div className="grid grid-cols-2 border-t border-line sm:grid-cols-3">

                    <div className="border-b border-r border-line py-6 pr-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        Typologie
                      </p>

                      <p className="mt-3 text-sm">
                        {selectedProject.category ||
                          "Architecture"}
                      </p>
                    </div>

                    <div className="border-b border-line py-6 sm:px-5">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                        Localisation
                      </p>

                      <p className="mt-3 text-sm">
                        {selectedProject.location || "—"}
                      </p>
                    </div>

                    <div className="border-b border-r border-line py-6 pr-5 sm:border-r-0 sm:pl-5">
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

              {/* =================================================
                  GALLERY
              ================================================== */}

              <section className="border-t border-line py-20 md:py-28">

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

                  {selectedProject.images.map(
                    (image, imageIndex) => (
                      <motion.button
                        key={image}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
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
                        className={`group relative overflow-hidden rounded-[1.5rem] bg-sand-soft text-left ${
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

                        <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full bg-white px-4 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100">

                          <span className="text-[9px] uppercase tracking-[0.2em]">
                            {String(
                              imageIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.3}
                          />

                        </div>

                      </motion.button>
                    )
                  )}

                </div>

              </section>

              {/* =================================================
                  PROJECT FOOTER
              ================================================== */}

              <section className="border-t border-line py-20 md:py-28">

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
                      className="group flex h-14 cursor-pointer items-center gap-3 rounded-full px-6 text-[15px] text-ink ring-1 ring-inset ring-ink/15 transition-colors duration-300 hover:bg-white"
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
                      className="group flex h-14 items-center gap-3 rounded-full bg-deep px-6 text-[15px] text-white transition-colors duration-300 hover:bg-brand"
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