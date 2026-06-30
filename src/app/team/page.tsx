"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EquipePage() {
  const team = [
    {
      name: "Arthur Kofi AWAGA",
      role: "Architecte Fondateur",
      image: "/team/dg.png",
    },
    {
      name: "Stephane MILOGO",
      role: "Architecte Associé",
      image: "/team/4.jpg",
    },
    {
      name: "Théodore GAMISSO",
      role: "Ingénieur des travaux & Chef Mission de Controle",
      image: "/team/2.jpg",
    },
    {
      name: "Walter LAKMATE",
      role: "Directeur Technique & Chef projet",
      image: "/team/5.jpg",
    },
    {
      name: "Luc GBAMADO",
      role: "Ingénieur des Travaux & Chef projet",
      image: "/team/6.jpg",
    },
    {
      name: "Justine LARE",
      role: "Assistante Architecte",
      image: "/team/1.jpg",
    },
  ];

  return (
    <section className="bg-[#faf9f7] min-h-screen relative">

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

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 pt-32 pb-20 text-center">

        <p className="uppercase tracking-[0.35em] text-sm text-[#5A3E2B]">
          Notre équipe
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-black">
          Rencontrez les génies
          <br />
          derrière GIKORA Architects
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-neutral-600 text-base md:text-lg leading-7">
          Notre équipe réunit des architectes, designers et spécialistes de la
          visualisation 3D, unis par une vision commune :
          concevoir une architecture contemporaine, fonctionnelle et durable.
        </p>

      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-28">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm"
            >

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              </div>

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl md:text-2xl font-light tracking-wide">
                  {member.name}
                </h3>

                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}