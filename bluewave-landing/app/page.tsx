import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { IndicatorsCarousel } from "@/components/sections/IndicatorsCarousel";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingTable } from "@/components/sections/PricingTable";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <IndicatorsCarousel />
        <FeaturesBento />
        <Benefits />
        <Testimonials />
        <PricingTable />
        <FAQSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
