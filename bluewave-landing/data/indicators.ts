export interface Indicator {
  id: string;
  name: string;
  category: string;
  description: string;
  tier: 'free' | 'premium' | 'ultimate';
}

export const indicators: Indicator[] = [
  {
    id: 'momentum-pro',
    name: 'Momentum Pro',
    category: 'Trend',
    description: 'Multi-timeframe momentum with divergence detection and automatic support/resistance levels',
    tier: 'free'
  },
  {
    id: 'volume-flow-analyzer',
    name: 'Volume Flow Analyzer',
    category: 'Volume',
    description: 'Institutional volume tracking with order flow imbalance detection',
    tier: 'free'
  },
  {
    id: 'smart-money-tracker',
    name: 'Smart Money Tracker',
    category: 'Sentiment',
    description: 'Track whale movements and institutional accumulation patterns across crypto and equities',
    tier: 'free'
  },
  {
    id: 'ai-volatility-bands',
    name: 'AI Volatility Bands',
    category: 'Volatility',
    description: 'Machine-learning-driven adaptive bands that adjust to market regime changes',
    tier: 'premium'
  },
  {
    id: 'delta-divergence',
    name: 'Delta Divergence',
    category: 'Momentum',
    description: 'Advanced divergence scanner with predictive signals for reversals',
    tier: 'premium'
  },
  {
    id: 'liquidity-heatmap',
    name: 'Liquidity Heatmap',
    category: 'Microstructure',
    description: 'Visualize liquidity zones and potential squeeze levels in real-time',
    tier: 'premium'
  },
  {
    id: 'orderblock-detector',
    name: 'OrderBlock Detector',
    category: 'Price Action',
    description: 'Institutional order block identification with mitigation zone tracking',
    tier: 'ultimate'
  },
  {
    id: 'fair-value-gaps',
    name: 'Fair Value Gaps',
    category: 'Price Action',
    description: 'Automatically identify and track FVGs with fill probability scoring',
    tier: 'ultimate'
  },
  {
    id: 'correlation-matrix',
    name: 'Correlation Matrix',
    category: 'Cross-Asset',
    description: 'Real-time correlation tracking across crypto, equities, and macro indicators',
    tier: 'ultimate'
  },
  {
    id: 'session-breakout-pro',
    name: 'Session Breakout Pro',
    category: 'Timing',
    description: 'Asia/London/NY session analysis with breakout probability scoring',
    tier: 'ultimate'
  }
];
