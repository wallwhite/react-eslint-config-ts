export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Upgraded our win-rate on BTC swing trades. The signal explanations trimmed hours off research.",
    author: "Daria K.",
    role: "Quantitative PM",
  },
  {
    id: "2",
    quote: "Finally, indicators that actually explain *why*. Game-changer for our equity strategies.",
    author: "Marcus T.",
    role: "Hedge Fund Analyst",
  },
  {
    id: "3",
    quote: "The AI sentiment analysis caught the Luna collapse early. Saved us six figures.",
    author: "Priya S.",
    role: "Crypto Fund Manager",
  },
  {
    id: "4",
    quote: "As a solo trader, this feels like having a research team. The cross-asset insights are insane.",
    author: "Joel R.",
    role: "Independent Trader",
  },
];
