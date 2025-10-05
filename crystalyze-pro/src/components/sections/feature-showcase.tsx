import { Activity, Brain, Gauge, LineChart } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Intelligence that explains itself",
    description: "CrystalAIze narrates why signals trigger so you learn with every trade. Access annotated charts, probability breakdowns, and the thinking behind each insight.",
    icon: Brain,
    highlight: "Explainable AI workflows"
  },
  {
    id: 2,
    title: "Playbooks that automate execution",
    description: "Turn strategies into reusable checklists. Trigger alerts, update risk, and notify teammates automatically when conditions are met.",
    icon: Activity,
    highlight: "Reusable trade recipes"
  },
  {
    id: 3,
    title: "Risk that adapts in real-time",
    description: "Portfolio guardrails recalc position sizing based on volatility, correlations, and capital at risk—without needing spreadsheets.",
    icon: Gauge,
    highlight: "Adaptive capital controls"
  },
  {
    id: 4,
    title: "Analytics built for teams",
    description: "Share dashboards, leave comments on signals, and coach junior traders inside one workspace. Keep everyone reacting to the same dataset.",
    icon: LineChart,
    highlight: "Collaborative war rooms"
  }
];

export const FeatureShowcase = () => {
  return (
    <section
      aria-labelledby="feature-heading"
      className="relative bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.16),_transparent_65%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
            Platform
          </div>
          <h2 id="feature-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            Everything you need to spot, validate, and act on high-conviction trades
          </h2>
          <p className="text-base text-gray-300">
            CrystalAIze pairs institutional-grade data with guided workflows so you can execute confidently—whether you trade solo or lead a team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map(feature => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.id}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/40 hover:bg-white/8"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                    <Icon className="h-4 w-4" />
                    {feature.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 via-emerald-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

