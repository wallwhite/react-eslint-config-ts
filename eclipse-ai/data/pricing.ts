export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string | number;
  interval?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Get Started",
    price: 0,
    features: [
      "3 free TradingView indicators",
      "Basic AI models (GPT-3.5, Claude Haiku)",
      "5 premium model requests/month",
      "Community support",
    ],
    cta: "Start Free",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Go Pro",
    price: 49,
    interval: "month",
    popular: true,
    features: [
      "All 6 premium indicators (Free + 3 more)",
      "Unlimited access to all AI models (GPT-4, Claude Opus, Gemini Pro)",
      "Reasonable usage caps (100 requests/day)",
      "Priority support",
      "Early access to new indicators",
    ],
    cta: "Start Premium Trial",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    tagline: "Maximum Edge",
    price: 149,
    interval: "month",
    features: [
      "All 10 professional indicators (Premium + 4 rare/pro)",
      "Unlimited AI access (fair-use policy)",
      "Custom indicator requests (1/quarter)",
      "White-glove onboarding",
      "Private Discord access",
      "API access (beta)",
    ],
    cta: "Contact Sales",
  },
];
