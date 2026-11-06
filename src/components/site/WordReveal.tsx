"use client";

import { MotionConfig, motion, stagger } from "framer-motion";

/**
 * Texte dont les mots montent un à un derrière un masque quand il
 * apparaît à l'écran (une seule fois, façon Reinvent Labs).
 */
export default function WordReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <MotionConfig reducedMotion="user">
      <motion.p
        className={className}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ delayChildren: stagger(0.12) }}
      >
        <span className="sr-only">{text}</span>
        {words.map((word, index) => (
          <span
            key={`${word}-${index}`}
            aria-hidden="true"
            className="-mr-[0.08em] inline-block overflow-hidden pb-[0.08em] pr-[0.08em] align-bottom"
          >
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
              {index < words.length - 1 && "\u00a0"}
            </motion.span>
          </span>
        ))}
      </motion.p>
    </MotionConfig>
  );
}
