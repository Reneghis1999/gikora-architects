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
        rounded-2xl
        bg-white
        text-ink
        ring-1
        ring-black/5
        shadow-[0_8px_30px_-12px_rgba(38,29,22,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-deep
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