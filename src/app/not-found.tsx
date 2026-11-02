import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f7] px-6 text-center text-neutral-900">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#5A3E2B]">
        Erreur 404
      </p>

      <h1 className="mt-6 max-w-2xl text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
        Cette page n&apos;existe pas.
      </h1>

      <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500 md:text-base">
        Le lien est peut-être incorrect ou la page a été déplacée. Revenez à
        l&apos;accueil pour découvrir nos projets.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-3 border border-black px-6 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-black hover:text-white"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={1.3}
          />
          Retour à l&apos;accueil
        </Link>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center border border-neutral-300 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-600 transition-colors duration-300 hover:border-black hover:text-black"
        >
          Voir nos projets
        </Link>
      </div>
    </main>
  );
}
