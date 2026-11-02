"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SESSION_KEY = "gikora-loader-seen";
const DURATION = 1800;

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let alreadySeen = false;

    try {
      alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1";
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // stockage indisponible (navigation privée…) : on affiche le loader
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Déjà vu pendant cette session ou animations réduites : pas de loader
    if (alreadySeen || reducedMotion) {
      const skip = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(skip);
    }

    document.documentElement.style.overflow = "hidden";

    const interval = 20;
    const increment = 100 / (DURATION / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return next;
      });
    }, interval);

    const fadeTimer = setTimeout(() => {
      setHiding(true);
      document.documentElement.style.overflow = "";
    }, DURATION + 150);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, DURATION + 700);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      data-loader
      aria-hidden="true"
      className={`fixed inset-0 z-[20000] flex flex-col justify-between bg-[#faf9f7] text-[#171717] transition-opacity duration-500 ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      
      {/* TOP */}
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <div className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-neutral-400">
          GIKORA
        </div>

        <div className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-neutral-400">
          Architects
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex w-full max-w-[520px] flex-col items-center px-8">

          {/* LOGO */}
          <div className="relative w-44 sm:w-56 animate-logoReveal">
            <Image
              src="/images/logo/gikora-logo-noir.png"
              alt=""
              width={280}
              height={110}
              preload
              className="h-auto w-full"
            />
          </div>

          {/* SPACE */}
          <div className="h-16 sm:h-20" />

          {/* PROGRESS AREA */}
          <div className="w-full">

            <div className="mb-3 flex items-end justify-between">
              <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400">
                Architecture
              </span>

              <span className="font-mono text-[10px] text-neutral-500">
                {Math.round(progress).toString().padStart(3, "0")}%
              </span>
            </div>

            {/* LINE */}
            <div className="relative h-px w-full overflow-hidden bg-neutral-200">
              <div
                className="absolute left-0 top-0 h-full bg-[#5A3E2B] transition-[width] duration-75 ease-linear"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

          </div>

          {/* TEXT */}
          <div className="mt-6 text-center">
            <p className="text-[9px] tracking-[0.32em] uppercase text-neutral-400 sm:text-[10px]">
              Construire avec intention
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        
        <div className="text-[9px] tracking-[0.25em] uppercase text-neutral-400">
          Lomé · Togo
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-[#5A3E2B]" />
          <span className="text-[9px] tracking-[0.25em] uppercase text-neutral-400">
            Studio
          </span>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: translateY(12px);
            clip-path: inset(100% 0 0 0);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-logoReveal {
          animation: logoReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>
    </div>
  );
}