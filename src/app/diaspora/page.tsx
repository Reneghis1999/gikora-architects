import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import DiasporaForm from "./DiasporaForm";
import { FaqList } from "@/components/Faq";
import { Badge, ButtonLink, Container, SectionHeading } from "@/components/site/ui";
import { jsonLd, siteConfig, whatsappUrl } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Espace Diaspora — Construire au Togo depuis l'étranger",
  description:
    "Vous vivez à l'étranger ? GIKORA Architects vous accompagne dans vos projets immobiliers au Togo : permis de construire, sécurisation foncière, suivi de chantier et gestion de vos biens.",
  path: "/diaspora",
});

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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Espace Diaspora",
          item: `${siteConfig.url}/diaspora`,
        },
      ],
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="pt-[92px] sm:pt-[100px]">
        <Container>
          <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-deep px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
              <Badge tone="outline-light">Espace Diaspora</Badge>

              <h1 className="mt-7 max-w-3xl text-[2.6rem] leading-[1] tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem]">
                Construisez et gérez au Togo,
                <span className="text-white/45"> où que vous viviez.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                GIKORA Architects vous accompagne dans vos projets immobiliers au
                Togo : démarches administratives, sécurisation foncière, suivi de
                chantier et gestion de vos biens, en toute transparence.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#contact-diaspora" variant="light">
                  Parler de mon projet
                </ButtonLink>
                <ButtonLink href={whatsappUrl()} variant="outline-light" external>
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { value: "À distance", label: "Échanges en visioconférence ou sur WhatsApp, sans vous déplacer" },
                { value: "Photos & vidéos", label: "Rapports réguliers sur l’avancement de votre chantier" },
                { value: "Transparence", label: "Dépenses et justificatifs communiqués à chaque étape" },
              ].map((item) => (
                <div key={item.value} className="flex flex-col justify-center rounded-[2rem] bg-white px-7 py-7">
                  <p className="text-3xl tracking-[-0.03em] text-ink">{item.value}</p>
                  <p className="mt-2 text-[15px] leading-6 text-taupe">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            badge="Notre accompagnement"
            title={
              <>
                Nos services
                <span className="text-taupe"> pour la diaspora.</span>
              </>
            }
            intro="De la sécurisation de votre terrain à la gestion de votre patrimoine immobilier, nous mettons notre expertise à votre service, même à distance."
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-[2rem] bg-white p-8 sm:p-10">
                <Badge>0{index + 1}</Badge>
                <h3 className="mt-6 text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-taupe">{service.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================
          ÉTAPES
      ====================================================== */}

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="rounded-[2rem] bg-sand px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <SectionHeading
              badge="Notre méthode"
              title="Comment ça marche"
              className="[&_span]:bg-white"
            />

            <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step} className="rounded-[1.5rem] bg-white/70 p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-deep text-[15px] text-white">
                    {index + 1}
                  </span>
                  <p className="mt-6 text-[15px] leading-7 text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              badge="Besoin d’informations ?"
              title={
                <>
                  Questions
                  <span className="text-taupe"> fréquentes.</span>
                </>
              }
            />
            <FaqList items={faqs.map((faq) => ({ q: faq.q, a: faq.a }))} />
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section id="contact-diaspora" className="scroll-mt-28">
        <Container>
          <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between gap-10 rounded-[2rem] bg-brand px-6 py-12 text-white sm:px-10 lg:px-12">
              <div>
                <Badge tone="outline-light">Parlons ensemble</Badge>
                <h2 className="mt-7 text-4xl leading-[1.02] tracking-[-0.035em] sm:text-5xl">
                  Parlons de votre projet
                </h2>
                <p className="mt-6 max-w-md text-base leading-7 text-white/70">
                  Présentez-nous votre projet immobilier au Togo. Votre demande
                  nous est transmise par email et WhatsApp s&apos;ouvre avec votre
                  message déjà rédigé. Nous vous répondrons en tenant compte de
                  votre fuseau horaire.
                </p>
              </div>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 self-start rounded-full bg-white/10 py-2 pl-5 pr-2 text-[15px] transition-colors hover:bg-white/15"
              >
                {siteConfig.phoneDisplay}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </span>
              </a>
            </div>

            <div className="rounded-[2rem] bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
              <p className="text-[13px] text-taupe">Formulaire Diaspora</p>
              <h3 className="mt-2 text-2xl tracking-[-0.02em] text-ink sm:text-3xl">
                Présentez votre projet
              </h3>
              <div className="mt-8">
                <DiasporaForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
