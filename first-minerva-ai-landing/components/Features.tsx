"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, LineChart, Bell, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Multi-Model AI Support",
    description: "Access GPT-4, Claude 3, Gemini Pro, and more. Choose the best AI model for each analysis task.",
    icon: Brain,
    span: "md:col-span-2",
  },
  {
    title: "Real-Time Analysis",
    description: "Get instant market insights powered by live data feeds and advanced algorithms.",
    icon: Zap,
    span: "md:col-span-1",
  },
  {
    title: "Custom Indicators",
    description: "Professional-grade technical indicators designed for serious traders.",
    icon: LineChart,
    span: "md:col-span-1",
  },
  {
    title: "Backtesting Engine",
    description: "Test your strategies against historical data with our powerful backtesting platform. Validate before you trade.",
    icon: LineChart,
    span: "md:col-span-2",
  },
  {
    title: "Sentiment Analysis",
    description: "Track market sentiment across social media, news, and trading platforms in real-time.",
    icon: Globe,
    span: "md:col-span-2",
  },
  {
    title: "Smart Alerts",
    description: "Never miss a trade with AI-powered alerts tailored to your strategy.",
    icon: Bell,
    span: "md:col-span-1",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and security for your data and API keys.",
    icon: Shield,
    span: "md:col-span-1",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete trading intelligence platform that combines cutting-edge AI with
            professional-grade tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={feature.span}
              >
                <Card className="h-full hover:shadow-lg transition-all group cursor-pointer border-zinc-200">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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

export default Features;
