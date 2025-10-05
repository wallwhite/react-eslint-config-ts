export type IndicatorCategory = "momentum" | "trend" | "volatility" | "volume" | "sentiment";
export type IndicatorTier = "free" | "premium" | "ultimate";

export interface Indicator {
  id: string;
  name: string;
  description: string;
  category: IndicatorCategory;
  tier: IndicatorTier;
  imageUrl: string;
  author?: string;
  rating?: number;
}

export const indicators: Indicator[] = [
  {
    id: "rsi-divergence",
    name: "RSI Divergence Scanner",
    description: "Automatically detects bullish and bearish divergences across multiple timeframes",
    category: "momentum",
    tier: "free",
    imageUrl: "/indicators/rsi-divergence.png",
    author: "TradingView",
    rating: 4.8
  },
  {
    id: "volume-profile",
    name: "Volume Profile Pro",
    description: "Advanced volume analysis with point of control and value area calculations",
    category: "volume",
    tier: "premium",
    imageUrl: "/indicators/volume-profile.png",
    author: "LuxAlgo",
    rating: 4.9
  },
  {
    id: "smart-money",
    name: "Smart Money Concepts",
    description: "Institutional order blocks, liquidity zones, and market structure analysis",
    category: "trend",
    tier: "premium",
    imageUrl: "/indicators/smart-money.png",
    author: "LuxAlgo",
    rating: 4.7
  },
  {
    id: "ai-forecast",
    name: "AI Price Forecasting",
    description: "Machine learning-based price prediction with confidence intervals",
    category: "trend",
    tier: "ultimate",
    imageUrl: "/indicators/ai-forecast.png",
    author: "Crystalyze AI",
    rating: 4.9
  },
  {
    id: "sentiment-heatmap",
    name: "Sentiment Heatmap",
    description: "Real-time social sentiment analysis aggregated from Twitter, Reddit, and news",
    category: "sentiment",
    tier: "ultimate",
    imageUrl: "/indicators/sentiment.png",
    author: "Crystalyze AI",
    rating: 4.8
  },
  {
    id: "bollinger-squeeze",
    name: "Bollinger Squeeze",
    description: "Identifies low volatility periods that precede explosive price moves",
    category: "volatility",
    tier: "free",
    imageUrl: "/indicators/bollinger.png",
    author: "TradingView",
    rating: 4.6
  },
  {
    id: "wyckoff-analysis",
    name: "Wyckoff Distribution",
    description: "Automated Wyckoff accumulation and distribution phase detection",
    category: "volume",
    tier: "premium",
    imageUrl: "/indicators/wyckoff.png",
    author: "LuxAlgo",
    rating: 4.8
  },
  {
    id: "elliott-wave",
    name: "Elliott Wave Counter",
    description: "AI-powered Elliott Wave pattern recognition and count automation",
    category: "trend",
    tier: "ultimate",
    imageUrl: "/indicators/elliott.png",
    author: "Crystalyze AI",
    rating: 4.7
  },
  {
    id: "macd-histogram",
    name: "MACD Histogram Pro",
    description: "Enhanced MACD with divergence alerts and momentum strength scoring",
    category: "momentum",
    tier: "free",
    imageUrl: "/indicators/macd.png",
    author: "TradingView",
    rating: 4.5
  },
  {
    id: "onchain-metrics",
    name: "On-Chain Metrics",
    description: "Bitcoin and Ethereum on-chain data: MVRV, SOPR, exchange flows, whale alerts",
    category: "sentiment",
    tier: "ultimate",
    imageUrl: "/indicators/onchain.png",
    author: "Crystalyze AI",
    rating: 4.9
  },
  {
    id: "volatility-bands",
    name: "ATR Volatility Bands",
    description: "Dynamic support/resistance bands based on Average True Range",
    category: "volatility",
    tier: "premium",
    imageUrl: "/indicators/atr.png",
    author: "LuxAlgo",
    rating: 4.6
  },
  {
    id: "liquidity-zones",
    name: "Liquidity Heatmap",
    description: "Visualizes areas of high liquidity concentration and potential price magnets",
    category: "volume",
    tier: "ultimate",
    imageUrl: "/indicators/liquidity.png",
    author: "Crystalyze AI",
    rating: 4.8
  }
];

export const categories: { value: IndicatorCategory; label: string }[] = [
  { value: "momentum", label: "Momentum" },
  { value: "trend", label: "Trend" },
  { value: "volatility", label: "Volatility" },
  { value: "volume", label: "Volume" },
  { value: "sentiment", label: "Sentiment" }
];
