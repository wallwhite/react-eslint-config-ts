"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { benefits } from "@/data/benefits";

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
          >
            Why Traders Choose <span className="gradient-text">Crystalyze AI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Join thousands of traders improving their performance with AI-powered insights
          </motion.p>
        </div>

        {/* Benefits List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg glass-effect hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  {benefit.metric && (
                    <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                      {benefit.metric}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
