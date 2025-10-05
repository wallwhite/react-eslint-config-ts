export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "what-is-crystalyze",
    question: "What is Crystalyze AI and how does it work?",
    answer: "Crystalyze AI is an advanced market analysis platform that uses artificial intelligence to analyze crypto, equities, and other assets. It combines TradingView indicators, on-chain data, sentiment analysis, and multiple AI models (GPT-4, Claude 3) to provide comprehensive market insights. Simply ask a question in natural language, and our AI routing system automatically selects the best model and data sources to answer it."
  },
  {
    id: "which-ai-models",
    question: "Which AI models do you support?",
    answer: "We support multiple state-of-the-art AI models including GPT-4 Turbo, Claude 3 Opus, and GPT-3.5. Our Smart AI Routing feature automatically selects the optimal model based on your query type. Free tier users get GPT-3.5, Premium users get GPT-4 Turbo, and Ultimate users get access to all models including Claude 3 Opus for maximum accuracy."
  },
  {
    id: "data-sources",
    question: "What data sources does Crystalyze use?",
    answer: "We aggregate data from multiple sources including TradingView indicators, exchange APIs (Binance, Coinbase, etc.), on-chain analytics (Glassnode, Dune), social sentiment (Twitter, Reddit), financial news feeds, and historical price data. All data is processed in real-time and combined with AI analysis for comprehensive insights."
  },
  {
    id: "backtesting",
    question: "How does the backtesting feature work?",
    answer: "Our backtesting engine allows you to test trading strategies against historical data, including past sentiment scores and on-chain metrics. Premium users get 2 years of historical data, while Ultimate users get 5+ years. You can define entry/exit rules, set parameters, and see how your strategy would have performed with detailed performance metrics and visualizations."
  },
  {
    id: "integrations",
    question: "Can I integrate Crystalyze with my existing tools?",
    answer: "Yes! Premium and Ultimate users can connect Crystalyze with TradingView, MetaTrader, and major exchanges via our API. We support webhooks for real-time alerts, CSV/JSON exports for data analysis, and custom indicator integration. Ultimate tier users also get white-label reporting and custom model training capabilities."
  },
  {
    id: "upgrade-downgrade",
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time from your account settings. When you upgrade, you get immediate access to new features. If you downgrade, you'll retain access to premium features until the end of your current billing cycle."
  },
  {
    id: "accuracy",
    question: "How accurate are the AI predictions?",
    answer: "While no prediction system is 100% accurate, our AI models are trained on vast amounts of historical data and achieve strong performance metrics. We provide confidence scores with every prediction and our Explainability AI feature shows you exactly how we arrived at each conclusion. We recommend using our insights as one component of your trading decision process, not as sole determinants."
  },
  {
    id: "data-security",
    question: "Is my data secure and private?",
    answer: "Yes, security is our top priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never share your trading data or strategies with third parties. Your API keys are stored using industry-standard encryption, and we're SOC 2 Type II compliant. You can delete your data at any time from your account settings."
  },
  {
    id: "free-trial",
    question: "Do you offer a free trial of Premium or Ultimate?",
    answer: "Yes! Premium users get a 14-day free trial with full access to all Premium features. Ultimate tier users should contact our sales team for a personalized demo and trial arrangement. No credit card is required for the free tier, and you can upgrade to start your Premium trial at any time."
  },
  {
    id: "support",
    question: "What kind of support do you provide?",
    answer: "Free users get access to our community forum and documentation. Premium users receive priority email support with 24-hour response time. Ultimate users get a dedicated account manager, priority phone support, and custom onboarding. We also have extensive video tutorials, API documentation, and a knowledge base available to all users."
  }
];
