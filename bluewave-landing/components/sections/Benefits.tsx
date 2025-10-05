"use client";

import { TrendingUp, Target, Zap, Filter } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher-quality entries",
    description: "Multi-model consensus for better trade timing",
  },
  {
    icon: Target,
    title: "Objective signal scoring",
    description: "Confidence metrics backed by backtested data",
  },
  {
    icon: Zap,
    title: "Faster research cycles",
    description: "Get comprehensive analysis in seconds, not hours",
  },
  {
    icon: Filter,
    title: "Less noise, more edge",
    description: "Filter out market noise with AI-powered insights",
  },
];

export const Benefits = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Why traders choose Bluewave
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Gain a measurable advantage with AI-powered market intelligence
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 ring-1 ring-blue-500/20">
                <benefit.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-100">{benefit.title}</h3>
              <p className="text-sm text-zinc-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
