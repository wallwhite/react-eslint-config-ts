export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Upgraded our win-rate on BTC swing trades. The signal explanations trimmed hours off research.",
    author: "Daria K.",
    role: "Quant PM",
    rating: 5
  },
  {
    id: 2,
    quote: "Multi-model AI routing is a game-changer. We get faster insights without vendor lock-in to a single LLM.",
    author: "Marcus T.",
    role: "Crypto Fund Manager",
    rating: 5
  },
  {
    id: 3,
    quote: "The indicators integrate seamlessly with our TradingView setups. Premium tier paid for itself in a week.",
    author: "Sarah L.",
    role: "Day Trader",
    rating: 5
  },
  {
    id: 4,
    quote: "Finally, an AI tool that shows its work. Signal explainability builds trust in high-stakes trades.",
    author: "James R.",
    role: "Portfolio Manager",
    rating: 5
  },
  {
    id: 5,
    quote: "Cross-asset analysis helped us spot equity-crypto correlation plays we'd have missed manually.",
    author: "Nina P.",
    role: "Multi-Strategy Analyst",
    rating: 5
  }
];
