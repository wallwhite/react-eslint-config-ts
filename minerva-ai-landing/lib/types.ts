// Indicator types
export interface Indicator {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: string[];
  tier: 'free' | 'premium' | 'ultimate';
  features: string[];
}

// Pricing types
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: PricingFeature[];
  indicatorLimit: number;
  aiRequestLimit: number | 'unlimited';
  popular?: boolean;
}

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

// AI Preview types
export interface StreamMessage {
  type: 'tool' | 'text' | 'chart' | 'paywall';
  content: string | ChartData;
  timestamp: number;
}

export interface ChartData {
  type: 'line' | 'bar' | 'heatmap';
  data: any[];
  config: ChartConfig;
}

export interface ChartConfig {
  title: string;
  xAxisKey?: string;
  yAxisKey?: string;
  dataKey?: string;
  [key: string]: any;
}

// Testimonial types
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Quick Prompt types
export interface QuickPrompt {
  id: string;
  label: string;
  prompt: string;
  icon?: string;
}
