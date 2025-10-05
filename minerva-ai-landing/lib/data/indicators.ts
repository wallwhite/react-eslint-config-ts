import { Indicator } from '@/lib/types';

export const indicators: Indicator[] = [
  // Free Tier (3)
  {
    id: 'momentum-master',
    name: 'Momentum Master',
    description: 'Advanced momentum tracking with multi-timeframe confluence and divergence detection',
    image: '/images/indicators/momentum-master.png',
    categories: ['momentum', 'trend'],
    tier: 'free',
    features: [
      'Real-time momentum signals',
      'Multi-timeframe analysis',
      'Custom alert system',
      'Divergence detection',
    ],
  },
  {
    id: 'volume-pulse',
    name: 'Volume Pulse',
    description: 'Track institutional money flow with volume profile and delta analysis',
    image: '/images/indicators/volume-pulse.png',
    categories: ['volume', 'institutional'],
    tier: 'free',
    features: [
      'Volume profile visualization',
      'Delta analysis',
      'Cumulative volume delta',
      'Smart alerts on unusual volume',
    ],
  },
  {
    id: 'support-resistance-pro',
    name: 'Support & Resistance Pro',
    description: 'Automatically identify key support and resistance levels across all timeframes',
    image: '/images/indicators/support-resistance.png',
    categories: ['levels', 'price-action'],
    tier: 'free',
    features: [
      'Auto-detection of S/R levels',
      'Multi-timeframe confluence',
      'Break/retest signals',
      'Historical strength rating',
    ],
  },
  // Premium Tier (6)
  {
    id: 'ai-trend-detector',
    name: 'AI Trend Detector',
    description: 'Machine learning powered trend identification with predictive confidence scores',
    image: '/images/indicators/ai-trend.png',
    categories: ['ai', 'trend', 'prediction'],
    tier: 'premium',
    features: [
      'ML-powered trend detection',
      'Confidence score metrics',
      'Reversal probability',
      'Auto pattern recognition',
    ],
  },
  {
    id: 'smart-orderflow',
    name: 'Smart Order Flow',
    description: 'Institutional order flow analysis with iceberg detection and absorption patterns',
    image: '/images/indicators/orderflow.png',
    categories: ['orderflow', 'institutional'],
    tier: 'premium',
    features: [
      'Iceberg order detection',
      'Absorption patterns',
      'Spoofing alerts',
      'Real-time flow visualization',
    ],
  },
  {
    id: 'volatility-matrix',
    name: 'Volatility Matrix',
    description: 'Advanced volatility analysis with ATR bands, Bollinger squeeze, and expansion zones',
    image: '/images/indicators/volatility.png',
    categories: ['volatility', 'risk'],
    tier: 'premium',
    features: [
      'Multi-indicator volatility',
      'Squeeze detection',
      'Expansion forecasting',
      'Risk-adjusted signals',
    ],
  },
  {
    id: 'correlation-scanner',
    name: 'Correlation Scanner',
    description: 'Real-time cross-asset correlation analysis for crypto, stocks, and indices',
    image: '/images/indicators/correlation.png',
    categories: ['correlation', 'multi-asset'],
    tier: 'premium',
    features: [
      'Cross-asset correlation',
      'Lead/lag detection',
      'Divergence alerts',
      'Correlation heatmap',
    ],
  },
  {
    id: 'market-structure',
    name: 'Market Structure',
    description: 'Identify market structure shifts, BOS, CHoCH, and liquidity zones',
    image: '/images/indicators/market-structure.png',
    categories: ['structure', 'smart-money'],
    tier: 'premium',
    features: [
      'BOS & CHoCH detection',
      'Liquidity zone mapping',
      'Order blocks visualization',
      'Fair value gaps',
    ],
  },
  {
    id: 'sentiment-fusion',
    name: 'Sentiment Fusion',
    description: 'Aggregate social sentiment, funding rates, and on-chain metrics in one view',
    image: '/images/indicators/sentiment.png',
    categories: ['sentiment', 'on-chain'],
    tier: 'premium',
    features: [
      'Social sentiment aggregation',
      'Funding rate analysis',
      'On-chain metrics',
      'Fear & Greed integration',
    ],
  },
  // Ultimate Tier (3)
  {
    id: 'quantum-signals',
    name: 'Quantum Signals',
    description: 'Proprietary algorithm combining 50+ indicators with AI-weighted scoring',
    image: '/images/indicators/quantum.png',
    categories: ['ai', 'composite', 'premium'],
    tier: 'ultimate',
    features: [
      '50+ indicator fusion',
      'AI-weighted scoring',
      'Dynamic timeframe sync',
      'Backtested performance',
    ],
  },
  {
    id: 'whale-tracker-elite',
    name: 'Whale Tracker Elite',
    description: 'Track large wallet movements and exchange flows with predictive exit signals',
    image: '/images/indicators/whale.png',
    categories: ['on-chain', 'institutional', 'whale'],
    tier: 'ultimate',
    features: [
      'Large wallet monitoring',
      'Exchange flow analysis',
      'Predictive exit signals',
      'Historical whale patterns',
    ],
  },
  {
    id: 'options-flow-x',
    name: 'Options Flow X',
    description: 'Advanced options flow analysis with GEX, DEX, and unusual activity detection',
    image: '/images/indicators/options.png',
    categories: ['options', 'derivatives'],
    tier: 'ultimate',
    features: [
      'GEX & DEX analysis',
      'Unusual activity alerts',
      'Max pain calculation',
      'Gamma exposure levels',
    ],
  },
];

export const getIndicatorsByTier = (tier: 'free' | 'premium' | 'ultimate') => {
  return indicators.filter((indicator) => indicator.tier === tier);
};

export const getIndicatorsByCategory = (category: string) => {
  return indicators.filter((indicator) => indicator.categories.includes(category));
};
