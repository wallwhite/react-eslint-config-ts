"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Link as LinkIcon, BarChart3, FlaskConical, Check, Loader2, ChevronRight } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AIAnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
}

interface ToolStep {
  icon: typeof Globe;
  label: string;
  status: "pending" | "loading" | "complete";
}

interface PromptResponse {
  tools: string[];
  analysis: string[];
  charts?: {
    price?: any[];
    volume?: any[];
    sentiment?: any[];
    correlation?: any[];
  };
}

// Prompt-specific responses
const getResponseForPrompt = (prompt: string): PromptResponse => {
  const promptLower = prompt.toLowerCase();

  if (promptLower.includes("bitcoin") || promptLower.includes("btc")) {
    return {
      tools: ["Web Search", "On-chain Data", "Price Action", "Backtest"],
      analysis: [
        "Bitcoin is currently trading at $67,245, up 3.2% in the last 24 hours.",
        "On-chain metrics show strong accumulation by addresses holding 100-1000 BTC, suggesting institutional interest.",
        "Key resistance identified at $68,500 with solid support at $65,800.",
        "RSI on the 4H timeframe shows bullish divergence, indicating potential continuation.",
        "Volume profile suggests decreasing seller pressure near current levels."
      ],
      charts: {
        price: [
          { time: "Mon", value: 64200 },
          { time: "Tue", value: 65100 },
          { time: "Wed", value: 64800 },
          { time: "Thu", value: 66300 },
          { time: "Fri", value: 67245 },
        ],
        volume: [
          { time: "Mon", value: 24500 },
          { time: "Tue", value: 27200 },
          { time: "Wed", value: 22100 },
          { time: "Thu", value: 31400 },
          { time: "Fri", value: 29800 },
        ],
        sentiment: [
          { time: "Mon", value: 52 },
          { time: "Tue", value: 58 },
          { time: "Wed", value: 54 },
          { time: "Thu", value: 67 },
          { time: "Fri", value: 72 },
        ],
      }
    };
  }

  if (promptLower.includes("sentiment")) {
    return {
      tools: ["Web Search", "News Sentiment", "Social Signals"],
      analysis: [
        "Current market sentiment is moderately bullish across crypto and equity markets.",
        "Social media mentions for major altcoins are up 34% week-over-week.",
        "News sentiment analyzer shows 68% positive coverage for tech stocks.",
        "Fear & Greed Index at 61 (Greed) - elevated from last week's 54.",
        "Institutional flow data suggests risk-on positioning in growth sectors."
      ],
      charts: {
        sentiment: [
          { time: "Week 1", value: 42 },
          { time: "Week 2", value: 48 },
          { time: "Week 3", value: 54 },
          { time: "Week 4", value: 61 },
          { time: "Week 5", value: 68 },
        ],
      }
    };
  }

  if (promptLower.includes("aapl") || promptLower.includes("apple")) {
    return {
      tools: ["Web Search", "Technical Analysis", "Earnings Data"],
      analysis: [
        "AAPL trading at $178.45, consolidating near all-time highs.",
        "Upcoming earnings in 2 weeks - analyst estimates at $1.54 EPS.",
        "Technical setup shows bullish flag pattern on daily chart.",
        "Institutional ownership increased 2.3% last quarter.",
        "Key resistance at $182, support at $174."
      ],
      charts: {
        price: [
          { time: "Jan", value: 165 },
          { time: "Feb", value: 172 },
          { time: "Mar", value: 175 },
          { time: "Apr", value: 178 },
        ],
        volume: [
          { time: "Jan", value: 85000 },
          { time: "Feb", value: 92000 },
          { time: "Mar", value: 78000 },
          { time: "Apr", value: 105000 },
        ],
      }
    };
  }

  if (promptLower.includes("compare") || promptLower.includes("vs")) {
    return {
      tools: ["Cross-Asset Analysis", "Correlation Matrix", "Momentum Scan"],
      analysis: [
        "ETH/QQQ correlation currently at 0.67 - moderately strong positive correlation.",
        "Both assets showing momentum strength, but QQQ leading on relative strength index.",
        "ETH benefit from risk-on sentiment; QQQ driven by tech earnings optimism.",
        "Historical analysis suggests ETH outperforms when correlation breaks above 0.70.",
        "Consider pair trade opportunities if correlation diverges significantly."
      ],
      charts: {
        correlation: [
          { time: "Week 1", eth: 2100, qqq: 365 },
          { time: "Week 2", eth: 2250, qqq: 370 },
          { time: "Week 3", eth: 2180, qqq: 368 },
          { time: "Week 4", eth: 2380, qqq: 378 },
        ],
      }
    };
  }

  // Default response
  return {
    tools: ["Web Search", "Technical Analysis", "Price Action"],
    analysis: [
      "Analyzing current market conditions across requested assets.",
      "Technical indicators suggest consolidation phase with potential for breakout.",
      "Volume analysis indicates balanced buyer/seller pressure.",
      "Support and resistance levels identified based on recent price action.",
    ],
    charts: {
      price: [
        { time: "1", value: 100 },
        { time: "2", value: 105 },
        { time: "3", value: 103 },
        { time: "4", value: 108 },
        { time: "5", value: 112 },
      ],
    }
  };
};

export const AIAnalysisDrawer = ({ isOpen, onClose, prompt }: AIAnalysisDrawerProps) => {
  const [response, setResponse] = useState<PromptResponse | null>(null);
  const [toolSteps, setToolSteps] = useState<ToolStep[]>([]);
  const [streamedTextIndex, setStreamedTextIndex] = useState(0);
  const [streamedCharIndex, setStreamedCharIndex] = useState(0);
  const [showCharts, setShowCharts] = useState(false);
  const [allToolsComplete, setAllToolsComplete] = useState(false);

  // Reset and initialize on open
  useEffect(() => {
    if (!isOpen) {
      setResponse(null);
      setToolSteps([]);
      setStreamedTextIndex(0);
      setStreamedCharIndex(0);
      setShowCharts(false);
      setAllToolsComplete(false);
      return;
    }

    // Get response for this prompt
    const promptResponse = getResponseForPrompt(prompt);
    setResponse(promptResponse);

    // Initialize tool steps
    const icons = [Globe, LinkIcon, BarChart3, FlaskConical];
    const initialSteps = promptResponse.tools.map((label, index) => ({
      icon: icons[index] || Globe,
      label,
      status: "pending" as const,
    }));
    setToolSteps(initialSteps);

    // Animate tool steps
    const timers: NodeJS.Timeout[] = [];

    initialSteps.forEach((_, index) => {
      const loadingTimer = setTimeout(() => {
        setToolSteps(prev =>
          prev.map((step, i) => i === index ? { ...step, status: "loading" } : step)
        );
      }, index * 700);

      const completeTimer = setTimeout(() => {
        setToolSteps(prev =>
          prev.map((step, i) => i === index ? { ...step, status: "complete" } : step)
        );
        if (index === initialSteps.length - 1) {
          setAllToolsComplete(true);
        }
      }, index * 700 + 500);

      timers.push(loadingTimer, completeTimer);
    });

    // Show charts after tools complete
    if (promptResponse.charts) {
      const chartsTimer = setTimeout(() => {
        setShowCharts(true);
      }, initialSteps.length * 700 + 800);
      timers.push(chartsTimer);
    }

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isOpen, prompt]);

  // Streaming text effect
  useEffect(() => {
    if (!allToolsComplete || !response) return;

    if (streamedTextIndex < response.analysis.length) {
      const currentText = response.analysis[streamedTextIndex];

      if (streamedCharIndex < currentText.length) {
        const charTimer = setTimeout(() => {
          setStreamedCharIndex(prev => prev + 1);
        }, 15); // Fast typing effect
        return () => clearTimeout(charTimer);
      } else {
        // Move to next line after a pause
        const lineTimer = setTimeout(() => {
          setStreamedTextIndex(prev => prev + 1);
          setStreamedCharIndex(0);
        }, 400);
        return () => clearTimeout(lineTimer);
      }
    }
  }, [allToolsComplete, response, streamedTextIndex, streamedCharIndex]);

  if (!response) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto border-zinc-800 bg-zinc-950 sm:max-w-[600px]"
      >
        <SheetHeader className="border-b border-zinc-800 pb-4">
          <SheetTitle className="text-zinc-100">AI Analysis</SheetTitle>
        </SheetHeader>

        <div className="space-y-6 py-6">
          {/* Query Display */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Query</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">{prompt}</p>
          </div>

          {/* Tool Execution Steps */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-100">Processing</h3>
            <div className="space-y-2">
              {toolSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/30 p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-zinc-800">
                    {step.status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin text-blue-400" />
                    ) : step.status === "complete" ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <step.icon className="h-4 w-4 text-zinc-500" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{step.label}</span>
                  {step.status === "complete" && (
                    <span className="ml-auto text-xs text-zinc-500">Complete</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Charts */}
          <AnimatePresence>
            {showCharts && response.charts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-sm font-semibold text-zinc-100">Market Data</h3>

                {response.charts.price && (
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Price Action
                    </p>
                    <div className="h-[180px] w-full rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={response.charts.price}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.3} />
                          <XAxis
                            dataKey="time"
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <YAxis
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#18181b',
                              border: '1px solid #27272a',
                              borderRadius: '8px',
                              padding: '8px 12px',
                            }}
                            labelStyle={{ color: '#fafafa', fontSize: 12 }}
                            itemStyle={{ color: '#3b82f6', fontSize: 11 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {response.charts.volume && (
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Volume Analysis
                    </p>
                    <div className="h-[180px] w-full rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={response.charts.volume}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.3} />
                          <XAxis
                            dataKey="time"
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <YAxis
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#18181b',
                              border: '1px solid #27272a',
                              borderRadius: '8px',
                              padding: '8px 12px',
                            }}
                            labelStyle={{ color: '#fafafa', fontSize: 12 }}
                            itemStyle={{ color: '#10b981', fontSize: 11 }}
                          />
                          <Bar
                            dataKey="value"
                            fill="#10b981"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {response.charts.sentiment && (
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Sentiment Score
                    </p>
                    <div className="h-[180px] w-full rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={response.charts.sentiment}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.3} />
                          <XAxis
                            dataKey="time"
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <YAxis
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#18181b',
                              border: '1px solid #27272a',
                              borderRadius: '8px',
                              padding: '8px 12px',
                            }}
                            labelStyle={{ color: '#fafafa', fontSize: 12 }}
                            itemStyle={{ color: '#f59e0b', fontSize: 11 }}
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#f59e0b"
                            fill="#f59e0b"
                            fillOpacity={0.2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {response.charts.correlation && (
                  <div className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Correlation Analysis
                    </p>
                    <div className="h-[180px] w-full rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={response.charts.correlation}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" opacity={0.3} />
                          <XAxis
                            dataKey="time"
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <YAxis
                            tick={{ fill: '#a1a1aa', fontSize: 11 }}
                            tickLine={false}
                            axisLine={{ stroke: '#27272a' }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#18181b',
                              border: '1px solid #27272a',
                              borderRadius: '8px',
                              padding: '8px 12px',
                            }}
                            labelStyle={{ color: '#fafafa', fontSize: 12 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="eth"
                            stroke="#8b5cf6"
                            strokeWidth={2}
                            dot={false}
                            name="ETH"
                          />
                          <Line
                            type="monotone"
                            dataKey="qqq"
                            stroke="#ec4899"
                            strokeWidth={2}
                            dot={false}
                            name="QQQ"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Streaming Analysis Text */}
          {allToolsComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-zinc-100">Analysis</h3>
              <div className="space-y-3">
                {response.analysis.slice(0, streamedTextIndex + 1).map((text, index) => {
                  const isCurrentLine = index === streamedTextIndex;
                  const displayText = isCurrentLine
                    ? text.substring(0, streamedCharIndex)
                    : text;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {displayText}
                        {isCurrentLine && streamedCharIndex < text.length && (
                          <span className="inline-block h-4 w-0.5 animate-pulse bg-blue-400 ml-0.5" />
                        )}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Paywall */}
          {streamedTextIndex >= response.analysis.length && streamedCharIndex === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white">
                Unlock full analysis + real-time signals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                Upgrade to Premium for complete insights, advanced charting, trade alerts, and unlimited AI requests.
              </p>
              <Button
                className="mt-4 bg-white text-blue-600 shadow-lg hover:bg-blue-50"
                size="lg"
              >
                Start free trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
