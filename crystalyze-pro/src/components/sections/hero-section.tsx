"use client";

import { useState } from "react";
import { ArrowRight, Bot, Zap } from "lucide-react";
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
    <section id="hero" className="relative flex flex-col items-center w-full px-6">
      <div className="absolute inset-0 -z-10 h-[600px] md:h-[820px] w-full rounded-b-[48px] bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 pt-32 md:pt-36 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex-1">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-accent-foreground">
            CrystalAIze Assistant
          </div>

          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary text-balance">
              Your AI analyst that explains every trade before you click
            </h1>
            <p className="text-base md:text-lg font-medium leading-relaxed tracking-tight text-muted-foreground">
              CrystalAIze watches markets 24/7, narrates high-conviction signals in plain English, and hands you a clear checklist so you can execute with conviction.
            </p>
            <ul className="flex flex-col gap-3 text-left text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-secondary" />
                Understand every signal through contextual explanations—no guessing required.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-secondary" />
                Automate playbooks to react instantly while CrystalAIze manages risk guardrails.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-secondary" />
                Translate every move into a lesson so your edge compounds alongside returns.
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              className="bg-secondary flex h-9 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-medium text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] transition active:scale-95"
              onClick={() => handleTemplateClick(templatePrompts[0].text)}
            >
              Start free trial
            </button>
            <a
              href="#workflow"
              className="h-10 rounded-full border border-border px-5 text-sm font-medium text-primary transition-all active:scale-95 hover:bg-muted"
            >
              Watch the workflow
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-2xl bg-popover px-6 py-4 text-popover-foreground shadow-sm">
                <div className="text-lg font-semibold text-primary-foreground sm:text-xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="mx-auto w-full max-w-md rounded-[32px] border border-border bg-popover p-6 shadow-lg backdrop-blur">
            <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">CrystalAIze Assistant</p>
                  <p className="text-sm font-semibold text-primary-foreground">Ask about any market</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary">
                <Zap className="h-3.5 w-3.5" />
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
                  className="h-32 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-primary-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none"
                  onKeyDown={event => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <button
                  onClick={handleSend}
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] transition active:scale-95"
                >
                  Generate insight
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Quick prompts
                </div>
                <div className="flex flex-wrap gap-2">
                  {templatePrompts.map(template => (
                    <button
                      key={template.id}
                      onClick={() => handleTemplateClick(template.text)}
                      type="button"
                      className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:text-primary"
                    >
                      <span>{template.icon}</span>
                      <span>{template.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-[0.2em]">Newest analysis</span>
                  <span className="text-secondary">Updated a few seconds ago</span>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <p>BTC / 4h momentum</p>
                    <p className="text-secondary">Confidence 91%</p>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted">
                    <div className="h-full w-[90%] rounded-full bg-secondary" />
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
