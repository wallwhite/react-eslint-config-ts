export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How accurate are the AI-generated signals?",
    answer: "Our AI combines multiple models (GPT-4, Claude, Gemini) with real-time market data, on-chain metrics, and sentiment analysis. Signal accuracy varies by asset and market conditions, but our backtests show consistently higher Sharpe ratios vs. single-model approaches. All signals include confidence scores and supporting rationale."
  },
  {
    question: "How fresh is the data?",
    answer: "Price data updates every second for major pairs. On-chain data refreshes every block (~10s for BTC, ~12s for ETH). News sentiment and social signals update every 60 seconds. You'll see live latency indicators in the analysis interface."
  },
  {
    question: "Which brokers and exchanges do you support?",
    answer: "All TradingView indicators work with any broker TradingView supports. For data feeds, we integrate with Binance, Coinbase, Kraken, Bybit (crypto) and major US equity exchanges via our data partners. API integration guides available for Premium+ users."
  },
  {
    question: "How do you handle my data and privacy?",
    answer: "We never store your trade execution data or positions. Analysis queries are encrypted in transit and at rest. We use anonymized analytics to improve models. You can export or delete your account data anytime. SOC 2 Type II compliant."
  },
  {
    question: "Are the indicators compatible with my TradingView setup?",
    answer: "Yes. All indicators are native Pine Script and install via our TradingView profile. They work on any chart, timeframe, and with any other indicators you're already using. Free users get 3 indicators; Premium unlocks 6; Ultimate unlocks all 10."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancel anytime. No commitments, no cancellation fees. Your subscription stays active until the end of the current billing period. Refunds available within 14 days of initial purchase if you're not satisfied."
  },
  {
    question: "What's the typical latency for AI analysis?",
    answer: "Most queries return in 3-8 seconds depending on complexity. We use streaming responses so you see results as they're generated. Complex cross-asset backtests may take 15-20 seconds. Edge infrastructure keeps latency consistent globally."
  },
  {
    question: "Which AI models do you use?",
    answer: "We route queries intelligently across GPT-4 Turbo, Claude 3.5 Sonnet, and Gemini 1.5 Pro based on query type. Free users get basic models (GPT-4 mini, Claude Haiku). Premium unlocks all advanced models. You can manually select a model or let our router optimize."
  },
  {
    question: "What are the fair-use limits?",
    answer: "Free: 5 premium AI requests/month, 3 indicators. Premium: 500 AI requests/month, 6 indicators. Ultimate: 5,000 requests/month, all 10 indicators. Limits reset monthly. Overages available at $0.10/request for Premium+."
  },
  {
    question: "Do you offer team or institutional plans?",
    answer: "Yes. Contact sales@bluewave.ai for custom team licensing, dedicated support, API rate limit increases, and white-label options for funds and institutions."
  }
];
