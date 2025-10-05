"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: "How do the AI models analyze the market?",
    answer: "Our AI models use a combination of deep learning techniques including LSTM networks for time-series prediction, computer vision for pattern recognition, and natural language processing for sentiment analysis. They process millions of data points per second from multiple sources including price action, volume, news, social media, and on-chain data to provide comprehensive market analysis. Each model is continuously trained on the latest market data to adapt to changing conditions.",
    category: "AI Technology",
  },
  {
    question: "Do the indicators work with my existing TradingView subscription?",
    answer: "Yes! All our indicators are fully compatible with TradingView Pro, Plus, and Premium subscriptions. Simply add them to your charts using the provided access codes. The indicators update in real-time and include customizable alerts. You can use them alongside your existing indicators and strategies. We also provide detailed video tutorials for setup and optimization.",
    category: "Indicators",
  },
  {
    question: "Which markets and exchanges do you support?",
    answer: "CrystalAIze supports all major cryptocurrency exchanges including Binance, Coinbase, Kraken, and 50+ others. For traditional markets, we cover US stocks (NYSE, NASDAQ), major forex pairs, commodities, and options. Our AI models are trained on data from all these markets, providing cross-market insights and correlation analysis that can give you an edge.",
    category: "Market Coverage",
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models maintain an average accuracy rate of 92% for short-term predictions (24-48 hours) and 85% for medium-term (1 week). However, we always recommend using AI predictions as one component of your trading strategy, combined with proper risk management. The system provides confidence scores with each prediction so you can gauge the reliability of signals.",
    category: "Performance",
  },
  {
    question: "Can I use the platform on mobile devices?",
    answer: "Absolutely! CrystalAIze offers native iOS and Android apps with full functionality. You can receive real-time alerts, chat with the AI assistant, view your indicators, and execute analysis on the go. The mobile apps sync seamlessly with the web platform, ensuring you never miss a trading opportunity. Push notifications keep you informed of important market movements.",
    category: "Platform",
  },
  {
    question: "What's included in the free tier?",
    answer: "The free tier includes 3 premium TradingView indicators, access to basic AI models, 5 premium AI requests per month, real-time market data, basic pattern recognition, and mobile app access. It's perfect for getting started and experiencing the power of AI-assisted trading. You can upgrade anytime to unlock unlimited AI requests and additional indicators.",
    category: "Pricing",
  },
  {
    question: "Is there an API for automated trading?",
    answer: "Yes, Premium and Ultimate plans include API access for automated trading integration. Our REST and WebSocket APIs allow you to programmatically access AI predictions, indicator signals, and market analysis. We provide SDKs for Python, JavaScript, and C#, along with comprehensive documentation and code examples. Rate limits vary by plan tier.",
    category: "API & Integration",
  },
  {
    question: "How do I get support if I need help?",
    answer: "We offer multiple support channels based on your plan. Free users have access to our community forum and knowledge base. Premium users get priority email support with 24-hour response time. Ultimate users receive dedicated support with live chat, phone support, and a personal success manager. We also provide 100+ video tutorials and weekly live training sessions.",
    category: "Support",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  return (
    <section className="py-20 relative">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Everything You Need to <span className="gradient-text">Know</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about our AI models, indicators, and platform capabilities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-full text-blue-400"
              >
                {category}
              </span>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
                    <span className="text-xs text-blue-400/60">{faq.category}</span>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      openItems.includes(index) ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(index) ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 p-8 glass-effect rounded-2xl text-center border border-gray-800">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200 border border-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Live Chat</span>
                </div>
              </button>
              <button className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200 border border-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Support</span>
                </div>
              </button>
              <button className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200 border border-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Documentation</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;