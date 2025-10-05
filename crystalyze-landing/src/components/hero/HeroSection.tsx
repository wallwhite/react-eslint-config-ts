"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnnouncePill } from "./AnnouncePill";
import { AIPreviewBlock } from "./AIPreviewBlock";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 chart-grid opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="container-width section-padding py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Announce Pill */}
          <div className="flex justify-center">
            <AnnouncePill />
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-balance leading-tight"
          >
            AI-Powered Market Analysis for{" "}
            <span className="gradient-text">Crypto & Equities</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance"
          >
            Professional-grade market intelligence, TradingView indicators, and AI-driven insights
            to make smarter trading decisions. Get started free in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              Watch Demo
            </Button>
          </motion.div>

          {/* AI Preview Block */}
          <div className="pt-8">
            <AIPreviewBlock />
          </div>
        </div>
      </div>
    </section>
  );
};
