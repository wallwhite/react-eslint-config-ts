"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Workflow,
  TrendingUp,
  FlaskConical,
  Newspaper,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Workflow,
    title: "AI Multi-Model Routing",
    description: "Route queries to GPT-4, Claude, or Gemini based on task",
    gradient: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: TrendingUp,
    title: "Cross-Asset Analysis",
    description: "Spot correlation plays across crypto and equities",
    gradient: "from-green-500/10 to-green-600/10",
  },
  {
    icon: FlaskConical,
    title: "Backtesting Hooks",
    description: "Validate strategies with historical data",
    gradient: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: Newspaper,
    title: "Real-Time Sentiment",
    description: "News, social signals, and on-chain metrics in one view",
    gradient: "from-orange-500/10 to-orange-600/10",
  },
  {
    icon: MessageSquare,
    title: "Signal Explainability",
    description: "Every recommendation includes rationale and confidence score",
    gradient: "from-cyan-500/10 to-cyan-600/10",
  },
  {
    icon: BarChart3,
    title: "TradingView Integration",
    description: "Native indicators install directly to your charts",
    gradient: "from-pink-500/10 to-pink-600/10",
  },
];

export const FeaturesBento = () => {
  return (
    <section id="features" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to trade smarter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful features designed to give you an edge in crypto and equity markets
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 || index === 5 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="group h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-gradient-to-br ${feature.gradient} transition-transform group-hover:scale-110`}
                  >
                    <feature.icon className="h-7 w-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-zinc-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-zinc-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
