"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Retourner en haut"
      className={`
        fixed
        bottom-6
        right-6
        z-[9000]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-neutral-300
        bg-white/90
        text-[#211c19]
        shadow-sm
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#5A3E2B]
        hover:bg-[#5A3E2B]
        hover:text-white
        sm:bottom-8
        sm:right-8
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <ArrowUp
        size={17}
        strokeWidth={1.4}
      />
    </button>
  );
}