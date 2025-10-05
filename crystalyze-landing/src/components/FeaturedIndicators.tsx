"use client";

import { useState } from "react";

interface Indicator {
  id: string;
  name: string;
  description: string;
  profitIncrease: string;
  accuracy: string;
  signals: string;
  badge: string;
  features: string[];
  chartPreview: string;
}

const indicators: Indicator[] = [
  {
    id: "momentum-pro",
    name: "Momentum Pro AI",
    description: "Advanced momentum oscillator powered by machine learning to identify trend reversals with unprecedented accuracy.",
    profitIncrease: "+47%",
    accuracy: "92%",
    signals: "15-20/day",
    badge: "MOST POPULAR",
    features: [
      "AI-powered trend detection",
      "Multi-timeframe analysis",
      "Risk management alerts",
      "Entry/exit signals"
    ],
    chartPreview: "momentum",
  },
  {
    id: "volume-flow",
    name: "Smart Volume Flow",
    description: "Institutional-grade volume analysis that reveals smart money movements and accumulation patterns.",
    profitIncrease: "+38%",
    accuracy: "89%",
    signals: "8-12/day",
    badge: "INSTITUTIONAL",
    features: [
      "Smart money tracking",
      "Volume divergence alerts",
      "Accumulation zones",
      "Whale movement detection"
    ],
    chartPreview: "volume",
  },
  {
    id: "neural-bands",
    name: "Neural Bollinger+",
    description: "Enhanced Bollinger Bands with neural network predictions for volatility breakouts and mean reversion.",
    profitIncrease: "+52%",
    accuracy: "94%",
    signals: "10-15/day",
    badge: "HIGHEST ROI",
    features: [
      "Volatility prediction",
      "Squeeze detection",
      "Dynamic band adjustment",
      "Breakout probability"
    ],
    chartPreview: "bands",
  },
];

const FeaturedIndicators = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const ChartPreview = () => {
    const generateBars = () => {
      return Array.from({ length: 20 }, () => ({
        height: Math.random() * 60 + 20,
        color: Math.random() > 0.5 ? "blue" : "gray",
      }));
    };

    const bars = generateBars();

    return (
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="flex items-end justify-around h-full p-4">
          {bars.map((bar, i) => (
            <div
              key={i}
              className={`w-2 bg-gradient-to-t ${
                bar.color === "blue"
                  ? "from-blue-600 to-blue-400"
                  : "from-gray-600 to-gray-400"
              }`}
              style={{ height: `${bar.height}%` }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 relative">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            TradingView Integration
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Premium Indicators That{" "}
            <span className="gradient-text">Increase Profitability</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Battle-tested indicators used by professional traders to consistently outperform the market.
            Each indicator is powered by AI and backtested on millions of data points.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <div
              key={indicator.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(indicator.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-xl p-6 h-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 border border-gray-800 hover:border-blue-500/50">
                <ChartPreview />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{indicator.name}</h3>
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full">
                      {indicator.badge}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 min-h-[60px]">{indicator.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {indicator.profitIncrease}
                      </div>
                      <div className="text-xs text-gray-500">Avg Profit</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {indicator.accuracy}
                      </div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {indicator.signals}
                      </div>
                      <div className="text-xs text-gray-500">Signals</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {indicator.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-200">
                    Add to TradingView
                  </button>
                </div>
              </div>

              {hoveredCard === indicator.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-xl -z-10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All indicators work seamlessly with TradingView Pro, Plus, and Premium accounts
          </p>
          <div className="flex justify-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/api/placeholder/100/30" alt="TradingView" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/api/placeholder/100/30" alt="MT4" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/api/placeholder/100/30" alt="MT5" className="h-8 opacity-50 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIndicators;