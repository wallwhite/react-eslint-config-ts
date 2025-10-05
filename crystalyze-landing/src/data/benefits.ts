export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric?: string;
}

export const benefits: Benefit[] = [
  {
    id: "save-time",
    title: "Save 10+ Hours Per Week",
    description: "Automated market analysis eliminates manual research. Get comprehensive insights in seconds, not hours.",
    metric: "10+ hrs saved weekly"
  },
  {
    id: "better-decisions",
    title: "Make Data-Driven Decisions",
    description: "Combine technical analysis, sentiment, and on-chain data for a complete market view. Never trade on gut feeling again.",
    metric: "3x more informed decisions"
  },
  {
    id: "reduce-risk",
    title: "Reduce Portfolio Risk",
    description: "Cross-asset correlation analysis helps you identify hidden risks and optimize diversification across markets.",
    metric: "Up to 40% risk reduction"
  },
  {
    id: "increase-accuracy",
    title: "Improve Strategy Performance",
    description: "Backtest with historical sentiment and on-chain data. Refine your strategies before risking real capital.",
    metric: "34% average improvement"
  },
  {
    id: "stay-ahead",
    title: "Stay Ahead of the Market",
    description: "Real-time alerts for price movements, sentiment shifts, and on-chain anomalies. Never miss an opportunity.",
    metric: "Real-time edge"
  }
];
