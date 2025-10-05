"use client";

import { useState } from "react";
import { ArrowRight, Bot, CheckCircle2, Sparkles, TrendingUp, Zap } from "lucide-react";
import { AIChatDrawerEnhanced } from "../drawer/ai-chat-drawer-enhanced";

const templatePrompts = [
  { id: 1, text: "Analyze Bitcoin price action for next 24 hours", icon: "📈" },
  { id: 2, text: "Compare Ethereum vs Solana investment potential", icon: "⚖️" },
  { id: 3, text: "Find undervalued altcoins with 10x potential", icon: "💎" },
  { id: 4, text: "Technical analysis for AAPL stock trend", icon: "📊" },
  { id: 5, text: "Risk assessment for my crypto portfolio", icon: "🛡️" },
  { id: 6, text: "Identify momentum breakout patterns", icon: "🚀" }
];

const stats = [
  { value: "47,283+", label: "Traders backed by CrystalAIze" },
  { value: "89.3%", label: "Signal follow-through rate" },
  { value: "24/7", label: "AI market coverage" }
];

export const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTemplateClick = (templateText: string) => {
    setPrompt(templateText);
  };

  const handleSend = () => {
    if (!prompt.trim()) {
      return;
    }

    setSelectedPrompt(prompt);
    setIsDrawerOpen(true);
  };

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-fade" />

      <div className="layout-shell section-spacing relative flex flex-col gap-16 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-8">
          <span className="badge-pill">
            <Sparkles className="h-3.5 w-3.5" />
            CrystalAIze Assistant
          </span>

          <div className="space-y-6">
            <h1 id="hero-title" className="heading-xl">
              Your AI analyst that explains every trade before you click
            </h1>
            <p className="max-w-xl text-subtle">
              CrystalAIze watches markets 24/7, narrates high-conviction signals in plain English, and hands you a clear checklist so you can execute with conviction.
            </p>
            <ul className="space-y-3 text-sm text-subtle">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4aa5ff]" />
                <span>Understand every signal through contextual explanations—no guessing required.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4aa5ff]" />
                <span>Automate playbooks to react instantly while CrystalAIze manages risk guardrails.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#4aa5ff]" />
                <span>Translate every move into a lesson so your edge compounds alongside returns.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
            <a href="#pricing" className="btn-primary">
              Start free trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#workflow" className="btn-ghost">
              Watch the workflow
            </a>
          </div>

          <div className="stat-row border-t border-white/12 pt-6">
            {stats.map(stat => (
              <div key={stat.label} className="stat-chip">
                <span>{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#1f8cff]/25 via-[#05f0ff]/15 to-transparent blur-3xl" />
            <div className="surface-card relative overflow-hidden p-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-[rgba(5,16,33,0.82)] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f5bff] via-[#1f8cff] to-[#05f0ff]">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#7fc0ff]">CrystalAIze Assistant</p>
                    <p className="text-sm font-semibold text-white">Ask about any market</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#05f0ff]/40 bg-[#05f0ff]/10 px-3 py-1 text-xs font-semibold text-[#05f0ff]">
                  <Zap className="h-4 w-4" />
                  Live feed
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="hero-chat-input" className="sr-only">
                    Ask CrystalAIze a question
                  </label>
                  <textarea
                    id="hero-chat-input"
                    value={prompt}
                    onChange={event => setPrompt(event.target.value)}
                    placeholder="Ask for price action outlook, risk review, or automated playbook..."
                    className="ghost-input h-32 w-full"
                    onKeyDown={event => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <button onClick={handleSend} type="button" className="btn-primary mt-3 w-full justify-center">
                    Generate insight
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-2xl border border-white/12 bg-[rgba(6,16,33,0.78)] p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7fc0ff]">
                    Quick prompts
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {templatePrompts.map(template => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateClick(template.text)}
                        type="button"
                        className="chip"
                      >
                        <span>{template.icon}</span>
                        <span>{template.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/12 bg-[rgba(6,16,33,0.78)] p-4 text-sm text-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-[0.2em] text-[#7fc0ff]">Newest analysis</span>
                    <span className="text-[#4aa5ff]">Updated a few seconds ago</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#9bbef8]">
                      <p>BTC / 4h momentum</p>
                      <p className="text-[#4aa5ff]">Confidence 91%</p>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-[rgba(3,8,18,0.85)]">
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-[#0f5bff] via-[#1f8cff] to-[#05f0ff]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AIChatDrawerEnhanced
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialPrompt={selectedPrompt}
      />
    </section>
  );
};