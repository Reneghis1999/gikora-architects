import type { Metadata } from "next";
import "./globals.css";

import { Questrial } from "next/font/google";
import AppClient from "@/components/AppClient";

// Police utilisée par veone.net (Questrial)
const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
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
  icons: {
    icon: "/icones/fw_32.png",
  },
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
    <html lang="fr" className={questrial.variable}>
      <body className={questrial.className}>
        <AppClient>{children}</AppClient>
      </body>
    </html>
  );
}