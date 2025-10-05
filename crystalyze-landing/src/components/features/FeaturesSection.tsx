"use client";

import { motion } from "framer-motion";
import { features } from "@/data/features";
import { Card } from "@/components/ui/card";

const colorClasses = {
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
  green: "from-green-500/20 to-green-600/20 border-green-500/30",
  purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30",
  orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30",
  cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
  yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
};

const iconColorClasses = {
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
  cyan: "text-cyan-400",
  yellow: "text-yellow-400",
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
          >
            Powerful Features for <span className="gradient-text">Smarter Trading</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to analyze markets, backtest strategies, and make informed decisions
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gradientClass = colorClasses[feature.color as keyof typeof colorClasses];
            const iconClass = iconColorClasses[feature.color as keyof typeof iconColorClasses];

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index === 0 || index === 3 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card
                  className={`p-6 h-full bg-gradient-to-br ${gradientClass} hover:border-opacity-50 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${iconClass}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
