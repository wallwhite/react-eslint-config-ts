import { LucideIcon, Brain, TrendingUp, BarChart3, MessageSquare, FileText, Zap } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const features: Feature[] = [
  {
    id: "ai-routing",
    title: "Smart AI Routing",
    description: "Automatically selects the optimal AI model (GPT-4, Claude, etc.) based on your query type for maximum accuracy and speed.",
    icon: Brain,
    color: "blue"
  },
  {
    id: "cross-asset",
    title: "Cross-Asset Analysis",
    description: "Analyze correlations between crypto, equities, forex, and commodities in real-time to spot market opportunities.",
    icon: TrendingUp,
    color: "green"
  },
  {
    id: "backtesting",
    title: "Advanced Backtesting",
    description: "Test your strategies against historical data with sentiment analysis and on-chain metrics included.",
    icon: BarChart3,
    color: "purple"
  },
  {
    id: "sentiment",
    title: "Sentiment Intelligence",
    description: "Real-time social sentiment from Twitter, Reddit, news, and on-chain data aggregated with AI-powered insights.",
    icon: MessageSquare,
    color: "orange"
  },
  {
    id: "explainability",
    title: "AI Explainability",
    description: "Understand the reasoning behind every AI prediction with transparent, detailed explanations of the analysis process.",
    icon: FileText,
    color: "cyan"
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description: "Connect with TradingView, MetaTrader, and popular exchanges via API. Export data in CSV, JSON, or use our webhooks.",
    icon: Zap,
    color: "yellow"
  }
];
