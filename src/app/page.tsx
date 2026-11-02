import Hero from "@/components/Hero";
import StatsSection from "@/components/Statsection";
import Aboutsection from "@/components/Aboutsection";
import FeaturedProjects from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Avis from "@/components/Avis";
import Faq, { faqs } from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import { jsonLd } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
      />

      <Hero />
      <StatsSection />
      <Aboutsection />
      <FeaturedProjects />
      <Services />
      <Philosophy />
      <Process />
      <Avis />
      <Faq />
      <ContactSection />
    </main>
  );
}
