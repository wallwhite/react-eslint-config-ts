"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 chart-grid opacity-20 pointer-events-none" />

      <div className="container-width section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-12 md:p-16"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Ready to Transform Your <span className="gradient-text">Trading Strategy?</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders using AI-powered insights to make smarter decisions.
            Get started with our free plan today—no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              Schedule a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by professional traders worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
