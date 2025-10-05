import { Header } from "@/components/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { IndicatorsSection } from "@/components/indicators/IndicatorsSection";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { BenefitsSection } from "@/components/benefits/BenefitsSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IndicatorsSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
