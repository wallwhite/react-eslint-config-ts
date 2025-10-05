"use client";

import { useEffect, useState } from "react";
import { X, TrendingUp, AlertCircle, ChevronRight } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
  charts?: ChartData[];
  indicators?: IndicatorData[];
}

interface ChartData {
  type: "candlestick" | "line";
  data: number[];
  label: string;
}

interface IndicatorData {
  name: string;
  value: string;
  confidence: number;
  trend: "up" | "down" | "neutral";
}

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt: string;
}

const mockResponses: Record<string, Message> = {
  "Analyze Bitcoin price action for next 24 hours": {
    role: "assistant",
    content: `Based on advanced AI analysis of Bitcoin's current market dynamics:

**24-Hour Price Projection**
Current Price: $67,453
Predicted Range: $68,200 - $69,800
Confidence Level: 89.3%

**Key Technical Signals**
• RSI showing oversold bounce at 42.3
• MACD crossover confirmed bullish momentum
• Volume surge of 147% in last 4 hours
• Strong support established at $66,800

**AI Pattern Recognition**
Detected "Golden Cross" formation on 4H chart with 92% historical success rate for 5-15% gains within 48 hours.

**Risk Assessment: LOW-MEDIUM**
Stop Loss: $66,500 | Take Profit: $69,500

💎 **Premium Insight Preview**
Our AI has identified a rare "Whale Accumulation Pattern" that historically precedes...

[Upgrade to Premium for full analysis and real-time alerts]`,
    charts: [
      { type: "candlestick", data: [67453, 68200, 66800, 69800], label: "BTC/USD 24H" }
    ],
    indicators: [
      { name: "Buy Signal Strength", value: "87%", confidence: 87, trend: "up" },
      { name: "Market Sentiment", value: "Bullish", confidence: 91, trend: "up" },
      { name: "Volatility Index", value: "Medium", confidence: 78, trend: "neutral" }
    ]
  },
  "Compare Ethereum vs Solana investment potential": {
    role: "assistant",
    content: `**AI-Powered Comparative Analysis**

**Ethereum (ETH)**
Current Price: $3,245
30-Day Projection: $3,850-$4,200
ROI Potential: +29.4%
Risk Score: 3.2/10

**Solana (SOL)**
Current Price: $142
30-Day Projection: $175-$195
ROI Potential: +37.3%
Risk Score: 5.8/10

**AI Recommendation: SOLANA**
• Higher velocity momentum (SOL: +247% vs ETH: +89% YTD)
• Superior scalability metrics attracting institutional flow
• TVL growth rate 3.2x faster than Ethereum
• Next catalyst: Major DEX launch in 72 hours

**Smart Money Movement**
Whales moving $847M from ETH → SOL in past 7 days
Institutional accumulation pattern detected

**Optimal Portfolio Split**
70% SOL | 30% ETH for maximum risk-adjusted returns

[Unlock Premium for entry/exit signals and whale tracking]`,
    indicators: [
      { name: "ETH Score", value: "7.8/10", confidence: 82, trend: "up" },
      { name: "SOL Score", value: "9.2/10", confidence: 94, trend: "up" },
      { name: "Winner", value: "SOLANA", confidence: 88, trend: "up" }
    ]
  },
  "Find undervalued altcoins with 10x potential": {
    role: "assistant",
    content: `**🔥 AI-Discovered 10x Gems (High Conviction)**

**1. INJECTIVE (INJ)**
Market Cap: $2.3B | Current: $24.50
AI Target: $245-$310 (10-12.6x)
Catalyst: DeFi derivatives monopoly forming

**2. RENDER (RNDR)**
Market Cap: $2.8B | Current: $7.30
AI Target: $73-$95 (10-13x)
Catalyst: AI/GPU demand explosion

**3. KASPA (KAS)**
Market Cap: $3.1B | Current: $0.13
AI Target: $1.30-$1.80 (10-13.8x)
Catalyst: Next-gen PoW breakthrough

**Hidden Gem Alert 🚨**
Our AI detected unusual accumulation in [REDACTED]
Smart money loading: $124M last 48hrs
Exchange supply: -47% (massive shortage)

**Why These Will 10x:**
• All showing "Coiled Spring" pattern (97% success rate)
• Whale accumulation exceeding 2021 bull run levels
• Technical breakouts imminent (2-5 days)

[Premium members already positioned - Join now for real-time entries]`,
    indicators: [
      { name: "10x Probability", value: "94%", confidence: 94, trend: "up" },
      { name: "Risk/Reward", value: "1:12", confidence: 89, trend: "up" },
      { name: "Timing", value: "NOW", confidence: 96, trend: "up" }
    ]
  },
  "Technical analysis for AAPL stock trend": {
    role: "assistant",
    content: `**AAPL Technical Analysis - AI Precision Report**

**Current Status**
Price: $189.42
52-Week Range: $164.08 - $199.62
AI Fair Value: $205.80

**Trend Analysis**
Primary: BULLISH (Confidence: 91%)
Intermediate: Consolidation breakout imminent
Support: $186.20 | Resistance: $192.50

**AI Pattern Detection**
• Cup & Handle formation 87% complete
• Institutional accumulation zone active
• Options flow: $2.3B bullish sweep detected
• Earnings catalyst in 14 days

**Key Indicators**
RSI: 58.4 (Neutral-Bullish)
MACD: Bullish crossover confirmed
Volume: +34% above 20-day average

**AI Projection**
7-Day Target: $194.50
30-Day Target: $208.20
Confidence: 88.7%

**Smart Entry Strategy**
Buy Zone: $188.50 - $189.80
Stop Loss: $186.00
Take Profit 1: $195 | TP2: $205

[Premium: Real-time alerts + Options flow data]`,
    charts: [
      { type: "line", data: [185, 187, 189, 186, 189.42, 192, 194], label: "AAPL 7-Day" }
    ],
    indicators: [
      { name: "Trend Strength", value: "Strong", confidence: 91, trend: "up" },
      { name: "Buy Rating", value: "8.9/10", confidence: 88, trend: "up" },
      { name: "Momentum", value: "Building", confidence: 84, trend: "up" }
    ]
  },
  "Risk assessment for my crypto portfolio": {
    role: "assistant",
    content: `**Portfolio Risk Analysis - AI Deep Scan**

**Overall Risk Score: 6.8/10 (MODERATE-HIGH)**

**Risk Breakdown**
• Market Risk: 7.2/10 (High correlation exposure)
• Liquidity Risk: 4.5/10 (Acceptable)
• Concentration Risk: 8.1/10 (Too concentrated!)
• Smart Contract Risk: 5.9/10 (Medium)

**Critical Warnings 🚨**
1. 68% portfolio in high-volatility assets
2. No stablecoin hedge detected
3. Overexposed to single sector (DeFi: 73%)

**AI Optimization Recommendations**
• Reduce BTC allocation by 15%
• Add 20% stablecoins for volatility buffer
• Diversify into RWA tokens (12% allocation)
• Exit Position: LUNA Classic (99.2% loss probability)

**Predicted Portfolio Performance**
Current Setup: -23% to +45% (30 days)
Optimized Setup: -8% to +52% (30 days)
Risk-Adjusted Return: +147% improvement

**Black Swan Protection**
AI detected 3 potential market crash scenarios
Hedge strategy: PUT options on BTC at $62k

[Get personalized rebalancing alerts with Premium]`,
    indicators: [
      { name: "Risk Level", value: "6.8/10", confidence: 92, trend: "down" },
      { name: "Optimization", value: "Required", confidence: 88, trend: "neutral" },
      { name: "30D Outlook", value: "Cautious", confidence: 79, trend: "neutral" }
    ]
  },
  "Identify momentum breakout patterns": {
    role: "assistant",
    content: `**🚀 LIVE Momentum Breakouts Detected**

**IMMEDIATE ACTION ALERTS**

**1. AVAX - EXPLOSIVE BREAKOUT NOW**
Pattern: Ascending Triangle Breakout
Momentum Score: 94/100
Volume Surge: +420%
Target: +35% in 48-72 hours
Entry: $38.20 | Stop: $36.50

**2. ATOM - GOLDEN CROSS CONFIRMED**
Pattern: Bullish Flag Completion
Momentum Score: 91/100
Institutional Flow: $124M inflow
Target: +28% in 5-7 days
Entry: $11.45 | Stop: $10.80

**3. FTM - ACCUMULATION BREAKOUT**
Pattern: Wyckoff Spring Reversal
Momentum Score: 89/100
Short Squeeze Potential: HIGH
Target: +42% in 3-5 days
Entry: $0.72 | Stop: $0.68

**AI MOMENTUM SCANNER**
• 47 patterns monitored real-time
• 89.3% accuracy on breakout calls
• Average gain: +37.2% per signal

**Next Breakouts (2-6 hours)**
[PREMIUM] - 3 coins loading...
[PREMIUM] - Whale accumulation detected...

**Risk Warning**: Momentum trades require precise timing

[Join Premium for instant breakout alerts + Auto-Trading]`,
    indicators: [
      { name: "Active Breakouts", value: "3", confidence: 94, trend: "up" },
      { name: "Success Rate", value: "89.3%", confidence: 89, trend: "up" },
      { name: "Avg Gain", value: "+37.2%", confidence: 87, trend: "up" }
    ]
  }
};

const TypingAnimation = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 15);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, onComplete]);

  return <div className="whitespace-pre-wrap">{displayedText}</div>;
};

export const AIChatDrawer = ({ isOpen, onClose, initialPrompt }: AIChatDrawerProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

  useEffect(() => {
    if (isOpen && initialPrompt) {
      setMessages([{ role: "user", content: initialPrompt }]);
      setIsTyping(true);
      setShowUpgradePrompt(false);

      const timeout = setTimeout(() => {
        const response = mockResponses[initialPrompt] || {
          role: "assistant",
          content: "Analyzing your request with advanced AI models...",
          indicators: []
        };
        setMessages(prev => [...prev, response]);
        setIsTyping(false);

        setTimeout(() => {
          setShowUpgradePrompt(true);
        }, 3000);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, initialPrompt]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-black border-l border-emerald-500/20 shadow-2xl shadow-emerald-500/10 overflow-hidden">
        {/* Header */}
        <div className="relative border-b border-emerald-500/20 bg-black/50 backdrop-blur-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">CrystalAIze Analysis</h3>
              <p className="text-sm text-emerald-400 mt-1">Powered by Advanced AI Models</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Live indicator */}
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs text-emerald-400">LIVE</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[calc(100vh-180px)] overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] ${message.role === "user" ? "order-2" : ""}`}>
                {message.role === "user" ? (
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 rounded-2xl rounded-tr-sm">
                    {message.content}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl rounded-tl-sm">
                      {isTyping && index === messages.length - 1 ? (
                        <TypingAnimation text={message.content} />
                      ) : (
                        <div
                          className="prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{
                            __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-emerald-400">$1</strong>')
                              .replace(/\n/g, '<br />')
                              .replace(/•/g, '<span class="text-emerald-500">•</span>')
                          }}
                        />
                      )}
                    </div>

                    {/* Indicators */}
                    {message.indicators && message.indicators.length > 0 && (
                      <div className="grid grid-cols-1 gap-3">
                        {message.indicators.map((indicator, idx) => (
                          <div key={idx} className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-400">{indicator.name}</span>
                              <div className="flex items-center gap-2">
                                <span className={`text-lg font-bold ${
                                  indicator.trend === "up" ? "text-emerald-400" :
                                  indicator.trend === "down" ? "text-red-400" : "text-yellow-400"
                                }`}>
                                  {indicator.value}
                                </span>
                                <TrendingUp className={`w-4 h-4 ${
                                  indicator.trend === "up" ? "text-emerald-400 rotate-0" :
                                  indicator.trend === "down" ? "text-red-400 rotate-180" : "text-yellow-400 rotate-90"
                                }`} />
                              </div>
                            </div>
                            <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all duration-1000 ${
                                  indicator.trend === "up" ? "bg-gradient-to-r from-emerald-500 to-emerald-400" :
                                  indicator.trend === "down" ? "bg-gradient-to-r from-red-500 to-red-400" :
                                  "bg-gradient-to-r from-yellow-500 to-yellow-400"
                                }`}
                                style={{ width: `${indicator.confidence}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Charts placeholder */}
                    {message.charts && message.charts.length > 0 && (
                      <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl">
                        <div className="h-32 flex items-center justify-center">
                          <div className="text-emerald-400 text-sm">
                            📊 Interactive Chart Available in Premium
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-sm">AI is analyzing...</span>
            </div>
          )}

          {/* Upgrade prompt */}
          {showUpgradePrompt && !isTyping && (
            <div className="mt-6 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-emerald-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Unlock Full AI Power</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Get real-time alerts, advanced charts, portfolio tracking, and unlimited AI analysis
                  </p>
                  <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                    Upgrade to Premium
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};