"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/pricing";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative bg-secondary/30">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
          >
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Choose the plan that fits your trading needs. Upgrade or downgrade anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                className={`p-6 h-full ${
                  plan.popular
                    ? "border-blue-500/50 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                    : ""
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations && plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border space-y-2">
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-muted-foreground text-sm">✗ {limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
