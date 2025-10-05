"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Send, Sparkles, Globe, Database, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { ShortcutTabs } from "./ShortcutTabs";
import { AnalysisDrawer } from "./AnalysisDrawer";

export const AIPreviewBlock = () => {
  const [prompt, setPrompt] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("claude");

  const isEnabled = prompt.length > 0;

  const handleShortcutClick = (shortcutPrompt: string) => {
    setPrompt(shortcutPrompt);
  };

  const handleSend = () => {
    if (isEnabled) {
      setIsDrawerOpen(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="mx-auto max-w-3xl border-zinc-800 bg-zinc-950/50 p-6 shadow-2xl backdrop-blur">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="claude">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-orange-500" />
                  Claude Opus
                </div>
              </SelectItem>
              <SelectItem value="gpt4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-green-500" />
                  GPT-4 Turbo
                </div>
              </SelectItem>
              <SelectItem value="gemini">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-blue-500" />
                  Gemini Pro
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs">
              <Globe className="h-3 w-3 text-blue-400" />
              <span className="text-zinc-400">Web Search</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs">
              <Database className="h-3 w-3 text-purple-400" />
              <span className="text-zinc-400">On-chain Data</span>
            </div>
            <div className="flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-zinc-400">Price Action</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask about any market..."
                  className="min-h-[120px] w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  disabled={!isEnabled && prompt.length === 0}
                />
              </TooltipTrigger>
              {!isEnabled && (
                <TooltipContent>
                  <p>Preview mode. Pick a shortcut below to simulate.</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>

          <div className="mt-3 flex justify-end">
            <Button
              onClick={handleSend}
              disabled={!isEnabled}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </div>
        </div>
      </Card>

      <ShortcutTabs onShortcutClick={handleShortcutClick} />

      <AnalysisDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        prompt={prompt}
      />
    </motion.div>
  );
};
