"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { indicators } from "@/data/indicators";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";

export const IndicatorsCarousel = () => {
  return (
    <section id="indicators" className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Professional TradingView Indicators
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Battle-tested indicators that provide actionable signals with clear
            reasoning
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-zinc-800 bg-zinc-900/50 transition-colors hover:border-blue-500/50">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    {indicator.category === "Crypto" ? (
                      <TrendingUp className="h-8 w-8 text-blue-400" />
                    ) : (
                      <BarChart3 className="h-8 w-8 text-purple-400" />
                    )}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{indicator.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className={
                        indicator.category === "Crypto"
                          ? "border-blue-500/50 bg-blue-500/10 text-blue-400"
                          : "border-purple-500/50 bg-purple-500/10 text-purple-400"
                      }
                    >
                      {indicator.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
