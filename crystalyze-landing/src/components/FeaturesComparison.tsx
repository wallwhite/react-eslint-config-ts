"use client";

interface Feature {
  category: string;
  items: {
    name: string;
    us: boolean | string;
    competitor1: boolean | string;
    competitor2: boolean | string;
  }[];
}

const features: Feature[] = [
  {
    category: "AI Capabilities",
    items: [
      {
        name: "Multiple AI Models",
        us: "10+ Models",
        competitor1: "3 Models",
        competitor2: false,
      },
      {
        name: "Real-time Analysis",
        us: true,
        competitor1: true,
        competitor2: false,
      },
      {
        name: "Natural Language Queries",
        us: true,
        competitor1: false,
        competitor2: false,
      },
      {
        name: "Pattern Recognition CV",
        us: true,
        competitor1: false,
        competitor2: false,
      },
      {
        name: "Sentiment Analysis",
        us: "1000+ sources",
        competitor1: "100+ sources",
        competitor2: "50+ sources",
      },
    ],
  },
  {
    category: "Trading Indicators",
    items: [
      {
        name: "Premium Indicators",
        us: "10 Indicators",
        competitor1: "5 Indicators",
        competitor2: "3 Indicators",
      },
      {
        name: "TradingView Integration",
        us: true,
        competitor1: true,
        competitor2: true,
      },
      {
        name: "Custom Alerts",
        us: "Unlimited",
        competitor1: "50",
        competitor2: "10",
      },
      {
        name: "Backtesting",
        us: "10 years data",
        competitor1: "5 years data",
        competitor2: "1 year data",
      },
    ],
  },
  {
    category: "Market Coverage",
    items: [
      {
        name: "Crypto Markets",
        us: "All exchanges",
        competitor1: "Top 10",
        competitor2: "Top 5",
      },
      {
        name: "Stock Markets",
        us: true,
        competitor1: true,
        competitor2: false,
      },
      {
        name: "Forex",
        us: true,
        competitor1: false,
        competitor2: true,
      },
      {
        name: "Options",
        us: true,
        competitor1: false,
        competitor2: false,
      },
    ],
  },
  {
    category: "Support & Resources",
    items: [
      {
        name: "24/7 Support",
        us: true,
        competitor1: false,
        competitor2: false,
      },
      {
        name: "Video Tutorials",
        us: "100+ videos",
        competitor1: "20+ videos",
        competitor2: false,
      },
      {
        name: "API Access",
        us: true,
        competitor1: "Limited",
        competitor2: false,
      },
      {
        name: "Mobile App",
        us: true,
        competitor1: true,
        competitor2: false,
      },
    ],
  },
];

const FeaturesComparison = () => {
  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <svg className="w-6 h-6 text-green-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      );
    }
    return <span className="text-blue-400 font-semibold">{value}</span>;
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950/50"></div>

      <div className="container-width section-padding relative">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Why Choose CrystalAIze
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Compare and <span className="gradient-text">See the Difference</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;ve built the most comprehensive AI trading platform available. See how we stack up against the competition.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[768px]">
            <div className="glass-effect rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-gray-800">
                <div className="p-6">
                  <span className="text-gray-400 text-sm">Features</span>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-xs font-semibold mb-2">
                    RECOMMENDED
                  </div>
                  <div className="text-xl font-bold">CrystalAIze</div>
                  <div className="text-gray-400 text-sm">Our Platform</div>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="text-xl font-bold text-gray-400">Competitor A</div>
                  <div className="text-gray-500 text-sm">Traditional Tools</div>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="text-xl font-bold text-gray-400">Competitor B</div>
                  <div className="text-gray-500 text-sm">Basic AI</div>
                </div>
              </div>

              {/* Features */}
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="grid grid-cols-4 bg-gray-900/30 border-b border-gray-800">
                    <div className="p-4 col-span-4">
                      <h3 className="font-semibold text-blue-400">{category.category}</h3>
                    </div>
                  </div>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="grid grid-cols-4 border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="p-4">
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <div className="p-4 text-center border-l border-gray-800/50 bg-blue-500/5">
                        {renderValue(item.us)}
                      </div>
                      <div className="p-4 text-center border-l border-gray-800/50">
                        {renderValue(item.competitor1)}
                      </div>
                      <div className="p-4 text-center border-l border-gray-800/50">
                        {renderValue(item.competitor2)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              {/* Footer */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-t border-gray-800">
                <div className="p-6">
                  <span className="text-gray-400 font-semibold">Starting Price</span>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="text-2xl font-bold gradient-text">$0</div>
                  <div className="text-sm text-gray-400">Free tier available</div>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="text-2xl font-bold text-gray-400">$99/mo</div>
                  <div className="text-sm text-gray-500">No free tier</div>
                </div>
                <div className="p-6 text-center border-l border-gray-800">
                  <div className="text-2xl font-bold text-gray-400">$149/mo</div>
                  <div className="text-sm text-gray-500">7-day trial</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">10x Faster Analysis</h3>
            <p className="text-gray-400">
              Our distributed AI infrastructure processes market data 10x faster than traditional platforms.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Bank-Level Security</h3>
            <p className="text-gray-400">
              Your data and trading strategies are protected with enterprise-grade encryption.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Unlimited Scalability</h3>
            <p className="text-gray-400">
              From day traders to institutions, our platform scales to meet your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComparison;