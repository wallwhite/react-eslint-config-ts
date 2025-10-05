export interface Shortcut {
  id: string;
  label: string;
  prompt: string;
}

export const shortcuts: Shortcut[] = [
  {
    id: 'btc-analyze',
    label: 'Analyze Bitcoin',
    prompt: 'Provide a comprehensive analysis of Bitcoin including current price action, on-chain metrics, sentiment indicators, and potential support/resistance levels. Include your confidence score.'
  },
  {
    id: 'market-sentiment',
    label: 'Market sentiment now',
    prompt: 'What is the current market sentiment across crypto and equities? Highlight any divergences between price action and sentiment indicators.'
  },
  {
    id: 'aapl-edge',
    label: 'Top AI edge on AAPL',
    prompt: 'What is the highest-conviction trading edge for AAPL right now? Consider technical levels, upcoming catalysts, and institutional flow.'
  },
  {
    id: 'high-prob-setups',
    label: 'Find high-probability setups',
    prompt: 'Scan for high-probability trade setups across major crypto and equity markets. Prioritize setups with strong risk/reward and clear invalidation levels.'
  },
  {
    id: 'btc-news-risk',
    label: 'News risk scan (BTC)',
    prompt: 'Scan recent news and social sentiment for Bitcoin. Flag any high-impact events or developing narratives that could move price in the next 24-48 hours.'
  },
  {
    id: 'eth-qqq-compare',
    label: 'Compare ETH vs. QQQ momentum',
    prompt: 'Compare momentum and trend strength between Ethereum and Nasdaq-100 (QQQ). Are they correlated right now? Which has better near-term setup?'
  }
];
