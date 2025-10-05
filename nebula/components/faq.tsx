"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does the AI analysis work?",
    answer: "Nebula uses advanced AI models including GPT-4, Claude Opus, and Gemini Pro to analyze market data, news sentiment, technical indicators, and historical patterns. The AI processes millions of data points in real-time to provide actionable insights and trading recommendations. Each model offers unique perspectives, and you can compare their analyses to make more informed decisions.",
  },
  {
    question: "Can I use Nebula indicators on TradingView?",
    answer: "Yes! All Nebula indicators are fully compatible with TradingView. Once you subscribe to a plan that includes indicators, you'll receive access links to add them directly to your TradingView account. They work seamlessly with all TradingView charts and can be customized to your preferences.",
  },
  {
    question: "What's the difference between AI models?",
    answer: "Each AI model has unique strengths: GPT-4 excels at technical analysis and pattern recognition, Claude Opus is exceptional for risk assessment and portfolio management, Gemini Pro specializes in real-time market sentiment and news analysis, and GPT-4o-mini offers quick, basic insights. Premium and Ultimate plans let you access multiple models to get comprehensive analysis.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models have demonstrated 68-78% accuracy in backtesting across various market conditions. However, it's important to note that no prediction system is 100% accurate. Nebula is designed to enhance your decision-making process, not replace it. We recommend using AI insights in conjunction with your own research and risk management strategies.",
  },
  {
    question: "What markets and assets are supported?",
    answer: "Nebula supports cryptocurrencies (Bitcoin, Ethereum, and 200+ altcoins), stocks (all major US exchanges including NYSE and NASDAQ), forex pairs, commodities, and indices. Real-time data is available for all supported assets, with historical data going back 5+ years for backtesting.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! All paid plans come with a 14-day money-back guarantee. If you're not satisfied with Nebula for any reason within the first 14 days, simply contact our support team for a full refund. No questions asked. This gives you risk-free opportunity to test all features.",
  },
  {
    question: "How do the indicator limits work?",
    answer: "The Free plan includes 3 basic indicators. Premium adds 3 more advanced indicators (6 total). Ultimate includes all 10 indicators, including 4 professional-grade indicators not available on other plans. Each indicator can be used on unlimited charts once unlocked.",
  },
  {
    question: "What data sources does Nebula use?",
    answer: "We aggregate data from multiple premium sources including real-time exchange APIs (Binance, Coinbase, Kraken, etc.), market data providers (Polygon.io, Alpha Vantage), news feeds (Reuters, Bloomberg, CoinDesk), and social sentiment trackers (Twitter, Reddit, StockTwits). This comprehensive approach ensures the most accurate and up-to-date information.",
  },
  {
    question: "Can I use Nebula for automated trading?",
    answer: "Ultimate plan subscribers get API access that allows integration with trading bots and automated systems. You can programmatically access AI insights, indicator signals, and alerts to build custom automation. We also provide example integrations and documentation to help you get started.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free users get community support through our Discord server. Premium users receive priority email support with 24-hour response time. Ultimate subscribers get dedicated account managers, 1-on-1 onboarding calls, and direct access to our development team for feature requests and technical assistance.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Nebula
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Our support team is here to help you get started
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};
