import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Aboutsection from "@/components/Aboutsection";
import FeaturedProjects from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Avis from "@/components/Avis";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import StatsSection from "@/components/Statsection";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}