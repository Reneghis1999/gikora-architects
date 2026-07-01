"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Project = {
  title: string;
  location?: string;
  images: string[];
};

const projects: Project[] = [
  {
    title: "DUPLEX AKP",
    location: "Lomé, Togo",
    images: [
      "/images/projectss/Duplex AKP/1.jpg",
      "/images/projectss/Duplex AKP/2.jpg",
      "/images/projectss/Duplex AKP/3.jpg",
    ],
  },
  {
    title: "F-E APPARTEMENT",
    location: "Lomé, Togo",
    images: [
      "/images/projectss/F-E appartement/1.jpg",
      "/images/projectss/F-E appartement/2.jpg",
    ],
  },
  {
    title: "HM RESORT",
    location: "Lomé, Togo",
    images: [
      "/images/projectss/HM Resort/b3.png",
      "/images/projectss/HM Resort/e4.png",
    ],
  },
  {
    title: "MECPIP",
    images: [
      "/images/projectss/MECPIP/m1r.png",
      "/images/projectss/MECPIP/m2r.png",
      "/images/projectss/MECPIP/m3r.png",
    ],
  },
  {
    title: "VILLA KPL",
    images: [
      "/images/projectss/Villa KPL/t2_3 - Photo.png",
      "/images/projectss/Villa KPL/test 1_7 - Photo.png",
    ],
  },
  {
    title: "VILLA OASIS",
    location: "Lomé, Togo",
    images: [
      "/images/projectss/Villa OASIS/1.png",
      "/images/projectss/Villa OASIS/22.png",
    ],
  },
  {
    title: "Villa OASIS (Aménagement Intérieur)",
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
    images: [
      "/images/projectss/Immeuble ETN/1.png",
      "/images/projectss/Immeuble ETN/2.png",
      "/images/projectss/Immeuble ETN/3.png",
      "/images/projectss/Immeuble ETN/5.png",
    ],
  },
  {
    title: "Immeuble ATG",
    images: [
      "/images/projectss/Immeuble ATG/t1.png",
      "/images/projectss/Immeuble ATG/t2.png",
      "/images/projectss/Immeuble ATG/t3_4 - Photo.png",
    ],
  },
  {
    title: "Projet SEDO",
    images: [
      "/images/projectss/projet SEDO/r1_1 - Photo.png",
      "/images/projectss/projet SEDO/r1_7 - Photo.png",
      "/images/projectss/projet SEDO/r1_8 - Photo.png",
      "/images/projectss/projet SEDO/r2_2 - Photo.png",
    ],
  },
  {
    title: "ELIKE INDUSTRY (Aménagement Intérieur)",
    images: [
      "/images/projectss/ELIKE INDUSTRY/1.jpg",
      "/images/projectss/ELIKE INDUSTRY/2.jpg",
      "/images/projectss/ELIKE INDUSTRY/3.jpg",
      "/images/projectss/ELIKE INDUSTRY/559.png",
    ],
  },
  {
    title: "Immeuble SRJ",
    images: [
      "/images/projectss/Immeuble SRJ/rd_5 - Photo (2).png",
      "/images/projectss/Immeuble SRJ/rd_7 - Photo.png",
      "/images/projectss/Immeuble SRJ/rd_9 - Photo.png",
    ],
  },
  {
    title: "Projet ABT",
    images: [
      "/images/projectss/projet ABT/rt_1 - Photo.png",
      "/images/projectss/projet ABT/rt_2 - Photo.png",
      "/images/projectss/projet ABT/rt_5 - Photo.png",
      "/images/projectss/projet ABT/rt_6 - Photo.png",
    ],
  },
  {
    title: "Projet EGLISE",
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
    images: [
      "/images/projectss/Projet FA/i1.png",
      "/images/projectss/Projet FA/i2.png",
      "/images/projectss/Projet FA/i3.png",
    ],
  },
];

export default function ProjectsPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openProject = (startIndex: number, images: string[]) => {
    setSelectedImages(images);
    setIndex(startIndex);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-white py-28 px-6 lg:px-20">

       {/* BACK TO HOME BUTTON */}
            <div className="fixed top-6 left-6 z-50">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#5A3E2B] hover:text-black transition-colors duration-300 group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Retour
              </Link>
            </div>

      {/* HEADER */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight">
          Nos Projets
        </h1>
        <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
          Découvrez nos réalisations architecturales — un mélange d’innovation,
          d’esthétique et de maîtrise technique.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group cursor-pointer overflow-hidden"
            onClick={() => openProject(0, project.images)}
          >
            {/* IMAGE */}
            <div className="relative h-[420px] w-full overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* TEXT */}
            <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              {project.location && (
                <p className="text-xs tracking-[0.25em] uppercase text-white/70">
                  {project.location}
                </p>
              )}

              <h3 className="text-xl font-light mt-2">{project.title}</h3>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-[0.2em] border-b border-white/40 pb-1">
                  Voir le projet
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={index}
          slides={selectedImages.map((src) => ({ src }))}
        />
      )}
    </section>
  );
}