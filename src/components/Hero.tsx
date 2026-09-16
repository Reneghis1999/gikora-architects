"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const images = [
  "/images/1.jpg",
  "/images/rt_5 - Photo.png",
  "/images/1.jpg",
  "/images/1.png",
  "/images/test 1_7 - Photo.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  /* =========================================================
     SLIDER AUTOMATIQUE
  ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[620px] w-full overflow-hidden bg-black">

      {/* =====================================================
          IMAGES DE FOND
      ====================================================== */}

      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`
            absolute inset-0
            transition-opacity duration-[1400ms] ease-in-out
            ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <Image
            src={image}
            alt="GIKORA Architects"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`
              object-cover
              transition-transform
              duration-[8000ms]
              ease-out
              ${
                currentImage === index
                  ? "scale-105"
                  : "scale-100"
              }
            `}
          />
        </div>
      ))}

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/15" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      {/* =====================================================
          LIGNE SOUS LA NAVBAR
      ====================================================== */}

      <div
        className="
          absolute
          left-6
          right-6
          top-24
          z-20
          h-px
          bg-white/20
          sm:left-8
          sm:right-8
          lg:left-12
          lg:right-12
        "
      />

      {/* =====================================================
          TEXTE VERTICAL À GAUCHE
      ====================================================== */}

      <div
        className="
          absolute
          left-5
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          md:block
          lg:left-8
        "
      >
        <div className="flex flex-col items-center gap-5">

          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-white/80
              lg:text-[10px]
            "
          >
            GIKORA ARCHITECTS
          </span>

          <span className="h-14 w-px bg-white/40 lg:h-16" />

        </div>
      </div>

      {/* =====================================================
          CONTENU PRINCIPAL
      ====================================================== */}

      <div className="relative z-10 flex h-full items-center">

        <div
          className="
            mx-auto
            w-full
            max-w-[1500px]
            px-7
            sm:px-12
            lg:px-20
            xl:px-24
          "
        >

          <div
            className="
              max-w-[1000px]
              pt-8
            "
          >

            {/* =================================================
                LABEL
            ================================================== */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3
                sm:mb-7
                sm:gap-4
              "
            >

              <span
                className="
                  h-px
                  w-8
                  bg-[#5A3E2B]
                  sm:w-12
                "
              />

              <span
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/75
                  sm:text-[9px]
                  sm:tracking-[0.35em]
                  lg:text-[10px]
                "
              >
                Architecture & Design
              </span>

            </div>

            {/* =================================================
                GROS TITRE
            ================================================== */}

            <h1
              className="
                max-w-[950px]
                text-[3.2rem]
                font-light
                leading-[0.9]
                tracking-[-0.055em]
                text-white

                sm:text-[4.8rem]

                md:text-[5.7rem]

                lg:text-[6.7rem]

                xl:text-[7.4rem]
              "
            >
              <span className="block">
                Au-delà
              </span>

              <span className="ml-[7%] block">
                de bâtir
              </span>

              <span className="ml-[14%] block text-white/55">
                nous créons.
              </span>
            </h1>

            {/* =================================================
                LIENS / ACTIONS
            ================================================== */}

            <div
              className="
                mt-9
                flex
                flex-col
                items-start
                gap-5

                sm:mt-10
                sm:flex-row
                sm:items-center
                sm:gap-8

                lg:mt-12
              "
            >

              {/* =================================================
                  VOIR LES PROJETS
              ================================================== */}

              <Link
                href="/projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white
                  pb-2.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white
                  transition-colors
                  duration-300
                  hover:border-[#5A3E2B]
                  hover:text-[#5A3E2B]

                  sm:text-[10px]
                "
              >
                <span>
                  Voir nos projets
                </span>

                <ArrowRight
                  className="
                    h-3.5
                    w-3.5
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </Link>

              {/* =================================================
                  CONTACT
              ================================================== */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/35
                  pb-2.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-white
                  hover:text-white

                  sm:text-[10px]
                "
              >
                <span>
                  Nous contacter
                </span>

                <span
                  className="
                    h-px
                    w-5
                    bg-white/40
                    transition-all
                    duration-300
                    group-hover:w-8
                  "
                />
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          INDICATEURS À DROITE
      ====================================================== */}

      <div
        className="
          absolute
          right-5
          top-1/2
          z-20
          hidden
          -translate-y-1/2
          flex-col
          items-center
          gap-5
          sm:flex
          lg:right-8
          lg:gap-6
        "
      >

        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Afficher l'image ${index + 1}`}
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
            "
          >

            <span
              className={`
                rounded-full
                transition-all
                duration-500
                ${
                  currentImage === index
                    ? "h-3 w-3 bg-[#5A3E2B]"
                    : "h-2.5 w-2.5 bg-white/85"
                }
              `}
            />

          </button>
        ))}

      </div>

      {/* =====================================================
          NUMÉRO DU SLIDE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          right-6
          z-20
          flex
          items-center
          gap-3
          sm:right-10
        "
      >

        <span
          className="
            text-[9px]
            tracking-[0.2em]
            text-white/55
          "
        >
          0{currentImage + 1}
        </span>

        <span className="h-px w-7 bg-white/35" />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/75
          "
        >
          GIKORA
        </span>

      </div>

      {/* =====================================================
          LIGNE BAS GAUCHE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-10
          left-7
          z-20
          sm:left-12
          lg:left-20
          xl:left-24
        "
      >
        <div
          className="
            h-[2px]
            w-16
            bg-[#5A3E2B]
            sm:w-20
          "
        />
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          sm:flex
        "
      >

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-white/55
          "
        >
          Découvrir
        </span>

        <ArrowDown
          size={15}
          strokeWidth={1}
          className="animate-bounce text-white/65"
        />

      </div>

      {/* =====================================================
          INDICATEURS MOBILE
      ====================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-20
          flex
          -translate-x-1/2
          items-center
          gap-1.5
          sm:hidden
        "
      >

        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Aller à l'image ${index + 1}`}
            className={`
              h-[2px]
              transition-all
              duration-500
              ${
                currentImage === index
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}