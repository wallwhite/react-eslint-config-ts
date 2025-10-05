export const FinalCTA = () => {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.2),_rgba(129,140,248,0.15),_transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center text-white">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
            Ready when you are
          </div>
          <h2 id="cta-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            Trade with clarity—and keep the lessons, even when the market flips
          </h2>
          <p className="text-sm text-gray-200">
            Start your 7-day trial to explore the assistant, automate your playbooks, and join weekly coaching sessions. No credit card required.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:translate-y-[-2px] hover:shadow-emerald-500/40"
            >
              Start free trial
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Watch product demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 text-center text-xs text-gray-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              No credit card required
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Cancel anytime • 30-day guarantee
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              Live human support & onboarding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

