"use client";

import { benefits } from "@/data/features";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-4 text-center text-3xl font-bold md:text-5xl">
            Measurable ROI on Your Trading
          </h2>
          <p className="mb-12 text-center text-lg text-zinc-400">
            Traders using eclipse-ai report these key improvements
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-500" />
                <p className="text-lg text-zinc-200">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
