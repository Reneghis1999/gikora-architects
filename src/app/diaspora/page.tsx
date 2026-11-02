import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import DiasporaForm from "./DiasporaForm";

export const metadata: Metadata = {
  title: "Espace Diaspora | GIKORA Architects",
  description:
    "Vous vivez à l'étranger ? GIKORA Architects conçoit, construit et gère vos biens immobiliers au Togo, avec un suivi transparent à distance.",
};

/* =========================================================
   CONTENU
========================================================== */

const services = [
  {
    title: "Construire à distance",
    text: "Plans, permis, choix des entreprises : nous portons votre projet de A à Z, sans que vous ayez à vous déplacer.",
  },
  {
    title: "Suivi de chantier",
    text: "Un architecte contrôle la qualité, le budget et les délais, et vous envoie des rapports avec photos.",
  },
  {
    title: "Gestion de vos biens",
    text: "Location, entretien, réparations et suivi des loyers de votre bien au Togo.",
  },
  {
    title: "Sécurisation foncière",
    text: "Vérification des documents du terrain et accompagnement dans les démarches avant tout achat.",
  },
];

const steps = [
  "Vous nous présentez votre projet en visio ou sur WhatsApp.",
  "Nous étudions le terrain et vous envoyons une proposition chiffrée.",
  "Les travaux avancent, vous recevez des rapports réguliers.",
  "Remise des clés, puis gestion du bien si vous le souhaitez.",
];

const faqs = [
  {
    q: "Dois-je venir au Togo pour lancer mon projet ?",
    a: "Non. Tout peut se faire à distance : échanges en visio, validation des plans par email, signature électronique ou par procuration.",
  },
  {
    q: "Comment suis-je informé de l'avancement ?",
    a: "Par des rapports réguliers avec photos et vidéos, et un interlocuteur joignable sur WhatsApp.",
  },
  {
    q: "Comment se passent les paiements ?",
    a: "Ils sont échelonnés selon les étapes du chantier, chaque versement étant justifié par des photos et des factures.",
  },
];

/* =========================================================
   PAGE
========================================================== */

export default function DiasporaPage() {
  return (
    <main className="bg-[#f7f6f3] text-neutral-900">

      {/* =====================================================
          HERO — fond sombre pour le logo blanc de la navbar,
          contenu collé en haut, juste sous la navbar (h-24)
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
            GIKORA Architects s'occupe de votre projet sur place :
            construction, suivi de chantier et gestion de vos biens, en
            toute transparence.
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
          <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-4xl">
            Nos services
          </h2>

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
          <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-4xl">
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
          <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-4xl">
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
            <h2 className="text-3xl font-light tracking-[-0.04em] sm:text-4xl">
              Parlons de votre projet
            </h2>
            <p className="mt-4 max-w-sm font-light leading-relaxed text-neutral-600">
              Le formulaire ouvre WhatsApp avec votre message déjà rédigé.
              Nous vous répondons en tenant compte de votre fuseau horaire.
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