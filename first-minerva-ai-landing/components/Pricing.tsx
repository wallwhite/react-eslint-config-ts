"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  variant?: "default" | "outline";
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with AI-powered trading analysis",
    features: [
      "3 basic indicators",
      "5 premium AI model requests per month",
      "Basic market sentiment analysis",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    variant: "outline",
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    description: "For serious traders who want advanced AI insights and tools",
    features: [
      "6 total indicators (3 basic + 3 advanced)",
      "100 AI model requests per month",
      "All AI models (GPT-4, Claude 3, Gemini Pro)",
      "Real-time sentiment analysis",
      "Advanced backtesting (10 tests/month)",
      "Smart alerts & notifications",
      "Priority email support",
      "Discord community access",
    ],
    cta: "Start Free Trial",
    popular: true,
    variant: "default",
  },
  {
    name: "Ultimate",
    price: "$99",
    period: "per month",
    description: "For professional traders and trading teams",
    features: [
      "10 professional indicators (unlimited access)",
      "Unlimited AI model requests",
      "All AI models with priority access",
      "Advanced sentiment analysis with sources",
      "Unlimited backtesting & optimization",
      "Custom indicator development",
      "API access for automation",
      "24/7 priority support",
      "Private Discord channel",
      "Weekly strategy sessions",
    ],
    cta: "Start Free Trial",
    variant: "outline",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Trading Edge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include a 14-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card
                className={`h-full ${
                  tier.popular
                    ? "border-2 border-zinc-900 shadow-xl"
                    : "border-zinc-200"
                }`}
              >
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-2">/ {tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant={tier.variant}
                    className="w-full mb-6"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                  <div className="space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            All plans include SSL encryption, data privacy compliance, and can be cancelled anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
