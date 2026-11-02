
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import DiasporaForm from "./DiasporaForm";

export const metadata: Metadata = {
  title: "Espace Diaspora | GIKORA Architects",
  description:
    "Vous vivez à l'étranger ? GIKORA Architects vous accompagne dans vos projets immobiliers au Togo : permis de construire, sécurisation foncière, suivi de chantier et gestion de vos biens.",
};

/* =========================================================
   CONTENU
========================================================== */

const services = [
  {
    title: "Permis de construire",
    text: "Nous vous accompagnons dans la constitution de votre dossier et les démarches administratives nécessaires à l'obtention de votre permis de construire.",
  },
  {
    title: "Gestion de vos biens immobiliers",
    text: "Nous assurons la gestion quotidienne de vos biens : recherche de locataires, mise en location, entretien, réparations et gestion des loyers.",
  },
  {
    title: "Sécurisation foncière",
    text: "Nous vous accompagnons dans la vérification des documents de votre terrain et les démarches administratives nécessaires pour l'obtention du titre foncier.",
  },
  {
    title: "Suivi de chantier",
    text: "Nos experts assurent le contrôle de la qualité des travaux, la maîtrise du budget et le respect des délais. Vous recevez des rapports réguliers sur l'état d'avancement de votre chantier.",
  },
];

const steps = [
  "Vous nous présentez votre projet en visioconférence ou sur WhatsApp.",
  "Nous étudions votre besoin et vous proposons un accompagnement adapté.",
  "Nous assurons les démarches et le suivi de votre projet sur place, avec des rapports réguliers.",
  "Votre projet avance en toute transparence, même à distance.",
];

const faqs = [
  {
    q: "Dois-je venir au Togo pour lancer mon projet ?",
    a: "Non. Nous pouvons organiser les échanges à distance, notamment en visioconférence et par WhatsApp. Les modalités de validation des documents et les éventuelles procurations sont définies selon les démarches nécessaires.",
  },
  {
    q: "Comment suis-je informé de l'avancement ?",
    a: "Vous bénéficiez d'un suivi régulier avec des rapports sur l'état d'avancement de votre projet, accompagnés de photos et de vidéos selon les étapes.",
  },
  {
    q: "Comment se passent les paiements ?",
    a: "Les modalités de paiement sont définies en fonction de la nature de votre projet et des différentes étapes de la prestation. Les dépenses et les justificatifs vous sont communiqués pour assurer un suivi transparent.",
  },
];

/* =========================================================
   PAGE
========================================================== */

export default function DiasporaPage() {
  return (
    <main className="bg-[#f7f6f3] text-neutral-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-[#1c1712] px-6 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-6xl">

          {/* RETOUR ACCUEIL */}

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Accueil
          </Link>

          {/* TITRE */}

          <span className="mt-10 block text-[10px] uppercase tracking-[0.35em] text-white/40">
            Espace Diaspora
          </span>

          <h1 className="mt-4 max-w-3xl text-4xl font-light leading-[1.08] tracking-[-0.04em] sm:text-6xl">
            Construisez et gérez au Togo, où que vous viviez.
          </h1>

          <p className="mt-6 max-w-xl font-light leading-relaxed text-white/60">
            GIKORA Architects vous accompagne dans vos projets immobiliers au
            Togo : démarches administratives, sécurisation foncière, suivi de
            chantier et gestion de vos biens, en toute transparence.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact-diaspora"
              className="flex h-12 items-center justify-center rounded-full bg-white px-7 text-[11px] uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-300 hover:bg-[#e9e4dc]"
            >
              Parler de mon projet
            </Link>

            <a
              href="https://wa.me/22893631578"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full border border-white/30 px-7 text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Notre accompagnement
          </span>

          <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
            Nos services
          </h2>

          <p className="mt-4 max-w-xl font-light leading-relaxed text-neutral-600">
            De la sécurisation de votre terrain à la gestion de votre patrimoine
            immobilier, nous mettons notre expertise à votre service, même à
            distance.
          </p>

          <div className="mt-10 grid gap-x-16 gap-y-10 border-t border-neutral-300 pt-10 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={service.title}>
                <span className="text-[10px] tracking-[0.2em] text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-xl font-light tracking-[-0.02em]">
                  {service.title}
                </h3>

                <p className="mt-2 font-light leading-relaxed text-neutral-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ÉTAPES
      ====================================================== */}

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Notre méthode
          </span>

          <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
            Comment ça marche
          </h2>

          <ol className="mt-10 grid gap-8 border-t border-neutral-300 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step}>
                <span className="text-3xl font-light text-neutral-300">
                  0{index + 1}
                </span>

                <p className="mt-3 font-light leading-relaxed text-neutral-600">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
            Besoin d'informations ?
          </span>

          <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
            Questions fréquentes
          </h2>

          <div className="mt-10 border-t border-neutral-300">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border-b border-neutral-300 py-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-light [&::-webkit-details-marker]:hidden">
                  {faq.q}

                  <span className="text-xl font-light text-neutral-400 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl font-light leading-relaxed text-neutral-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact-diaspora"
        className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Parlons ensemble
            </span>

            <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] sm:text-4xl">
              Parlons de votre projet
            </h2>

            <p className="mt-4 max-w-sm font-light leading-relaxed text-neutral-600">
              Présentez-nous votre projet immobilier au Togo. Le formulaire
              ouvre WhatsApp avec votre message déjà rédigé. Nous vous
              répondrons en tenant compte de votre fuseau horaire.
            </p>

            <a
              href="https://wa.me/22893631578"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]"
            >
              +228 93 63 15 78

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <DiasporaForm />
        </div>
      </section>
    </main>
  );
}
