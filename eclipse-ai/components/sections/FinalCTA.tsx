"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-blue-500/50 bg-gradient-to-br from-blue-950/30 to-zinc-900/50 p-12 text-center"
        >
          <div className="absolute right-0 top-0 h-64 w-64 bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-purple-500/10 blur-3xl" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Start making smarter trading decisions today
            </h2>
            <p className="mb-8 text-lg text-zinc-400">
              Join 12,000+ traders using AI to cut through market noise
            </p>

            <Button
              size="lg"
              className="mb-8 bg-blue-600 text-base hover:bg-blue-700"
            >
              Start Free - No Credit Card Required
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Badge
                variant="outline"
                className="border-zinc-700 bg-zinc-900/50 px-4 py-2"
              >
                <Shield className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-sm text-zinc-300">SOC 2 Compliant</span>
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-700 bg-zinc-900/50 px-4 py-2"
              >
                <Lock className="mr-2 h-4 w-4 text-blue-500" />
                <span className="text-sm text-zinc-300">
                  256-bit Encryption
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="border-zinc-700 bg-zinc-900/50 px-4 py-2"
              >
                <Zap className="mr-2 h-4 w-4 text-yellow-500" />
                <span className="text-sm text-zinc-300">99.9% Uptime</span>
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
