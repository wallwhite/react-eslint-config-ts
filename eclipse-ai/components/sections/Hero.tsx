"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target } from "lucide-react";
import { motion } from "framer-motion";
import { AIPreviewBlock } from "./AIPreviewBlock";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-background/50 py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />

      <div className="container relative px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-6 border-blue-500/50 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
          >
            <Target className="mr-2 h-3 w-3" />
            New: Multi-Asset AI Analysis
          </Badge>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            AI market intelligence for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              crypto and stocks
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Less noise, more edge. Multi-model analysis, real-time sentiment,
            and pro-grade TradingView indicators for smarter trading decisions.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-blue-600 text-base hover:bg-blue-700"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              View Indicators
            </Button>
          </div>

          <AIPreviewBlock />
        </motion.div>
      </div>
    </section>
  );
};
