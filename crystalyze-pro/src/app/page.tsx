// Migration in progress - integrating reference template layout

import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/hero/hero-section";
import { TrustedBy } from "@/components/sections/trusted-by";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { Workflow } from "@/components/sections/workflow";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,140,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(5,240,255,0.16),transparent_65%)]" />
      </div>

      <SiteHeader />

      <HeroSection />
      <TrustedBy />
      <FeatureShowcase />
      <Workflow />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}