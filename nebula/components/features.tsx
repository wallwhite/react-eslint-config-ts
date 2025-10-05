"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  LineChart,
  BarChart2,
  Bell,
  Shield,
  TrendingUp,
  Activity,
  History,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Multi-Model AI Analysis",
    description: "Access GPT-4, Claude Opus, and Gemini Pro for comprehensive market insights from multiple AI perspectives.",
    gradient: "from-blue-500 to-cyan-500",
    size: "large",
  },
  {
    icon: LineChart,
    title: "Real-Time Market Data",
    description: "Live price feeds, order book depth, and institutional flow data updated every second.",
    gradient: "from-purple-500 to-pink-500",
    size: "medium",
  },
  {
    icon: BarChart2,
    title: "Advanced Charting Tools",
    description: "TradingView integration with 100+ indicators and drawing tools.",
    gradient: "from-green-500 to-emerald-500",
    size: "medium",
  },
  {
    icon: Activity,
    title: "Portfolio Tracking",
    description: "Monitor your entire portfolio with real-time P&L, performance analytics, and risk metrics.",
    gradient: "from-orange-500 to-red-500",
    size: "medium",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "AI-powered risk assessment, position sizing calculator, and stop-loss optimizer.",
    gradient: "from-yellow-500 to-orange-500",
    size: "medium",
  },
  {
    icon: Bell,
    title: "Automated Alerts",
    description: "Custom price alerts, indicator signals, and AI-detected opportunities sent to your device instantly.",
    gradient: "from-indigo-500 to-purple-500",
    size: "large",
  },
  {
    icon: TrendingUp,
    title: "TradingView Integration",
    description: "Seamlessly sync indicators and strategies with your TradingView account.",
    gradient: "from-pink-500 to-rose-500",
    size: "medium",
  },
  {
    icon: History,
    title: "Historical Backtesting",
    description: "Test strategies on years of historical data with detailed performance reports and optimization.",
    gradient: "from-cyan-500 to-blue-500",
    size: "medium",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Trade Smarter
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for both beginners and professional traders
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large Feature 1 */}
          <Card className="md:col-span-2 lg:col-span-2 group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[0].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${features[0].gradient} flex items-center justify-center mb-4`}>
                  {(() => {
                    const Icon = features[0].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-3">{features[0].title}</h3>
                <p className="text-muted-foreground">{features[0].description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Medium Features */}
          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[1].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[1].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[1].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[1].title}</h3>
              <p className="text-sm text-muted-foreground">{features[1].description}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[2].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[2].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[2].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[2].title}</h3>
              <p className="text-sm text-muted-foreground">{features[2].description}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[3].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[3].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[3].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[3].title}</h3>
              <p className="text-sm text-muted-foreground">{features[3].description}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[4].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[4].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[4].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[4].title}</h3>
              <p className="text-sm text-muted-foreground">{features[4].description}</p>
            </CardContent>
          </Card>

          {/* Large Feature 2 */}
          <Card className="md:col-span-2 lg:col-span-2 group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[5].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-8 h-full flex flex-col justify-between relative z-10">
              <div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${features[5].gradient} flex items-center justify-center mb-4`}>
                  {(() => {
                    const Icon = features[5].icon;
                    return <Icon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold mb-3">{features[5].title}</h3>
                <p className="text-muted-foreground">{features[5].description}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[6].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[6].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[6].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[6].title}</h3>
              <p className="text-sm text-muted-foreground">{features[6].description}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${features[7].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <CardContent className="p-6 h-full flex flex-col relative z-10">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${features[7].gradient} flex items-center justify-center mb-4`}>
                {(() => {
                  const Icon = features[7].icon;
                  return <Icon className="w-5 h-5 text-white" />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-2">{features[7].title}</h3>
              <p className="text-sm text-muted-foreground">{features[7].description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
