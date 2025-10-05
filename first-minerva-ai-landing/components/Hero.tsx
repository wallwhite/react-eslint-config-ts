"use client";

import * as React from "react";
import { Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AIPreview from "@/components/AIPreview";
import AIDrawer from "@/components/AIDrawer";
import { motion } from "framer-motion";

const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [currentPrompt, setCurrentPrompt] = React.useState("");
  const [currentModel, setCurrentModel] = React.useState("");

  const handleSendPrompt = (prompt: string, model: string, tool: string) => {
    setCurrentPrompt(prompt);
    setCurrentModel(model);
    setIsDrawerOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-white -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Announce pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium flex items-center space-x-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>New: Advanced Market Analysis AI</span>
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Transform Your Trading
              <br />
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
                With AI Intelligence
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto"
          >
            Harness the power of advanced AI models and professional-grade indicators to make
            smarter trading decisions. Get real-time analysis, sentiment tracking, and actionable
            insights across all major markets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Play className="h-4 w-4 mr-2" />
              View Demo
            </Button>
          </motion.div>

          {/* AI Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <AIPreview onSendPrompt={handleSendPrompt} />
          </motion.div>
        </div>
      </div>

      {/* AI Drawer */}
      <AIDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        prompt={currentPrompt}
        model={currentModel}
      />
    </section>
  );
};

export default Hero;
