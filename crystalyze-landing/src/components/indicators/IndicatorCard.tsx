"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Indicator } from "@/data/indicators";

interface IndicatorCardProps {
  indicator: Indicator;
  index: number;
}

const tierColors = {
  free: "bg-green-500/20 text-green-400 border-green-500/30",
  premium: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  ultimate: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export const IndicatorCard = ({ indicator, index }: IndicatorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:border-blue-500/50 transition-all duration-300 h-full">
        {/* Image Placeholder */}
        <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
              📊
            </div>
          </div>
          {/* Tier Badge */}
          <div className="absolute top-3 right-3">
            <Badge className={tierColors[indicator.tier]}>
              {indicator.tier.charAt(0).toUpperCase() + indicator.tier.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
            {indicator.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {indicator.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{indicator.author}</span>
            {indicator.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-medium">{indicator.rating}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
