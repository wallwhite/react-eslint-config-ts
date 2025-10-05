"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/data/features";
import { motion } from "framer-motion";
import {
  Sparkles,
  GitMerge,
  Lightbulb,
  TrendingUp,
  Target,
  ExternalLink,
} from "lucide-react";

const iconMap = {
  "multi-model": Sparkles,
  "cross-asset": GitMerge,
  explainability: Lightbulb,
  sentiment: TrendingUp,
  backtest: Target,
  tradingview: ExternalLink,
};

export const BentoFeatures = () => {
  return (
    <section id="features" className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            AI-Powered Market Intelligence
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Every feature designed to give you an unfair advantage in the
            markets
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.id as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <Card
                  className={`h-full border-zinc-800 bg-zinc-900/50 transition-colors hover:border-blue-500/50 ${
                    index === 0 ? "md:p-8" : ""
                  }`}
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle
                      className={index === 0 ? "text-2xl" : "text-xl"}
                    >
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
