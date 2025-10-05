export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const features: Feature[] = [
  {
    id: "multi-model",
    title: "Multi-Model AI Routing",
    description: "Automatically routes queries to the best AI model (Claude, GPT-4, Gemini) for each analysis type",
  },
  {
    id: "cross-asset",
    title: "Cross-Asset Analysis",
    description: "Seamlessly analyze correlations and opportunities across crypto and equities",
  },
  {
    id: "explainability",
    title: "Signal Explainability",
    description: "Every signal comes with clear reasoning, not just arrows on a chart",
  },
  {
    id: "sentiment",
    title: "Real-Time Sentiment",
    description: "AI-powered sentiment analysis from news, social, and on-chain sources",
  },
  {
    id: "backtest",
    title: "Backtest Integration",
    description: "Validate signals with historical performance before risking capital",
  },
  {
    id: "tradingview",
    title: "TradingView Native",
    description: "All indicators install directly into TradingView with one click",
  },
];

export const benefits: string[] = [
  "Higher-quality entries with objective, AI-scored signals",
  "Faster research cycles - minutes instead of hours",
  "Reduced emotional bias with data-driven confirmations",
];
