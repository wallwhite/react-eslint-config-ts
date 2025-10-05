"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const AnnouncePill = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-sm"
    >
      <Sparkles className="w-4 h-4 text-blue-400" />
      <span className="text-sm font-medium text-blue-400">
        New: GPT-4 Turbo integration
      </span>
    </motion.div>
  );
};
