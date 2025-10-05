"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowRight, Shield, BookOpen, Cpu, Trophy, CheckCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of market analysis does CrystalAIze provide?",
    answer: "Our platform offers comprehensive technical analysis including trend identification, support/resistance levels, momentum indicators, volume analysis, and pattern recognition. We analyze multiple timeframes and provide clear, educational explanations of market conditions to help you understand what's happening and why."
  },
  {
    question: "Do I need trading experience to use the platform?",
    answer: "No prior experience is required. Our platform is designed to be educational and accessible. We provide comprehensive learning resources, tutorial videos, and clear explanations of all analysis tools. You'll learn fundamental concepts while using professional-grade analysis tools."
  },
  {
    question: "How does the AI analysis work?",
    answer: "Our AI processes millions of data points including price movements, volume patterns, market sentiment, and technical indicators. It identifies patterns and trends that might be difficult to spot manually. The AI provides analysis and insights, but always remember that trading decisions are ultimately yours to make."
  },
  {
    question: "What markets can I analyze?",
    answer: "CrystalAIze covers major cryptocurrencies (Bitcoin, Ethereum, etc.), US and international stocks, forex pairs, commodities, and market indices. Our tools work across different asset classes, helping you understand various market dynamics."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 7-day free trial with access to our basic analysis tools and educational content. No credit card is required to start. This gives you time to explore the platform and see if it fits your learning style and analysis needs."
  },
  {
    question: "What educational resources are included?",
    answer: "All plans include access to our educational library with video tutorials, market analysis guides, indicator explanations, risk management strategies, and weekly webinars. Professional and Enterprise plans include additional advanced content and personalized learning paths."
  },
  {
    question: "Can the platform guarantee trading profits?",
    answer: "No legitimate platform can guarantee profits. Trading involves substantial risk, and past performance doesn't guarantee future results. Our tools provide analysis and education to help you make more informed decisions, but all trading carries the risk of loss. Never trade with money you can't afford to lose."
  },
  {
    question: "How do I get support if I need help?",
    answer: "We offer multiple support channels including email support for all users, community forums for peer assistance, comprehensive documentation and FAQs, and priority support for Professional and Enterprise plans. Our goal is to ensure you can effectively use all platform features."
  }
];

export const FAQAndCTA = () => {
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* FAQ Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-4">
              <HelpCircle className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Common Questions About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Platform
              </span>
            </h2>
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-950/50 border border-gray-800 overflow-hidden transition-all hover:border-gray-700"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Support note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Still have questions?{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                Contact our support team
              </a>{" "}
              or{" "}
              <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                visit our help center
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-purple-950/20 to-blue-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 mb-8">
            <BookOpen className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">START YOUR LEARNING JOURNEY</span>
          </div>

          {/* Main headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Ready to Enhance Your{" "}
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Market Analysis Skills?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of traders using our <span className="text-blue-400 font-semibold">AI-powered tools</span> to
            better understand market dynamics and make more informed trading decisions.
          </p>

          {/* Value props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-900/10 border border-blue-500/20 p-4">
              <Cpu className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">AI</div>
              <div className="text-xs text-gray-400">Advanced Analysis</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-900/20 to-purple-900/10 border border-purple-500/20 p-4">
              <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-xs text-gray-400">Learning Resources</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-emerald-900/20 to-emerald-900/10 border border-emerald-500/20 p-4">
              <Trophy className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400">Market Coverage</div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-yellow-900/20 to-yellow-900/10 border border-yellow-500/20 p-4">
              <Shield className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">30-Day</div>
              <div className="text-xs text-gray-400">Money Back</div>
            </div>
          </div>

          {/* Trial offer box */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-blue-400" />
              Start Your Free Trial Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our platform risk-free for 7 days. Get access to analysis tools, educational content,
              and see how our AI can help you better understand market movements. No credit card required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle className="h-4 w-4" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400">
                <CheckCircle className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Final CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-10 py-5 text-xl font-bold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40">
              <span>Start Free Trial</span>
              <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900/50 border border-gray-800 text-gray-300 font-medium hover:bg-gray-900/80 hover:border-gray-700 hover:text-white transition-all">
              View Demo
              <BookOpen className="h-5 w-5" />
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Join 10,000+ traders improving their analysis skills • Educational platform • Risk disclosure applies
          </p>

          {/* Risk disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-950/50 border border-gray-800 p-4 max-w-2xl mx-auto">
            <p className="text-xs text-gray-500 leading-relaxed">
              <span className="font-semibold text-yellow-500">Risk Disclosure:</span> Trading in financial markets involves
              substantial risk, including the possible loss of principal. Past performance does not guarantee future results.
              Our tools provide analysis for educational purposes only and should not be considered investment advice.
              Always conduct your own research and consider your financial situation before trading.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};