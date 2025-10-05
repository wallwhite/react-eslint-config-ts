"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { indicators } from "@/data/indicators";
import { motion } from "framer-motion";

const tierColors = {
  free: "bg-green-500/10 text-green-400 border-green-500/20",
  premium: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  ultimate: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const categoryColors = [
  "from-blue-500/20 to-purple-500/20",
  "from-green-500/20 to-blue-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-orange-500/20 to-red-500/20",
  "from-cyan-500/20 to-blue-500/20",
];

export const IndicatorsCarousel = () => {
  return (
    <section id="indicators" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            TradingView Indicators
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Professional-grade indicators that integrate seamlessly with your TradingView setup
          </p>
        </motion.div>

        {/* Scrollable Grid */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
            {indicators.map((indicator, index) => (
              <motion.div
                key={indicator.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[350px]"
              >
                <Card className="h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardHeader>
                    {/* Preview Gradient */}
                    <div
                      className={`mb-4 h-32 rounded-lg bg-gradient-to-br ${
                        categoryColors[index % categoryColors.length]
                      } flex items-center justify-center border border-zinc-800/50`}
                    >
                      <div className="text-4xl font-bold text-white/30">
                        {indicator.name.slice(0, 2).toUpperCase()}
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg text-zinc-100">{indicator.name}</CardTitle>
                      <Badge variant="outline" className={`${tierColors[indicator.tier]} shrink-0 text-xs`}>
                        {indicator.tier}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="mb-3 bg-zinc-800 text-zinc-300">
                      {indicator.category}
                    </Badge>
                    <CardDescription className="line-clamp-2 text-zinc-400">
                      {indicator.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
