"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { ShortcutTabs } from "./ShortcutTabs";
import { AnalysisDrawer } from "./AnalysisDrawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const AIPreviewBlock = () => {
  const [prompt, setPrompt] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState("");

  const handleTabClick = (tabPrompt: string) => {
    setPrompt(tabPrompt);
  };

  const handleSend = () => {
    if (prompt.trim()) {
      setActivePrompt(prompt);
      setIsDrawerOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && prompt.trim()) {
      handleSend();
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div className="glass-effect rounded-2xl p-6 space-y-4">
          {/* Shortcut Tabs */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-3">Try these popular queries:</p>
            <ShortcutTabs onTabClick={handleTabClick} />
          </div>

          {/* Input Area */}
          <div className="relative">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything about crypto or equity markets..."
              className="pr-12 h-12 bg-background/50 border-border/50 focus-visible:ring-blue-500"
            />
            <Button
              onClick={handleSend}
              disabled={!prompt.trim()}
              size="icon"
              className="absolute right-1 top-1 h-10 w-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center">
            Powered by GPT-4 Turbo • Analyzing crypto, equities & TradingView indicators
          </p>
        </div>
      </motion.div>

      {/* Analysis Drawer */}
      <AnalysisDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        prompt={activePrompt}
      />
    </>
  );
};
