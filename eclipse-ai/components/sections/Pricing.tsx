"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <section id="pricing" className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Choose Your Edge
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Start free, upgrade when you&apos;re ready to unlock the full power
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-blue-600 hover:bg-blue-700">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              <Card
                className={`h-full border-zinc-800 bg-zinc-900/50 ${
                  tier.popular
                    ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
                    : ""
                }`}
              >
                <CardHeader>
                  <p className="text-sm font-medium text-zinc-400">
                    {tier.tagline}
                  </p>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    {typeof tier.price === "number" ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">
                          ${tier.price}
                        </span>
                        {tier.interval && (
                          <span className="text-zinc-400">/{tier.interval}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-4xl font-bold">{tier.price}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
