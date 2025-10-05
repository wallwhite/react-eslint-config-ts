"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { Send, Lock, Loader2, TrendingUp, Brain } from "lucide-react";

interface PreviewExample {
  id: string;
  label: string;
  prompt: string;
  model: string;
  tool: string;
  response: string;
}

const previewExamples: PreviewExample[] = [
  {
    id: "btc-trend",
    label: "Analyze Bitcoin Trend",
    prompt: "Analyze the current Bitcoin price trend and provide insights on potential entry and exit points based on technical indicators and market sentiment.",
    model: "gpt-4",
    tool: "technical",
    response: `Based on comprehensive analysis of Bitcoin's current market position:

**Current Market Status:**
• Price: $67,234 (+3.2% in 24h)
• RSI: 62.4 (Neutral-Bullish)
• MACD: Bullish crossover detected
• Volume: Above average (+18% vs 7-day MA)

**Technical Analysis:**
• Strong support at $65,000 level
• Resistance approaching at $69,500
• Fibonacci 0.618 retracement completed
• 50-day MA trending upward, confirming bullish momentum

**Market Sentiment:**
• Fear & Greed Index: 68 (Greed)
• Social sentiment: Positive (72% bullish mentions)
• Institutional inflows: $124M in last 7 days

**Trading Recommendations:**
• Entry Point: Current levels or dip to $66,000
• Take Profit 1: $69,000 (conservative)
• Take Profit 2: $72,500 (aggressive)
• Stop Loss: $64,800 (below key support)

**Risk Assessment:** Moderate - Consider position sizing at 2-3% of portfolio`
  },
  {
    id: "nvda-sentiment",
    label: "Market Sentiment: NVDA",
    prompt: "What's the current market sentiment for NVIDIA stock? Include analysis from recent news, social media trends, and institutional activity.",
    model: "claude-opus",
    tool: "sentiment",
    response: `NVIDIA (NVDA) Sentiment Analysis - Real-time Overview:

**Overall Sentiment Score: 8.2/10 (Very Bullish)**

**News Sentiment (Last 48 hours):**
• 76% Positive articles
• Major catalysts: New AI chip announcement, strong earnings outlook
• Analyst upgrades: 3 new price target increases (avg: $892)
• Key headline: "NVIDIA dominates AI infrastructure market with 85% share"

**Social Media Trends:**
• Twitter mentions: 12.4K (↑45% vs last week)
• Reddit WSB sentiment: Bullish (82% positive)
• StockTwits mood: Very Bullish (71% bulls vs 29% bears)
• Trending hashtags: #NVDA, #AIRevolution, #ChipStocks

**Institutional Activity:**
• Net institutional buying: $2.3B in last 5 days
• 13F filings show increased positions by major hedge funds
• Options flow: Heavy call buying at $900 strike (March expiry)

**Analyst Consensus:**
• 34 Buy ratings, 3 Hold, 0 Sell
• Average price target: $875 (23% upside)
• Revenue growth forecast: 94% YoY

**Recommendation:** Strong momentum with institutional backing. Current sentiment extremely positive, but watch for potential profit-taking near $900 resistance.`
  },
  {
    id: "eth-prediction",
    label: "ETH Price Prediction",
    prompt: "Provide a price prediction for Ethereum over the next 30 days using AI models and historical data patterns.",
    model: "gpt-4o-mini",
    tool: "prediction",
    response: `Ethereum 30-Day Price Prediction Analysis:

**Current Price:** $3,456 | **Date:** Jan 4, 2025

**AI Model Predictions:**
• Neural Network Model: $3,890 (±5%)
• LSTM Time Series: $3,745 (±7%)
• Ensemble Model: $3,812 (±4%)
• Confidence Level: 73%

**Price Targets:**
• Conservative (25% probability): $3,600 - $3,750
• Base Case (50% probability): $3,750 - $3,950
• Bullish (25% probability): $3,950 - $4,200

**Key Factors Influencing Prediction:**
• Upcoming Dencun upgrade (major catalyst)
• Historical January performance (+12% avg)
• ETF approval speculation building
• DeFi TVL increasing (+8% monthly)

**Technical Pattern Recognition:**
• Cup & Handle formation completing (target: $4,100)
• Bullish divergence on 4H chart
• Golden cross imminent on daily timeframe

**Risk Factors:**
• Macro uncertainty (Fed policy)
• Potential profit-taking after recent rally
• Bitcoin correlation dependency (0.82)

**Probability Distribution:**
• Above $4,000: 35%
• $3,600-$4,000: 52%
• Below $3,600: 13%

**Recommended Strategy:** Gradual accumulation on dips to $3,350-$3,400. Target exit near $3,900-$4,000 range. Set trailing stop at 8%.`
  },
  {
    id: "portfolio-risk",
    label: "Portfolio Risk Analysis",
    prompt: "Analyze my crypto portfolio for risk exposure and provide diversification recommendations. Portfolio: 40% BTC, 30% ETH, 15% SOL, 10% AVAX, 5% MATIC",
    model: "gpt-4",
    tool: "risk",
    response: `Portfolio Risk Assessment & Optimization Report:

**Current Portfolio Composition:**
• Bitcoin (BTC): 40% - $20,000
• Ethereum (ETH): 30% - $15,000
• Solana (SOL): 15% - $7,500
• Avalanche (AVAX): 10% - $5,000
• Polygon (MATIC): 5% - $2,500
• Total Value: $50,000

**Risk Metrics:**
• Portfolio Beta: 1.24 (Higher volatility than BTC)
• Sharpe Ratio: 1.82 (Good risk-adjusted returns)
• Max Drawdown (90d): -18.5%
• Value at Risk (95%): -$4,200 daily

**Risk Analysis:**
⚠️ **High Concentration Risk**
• Top 2 holdings = 70% of portfolio
• Layer-1 exposure: 95% (overweight)
• Geographic risk: Minimal (well distributed)

⚠️ **Correlation Risk**
• ETH-SOL correlation: 0.78 (High)
• AVAX-MATIC correlation: 0.72 (High)
• All assets move together in market crashes

✅ **Strengths:**
• Strong quality assets with fundamentals
• Exposure to leading L1 ecosystems
• No exposure to high-risk meme coins

**Optimization Recommendations:**

1. **Reduce Concentration (Priority: High)**
   • Decrease BTC to 30% (-10%)
   • Decrease ETH to 25% (-5%)

2. **Add Diversification (Priority: High)**
   • Add DeFi blue-chips: 10% (AAVE, UNI)
   • Add AI tokens: 5% (FET, RNDR)
   • Add stablecoins: 10% (USDC earning yield)

3. **Risk Management:**
   • Set stop-losses at -15% for altcoins
   • Take profits at +50% and rebalance
   • Maintain 10% cash for opportunities

**Optimized Portfolio:**
BTC 30% | ETH 25% | SOL 12% | DeFi 10% | Stables 10% | AVAX 7% | AI 3% | MATIC 3%

**Expected Outcomes:**
• Reduced volatility: -22%
• Improved Sharpe ratio: 2.1
• Better downside protection
• Maintained upside potential`
  },
  {
    id: "btc-eth-compare",
    label: "Compare BTC vs ETH",
    prompt: "Compare Bitcoin and Ethereum as investments for the next quarter. Which one has better risk-reward potential?",
    model: "claude-opus",
    tool: "technical",
    response: `Bitcoin vs Ethereum: Q1 2025 Investment Comparison

**Performance Metrics:**

BITCOIN (BTC)
• Current Price: $67,234
• Market Cap: $1.32T
• 90-day Return: +18.2%
• Volatility (90d): 42%
• Correlation to S&P 500: 0.45

ETHEREUM (ETH)
• Current Price: $3,456
• Market Cap: $415B
• 90-day Return: +28.7%
• Volatility (90d): 56%
• Correlation to S&P 500: 0.38

**Fundamental Analysis:**

BITCOIN ⭐⭐⭐⭐
• Digital gold narrative strengthening
• Institutional adoption increasing (BlackRock ETF flows)
• Halving effects still playing out
• Limited utility beyond store of value
• Regulatory clarity improving

ETHEREUM ⭐⭐⭐⭐⭐
• Dencun upgrade = major catalyst
• DeFi ecosystem growing (+$45B TVL)
• NFT market recovering
• ETF approval speculation
• Strong developer activity (#1 blockchain)

**Technical Outlook Q1 2025:**

BTC: Bullish ✅
• Target: $72,000 - $78,000
• Support: $65,000 - $62,000
• Key resistance: $69,500
• Probability of ATH: 45%

ETH: Very Bullish ✅✅
• Target: $4,200 - $4,800
• Support: $3,200 - $3,000
• Key resistance: $3,800
• Probability of ATH: 62%

**Risk-Reward Analysis:**

BITCOIN
• Risk Score: 6/10 (Moderate)
• Reward Potential: +16% (Conservative)
• Best for: Risk-averse, long-term holders
• Downside protection: Better in bear markets

ETHEREUM
• Risk Score: 7.5/10 (Moderate-High)
• Reward Potential: +38% (Aggressive)
• Best for: Growth-focused investors
• Upside leverage: Higher beta to market

**Winner: ETHEREUM (for Q1 2025)**

**Reasoning:**
1. More catalysts (upgrade, ETF, DeFi growth)
2. Higher growth potential (+38% vs +16%)
3. Stronger on-chain metrics
4. Better risk-reward ratio (2.1x vs 1.4x)

**Recommended Allocation:**
• Aggressive: 60% ETH, 40% BTC
• Balanced: 50% ETH, 50% BTC
• Conservative: 40% ETH, 60% BTC

**Note:** Both are solid investments. BTC offers stability, ETH offers growth. Diversify between both for optimal exposure.`
  },
  {
    id: "spy-technicals",
    label: "Technical Indicators: SPY",
    prompt: "Show me all technical indicators for SPY (S&P 500 ETF) and what they're signaling for short-term trading.",
    model: "gpt-4",
    tool: "technical",
    response: `SPY Technical Indicators - Comprehensive Analysis

**Current Price:** $478.45 | **Change:** +0.8% | **Volume:** 78.2M

**TREND INDICATORS:**

Moving Averages:
• 20 SMA: $476.20 - Price above (Bullish ✅)
• 50 SMA: $472.80 - Price above (Bullish ✅)
• 200 SMA: $458.30 - Price above (Bullish ✅)
• Signal: Strong uptrend confirmed

**MOMENTUM INDICATORS:**

RSI (14): 58.4
• Zone: Neutral (40-60)
• Signal: Room for upside ✅
• Divergence: None

MACD (12,26,9):
• MACD Line: +2.45
• Signal Line: +1.92
• Histogram: +0.53 (Expanding)
• Signal: Bullish crossover ✅

Stochastic (14,3,3):
• %K: 64.2
• %D: 58.7
• Signal: Bullish, not overbought ✅

**VOLATILITY INDICATORS:**

Bollinger Bands (20,2):
• Upper: $482.50
• Middle: $476.20
• Lower: $469.90
• Price Position: Mid-upper band
• Signal: Potential breakout setup ✅

ATR (14): $3.85
• Volatility: Normal range
• Trend: Decreasing (consolidation)

**VOLUME INDICATORS:**

OBV (On Balance Volume):
• Trend: Rising ✅
• Signal: Accumulation phase

Volume Profile:
• High Volume Node: $476-$478
• POC (Point of Control): $477
• Signal: Strong support zone ✅

**PATTERN RECOGNITION:**

Chart Pattern: Ascending triangle
• Resistance: $480
• Support: $474
• Breakout target: $486

Candlestick: Bullish engulfing (forming)
• Signal: Continuation likely ✅

**SUPPORT & RESISTANCE:**

Resistance Levels:
• R3: $485.00 (Strong)
• R2: $482.50 (Medium)
• R1: $480.00 (Immediate)

Support Levels:
• S1: $476.00 (Immediate)
• S2: $472.50 (Medium)
• S3: $468.00 (Strong)

**TRADING SIGNALS:**

Overall Signal: BULLISH ✅
• Bullish indicators: 11/13
• Neutral indicators: 2/13
• Bearish indicators: 0/13

**Short-Term Strategy (1-5 days):**

Entry: $478-$479
Target 1: $482 (Conservative)
Target 2: $486 (Aggressive)
Stop Loss: $475.50

Risk/Reward: 1:3 (Excellent)

**Confidence Level:** 78% bullish bias

**Key Levels to Watch:**
• Break above $480 = Acceleration to $486
• Break below $476 = Retest $472 support

**Recommendation:** BUY on dips near $477-$478. Strong technical setup for short-term gains.`
  }
];

export const AIPreview = () => {
  const [selectedExample, setSelectedExample] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [aiModel, setAiModel] = useState("gpt-4");
  const [analysisTool, setAnalysisTool] = useState("technical");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [displayedResponse, setDisplayedResponse] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const currentExample = previewExamples.find(ex => ex.id === selectedExample);

  const handleTabChange = (value: string) => {
    const example = previewExamples.find(ex => ex.id === value);
    if (example) {
      setSelectedExample(value);
      setPrompt(example.prompt);
      setAiModel(example.model);
      setAnalysisTool(example.tool);
      setIsInputDisabled(false);
    }
  };

  const handleSendClick = () => {
    if (!prompt.trim() || !currentExample) return;

    setIsDrawerOpen(true);
    setIsAnalyzing(true);
    setDisplayedResponse("");

    // Simulate streaming response
    const fullResponse = currentExample.response;
    let index = 0;

    const streamInterval = setInterval(() => {
      if (index < fullResponse.length) {
        setDisplayedResponse(fullResponse.substring(0, index + 1));
        index++;
      } else {
        clearInterval(streamInterval);
        setIsAnalyzing(false);
      }
    }, 15);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        {/* Preview Tabs */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Try a preview example:
          </h3>
          <Tabs value={selectedExample} onValueChange={handleTabChange}>
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto bg-transparent">
              {previewExamples.map((example) => (
                <TabsTrigger
                  key={example.id}
                  value={example.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {example.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* AI Model and Tool Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">AI Model</label>
            <Select value={aiModel} onValueChange={setAiModel} disabled={isInputDisabled}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="claude-opus">Claude Opus</SelectItem>
                <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4o-mini</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Analysis Tool</label>
            <Select value={analysisTool} onValueChange={setAnalysisTool} disabled={isInputDisabled}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">Technical Analysis</SelectItem>
                <SelectItem value="sentiment">Sentiment Analysis</SelectItem>
                <SelectItem value="prediction">Price Prediction</SelectItem>
                <SelectItem value="risk">Risk Assessment</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Input Area */}
        <div className="space-y-4">
          <div className="relative">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask Nebula to analyze any crypto or stock..."
              className="min-h-[120px] pr-12 resize-none"
              disabled={isInputDisabled}
            />
            {isInputDisabled && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-md">
                <p className="text-sm text-muted-foreground">
                  Click a preview example above to try
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              {isInputDisabled ? (
                "Select an example to enable input"
              ) : (
                <>
                  <Brain className="w-3 h-3 inline mr-1" />
                  Using {aiModel.toUpperCase()} with{" "}
                  {analysisTool === "technical" ? "Technical" : analysisTool === "sentiment" ? "Sentiment" : analysisTool === "prediction" ? "Price Prediction" : "Risk"} Analysis
                </>
              )}
            </p>
            <Button
              onClick={handleSendClick}
              disabled={isInputDisabled || !prompt.trim()}
              className="bg-primary hover:bg-primary/90"
            >
              <Send className="w-4 h-4 mr-2" />
              Analyze
            </Button>
          </div>
        </div>
      </Card>

      {/* Response Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="h-[80vh]">
          <div className="mx-auto w-full max-w-4xl h-full overflow-auto p-6">
            {/* Analysis Header */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">AI Analysis</h3>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  <Brain className="w-3 h-3 mr-1" />
                  {aiModel.toUpperCase()}
                </Badge>
              </div>

              {/* Loading States */}
              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Searching web for latest data...</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Running {analysisTool} analysis...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Response Content */}
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-foreground bg-transparent border-none p-0">
                {displayedResponse}
              </pre>
            </div>

            {/* Placeholder Chart */}
            {!isAnalyzing && displayedResponse && (
              <div className="mt-6 p-6 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium">Interactive Chart</h4>
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <div className="h-48 bg-gradient-to-b from-blue-500/20 to-transparent rounded-md flex items-end justify-around px-4 pb-4">
                  {[45, 52, 48, 65, 58, 72, 68, 75, 82, 78, 88, 95].map((height, i) => (
                    <div
                      key={i}
                      className="w-8 bg-blue-500/50 rounded-t transition-all hover:bg-blue-500/80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Paywall */}
            {!isAnalyzing && displayedResponse && (
              <div className="mt-8 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent backdrop-blur-sm z-10 flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <Lock className="w-12 h-12 mx-auto text-blue-400" />
                    <h4 className="text-xl font-bold">Unlock Full Analysis</h4>
                    <p className="text-muted-foreground max-w-md">
                      Get complete analysis, real-time alerts, and unlimited AI requests with Premium
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Upgrade to Premium
                    </Button>
                  </div>
                </div>
                <div className="blur-sm">
                  <p className="text-muted-foreground">
                    Additional analysis includes advanced risk metrics, correlation analysis,
                    historical backtesting results, and personalized trading strategies based on
                    your risk profile and investment goals. Our AI also provides real-time
                    monitoring and automated alerts when key levels are reached.
                  </p>
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
