"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, BarChart3, Target, Layers, Zap, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

interface Indicator {
  name: string;
  description: string;
  category: string[];
  icon: React.ElementType;
  gradient: string;
}

const indicators: Indicator[] = [
  {
    name: "Smart Money Flow",
    description: "Track institutional buying and selling patterns with advanced volume analysis and order flow detection.",
    category: ["Volume", "Professional"],
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Volume Delta Pro",
    description: "Real-time delta analysis showing buying vs selling pressure at each price level.",
    category: ["Volume", "Advanced"],
    icon: Activity,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Divergence Hunter",
    description: "Automatically detect bullish and bearish divergences across multiple timeframes.",
    category: ["Momentum", "Signals"],
    icon: Target,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Market Structure",
    description: "Identify key support, resistance, and structural breaks using advanced algorithms.",
    category: ["Professional", "Technical"],
    icon: Layers,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Volatility Breakout",
    description: "Detect high-probability breakout setups based on volatility compression patterns.",
    category: ["Volatility", "Signals"],
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Trend Strength Pro",
    description: "Multi-factor trend analysis combining momentum, volume, and market breadth indicators.",
    category: ["Momentum", "Professional"],
    icon: BarChart3,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "Risk Guardian",
    description: "Real-time risk assessment with dynamic position sizing and exposure management.",
    category: ["Risk", "Professional"],
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Alpha Signals",
    description: "ML-powered signal generation combining multiple technical and fundamental factors.",
    category: ["AI", "Premium"],
    icon: Award,
    gradient: "from-violet-500 to-purple-500",
  },
];

const Indicators = () => {
  return (
    <section id="indicators" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional-Grade Indicators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access a comprehensive suite of advanced trading indicators designed by professionals,
            for professionals. Each indicator is rigorously tested and optimized for real-world trading.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <motion.div
                key={indicator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className={`bg-gradient-to-br ${indicator.gradient} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{indicator.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {indicator.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {indicator.category.map((cat) => (
                        <Badge key={cat} variant="secondary" className="text-xs">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All indicators are compatible with TradingView, MetaTrader, and custom platforms
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Indicators;
