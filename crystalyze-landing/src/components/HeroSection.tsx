"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

const HeroSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "user",
      content: "What's the outlook for BTC today?",
      timestamp: new Date(),
    },
    {
      id: "2",
      role: "assistant",
      content: "Based on my advanced AI analysis, BTC is showing strong bullish momentum. Key indicators suggest a potential breakout above $45,000 with RSI at 58 and increasing volume. My neural network models indicate 73% probability of upward movement in the next 24 hours. Risk/reward ratio favors long positions with stops at $42,800.",
      timestamp: new Date(),
      isTyping: true,
    },
  ]);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  const additionalMessages: Message[] = [
    {
      id: "3",
      role: "user",
      content: "Which altcoins are showing strength?",
      timestamp: new Date(),
    },
    {
      id: "4",
      role: "assistant",
      content: "My AI scan identifies ETH, SOL, and AVAX as top performers. ETH shows accumulation patterns with smart money inflow increasing 23% this week. SOL's momentum indicators are extremely bullish with a breakout imminent. AVAX displays a cup-and-handle formation targeting $52. All three have risk scores below 35%.",
      timestamp: new Date(),
    },
  ];

  useEffect(() => {
    if (currentMessageIndex < 2) {
      const message = messages[currentMessageIndex];
      if (message.role === "assistant" && currentCharIndex < message.content.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1);
        }, 20);
        return () => clearTimeout(timer);
      } else if (currentCharIndex >= (messages[currentMessageIndex]?.content.length || 0)) {
        const timer = setTimeout(() => {
          if (currentMessageIndex < 1) {
            setCurrentMessageIndex(currentMessageIndex + 1);
            setCurrentCharIndex(0);
          }
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [currentMessageIndex, currentCharIndex, messages]);

  const handleAddMessage = () => {
    if (interactionCount >= 1) {
      setShowPaywall(true);
      return;
    }

    if (additionalMessages.length > interactionCount * 2) {
      const newMessages = [
        ...messages.map(m => ({ ...m, isTyping: false })),
        additionalMessages[interactionCount * 2],
        { ...additionalMessages[interactionCount * 2 + 1], isTyping: true },
      ];
      setMessages(newMessages);
      setInteractionCount(interactionCount + 1);
      setCurrentMessageIndex(newMessages.length - 1);
      setCurrentCharIndex(0);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 chart-grid opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container-width section-padding relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight">
                  Trade Smarter with{" "}
                  <span className="gradient-text">AI-Powered</span> Analysis
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  Leverage cutting-edge artificial intelligence to analyze markets, predict trends,
                  and maximize your trading profitability across crypto and stock markets.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">95% Accuracy Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">Real-time Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">10+ AI Models</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowPaywall(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Start Free Trial
                </button>
                <button className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Right content - AI Chat Preview */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">AI Assistant Online</span>
                  </div>
                  <span className="text-xs text-gray-500">Live Demo</span>
                </div>

                <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} fade-in-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-blue-600/20 border border-blue-500/30"
                            : "bg-gray-800/50 border border-gray-700/30"
                        }`}
                      >
                        <p className="text-sm">
                          {message.role === "assistant" && index <= currentMessageIndex
                            ? message.content.substring(0, index === currentMessageIndex ? currentCharIndex : message.content.length)
                            : message.content}
                          {message.role === "assistant" && index === currentMessageIndex && currentCharIndex < message.content.length && (
                            <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse"></span>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask about any market..."
                    className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    onFocus={handleAddMessage}
                  />
                  <button
                    onClick={handleAddMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-xs text-gray-500">Try the AI Assistant - 5 free premium requests included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paywall Modal */}
      {showPaywall && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-effect rounded-2xl p-8 max-w-md w-full fade-in-up">
            <h3 className="text-2xl font-bold mb-4">Unlock Full AI Power</h3>
            <p className="text-gray-400 mb-6">
              Get unlimited access to all AI models, premium indicators, and real-time analysis.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Unlimited AI requests</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10+ premium indicators</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Priority support</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
                Start 7-Day Free Trial
              </button>
              <button
                onClick={() => setShowPaywall(false)}
                className="px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                Close
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;