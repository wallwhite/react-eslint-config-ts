"use client";

import * as React from "react";
import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is Minerva AI?",
    answer: "Minerva AI is a comprehensive trading intelligence platform that combines advanced AI models (GPT-4, Claude 3, Gemini Pro) with professional-grade technical indicators. It helps traders make better decisions by providing real-time market analysis, sentiment tracking, and actionable insights across all major markets including crypto, forex, stocks, and commodities.",
  },
  {
    question: "How do the indicators work?",
    answer: "Our indicators are professionally designed technical analysis tools that integrate seamlessly with popular trading platforms like TradingView and MetaTrader. Each indicator uses advanced algorithms to analyze price action, volume, and market structure. They provide visual signals and alerts directly on your charts, helping you identify high-probability trading opportunities.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, absolutely! All our paid plans are billed monthly and you can cancel anytime from your account settings. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access until the end of your current billing period, and you won't be charged again.",
  },
  {
    question: "What markets and assets are supported?",
    answer: "Minerva AI supports analysis across all major markets including cryptocurrencies (Bitcoin, Ethereum, altcoins), forex pairs, stocks (US and international), commodities (gold, oil, etc.), and indices. Our AI models and indicators work across all timeframes from 1-minute charts to monthly charts.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a completely free plan with 3 basic indicators and 5 AI model requests per month - no credit card required. For our Premium and Ultimate plans, we offer a 14-day money-back guarantee. If you're not satisfied with your subscription within the first 14 days, we'll refund you in full.",
  },
  {
    question: "Which AI models can I use?",
    answer: "Depending on your plan, you can access multiple leading AI models including GPT-4 Turbo, Claude 3 Opus, Gemini Pro, and Llama 3 70B. Each model has unique strengths, and our platform lets you choose the best model for each type of analysis. Premium and Ultimate plans include access to all models.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "While no trading tool can guarantee profits, our AI models analyze vast amounts of data including historical price patterns, volume, sentiment, and market conditions to provide highly informed insights. Our users report an average 40% improvement in decision accuracy. Remember, AI should be one tool in your trading toolkit, not the only factor in your decisions.",
  },
  {
    question: "Do I need coding skills to use Minerva AI?",
    answer: "No coding skills are required! Our platform is designed to be user-friendly with an intuitive interface. The indicators install with one click on supported platforms, and the AI analysis is accessed through a simple chat interface. However, for advanced users, we do offer API access on the Ultimate plan for custom integrations and automation.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Minerva AI. Can&apos;t find what you&apos;re looking for?
            Contact our support team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
