"use client";

import Loader from "@/components/Loader";

/* =========================================================
   Le contenu des pages est TOUJOURS rendu (côté serveur et
   client) : Google et les visiteurs reçoivent le HTML complet
   immédiatement. Le loader est une simple surcouche visuelle
   affichée par-dessus, au premier chargement uniquement.
========================================================== */

export default function AppClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
