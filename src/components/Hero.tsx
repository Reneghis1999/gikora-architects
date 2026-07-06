"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const images = [
  "/images/hero1.png",
  "/images/image.png",
  "/images/hero3.png",
  "/images/hero4.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">

      {/* IMAGES */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="GIKORA Architects"
            fill
            priority={index === 0}
            className={`object-cover transition-transform duration-[6000ms] ${
              currentImage === index ? "scale-105" : "scale-110"
            }`}
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center sm:justify-start">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl text-center sm:text-left -translate-y-6 sm:translate-y-0">

            {/* TITLE */}
            <h1 className="text-white font-light leading-[1.1] text-[2.3rem] sm:text-5xl md:text-6xl lg:text-7xl">
              Au-delà
              <br />
              de bâtir
              <br />
              nous créons.
            </h1>

            {/* TEXT */}
            <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white/75 mx-auto sm:mx-0">
              GIKORA Architects crée une architecture contemporaine qui combine élégance,
              fonctionnalité et design intemporel.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center justify-center sm:justify-start">

              <Link href="/projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-none px-6 uppercase tracking-[0.1em] cursor-pointer"
                >
                  Voir nos projets
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-none border-white bg-transparent px-6 uppercase tracking-[0.1em] text-white hover:bg-white hover:text-black cursor-pointer"
                >
                  Nous contacter
                </Button>
              </Link>

            </div>
          </div>

        </div>
      </div>

      {/* STATS */}
     

      {/* INDICATEURS */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Aller à l'image ${index + 1}`}
            className={`h-[2px] transition-all duration-300 ${
              currentImage === index
                ? "w-10 bg-white"
                : "w-5 sm:w-6 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}