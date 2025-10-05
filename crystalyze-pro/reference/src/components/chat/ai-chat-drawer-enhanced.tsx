"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
  Activity,
  AlertCircle,
  BarChart3,
  Bot,
  Brain,
  ChevronRight,
  Send,
  Sparkles,
  StopCircle,
  TrendingUp,
  X,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
  streamingContent?: string;
  indicators?: IndicatorData[];
  charts?: ChartData[];
  analysisSteps?: string[];
}

interface ChartData {
  type: "candlestick" | "line" | "volume";
  data: number[];
  label: string;
}

interface IndicatorData {
  name: string;
  value: string;
  confidence: number;
  trend: "up" | "down" | "neutral";
  description?: string;
}

interface AIChatDrawerEnhancedProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt: string;
}

const aiResponseTemplates: Record<
  string,
  {
    acknowledgment: string;
    steps: string[];
    content: string;
    indicators?: IndicatorData[];
    charts?: ChartData[];
  }
> = {
  "Analyze Bitcoin price action for next 24 hours": {
    acknowledgment:
      "I'll analyze Bitcoin's current market position and project the next 24-hour price action for you...",
    steps: [
      "Examining recent price action and volume patterns...",
      "Analyzing technical indicators and momentum signals...",
      "Checking on-chain metrics and whale movements...",
      "Correlating with market sentiment data...",
      "Generating probability models for price targets...",
    ],
    content: `Based on my comprehensive analysis of Bitcoin's market dynamics:

**Current Market Position**
Bitcoin is currently trading at $67,453, showing resilience after testing the $66,800 support level. The price action over the past 12 hours indicates a consolidation pattern that typically precedes a directional move.

**Technical Analysis Overview**
The 4-hour chart reveals a compelling setup. The RSI at 58.4 suggests we're in neutral territory with room for upward movement. More importantly, the MACD has just crossed above the signal line, historically a reliable bullish indicator with an 82% success rate over the past 6 months.

Moving averages paint an optimistic picture - the 50-day MA ($65,890) is providing strong support, while the 200-day MA ($61,230) confirms the broader uptrend remains intact. The gap between these averages is widening, suggesting increasing bullish momentum.

**Volume and Liquidity Analysis**
Trading volume has surged 147% in the last 4 hours, significantly above the 30-day average. This isn't just retail activity - large transactions (>$1M) have increased by 234%, indicating institutional interest. The order book shows substantial buy walls at $66,500 and $66,000, providing a safety net for any potential dips.

**24-Hour Price Projection**
Based on my analysis, I project Bitcoin will trade between $68,200 and $69,800 over the next 24 hours, with an 89.3% confidence level. Key resistance levels to watch are $68,500 (minor) and $69,200 (major). If we break above $69,200 with volume, we could see an acceleration toward $71,000.

**Critical Levels to Monitor**
• Immediate Support: $66,800 (strong)
• Secondary Support: $65,500 (critical)
• First Resistance: $68,500
• Major Resistance: $69,200
• Breakout Target: $71,000

**Risk Assessment**
The current setup presents a favorable risk-reward ratio of 1:3.2. Setting a stop loss at $66,500 limits downside to 1.4% while targeting $69,500 offers 3% upside potential. Market conditions suggest low-to-medium risk for the next 24 hours.

**Key Catalysts to Watch**
Several factors could influence price action: the upcoming Fed minutes release, options expiry on Friday ($2.3B notional), and ongoing spot ETF inflows which have averaged $287M daily this week.

**Educational Note:**
This analysis uses a combination of technical indicators, volume analysis, and market structure assessment. Remember that cryptocurrency markets are highly volatile and past performance doesn't guarantee future results. Always manage your risk appropriately and never invest more than you can afford to lose.`,
    indicators: [
      {
        name: "Buy Signal Strength",
        value: "87%",
        confidence: 87,
        trend: "up",
        description: "Strong bullish momentum detected",
      },
      {
        name: "Market Sentiment",
        value: "Bullish",
        confidence: 91,
        trend: "up",
        description: "Positive market psychology",
      },
      {
        name: "Volatility Index",
        value: "Medium",
        confidence: 78,
        trend: "neutral",
        description: "Normal market conditions",
      },
      {
        name: "24h Price Target",
        value: "$69,800",
        confidence: 89,
        trend: "up",
        description: "High probability target",
      },
    ],
    charts: [
      {
        type: "candlestick",
        data: [67453, 68200, 66800, 69800],
        label: "BTC/USD 24H Projection",
      },
      {
        type: "volume",
        data: [2.3, 3.1, 4.7, 3.8, 5.4, 4.2, 6.1],
        label: "Volume Profile (Billions USD)",
      },
    ],
  },
  "Compare Ethereum vs Solana investment potential": {
    acknowledgment:
      "I'll perform a comprehensive comparison of Ethereum and Solana's investment potential for you...",
    steps: [
      "Analyzing fundamental metrics for both networks...",
      "Comparing technical indicators and price momentum...",
      "Evaluating ecosystem growth and developer activity...",
      "Assessing institutional adoption trends...",
      "Calculating risk-adjusted return projections...",
    ],
    content: `Let me provide you with a detailed comparative analysis of Ethereum and Solana:

**Ethereum (ETH) - The Established Leader**

Current Price: $3,245
Market Cap: $390.2 Billion
24h Volume: $14.7 Billion

Ethereum remains the undisputed leader in smart contract platforms with $47.8 billion in Total Value Locked (TVL). The network processes over 1.2 million transactions daily and hosts 4,000+ active dApps. Recent upgrades have improved scalability, though gas fees averaging $12-15 remain a concern for retail users.

From a technical perspective, ETH shows steady accumulation patterns. The weekly chart displays a ascending triangle formation with resistance at $3,500. Breaking this level could trigger a move toward $4,200 (30% upside). The RSI at 62 indicates healthy momentum without being overbought.

Institutional adoption continues with Ethereum ETFs seeing $1.2B inflows last month. Major corporations like Microsoft and JPMorgan are building on Ethereum, providing long-term fundamental support.

**Solana (SOL) - The High-Performance Challenger**

Current Price: $142
Market Cap: $65.8 Billion
24h Volume: $3.2 Billion

Solana offers compelling metrics with 65,000 TPS capability and sub-$0.001 transaction costs. The network has recovered strongly from past challenges, with 99.8% uptime over the past 6 months. TVL has grown 340% year-over-year to $4.7 billion, showing rapid ecosystem expansion.

Technical analysis reveals explosive potential. SOL has formed a bullish flag pattern on the daily chart, typically preceding 30-50% moves. The recent breakout above $135 resistance confirms buyer strength. Volume has increased 180% over the 30-day average, indicating strong accumulation.

The Solana ecosystem is experiencing hypergrowth with 900+ projects launched this year. Major DEXs like Jupiter process $2B+ daily volume, rivaling centralized exchanges. Institutional interest is accelerating with VanEck and Grayscale launching SOL investment products.

**Comparative Analysis**

Risk-Return Profile:
• Ethereum: Lower risk (3.2/10), moderate returns (25-35% projected)
• Solana: Medium risk (5.8/10), higher returns (45-65% projected)

Network Metrics:
• Ethereum: Higher security, more decentralized (500,000+ validators)
• Solana: Superior speed and cost efficiency (1,800 validators)

Developer Activity:
• Ethereum: 5,800+ monthly active developers (mature ecosystem)
• Solana: 2,100+ monthly active developers (fastest growing)

**Investment Recommendation**

For a balanced approach, I recommend a 60/40 allocation favoring Solana for the next 3-6 months. Solana's superior growth metrics, improving fundamentals, and technical setup suggest higher near-term returns. However, Ethereum provides stability and should remain a core holding for long-term portfolios.

Optimal Entry Points:
• ETH: $3,150-$3,200 (current dip opportunity)
• SOL: $138-$143 (consolidation zone)

Risk Management:
• ETH Stop Loss: $3,000 / Take Profit: $4,200
• SOL Stop Loss: $128 / Take Profit: $195

**Market Dynamics to Monitor**

Watch for Ethereum's Dencun upgrade impact on L2 fees, potentially catalyzing the next leg up. For Solana, the upcoming Firedancer client could significantly improve performance and institutional confidence. Both networks face competition from emerging L1s, but their established ecosystems provide substantial moats.

Remember: Diversification reduces risk. Consider your investment timeline, risk tolerance, and overall portfolio composition before making allocation decisions.`,
    indicators: [
      {
        name: "ETH Score",
        value: "7.8/10",
        confidence: 82,
        trend: "up",
        description: "Solid long-term prospect",
      },
      {
        name: "SOL Score",
        value: "9.2/10",
        confidence: 94,
        trend: "up",
        description: "Exceptional growth potential",
      },
      {
        name: "Momentum Winner",
        value: "SOLANA",
        confidence: 88,
        trend: "up",
        description: "Higher velocity trend",
      },
      {
        name: "Risk-Adjusted Return",
        value: "SOL +18%",
        confidence: 85,
        trend: "up",
        description: "Better risk-reward ratio",
      },
    ],
  },
  "Find undervalued altcoins with 10x potential": {
    acknowledgment:
      "I'll identify undervalued altcoins with significant growth potential using my advanced screening algorithms...",
    steps: [
      "Scanning 5000+ cryptocurrencies for value metrics...",
      "Analyzing on-chain accumulation patterns...",
      "Evaluating fundamental catalysts and roadmaps...",
      "Checking smart money flow and whale activity...",
      "Calculating probability scores for 10x potential...",
    ],
    content: `After screening thousands of cryptocurrencies, I've identified several compelling opportunities with genuine 10x potential:

**Top High-Conviction Picks**

**1. INJECTIVE (INJ) - DeFi Derivatives Pioneer**
Market Cap: $2.3B | Current Price: $24.50
Potential: 10-12x ($245-$310)

Injective is revolutionizing decentralized derivatives trading with its order-book based DEX. The protocol has processed $25B in cumulative volume with only 50M INJ tokens in circulation (extremely low compared to peers). Recent Cosmos IBC integration opens access to $85B in cross-chain liquidity.

Key catalysts include the upcoming perpetuals trading for RWAs, institutional trading desk integration, and potential Binance Smart Chain bridge. Smart money accumulation shows $340M in purchases by addresses holding >$10M over the past 30 days. Technical setup shows a massive cup and handle formation on the weekly chart.

**2. RENDER (RNDR) - AI/GPU Computing Leader**
Market Cap: $2.8B | Current Price: $7.30
Potential: 10-13x ($73-$95)

Render Network provides distributed GPU rendering power, perfectly positioned for the AI boom. With Apple, Microsoft, and NVIDIA as partners, institutional validation is exceptional. Network usage has grown 450% YoY with 15,000+ active nodes processing AI/ML workloads.

The token economics are compelling - all network fees require RNDR, creating constant buy pressure. Recent Solana migration improved transaction efficiency by 100x. As AI computational demand explodes, RNDR could become the "AWS of GPU computing." Whale wallets have accumulated 47M tokens in the past 60 days.

**3. KASPA (KAS) - Next-Gen PoW Innovation**
Market Cap: $3.1B | Current Price: $0.13
Potential: 10-14x ($1.30-$1.80)

Kaspa represents a breakthrough in Proof-of-Work technology with its blockDAG architecture achieving 1-second block times. This solves Bitcoin's scalability trilemma while maintaining security and decentralization. The fair launch (no premine, no VC allocation) creates organic price discovery.

Mining hashrate has increased 380% in 6 months, indicating strong network security. Exchange listings on Binance and Coinbase are imminent based on integration progress. The upcoming smart contract implementation could position Kaspa as "programmable digital silver." Accumulation addresses (holding >1 year) control 68% of supply.

**Hidden Gems with Explosive Potential**

**4. OASIS (ROSE) - Privacy-Enabled DeFi**
Market Cap: $380M | Current Price: $0.057
Potential: 15-20x ($0.85-$1.14)

Confidential smart contracts + Meta partnership + $45M ecosystem fund. Binance Labs investment validation. Privacy narrative heating up with regulatory clarity.

**5. VERASITY (VRA) - Ad-Tech Blockchain**
Market Cap: $45M | Current Price: $0.0045
Potential: 25-40x ($0.11-$0.18)

Proof-of-View patent granted, major gaming partnerships incoming. 90% supply locked, creating supply shock potential. Q2 catalyst: YouTube competitor launch.

**Pattern Recognition & Timing Analysis**
All selected assets show the "Coiled Spring" pattern - extended accumulation followed by declining volatility. Historical data shows 94% of similar setups result in 5x+ moves within 6 months. Current market structure suggests breakouts within 2-3 weeks.

**Smart Money Movements**
• Wallet cluster analysis reveals coordinated accumulation
• Exchange outflows exceeding 2021 bull run levels
• Options flow showing massive call buying for Q2 2024
• Venture capital preparing second-wave investments

**Risk Factors to Consider**
• Overall market correlation remains high (0.78 with BTC)
• Regulatory uncertainty in certain jurisdictions
• Technology risks for newer protocols
• Liquidity may be limited during initial moves

**Entry Strategy Recommendations**
1. Dollar-cost average over 2-3 weeks to reduce timing risk
2. Allocate no more than 5% of portfolio per position
3. Set stop losses 20% below entry for risk management
4. Take partial profits at 3x, 5x, and 10x milestones

**Important Disclaimer**
This analysis is for educational purposes only. Cryptocurrency investments carry substantial risk of loss. Past performance does not guarantee future results. Always conduct your own research and consult with financial advisors before making investment decisions. Never invest more than you can afford to lose completely.`,
    indicators: [
      {
        name: "10x Probability",
        value: "94%",
        confidence: 94,
        trend: "up",
        description: "Based on pattern analysis",
      },
      {
        name: "Risk/Reward",
        value: "1:12",
        confidence: 89,
        trend: "up",
        description: "Exceptional opportunity",
      },
      {
        name: "Timing Signal",
        value: "BUY",
        confidence: 96,
        trend: "up",
        description: "Optimal entry window",
      },
      {
        name: "Smart Money",
        value: "Accumulating",
        confidence: 91,
        trend: "up",
        description: "Institutional interest high",
      },
    ],
  },
};

const useTextStreaming = () => {
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const startStreaming = useCallback(
    async (
      text: string,
      onComplete?: () => void,
      onCharacter?: (char: string, index: number) => void,
    ) => {
      setIsStreaming(true);
      setStreamingText("");
      abortControllerRef.current = new AbortController();

      let currentText = "";

      for (let i = 0; i < text.length; i++) {
        if (abortControllerRef.current?.signal.aborted) break;

        const char = text[i];
        currentText += char;

        let delay = 15;

        if (char === "." || char === "!" || char === "?") {
          delay = 300;
        } else if (char === ",") {
          delay = 150;
        } else if (char === "\n") {
          delay = 200;
        } else if (/[0-9]/.test(char)) {
          delay = 25;
        } else if (/[A-Z]/.test(char)) {
          delay = 20;
        }

        await new Promise((resolve) => setTimeout(resolve, delay));

        if (!abortControllerRef.current?.signal.aborted) {
          setStreamingText(currentText);
          onCharacter?.(char, i);
        }
      }

      setIsStreaming(false);
      onComplete?.();
    },
    [],
  );

  const stopStreaming = useCallback(() => {
    abortControllerRef.current?.abort();
    setIsStreaming(false);
  }, []);

  return { streamingText, isStreaming, startStreaming, stopStreaming };
};

const ThinkingIndicator = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <div className="relative">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <Bot className="h-4 w-4" />
        </div>
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-secondary animate-pulse" />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-secondary" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 animate-bounce rounded-full bg-secondary" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 animate-bounce rounded-full bg-secondary" style={{ animationDelay: "300ms" }} />
        </div>
        <span className="text-sm text-muted-foreground">AI is thinking</span>
      </div>
    </div>
  );
};

const AnalysisStep = ({ step, isActive }: { step: string; isActive: boolean }) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-40"
      }`}
    >
      <Activity
        className={`h-4 w-4 ${
          isActive ? "text-secondary animate-pulse" : "text-muted-foreground"
        }`}
      />
      <span
        className={`text-sm ${
          isActive ? "text-secondary" : "text-muted-foreground"
        }`}
      >
        {step}
      </span>
    </div>
  );
};

const MessageBubble = ({
  message,
  isStreaming,
  streamingContent,
}: {
  message: Message;
  isStreaming: boolean;
  streamingContent?: string;
}) => {
  const content =
    isStreaming && streamingContent !== undefined
      ? streamingContent
      : message.content;

  const formatContent = (text: string) => {
    return text
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="text-primary font-semibold">$1</strong>',
      )
      .replace(/\n/g, "<br />")
      .replace(/•/g, '<span class="text-secondary">•</span>')
      .replace(
        /(\d+\.?\d*%)/g,
        '<span class="text-secondary font-medium">$1</span>',
      )
      .replace(
        /(\$[\d,]+\.?\d*)/g,
        '<span class="text-primary font-medium">$1</span>',
      );
  };

  if (message.role === "user") {
    return (
      <div className="mb-6 flex justify-end">
        <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-secondary px-5 py-3 text-secondary-foreground shadow-lg">
          <p className="text-sm leading-relaxed">{message.content}</p>
          <p className="mt-2 text-xs text-secondary-foreground/70">
            {new Date(message.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 flex gap-3">
      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg">
          <Brain className="h-5 w-5" />
        </div>
      </div>
      <div className="flex-1 max-w-[85%]">
        <div className="rounded-2xl rounded-tl-sm border border-border bg-popover px-6 py-4 shadow-lg">
          <div
            className="prose prose-sm prose-invert max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatContent(content) }}
          />
          {isStreaming && (
            <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-secondary" />
          )}
        </div>

        {message.indicators && message.indicators.length > 0 && !isStreaming && (
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {message.indicators.map((indicator, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-background/70 p-4 transition hover:border-secondary/40"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {indicator.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-base font-bold ${
                        indicator.trend === "up"
                          ? "text-secondary"
                          : indicator.trend === "down"
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }`}
                    >
                      {indicator.value}
                    </span>
                    <TrendingUp
                      className={`h-4 w-4 ${
                        indicator.trend === "up"
                          ? "text-secondary rotate-0"
                          : indicator.trend === "down"
                          ? "text-destructive rotate-180"
                          : "text-muted-foreground rotate-90"
                      }`}
                    />
                  </div>
                </div>
                {indicator.description && (
                  <p className="mb-2 text-xs text-muted-foreground">
                    {indicator.description}
                  </p>
                )}
                <div className="h-1.5 w-full rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      indicator.trend === "up"
                        ? "bg-secondary"
                        : indicator.trend === "down"
                        ? "bg-destructive"
                        : "bg-muted-foreground"
                    }`}
                    style={{ width: `${indicator.confidence}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {message.charts && message.charts.length > 0 && !isStreaming && (
          <div className="mt-4 space-y-3">
            {message.charts.map((chart, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-background/70 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {chart.label}
                  </span>
                  <BarChart3 className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex h-32 items-end gap-2">
                  {chart.data.map((value, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-secondary to-primary"
                      style={{
                        height: `${(value / Math.max(...chart.data)) * 100}%`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-3 text-xs text-muted-foreground">
          {new Date(message.timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export const AIChatDrawerEnhanced = ({
  isOpen,
  onClose,
  initialPrompt,
}: AIChatDrawerEnhancedProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStreamingId, setCurrentStreamingId] = useState<string | null>(
    null,
  );
  const [showThinking, setShowThinking] = useState(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState<number>(-1);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { streamingText, isStreaming, startStreaming, stopStreaming } =
    useTextStreaming();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText, scrollToBottom]);

  useEffect(() => {
    if (isOpen && initialPrompt) {
      setMessages([]);
      setShowUpgradePrompt(false);
      setCurrentAnalysisStep(-1);

      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: initialPrompt,
        timestamp: new Date(),
      };

      setMessages([userMessage]);

      const responseTemplate =
        aiResponseTemplates[initialPrompt] || {
          acknowledgment: "I'm analyzing your request with advanced AI models...",
          steps: [
            "Processing your query...",
            "Analyzing relevant data...",
            "Generating insights...",
          ],
          content:
            "I'll help you with that analysis. Based on the current market conditions and available data, here's what I've found...",
        };

      setTimeout(() => {
        setShowThinking(true);
      }, 500);

      setTimeout(() => {
        setShowThinking(false);

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "",
          timestamp: new Date(),
          isStreaming: true,
          analysisSteps: responseTemplate.steps,
          indicators: responseTemplate.indicators,
          charts: responseTemplate.charts,
        };

        setMessages((prev) => [...prev, aiMessage]);
        setCurrentStreamingId(aiMessage.id);

        startStreaming(responseTemplate.acknowledgment, () => {
          responseTemplate.steps.forEach((step, index) => {
            setTimeout(() => {
              setCurrentAnalysisStep(index);
            }, 1500 + index * 2000);
          });

          setTimeout(() => {
            setCurrentAnalysisStep(-1);
            startStreaming(responseTemplate.content, () => {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === aiMessage.id
                    ? {
                        ...msg,
                        content: responseTemplate.content,
                        isStreaming: false,
                      }
                    : msg,
                ),
              );
              setCurrentStreamingId(null);

              setTimeout(() => {
                setShowUpgradePrompt(true);
              }, 2000);
            });
          }, 2000 + responseTemplate.steps.length * 2000);
        });
      }, 2000);
    }

    return () => {
      stopStreaming();
    };
  }, [isOpen, initialPrompt, startStreaming, stopStreaming]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 flex h-full w-full max-w-3xl flex-col border-l border-border bg-background/95 backdrop-blur-xl shadow-2xl">
        <div className="border-b border-border px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-secondary animate-pulse" />
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
                  CrystalAIze Pro
                  <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Advanced AI Market Analysis
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-xl p-2.5 transition hover:bg-muted"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="custom-scrollbar flex-1 overflow-y-auto px-6 py-6">
          {messages.map((message) => (
            <div key={message.id}>
              {message.role === "assistant" &&
                message.isStreaming &&
                currentStreamingId === message.id && (
                  <>
                    {message.analysisSteps && currentAnalysisStep >= 0 && (
                      <div className="mb-4 rounded-xl border border-border bg-background/80 p-4">
                        {message.analysisSteps.map((step, index) => (
                          <AnalysisStep
                            key={index}
                            step={step}
                            isActive={index === currentAnalysisStep}
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}

              <MessageBubble
                message={message}
                isStreaming={
                  message.isStreaming && currentStreamingId === message.id
                }
                streamingContent={
                  currentStreamingId === message.id ? streamingText : undefined
                }
              />
            </div>
          ))}

          {showThinking && <ThinkingIndicator />}

          {showUpgradePrompt && (
            <div className="mt-8 rounded-2xl border border-border bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-secondary p-3 text-secondary-foreground">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Unlock Full AI Analysis Power
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Get real-time market alerts, advanced technical charts, portfolio optimization, and unlimited AI-powered analysis.
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Real-time price alerts and notifications
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Advanced technical indicators and charts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      Whale tracking and smart money flow
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      24/7 AI assistant with priority support
                    </li>
                  </ul>
                  <button className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:scale-[1.02] hover:shadow-lg">
                    Upgrade to Premium
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 rounded-xl border border-border bg-background px-4 py-3">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask about any crypto or trading strategy..."
                  className="flex-1 bg-transparent text-sm text-muted-foreground outline-none"
                  disabled
                />
                <button
                  className="rounded-lg bg-secondary/60 p-2 text-secondary-foreground/80"
                  disabled
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
            {isStreaming && (
              <button
                onClick={stopStreaming}
                className="rounded-lg border border-border p-3 text-destructive transition hover:bg-destructive/10"
              >
                <StopCircle className="h-5 w-5" />
              </button>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Premium users get unlimited questions and real-time analysis
          </p>
        </div>
      </div>
    </div>
  );
};
