import { ArrowRight, BarChart3, Clock, GraduationCap, Zap } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Connect your markets",
    description: "Plug into exchanges, brokers, or paper accounts in minutes.",
    detail: "CrystalAIze ingests real-time order flow, on-chain data, and macro feeds tailored to your watchlist.",
    icon: Zap
  },
  {
    id: 2,
    title: "Let AI scout opportunities",
    description: "Our engine runs 24/7 playbook scans across strategies you select.",
    detail: "When a setup forms, you get a narrated brief plus video recap explaining the why—not just the what.",
    icon: BarChart3
  },
  {
    id: 3,
    title: "Automate actions and alerts",
    description: "Trigger entries, route notifications, or update journals automatically.",
    detail: "Playbooks manage risk in real time—adjust sizing, trail stops, and escalate to teammates if conditions shift.",
    icon: Clock
  },
  {
    id: 4,
    title: "Learn as you execute",
    description: "Every signal logs lessons, metrics, and coach-grade feedback.",
    detail: "Review sessions translate trades into repeatable frameworks so you keep improving without guesswork.",
    icon: GraduationCap
  }
];

export const Workflow = () => {
  return (
    <section id="workflow" aria-labelledby="workflow-heading" className="relative bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
              How it works
            </div>
            <h2 id="workflow-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
              Turn market noise into a guided trading workflow—without replacing your judgment
            </h2>
          </div>
          <p className="max-w-xl text-sm text-gray-400">
            CrystalAIze is more than signals. It is a co-pilot that prepares plays, executes boring tasks, and documents the story so you stay focused on decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map(step => {
            const Icon = step.icon;
            return (
              <article
                key={step.id}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-emerald-400/40 hover:bg-white/8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Step {step.id}</span>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-300">{step.description}</p>
                <p className="text-sm text-gray-400">{step.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-cyan-500/20 to-transparent p-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Build a repeatable edge with automation that teaches</h3>
            <p className="max-w-2xl text-sm text-gray-200">
              Deploy playbooks once and CrystalAIze keeps running them—all while documenting every decision and outcome so you can iterate fast.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            tabIndex={0}
          >
            Explore automations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

