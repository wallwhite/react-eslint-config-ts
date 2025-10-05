"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does CrystalAIze differ from a traditional signal service?",
    answer: "Traditional services push generic alerts. CrystalAIze documents the entire setup—context, probability, risk, and next steps. You do not just act; you understand why the signal matters, so you keep improving while trading."
  },
  {
    question: "Can I automate trades directly from the platform?",
    answer: "Yes. Playbooks can route orders to connected brokers or exchanges, update your journals, notify collaborators, and enforce risk guardrails automatically. You control the automation scope and approvals."
  },
  {
    question: "Do you support teams and multiple seats?",
    answer: "Growth and Enterprise plans support shared workspaces, permissions, and collaborative reviews. Teams can comment on signals, assign tasks, and track performance across desks or students."
  },
  {
    question: "Is there a trial or refund policy?",
    answer: "Every plan comes with a 7-day free trial. Annual subscriptions include a 30-day money-back guarantee—no questions asked. Upgrade or cancel anytime directly in your dashboard."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 px-6 py-24">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
            FAQ
          </div>
          <h2 id="faq-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            Answers before you hop in
          </h2>
          <p className="text-sm text-gray-300">
            Still curious about something? Reach out to the team via chat or email and we will walk you through your specific workflow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-white"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-item-${index}`}
                  type="button"
                >
                  {faq.question}
                  {isOpen ? <Minus className="h-4 w-4 text-emerald-300" /> : <Plus className="h-4 w-4 text-gray-400" />}
                </button>
                {isOpen && (
                  <div id={`faq-item-${index}`} className="border-t border-white/5 px-6 pb-5 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

