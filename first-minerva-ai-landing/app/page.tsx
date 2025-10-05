"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Indicators from "@/components/Indicators";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Indicators />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
