"use client";

import { useState } from "react";
import { ArrowRight, Bot, Zap } from "lucide-react";
import { AIChatDrawerEnhanced } from "@/components/chat/ai-chat-drawer-enhanced";
import { siteConfig } from "@/lib/config";

const templatePrompts = [
  { id: 1, text: "Analyze Bitcoin price action for next 24 hours", icon: "📈" },
  { id: 2, text: "Compare Ethereum vs Solana investment potential", icon: "⚖️" },
  { id: 3, text: "Find undervalued altcoins with 10x potential", icon: "💎" },
  { id: 4, text: "Technical analysis for AAPL stock trend", icon: "📊" },
  { id: 5, text: "Risk assessment for my crypto portfolio", icon: "🛡️" },
  { id: 6, text: "Identify momentum breakout patterns", icon: "🚀" }
];

export function HeroSection() {
  const { hero } = siteConfig;
  const [prompt, setPrompt] = useState("");
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleTemplateClick = (templateText: string) => {
    setPrompt(templateText);
  };

  const handleSend = () => {
    if (!prompt.trim()) return;
    setSelectedPrompt(prompt);
    setIsDrawerOpen(true);
  };

  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[620px] md:h-[880px] w-full [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)] rounded-b-xl"></div>
        </div>
        <div className="relative z-10 flex flex-col max-w-4xl w-full gap-12 pt-32 pb-16">
          <div className="flex flex-col items-center text-center gap-6">
            <p className="border border-border bg-accent rounded-full text-sm h-8 px-3 flex items-center gap-2">
              {hero.badgeIcon}
              {hero.badge}
            </p>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-balance text-primary">
                {hero.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground font-medium text-balance leading-relaxed tracking-tight">
                {hero.description}
              </p>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 justify-center">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Understand every signal through contextual explanations—no guessing required.
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Automate playbooks to react instantly while CrystalAIze manages risk guardrails.
                </li>
                <li className="flex items-start gap-3 justify-center">
                  <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                  Translate every move into a lesson so your edge compounds alongside returns.
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                className="bg-secondary h-9 flex items-center justify-center text-sm font-normal tracking-wide rounded-full text-secondary-foreground w-fit px-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95"
                onClick={handleSend}
              >
                Start free trial
              </button>
              <a
                className="h-10 flex items-center justify-center px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
                href={hero.cta.secondary.href}
              >
                {hero.cta.secondary.text}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-border bg-background/80 p-6 shadow-[0px_34px_45px_-25px_rgba(15,23,42,0.55)] backdrop-blur">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">CrystalAIze Assistant</p>
                    <p className="text-sm font-semibold text-primary">Ask about any market</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-secondary">
                  <Zap className="h-3.5 w-3.5" />
                  Live feed
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <textarea
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    placeholder="Ask for price action outlook, risk review, or automated playbook..."
                    className="h-32 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-primary placeholder:text-muted-foreground focus:border-secondary focus:outline-none"
                    onKeyDown={(event) => {
                      if (event.key === "Enter" && !event.shiftKey) {
                        event.preventDefault();
                        handleSend();
                      }
                    }}
                  />
                  <button
                    onClick={handleSend}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] transition active:scale-95"
                  >
                    Generate insight
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground text-center">
                    Quick prompts
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {templatePrompts.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => handleTemplateClick(template.text)}
                        className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:text-primary bg-background/80"
                      >
                        <span>{template.icon}</span>
                        <span>{template.text}</span>
                      </button>
                    ))}
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
}
