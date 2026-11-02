import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projets — Réalisations architecturales au Togo",
  description:
    "Portfolio de Gikora Architects : villas, immeubles, résidences, complexe scolaire, équipements touristiques et aménagements intérieurs conçus à Lomé et au Togo.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsClient />;
}
