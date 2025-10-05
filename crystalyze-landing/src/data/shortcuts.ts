export interface Shortcut {
  id: string;
  label: string;
  prompt: string;
}

export const shortcuts: Shortcut[] = [
  {
    id: "btc-analysis",
    label: "Analyze BTC",
    prompt: "Analyze Bitcoin's current market structure and identify key support/resistance levels"
  },
  {
    id: "eth-sentiment",
    label: "ETH Sentiment",
    prompt: "What's the current sentiment for Ethereum based on social metrics and on-chain data?"
  },
  {
    id: "spy-technicals",
    label: "SPY Technicals",
    prompt: "Provide a technical analysis of SPY with moving averages and momentum indicators"
  },
  {
    id: "portfolio-risk",
    label: "Risk Check",
    prompt: "Assess portfolio risk exposure across crypto and equity positions"
  },
  {
    id: "indicator-scan",
    label: "Scan Indicators",
    prompt: "Run a multi-timeframe scan across top TradingView indicators for BTC and ETH"
  },
  {
    id: "market-overview",
    label: "Market Overview",
    prompt: "Give me a comprehensive overview of crypto and equity markets with key trends"
  }
];
