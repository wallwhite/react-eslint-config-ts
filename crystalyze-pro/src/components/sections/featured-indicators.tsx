"use client";

import { useState } from "react";
import { TrendingUp, Zap, Shield, Brain, Target, BarChart3, Activity, Rocket, ChevronRight } from "lucide-react";

interface Indicator {
  id: number;
  name: string;
  description: string;
  accuracy: number;
  avgProfit: number;
  signalsPerDay: number;
  icon: React.ReactNode;
  performance: number[];
  color: string;
  badge: string;
}

const indicators: Indicator[] = [
  {
    id: 1,
    name: "Whale Tracker AI",
    description: "Detects large institutional movements before they impact price",
    accuracy: 92.7,
    avgProfit: 18.4,
    signalsPerDay: 12,
    icon: <Rocket className="h-5 w-5" />,
    performance: [65, 72, 68, 85, 92, 88, 94, 98, 103, 112, 118, 127],
    color: "emerald",
    badge: "Most Popular"
  },
  {
    id: 2,
    name: "Momentum Surge Scanner",
    description: "Identifies explosive breakouts 5-10 minutes before they happen",
    accuracy: 89.3,
    avgProfit: 24.7,
    signalsPerDay: 8,
    icon: <Zap className="h-5 w-5" />,
    performance: [70, 75, 82, 79, 91, 95, 88, 102, 108, 115, 121, 134],
    color: "yellow",
    badge: "High ROI"
  },
  {
    id: 3,
    name: "Risk Shield Pro",
    description: "AI-powered stop loss that protects profits and minimizes losses",
    accuracy: 94.2,
    avgProfit: 15.2,
    signalsPerDay: 24,
    icon: <Shield className="h-5 w-5" />,
    performance: [80, 82, 85, 87, 89, 92, 94, 96, 98, 101, 104, 108],
    color: "blue",
    badge: "Best Safety"
  },
  {
    id: 4,
    name: "Neural Pattern Detector",
    description: "Deep learning model trained on 10 years of market patterns",
    accuracy: 91.5,
    avgProfit: 21.3,
    signalsPerDay: 15,
    icon: <Brain className="h-5 w-5" />,
    performance: [72, 78, 84, 88, 93, 96, 101, 105, 110, 116, 122, 129],
    color: "purple",
    badge: "AI Powered"
  },
  {
    id: 5,
    name: "Precision Entry Finder",
    description: "Calculates perfect entry points with 96% accuracy",
    accuracy: 96.1,
    avgProfit: 19.8,
    signalsPerDay: 18,
    icon: <Target className="h-5 w-5" />,
    performance: [75, 80, 83, 89, 94, 99, 103, 108, 113, 119, 125, 132],
    color: "red",
    badge: "Most Accurate"
  },
  {
    id: 6,
    name: "Volume Spike Analyzer",
    description: "Detects unusual volume patterns that precede major moves",
    accuracy: 88.9,
    avgProfit: 22.1,
    signalsPerDay: 10,
    icon: <BarChart3 className="h-5 w-5" />,
    performance: [68, 74, 80, 86, 90, 95, 100, 106, 112, 118, 124, 131],
    color: "cyan",
    badge: "Volume Expert"
  }
];

export const FeaturedIndicators = () => {
  const [selectedIndicator, setSelectedIndicator] = useState(indicators[0]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      emerald: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-400",
        border: "border-emerald-500/20"
      },
      yellow: {
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
        border: "border-yellow-500/20"
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/20"
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20"
      },
      red: {
        bg: "bg-red-500/10",
        text: "text-red-400",
        border: "border-red-500/20"
      },
      cyan: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        border: "border-cyan-500/20"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="relative bg-black py-16 md:py-20 lg:py-24">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 grid-pattern opacity-[0.01]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex">
              <div className="badge badge-blue flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5" />
                <span>AI Trading Indicators</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              6 AI Models Working{" "}
              <span className="text-gradient">24/7 For You</span>
            </h2>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Each indicator uses advanced machine learning trained on billions of data points.
              Combined, they generate <span className="text-gray-300">127+ profitable signals daily</span>.
            </p>
          </div>

          {/* Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {indicators.map((indicator) => {
              const colors = getColorClasses(indicator.color);
              const isSelected = selectedIndicator.id === indicator.id;

              return (
                <button
                  key={indicator.id}
                  onClick={() => setSelectedIndicator(indicator)}
                  className={`card card-hover p-6 text-left transition-all ${
                    isSelected ? "ring-2 ring-blue-500 border-blue-500/50" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-lg ${colors.bg} border ${colors.border}`}>
                      <div className={colors.text}>{indicator.icon}</div>
                    </div>
                    {indicator.badge && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-900 text-gray-400 border border-gray-800">
                        {indicator.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">{indicator.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{indicator.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Accuracy</p>
                      <p className={`text-sm font-semibold ${colors.text}`}>{indicator.accuracy}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Avg Profit</p>
                      <p className="text-sm font-semibold text-white">+{indicator.avgProfit}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Signals/Day</p>
                      <p className="text-sm font-semibold text-white">{indicator.signalsPerDay}</p>
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="mt-4 h-12 flex items-end gap-1">
                    {indicator.performance.map((value, index) => {
                      const height = (value / Math.max(...indicator.performance)) * 100;
                      return (
                        <div
                          key={index}
                          className={`flex-1 ${colors.bg} rounded-sm transition-all`}
                          style={{ height: `${height}%` }}
                        />
                      );
                    })}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Indicator Details */}
          <div className="card p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left Side - Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(selectedIndicator.color).bg} border ${getColorClasses(selectedIndicator.color).border}`}>
                    <div className={getColorClasses(selectedIndicator.color).text}>
                      {selectedIndicator.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedIndicator.name}</h3>
                    <p className="text-sm text-gray-500">{selectedIndicator.badge}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{selectedIndicator.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <p className="text-xs text-gray-500 mb-1">Win Rate</p>
                    <p className="text-2xl font-bold text-white">{selectedIndicator.accuracy}%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <p className="text-xs text-gray-500 mb-1">Avg Return</p>
                    <p className="text-2xl font-bold text-emerald-400">+{selectedIndicator.avgProfit}%</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                    <p className="text-xs text-gray-500 mb-1">Daily Signals</p>
                    <p className="text-2xl font-bold text-white">{selectedIndicator.signalsPerDay}</p>
                  </div>
                </div>

                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all">
                  <span>Activate This Indicator</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Right Side - Performance Chart */}
              <div className="flex-1">
                <div className="p-6 rounded-lg bg-gray-900/30 border border-gray-800">
                  <h4 className="text-sm font-medium text-gray-400 mb-4">12-Month Performance</h4>
                  <div className="h-48 flex items-end gap-2">
                    {selectedIndicator.performance.map((value, index) => {
                      const height = (value / Math.max(...selectedIndicator.performance)) * 100;
                      const colors = getColorClasses(selectedIndicator.color);
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className={`w-full ${colors.bg} rounded-t transition-all hover:opacity-80`}
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-gray-600">{index + 1}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Total Return</span>
                      <span className="text-lg font-bold text-emerald-400">+127%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-400 mb-6">
              All 6 indicators included in <span className="text-white font-semibold">Premium</span> membership
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all hover-lift">
              <span>Unlock All Indicators</span>
              <TrendingUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};