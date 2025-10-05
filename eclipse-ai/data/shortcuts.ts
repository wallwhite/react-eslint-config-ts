export interface Shortcut {
  id: string;
  label: string;
  prompt: string;
}

export const shortcuts: Shortcut[] = [
  {
    id: "btc-analysis",
    label: "Analyze Bitcoin",
    prompt: "Give me a comprehensive Bitcoin analysis including on-chain metrics, sentiment, and technical setup",
  },
  {
    id: "market-sentiment",
    label: "Market sentiment now",
    prompt: "What's the current market sentiment across crypto and equities?",
  },
  {
    id: "aapl-edge",
    label: "Top AI edge on AAPL",
    prompt: "What unique edge does AI give me on Apple stock right now?",
  },
  {
    id: "high-prob",
    label: "Find high-probability setups",
    prompt: "Scan for high-probability trading setups across BTC, ETH, and top 10 stocks",
  },
  {
    id: "btc-risk",
    label: "News risk scan (BTC)",
    prompt: "Analyze recent news for Bitcoin risk factors",
  },
  {
    id: "eth-qqq",
    label: "Compare ETH vs QQQ momentum",
    prompt: "Compare momentum and trend strength between Ethereum and QQQ",
  },
];
