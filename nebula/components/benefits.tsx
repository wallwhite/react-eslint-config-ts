"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Win Rate",
    description: "Leverage AI-powered insights and professional indicators to identify high-probability trades. Our users report an average 34% improvement in their win rate within the first 3 months.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automated market scanning, AI analysis, and instant alerts mean you spend less time researching and more time executing profitable trades. Reduce analysis time by 80%.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Reduce Risk",
    description: "Advanced risk management tools, AI-powered position sizing, and real-time portfolio monitoring help protect your capital. Smart stop-loss suggestions prevent emotional decisions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Stay Ahead",
    description: "Get real-time alerts for market opportunities, trend changes, and indicator signals. Never miss a profitable setup with instant notifications to your phone and email.",
    gradient: "from-orange-500 to-red-500",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Why Choose Nebula
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of traders who have transformed their trading results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-6 relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
