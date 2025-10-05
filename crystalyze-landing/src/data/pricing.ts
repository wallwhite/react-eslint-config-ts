export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  limitations?: string[];
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    priceLabel: "$0/month",
    description: "Perfect for getting started with AI-powered market analysis",
    features: [
      "5 AI queries per day",
      "Basic TradingView indicators",
      "Single asset analysis (crypto or equity)",
      "Community support",
      "Email alerts",
      "7-day data history"
    ],
    limitations: [
      "No backtesting",
      "No sentiment analysis",
      "Limited to GPT-3.5"
    ],
    cta: "Get Started Free"
  },
  {
    id: "premium",
    name: "Premium",
    price: 49,
    priceLabel: "$49/month",
    description: "Advanced tools for serious traders and analysts",
    features: [
      "100 AI queries per day",
      "Premium TradingView indicators",
      "Cross-asset correlation analysis",
      "GPT-4 Turbo access",
      "Backtesting with 2 years of data",
      "Basic sentiment analysis",
      "Priority support",
      "Real-time alerts",
      "Export to CSV/JSON",
      "Custom indicator integration"
    ],
    cta: "Start Premium Trial",
    popular: true
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 149,
    priceLabel: "$149/month",
    description: "Enterprise-grade intelligence for professional teams",
    features: [
      "Unlimited AI queries",
      "All Ultimate tier indicators",
      "Full cross-asset analysis suite",
      "GPT-4 Turbo + Claude 3 Opus",
      "Advanced backtesting (5+ years)",
      "Real-time sentiment & on-chain data",
      "API access",
      "White-label reports",
      "Dedicated account manager",
      "Custom model training",
      "Team collaboration (5 seats)",
      "Advanced explainability AI"
    ],
    cta: "Contact Sales"
  }
];

export const featureComparison = [
  {
    category: "AI & Analysis",
    features: [
      { name: "AI Queries per Day", free: "5", premium: "100", ultimate: "Unlimited" },
      { name: "AI Models", free: "GPT-3.5", premium: "GPT-4 Turbo", ultimate: "GPT-4 + Claude 3 Opus" },
      { name: "Asset Coverage", free: "Single", premium: "Cross-asset", ultimate: "Cross-asset + Custom" },
      { name: "Backtesting History", free: "None", premium: "2 years", ultimate: "5+ years" }
    ]
  },
  {
    category: "Indicators & Data",
    features: [
      { name: "TradingView Indicators", free: "Basic", premium: "Premium", ultimate: "Ultimate + Custom" },
      { name: "Sentiment Analysis", free: "None", premium: "Basic", ultimate: "Real-time + On-chain" },
      { name: "Data Export", free: "None", premium: "CSV/JSON", ultimate: "API Access" }
    ]
  },
  {
    category: "Support & Features",
    features: [
      { name: "Support Level", free: "Community", premium: "Priority", ultimate: "Dedicated Manager" },
      { name: "Team Seats", free: "1", premium: "1", ultimate: "5" },
      { name: "Custom Training", free: "No", premium: "No", ultimate: "Yes" }
    ]
  }
];
