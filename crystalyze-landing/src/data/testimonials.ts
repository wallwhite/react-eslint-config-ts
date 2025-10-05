export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  imageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Crypto Trader",
    company: "Independent",
    quote: "Crystalyze AI has transformed how I analyze markets. The AI-powered insights save me hours of research every day and the accuracy is impressive.",
    rating: 5,
    imageUrl: "/avatars/sarah.jpg"
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    role: "Portfolio Manager",
    company: "Vertex Capital",
    quote: "The cross-asset analysis capabilities are unmatched. Being able to correlate crypto and equity movements in real-time has given us a significant edge.",
    rating: 5,
    imageUrl: "/avatars/marcus.jpg"
  },
  {
    id: "aisha-patel",
    name: "Aisha Patel",
    role: "Quantitative Analyst",
    company: "AlgoTrade Pro",
    quote: "The backtesting feature with historical sentiment data is a game-changer. We've improved our strategy performance by 34% since integrating Crystalyze.",
    rating: 5,
    imageUrl: "/avatars/aisha.jpg"
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Day Trader",
    company: "Independent",
    quote: "I've tried dozens of analysis tools. Crystalyze's AI routing feature that picks the right model for each query is brilliant. Fast, accurate, and cost-effective.",
    rating: 5,
    imageUrl: "/avatars/david.jpg"
  },
  {
    id: "emily-watson",
    name: "Emily Watson",
    role: "Trading Educator",
    company: "MarketMastery Academy",
    quote: "My students love the explainability feature. Instead of black-box predictions, they understand WHY the AI makes certain recommendations. Perfect for learning.",
    rating: 5,
    imageUrl: "/avatars/emily.jpg"
  }
];
