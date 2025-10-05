"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronRight } from "lucide-react";
import { AIPreviewBlock } from "../AIPreviewBlock";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28 lg:py-36">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-blue-950/10 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announce Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex"
          >
            <Badge variant="outline" className="gap-2 border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 hover:bg-blue-500/20">
              <Sparkles className="h-4 w-4 text-blue-400" />
              New: Multi-asset AI Analysis
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            AI market intelligence for crypto and stocks.
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg text-muted-foreground md:text-xl"
          >
            Less noise, more edge. Multi-model analysis, real-time sentiment, and pro-grade TradingView indicators.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="text-base">
              Start free
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              View indicators
            </Button>
          </motion.div>

          {/* AI Preview Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AIPreviewBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
