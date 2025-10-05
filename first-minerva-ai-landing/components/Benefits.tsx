"use client";

import * as React from "react";
import { Clock, TrendingUp, Globe2, BarChart } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Clock,
    stat: "10+ Hours",
    title: "Time Saved Weekly",
    description: "Automate your market analysis and focus on what matters - making profitable trades.",
  },
  {
    icon: TrendingUp,
    stat: "40%",
    title: "Accuracy Improvement",
    description: "AI-powered insights help you make more informed decisions with higher success rates.",
  },
  {
    icon: Globe2,
    stat: "50+",
    title: "Markets Covered",
    description: "From crypto to forex, stocks to commodities - analyze any market you trade.",
  },
  {
    icon: BarChart,
    stat: "24/7",
    title: "Market Monitoring",
    description: "Never miss an opportunity with round-the-clock AI analysis and smart alerts.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Traders Choose Minerva AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful traders who have transformed their trading with AI intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
