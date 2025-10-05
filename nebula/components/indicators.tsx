"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TrendingUp, Activity, BarChart3, Zap, Brain, Target } from "lucide-react";

const indicators = [
  {
    id: 1,
    name: "Nebula Trend Reversal",
    category: ["Trend", "AI-Powered"],
    description: "AI-driven indicator that identifies trend reversals with 78% accuracy using machine learning models trained on historical price patterns.",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Smart Volume Flow",
    category: ["Volume", "Institutional"],
    description: "Tracks institutional money flow and smart money movements to identify accumulation and distribution phases before major price moves.",
    icon: Activity,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "AI Signal Hunter",
    category: ["Momentum", "AI-Powered"],
    description: "Neural network-based signal generator that combines multiple timeframes and indicators to provide high-probability trade entries.",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Liquidity Heatmap Pro",
    category: ["Volume", "Professional"],
    description: "Visualizes real-time liquidity zones and order book depth to identify key support/resistance levels where big moves originate.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Volatility Breakout Scanner",
    category: ["Volatility", "Scalping"],
    description: "Identifies low-volatility compression zones that typically precede explosive breakouts, perfect for swing and day traders.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    name: "Precision Entry System",
    category: ["Trend", "Professional"],
    description: "Multi-timeframe confluence system that pinpoints optimal entry points with minimal drawdown using advanced fibonacci and pivot analysis.",
    icon: Target,
    color: "from-indigo-500 to-blue-500",
  },
];

export const Indicators = () => {
  return (
    <section id="indicators" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
            TradingView Integration
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Professional Trading Indicators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access our suite of premium TradingView indicators powered by AI and
            advanced algorithms. Each indicator is battle-tested and optimized for
            maximum profitability.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {indicators.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <CarouselItem key={indicator.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-br ${indicator.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-wrap gap-1 justify-end">
                          {indicator.category.map((cat) => (
                            <Badge
                              key={cat}
                              variant="secondary"
                              className="text-xs"
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{indicator.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed mb-4">
                        {indicator.description}
                      </CardDescription>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      >
                        View Indicator
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative left-0 translate-y-0" />
            <CarouselNext className="relative right-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse All Indicators
          </Button>
        </div>
      </div>
    </section>
  );
};
