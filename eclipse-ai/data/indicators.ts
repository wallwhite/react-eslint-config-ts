export interface Indicator {
  id: string;
  title: string;
  category: "Crypto" | "Equities";
  description: string;
  image?: string;
}

export const indicators: Indicator[] = [
  {
    id: "momentum-shift",
    title: "Momentum Shift Detector",
    category: "Crypto",
    description: "Catches early trend reversals with multi-timeframe confirmation",
  },
  {
    id: "smart-money",
    title: "Smart Money Tracker",
    category: "Equities",
    description: "Identifies institutional order flow and accumulation zones",
  },
  {
    id: "volatility-breakout",
    title: "Volatility Breakout Pro",
    category: "Crypto",
    description: "High-probability breakout signals with volume confirmation",
  },
  {
    id: "sr-ai",
    title: "Support/Resistance AI",
    category: "Equities",
    description: "AI-enhanced S/R levels that actually matter",
  },
  {
    id: "divergence-hunter",
    title: "Divergence Hunter",
    category: "Crypto",
    description: "Spots hidden bearish and bullish divergences automatically",
  },
  {
    id: "liquidity-heatmap",
    title: "Liquidity Heatmap",
    category: "Crypto",
    description: "Visualizes where stop-losses cluster for better entries",
  },
];
