import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Benefits } from "@/components/benefits";
import { Indicators } from "@/components/indicators";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Indicators />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
