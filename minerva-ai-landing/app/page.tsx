import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { IndicatorsSpotlight } from '@/components/sections/IndicatorsSpotlight';
import { BentoGrid } from '@/components/sections/BentoGrid';
import { KeyBenefits } from '@/components/sections/KeyBenefits';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Header />
      <Hero />
      <IndicatorsSpotlight />
      <BentoGrid />
      <KeyBenefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
