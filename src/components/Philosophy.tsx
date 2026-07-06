"use client";

import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="relative bg-black py-24 sm:py-32 lg:py-44 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/projects/projet2.png"
          alt="Architecture background"
          fill
          className="object-cover opacity-40 scale-105"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-white/60">
          Philosophie
        </p>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-white">
          L’architecture n’est pas
          <br />
          une question de forme.
          <br />
          C’est une émotion.
        </h2>

        <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-white/70 max-w-2xl mx-auto">
          Nous ne construisons pas seulement des bâtiments.
          Nous façonnons des espaces qui influencent la manière dont
          les gens vivent, ressentent et se souviennent.
        </p>

        {/* QUOTE BLOCK - CENTERED */}
        <div className="mt-14 sm:mt-16 mx-auto max-w-2xl text-center border-l-0 sm:border-l sm:border-white/30 sm:pl-6">

          <p className="text-white/80 text-base sm:text-lg leading-7">
            “Chaque ligne tracée doit avoir un sens.
            Chaque lumière doit raconter quelque chose.
            Chaque espace doit respirer.”
          </p>

          <p className="mt-5 text-xs sm:text-sm uppercase tracking-[0.3em] text-white/50">
            Gikora_Architects
          </p>

        </div>

      </div>

    </section>
  );
}