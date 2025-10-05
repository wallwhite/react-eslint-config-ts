import { Quote, Star, Verified } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sasha Patel",
    role: "Head of Trading • Horizon Alpha",
    quote: "CrystalAIze has become the playbook for our desk. Junior traders understand the why behind each move and senior traders finally get bandwidth back.",
    highlight: "Playbooks reduced research time 48%"
  },
  {
    id: 2,
    name: "Marcos Li",
    role: "Founder • Momentum Syndicate",
    quote: "Signals are great, but the real value is how the AI narrates each setup. You improve while compounding returns—that compounding of skill is unfair advantage.",
    highlight: "Monthly pnl stabilized at 6.8%"
  },
  {
    id: 3,
    name: "Amelia Becker",
    role: "Full-time trader & educator",
    quote: "My community learns faster because CrystalAIze translates complex flows into teachable language. It feels like co-hosting every live stream with a market coach.",
    highlight: "Course completion jumped 2.1×"
  }
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative bg-gray-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.12),_transparent_65%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            Proof
          </div>
          <h2 id="testimonials-heading" className="text-3xl font-bold leading-tight sm:text-4xl">
            Traders, teams, and educators rely on CrystalAIze to level up execution and learning
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(testimonial => (
            <article
              key={testimonial.id}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-400/40 hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-blue-200">
                <Verified className="h-4 w-4" />
                Verified Customer
              </div>
              <p className="mt-6 text-sm text-gray-200">{testimonial.quote}</p>
              <div className="mt-auto space-y-3 pt-8">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
                  <Star className="h-4 w-4 text-yellow-300" />
                  {testimonial.highlight}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <Quote className="mt-1 h-10 w-10 text-blue-200" />
              <p className="max-w-2xl text-sm text-gray-100">
                "Every day I hop in to see what the assistant flagged overnight, and my morning plan is ready—with video clarity and risk notes. This is what having a partner in the market feels like."
              </p>
            </div>
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-white">Erik Carter</p>
              <p className="text-xs uppercase tracking-wide text-gray-400">Managing Partner • Eleven Futures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

