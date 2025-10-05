"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { plans } from "@/data/pricing";
import { motion } from "framer-motion";

export const PricingTable = () => {
  return (
    <section id="pricing" className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Choose your plan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Start free, upgrade when you need more power
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full border-zinc-800 transition-all ${
                  plan.popular
                    ? "border-blue-500/50 bg-gradient-to-br from-zinc-900/90 to-blue-950/30 shadow-2xl shadow-blue-500/20 ring-1 ring-blue-500/20"
                    : "bg-zinc-900/50 hover:border-blue-500/30 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-white shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl text-zinc-50">{plan.name}</CardTitle>
                  <CardDescription className="text-zinc-400">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline">
                      {plan.price === 0 ? (
                        <span className="text-5xl font-bold text-zinc-100">Free</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-zinc-100">${plan.price}</span>
                          <span className="ml-2 text-zinc-400">/month</span>
                        </>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-zinc-500">{plan.priceLabel}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button
                    className={`mb-8 w-full ${
                      plan.popular ? "shadow-lg shadow-blue-500/20" : ""
                    }`}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                        <span className="text-sm text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
