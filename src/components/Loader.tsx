"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800); // durée du loader

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#faf9f7]">

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center gap-6">

        {/* LOGO */}
        <div className="relative w-40 sm:w-48 animate-fadeInScale">
          <Image
            src="/images/gikoralogo.png"
            alt="GIKORA Architects"
            width={200}
            height={80}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* LINE LOADER */}
        <div className="relative w-40 sm:w-52 h-[1px] bg-neutral-200 overflow-hidden">

          <div className="absolute inset-0 bg-[#5A3E2B] animate-loaderBar" />

        </div>

        {/* SMALL TEXT */}
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-neutral-500">
          Chargement de l’univers architectural
        </p>

      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes loaderBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-loaderBar {
          animation: loaderBar 1.4s ease-in-out infinite;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}