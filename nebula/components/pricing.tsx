"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "3 free indicators",
      "Basic AI access (GPT-4o-mini only)",
      "5 premium model requests/month",
      "Community support",
      "Basic charting tools",
      "Price alerts (up to 5)",
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Premium",
    price: "$29",
    period: "/month",
    description: "Most popular for serious traders",
    features: [
      "6 total indicators (3 free + 3 premium)",
      "All AI models (with daily limits)",
      "100 premium requests/month",
      "Priority support",
      "Advanced charting",
      "Unlimited price alerts",
      "Portfolio tracking",
      "Risk management tools",
      "TradingView integration",
      "Historical data access",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ultimate",
    price: "$99",
    period: "/month",
    description: "For professional traders",
    features: [
      "10 total indicators (all previous + 4 professional)",
      "Unlimited AI access (all models)",
      "Unlimited premium requests",
      "1-on-1 onboarding call",
      "API access",
      "Custom alerts & automations",
      "Advanced backtesting",
      "Institutional data feeds",
      "Priority feature requests",
      "Dedicated account manager",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade as you grow. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                tier.popular
                  ? "border-primary shadow-2xl scale-105 lg:scale-110"
                  : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-primary text-primary-foreground rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-5`} />
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-sm">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  className={`w-full mb-6 ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All plans include 14-day money-back guarantee. No questions asked.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>No credit card required for Free</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              <span>Upgrade or downgrade anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
