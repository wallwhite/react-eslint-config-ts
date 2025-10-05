"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Shield, Sparkle } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  badge?: string;
  isHighlighted?: boolean;
  outcomes: string[];
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Build foundations with guided AI insights and education.",
    monthly: 39,
    yearly: 399,
    outcomes: [
      "Daily AI briefs with annotated charts",
      "2 automated playbooks + risk guardrails",
      "Trade journaling with instant feedback",
      "Community workshops + lessons"
    ]
  },
  {
    id: "growth",
    name: "Growth",
    description: "Scale systems with automation, deeper data, and team collaboration.",
    monthly: 89,
    yearly: 899,
    badge: "Most Popular",
    isHighlighted: true,
    outcomes: [
      "Unlimited playbooks + sequencing",
      "Institutional data streams & Smart Money tracking",
      "Real-time risk recalibration",
      "Team workspaces with review workflows"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom strategy engineering, advanced support, and compliance tooling.",
    monthly: 229,
    yearly: 2290,
    badge: "For desks & funds",
    outcomes: [
      "Dedicated strategist + onboarding",
      "Custom models, webhooks, and API access",
      "Enterprise SSO, audit trails, SOC2",
      "Priority feature requests and workshops"
    ]
  }
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const formatPrice = (plan: Plan) => {
    if (billingCycle === "monthly") {
      return plan.monthly;
    }

    return Math.round(plan.yearly / 12);
  };

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(192,132,252,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24">
        <div className="flex flex-col gap-6 text-center">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-purple-200">
            Pricing
          </div>
          <div className="space-y-4">
            <h2 id="pricing-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
              Choose the co-pilot that matches your trading ambitions
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-300">
              All plans include real-time signal narratives, on-demand lessons, and crystal-clear risk tracking. Upgrade as your automation needs grow.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 self-center rounded-full border border-white/10 bg-white/5 p-1 text-sm font-semibold">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 transition ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              type="button"
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`rounded-full px-4 py-2 transition ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              type="button"
            >
              Yearly
              <span className="ml-2 text-xs text-emerald-300">save up to 15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(plan => (
            <article
              key={plan.id}
              className={`flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-purple-400/40 hover:bg-white/10 ${
                plan.isHighlighted ? "relative overflow-hidden border-emerald-500/40 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-transparent" : ""
              }`}
            >
              {plan.badge && (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  <Sparkle className="h-4 w-4" />
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2 text-white">
                <span className="text-4xl font-bold">${formatPrice(plan)}</span>
                <span className="text-sm text-gray-400">/ month</span>
              </div>
              <p className="text-xs text-emerald-300">
                {billingCycle === "monthly"
                  ? `Cancel anytime • Upgrade instantly`
                  : `Billed $${plan.yearly} once per year (save $${plan.monthly * 12 - plan.yearly})`}
              </p>

              <ul className="space-y-3 text-sm text-gray-200">
                {plan.outcomes.map(outcome => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.isHighlighted
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg hover:translate-y-[-1px] hover:shadow-emerald-500/40"
                    : "border border-white/10 text-white hover:border-emerald-400/50"
                }`}
              >
                {plan.isHighlighted ? "Start with Growth" : `Start ${plan.name}`}
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
              Included in every plan
            </div>
            <ul className="grid grid-cols-1 gap-3 text-sm text-gray-200 sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                AI signal transcripts + video briefs
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Real-time risk dashboard and journaling
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Weekly live coaching + archives
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                30-day satisfaction guarantee
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gray-900/60 p-6 text-left text-sm text-gray-300">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-yellow-300">
              <Shield className="h-4 w-4" />
              Risk disclosure
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Trading involves risk. CrystalAIze is an educational and automation platform—not investment advice. Past performance is not indicative of future results. Always trade within your plan and financial limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};