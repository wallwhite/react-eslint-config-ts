"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";
import { shortcuts } from "@/data/shortcuts";
import { AIAnalysisDrawer } from "./AIAnalysisDrawer";

const aiModels = [
  { value: "gpt4", label: "GPT-4" },
  { value: "claude", label: "Claude 3.5" },
  { value: "gemini", label: "Gemini Pro" },
];

const tools = [
  { id: "web", label: "Web Search" },
  { id: "onchain", label: "On-chain Data" },
  { id: "technical", label: "Technical Analysis" },
  { id: "news", label: "News Sentiment" },
];

export const AIPreviewBlock = () => {
  const [selectedModel, setSelectedModel] = useState("gpt4");
  const [selectedTools, setSelectedTools] = useState<string[]>(["web", "onchain", "technical"]);
  const [prompt, setPrompt] = useState("");
  const [activeShortcut, setActiveShortcut] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShortcutClick = (shortcutId: string) => {
    const shortcut = shortcuts.find(s => s.id === shortcutId);
    if (shortcut) {
      setPrompt(shortcut.prompt);
      setActiveShortcut(shortcutId);
    }
  };

  const handleSend = () => {
    if (prompt) {
      setIsDrawerOpen(true);
    }
  };

  const toggleTool = (toolId: string) => {
    setSelectedTools(prev =>
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <>
      <div className="relative w-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 p-6 shadow-2xl backdrop-blur-sm">
        {/* Info Tooltip */}
        {showTooltip && (
          <div className="absolute -top-16 left-1/2 z-10 w-64 -translate-x-1/2 rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-center shadow-xl">
            <p className="text-xs text-zinc-400">
              Preview mode. Pick a shortcut below to simulate.
            </p>
          </div>
        )}

        <div className="space-y-5">
          {/* Controls Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Model Selector */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-zinc-400">Model:</span>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-[140px] border-zinc-700 bg-zinc-800/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {aiModels.map(model => (
                    <SelectItem key={model.value} value={model.value}>
                      {model.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tools Multi-select */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-zinc-400">Tools:</span>
              {tools.map(tool => (
                <Badge
                  key={tool.id}
                  variant={selectedTools.includes(tool.id) ? "default" : "outline"}
                  className="cursor-pointer select-none transition-all hover:scale-105"
                  onClick={() => toggleTool(tool.id)}
                >
                  {tool.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div className="relative">
            <Textarea
              value={prompt}
              readOnly
              onMouseEnter={() => !prompt && setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              placeholder="Ask about any asset, market condition, or trading setup..."
              className="min-h-[120px] resize-none border-zinc-700 bg-zinc-800/50 pr-12 text-zinc-100 placeholder:text-zinc-500 cursor-default"
            />
            <Button
              size="icon"
              disabled={!prompt}
              onClick={handleSend}
              className="absolute bottom-3 right-3 transition-all hover:scale-105 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Shortcuts */}
          <div className="border-t border-zinc-800 pt-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-zinc-500">Quick shortcuts:</p>
            <div className="flex flex-wrap gap-2">
              {shortcuts.map(shortcut => (
                <Button
                  key={shortcut.id}
                  variant={activeShortcut === shortcut.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleShortcutClick(shortcut.id)}
                  className="text-xs transition-all hover:scale-105"
                >
                  {shortcut.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI Analysis Drawer */}
      <AIAnalysisDrawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setPrompt("");
          setActiveShortcut(null);
        }}
        prompt={prompt}
      />
    </>
  );
};
