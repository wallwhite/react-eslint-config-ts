"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { indicators, categories, IndicatorCategory } from "@/data/indicators";
import { IndicatorCard } from "./IndicatorCard";
import { Button } from "@/components/ui/button";

export const IndicatorsSection = () => {
  const [activeCategory, setActiveCategory] = useState<IndicatorCategory | "all">("all");

  const filteredIndicators =
    activeCategory === "all"
      ? indicators
      : indicators.filter((ind) => ind.category === activeCategory);

  return (
    <section id="indicators" className="py-24 relative">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
          >
            Professional <span className="gradient-text">TradingView Indicators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Access premium indicators from top creators, AI-powered signals, and custom analytics
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            All Indicators
          </Button>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              onClick={() => setActiveCategory(category.value)}
              className={activeCategory === category.value ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndicators.map((indicator, index) => (
            <IndicatorCard key={indicator.id} indicator={indicator} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
