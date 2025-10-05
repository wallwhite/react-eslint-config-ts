"use client";

import { useState } from "react";

interface AIModel {
  name: string;
  description: string;
  icon: React.ReactElement;
  capabilities: string[];
  performance: {
    speed: string;
    accuracy: string;
  };
}

const aiModels: AIModel[] = [
  {
    name: "GPT-4 Market Analyst",
    description: "Advanced language model fine-tuned on financial data for comprehensive market analysis and trading insights.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    capabilities: [
      "Natural language market analysis",
      "Sentiment analysis from news",
      "Technical pattern recognition",
      "Risk assessment reports"
    ],
    performance: {
      speed: "Real-time",
      accuracy: "96%"
    }
  },
  {
    name: "Neural Price Predictor",
    description: "Deep learning LSTM networks trained on 10+ years of market data for accurate price predictions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    capabilities: [
      "24-hour price forecasting",
      "Volatility prediction",
      "Support/resistance levels",
      "Trend strength analysis"
    ],
    performance: {
      speed: "< 100ms",
      accuracy: "91%"
    }
  },
  {
    name: "Pattern Recognition CV",
    description: "Computer vision model that identifies chart patterns and trading setups with superhuman accuracy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    capabilities: [
      "Head & shoulders detection",
      "Triangle pattern analysis",
      "Candlestick patterns",
      "Harmonic pattern finder"
    ],
    performance: {
      speed: "< 50ms",
      accuracy: "93%"
    }
  },
  {
    name: "Sentiment Analyzer",
    description: "Real-time social media and news sentiment analysis across 1000+ sources for market mood detection.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    capabilities: [
      "Twitter sentiment tracking",
      "Reddit analysis",
      "News impact scoring",
      "Fear & greed index"
    ],
    performance: {
      speed: "Real-time",
      accuracy: "88%"
    }
  },
  {
    name: "Risk Management AI",
    description: "Sophisticated risk assessment model that calculates position sizes and stop-loss levels automatically.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    capabilities: [
      "Portfolio risk scoring",
      "Position size calculator",
      "Stop-loss optimization",
      "Risk/reward analysis"
    ],
    performance: {
      speed: "Instant",
      accuracy: "94%"
    }
  },
  {
    name: "Arbitrage Scanner",
    description: "High-frequency arbitrage opportunity detection across multiple exchanges and trading pairs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    capabilities: [
      "Cross-exchange arbitrage",
      "Triangular arbitrage",
      "Statistical arbitrage",
      "Latency monitoring"
    ],
    performance: {
      speed: "< 10ms",
      accuracy: "97%"
    }
  }
];

const AICapabilities = () => {
  const [selectedModel, setSelectedModel] = useState<number>(0);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 chart-grid opacity-10"></div>

      <div className="container-width section-padding relative">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            AI Technology Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Cutting-Edge <span className="gradient-text">AI Models</span> at Your Fingertips
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of multiple specialized AI models working in harmony to deliver
            unparalleled trading insights across crypto and traditional markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {aiModels.map((model, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedModel === index
                    ? "glass-effect border border-blue-500/50 shadow-xl shadow-blue-500/10"
                    : "bg-gray-900/30 border border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setSelectedModel(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    selectedModel === index
                      ? "bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400"
                      : "bg-gray-800/50 text-gray-400"
                  }`}>
                    {model.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                    <p className="text-gray-400 text-sm">{model.description}</p>

                    <div className="flex gap-6 mt-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-300">{model.performance.speed}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs text-gray-300">{model.performance.accuracy}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky top-8">
            <div className="glass-effect rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 text-blue-400">
                  {aiModels[selectedModel].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{aiModels[selectedModel].name}</h3>
                  <p className="text-gray-500">AI Model Capabilities</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {aiModels[selectedModel].capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{capability}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">{aiModels[selectedModel].performance.speed}</div>
                  <div className="text-xs text-gray-400 mt-1">Response Time</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">{aiModels[selectedModel].performance.accuracy}</div>
                  <div className="text-xs text-gray-400 mt-1">Accuracy Rate</div>
                </div>
              </div>

              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
                Try This Model Now
              </button>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <h4 className="font-bold mb-2">Multi-Model Advantage</h4>
              <p className="text-sm text-gray-400">
                All models work together in real-time, cross-validating signals and providing
                comprehensive market analysis that no single AI could achieve alone.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-400">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500ms</div>
            <div className="text-gray-400">Avg Response</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
            <div className="text-gray-400">Daily Predictions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;