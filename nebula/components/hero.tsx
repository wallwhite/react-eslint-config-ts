"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp } from "lucide-react";
import { AIPreview } from "./ai-preview";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              Now featuring GPT-4 analysis
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            AI-Powered Trading
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Intelligence for Everyone
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your trading decisions with cutting-edge AI analysis.
            Get real-time insights on crypto and stocks powered by GPT-4, Claude,
            and advanced technical indicators—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection("pricing")}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Analyzing Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection("indicators")}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Indicators
            </Button>
          </div>
        </div>

        {/* AI Preview Component */}
        <div className="mt-20">
          <AIPreview />
        </div>
      </div>
    </section>
  );
};
