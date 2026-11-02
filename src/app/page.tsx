import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutsection from "@/components/Aboutsection";
import FeaturedProjects from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Avis from "@/components/Avis";
import Faq, { faqs } from "@/components/Faq";
import Footer from "@/components/Footer";
import StatsSection from "@/components/Statsection";
import ScrollToTop from "@/components/ScrollToTop";
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
      <Navbar />

      <Hero />

      <StatsSection />

      <Aboutsection />

      <FeaturedProjects />

      <Services />

      <Philosophy />

      <Avis />

      <Faq />

      <Footer />

      <ScrollToTop />
    </main>
  );
}