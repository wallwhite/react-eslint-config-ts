import { PricingPlan } from '@/lib/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for getting started with AI-powered analysis',
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      { text: '3 basic indicators', included: true },
      { text: '5 premium AI requests/month', included: true },
      { text: 'Community support', included: true },
      { text: 'Basic alerts', included: true },
      { text: '1 connected exchange', included: true },
      { text: 'Advanced indicators', included: false },
      { text: 'Unlimited AI requests', included: false },
      { text: 'API access', included: false },
    ],
    indicatorLimit: 3,
    aiRequestLimit: 5,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For serious traders who need comprehensive tools',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      { text: '6 indicators total', included: true, highlight: true },
      { text: 'All AI models (fair-use)', included: true, highlight: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced alerts', included: true },
      { text: '5 connected exchanges', included: true },
      { text: 'Custom watchlists', included: true },
      { text: 'Email notifications', included: true },
      { text: 'API access', included: false },
      { text: 'Custom indicators', included: false },
    ],
    indicatorLimit: 6,
    aiRequestLimit: 1000,
    popular: true,
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    description: 'Maximum capabilities for professional traders',
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      { text: '10 indicators (all pro)', included: true, highlight: true },
      { text: 'Unlimited AI requests', included: true, highlight: true },
      { text: 'Dedicated support', included: true },
      { text: 'API access', included: true, highlight: true },
      { text: 'Unlimited exchanges', included: true },
      { text: 'Custom indicators (beta)', included: true },
      { text: 'Webhook integrations', included: true },
      { text: 'Priority feature requests', included: true },
      { text: 'White-label options', included: true },
    ],
    indicatorLimit: 10,
    aiRequestLimit: 'unlimited',
  },
];

export const calculateYearlySavings = (monthlyPrice: number, yearlyPrice: number): number => {
  const yearlyEquivalent = monthlyPrice * 12;
  return Math.round(((yearlyEquivalent - yearlyPrice) / yearlyEquivalent) * 100);
};
