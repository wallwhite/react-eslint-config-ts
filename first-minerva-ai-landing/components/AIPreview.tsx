"use client";

import * as React from "react";
import { Send, Info } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIPreviewProps {
  onSendPrompt: (prompt: string, model: string, tool: string) => void;
}

const previewPrompts = [
  "Analyze Bitcoin",
  "Market Sentiment Analysis",
  "Altcoin Opportunities",
  "Risk Assessment",
  "Portfolio Optimization",
  "Technical Breakout Signals",
];

const AIPreview = ({ onSendPrompt }: AIPreviewProps) => {
  const [prompt, setPrompt] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("gpt-4");
  const [selectedTool, setSelectedTool] = React.useState("technical-analysis");
  const [showInfo, setShowInfo] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const handleTabClick = (tabPrompt: string) => {
    setPrompt(tabPrompt);
    setActiveTab(tabPrompt);
  };

  const handleSend = () => {
    if (prompt.trim()) {
      onSendPrompt(prompt, selectedModel, selectedTool);
    }
  };

  const isButtonEnabled = prompt.trim().length > 0;

  return (
    <div className="relative">
      <div className="bg-white border border-zinc-200 rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-zinc-50 to-zinc-100 border-b border-zinc-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-zinc-900">AI Analysis Console</h3>
            <div
              className="relative"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <Info className="h-4 w-4 text-zinc-500 cursor-help" />
              {showInfo && (
                <div className="absolute right-0 top-6 w-64 bg-zinc-900 text-white text-xs p-3 rounded-lg shadow-lg z-10">
                  Preview Mode - Select a prompt below to try the AI analysis interface
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-700 mb-1 block">
                AI Model
              </label>
              <Select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-white"
              >
                <option value="gpt-4">GPT-4 Turbo</option>
                <option value="claude-3">Claude 3 Opus</option>
                <option value="gemini-pro">Gemini Pro</option>
                <option value="llama-3">Llama 3 70B</option>
              </Select>
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-700 mb-1 block">
                Analysis Tool
              </label>
              <Select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="bg-white"
              >
                <option value="technical-analysis">Technical Analysis</option>
                <option value="sentiment-analysis">Sentiment Analysis</option>
                <option value="pattern-recognition">Pattern Recognition</option>
                <option value="risk-assessment">Risk Assessment</option>
              </Select>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="p-4">
          <div className="mb-4 min-h-[120px] bg-zinc-50 rounded-lg p-4 text-sm text-zinc-600">
            {prompt ? (
              <div className="space-y-2">
                <div className="font-medium text-zinc-900">Your Query:</div>
                <div className="text-zinc-700">{prompt}</div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-400">
                Select a prompt below or type your own question...
              </div>
            )}
          </div>

          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask about market trends, trading signals, portfolio analysis..."
              className="pr-12 resize-none"
              rows={3}
            />
            <Button
              size="icon"
              onClick={handleSend}
              disabled={!isButtonEnabled}
              className="absolute right-2 bottom-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Preview Tabs */}
        <div className="border-t border-zinc-200 bg-zinc-50 p-4">
          <div className="text-xs font-medium text-zinc-700 mb-2">Quick Prompts:</div>
          <div className="flex flex-wrap gap-2">
            {previewPrompts.map((previewPrompt) => (
              <button
                key={previewPrompt}
                onClick={() => handleTabClick(previewPrompt)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                  activeTab === previewPrompt
                    ? "bg-zinc-900 text-white"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                )}
              >
                {previewPrompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPreview;
