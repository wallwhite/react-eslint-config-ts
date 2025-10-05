export interface PricingPlan {
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  tier: 'free' | 'premium' | 'ultimate';
}

export const plans: PricingPlan[] = [
  {
    name: 'Free',
    price: 0,
    priceLabel: 'Free forever',
    description: 'Start with essential tools',
    tier: 'free',
    features: [
      '3 free TradingView indicators',
      'Basic AI models (GPT-4 mini, Claude Haiku)',
      '5 premium AI requests/month',
      'Community support',
      'Basic sentiment analysis',
      'Standard data refresh rates'
    ],
    cta: 'Start free'
  },
  {
    name: 'Premium',
    price: 49,
    priceLabel: '$49/month',
    description: 'For serious traders',
    tier: 'premium',
    popular: true,
    features: [
      '6 premium indicators (includes all Free tier)',
      'All AI models (GPT-4, Claude 3.5, Gemini Pro)',
      '500 AI requests/month',
      'Priority support',
      'Advanced backtesting',
      'Real-time sentiment + on-chain data',
      'Cross-asset correlation analysis',
      'Custom alerts and notifications'
    ],
    cta: 'Upgrade to Premium'
  },
  {
    name: 'Ultimate',
    price: 149,
    priceLabel: '$149/month',
    description: 'For professionals and teams',
    tier: 'ultimate',
    features: [
      'All 10 professional indicators',
      'Unlimited AI models (fair-use: 5K requests/month)',
      'Institutional-grade data feeds',
      'Dedicated account manager',
      'API access with higher rate limits',
      'White-label export options',
      'Advanced quant tools (correlation matrix, liquidity heatmaps)',
      'Early access to new features'
    ],
    cta: 'Go Ultimate'
  }
];
