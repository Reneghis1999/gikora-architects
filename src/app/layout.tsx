import type { Metadata } from "next";
import "./globals.css";

import { Orbitron } from "next/font/google";
import AppClient from "@/components/AppClient";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gikora Architects | Cabinet d'architecture a Lomé",
  description:
    "Architecture & Design Studio spécialisé dans le design moderne, les rendus 3D et l’architecture contemporaine.",
  keywords: [
    "architecture",
    "design",
    "3D rendering",
    "Gikora",
    "architects",
    "modern architecture",
  ],
  authors: [{ name: "GIKORA ARCHITECTS" }],
  openGraph: {
    title: "GIKORA ARCHITECTS",
    description: "Architecture & Design Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={orbitron.variable}>
      <body>
        <AppClient>{children}</AppClient>
      </body>
    </html>
  );
}