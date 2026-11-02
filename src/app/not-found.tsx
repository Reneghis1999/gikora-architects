import type { Metadata } from "next";

import { ButtonLink, PageHero } from "@/components/site/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return (
    <main>
      <PageHero
        badge="Erreur 404"
        title={
          <>
            Cette page
            <span className="text-taupe"> n&apos;existe pas.</span>
          </>
        }
        intro="Le lien est peut-être incorrect ou la page a été déplacée. Revenez à l’accueil pour découvrir nos projets."
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            Voir nos projets
          </ButtonLink>
        </div>
      </PageHero>
    </main>
  );
}
