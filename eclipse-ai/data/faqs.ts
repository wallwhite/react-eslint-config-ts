export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How accurate are the AI signals?",
    answer: "Our multi-model approach achieves 68-72% accuracy on backtested setups. We show historical performance for every signal type so you can validate before trading.",
  },
  {
    id: "2",
    question: "How fresh is your data?",
    answer: "Real-time for sentiment and price feeds. On-chain data refreshes every block. News sentiment updates every 5 minutes.",
  },
  {
    id: "3",
    question: "Which exchanges and brokers do you support?",
    answer: "All TradingView-compatible brokers for equities. For crypto: Binance, Coinbase, Kraken, Bybit. We pull data, not execute trades.",
  },
  {
    id: "4",
    question: "What AI models do you use?",
    answer: "We route between Claude (Opus, Sonnet), GPT-4 (Turbo, O-series), and Gemini Pro based on query type. Premium unlocks all models.",
  },
  {
    id: "5",
    question: "Can I cancel anytime?",
    answer: "Yes. Cancel anytime, no questions asked. Your indicators remain active until period end.",
  },
  {
    id: "6",
    question: "How do the indicators install?",
    answer: "One-click install via TradingView Community Scripts or direct invite link. Takes 30 seconds.",
  },
  {
    id: "7",
    question: "Do you store my trading data?",
    answer: "No. We never see your positions or account details. Analysis is query-based only.",
  },
  {
    id: "8",
    question: "What's the latency on signals?",
    answer: "Real-time price-based signals trigger within 100ms. AI analysis queries return in 3-8 seconds depending on complexity.",
  },
  {
    id: "9",
    question: "Is there a learning curve?",
    answer: "Minimal. If you use TradingView and ChatGPT, you're ready. We include video walkthroughs for every indicator.",
  },
  {
    id: "10",
    question: "Can I get a refund?",
    answer: "Yes, 14-day money-back guarantee on Premium and Ultimate. Try risk-free.",
  },
];
