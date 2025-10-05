"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, BarChart2, Zap, CheckCircle, Lock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

interface AnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
}

const priceData = [
  { time: "00:00", price: 42500 },
  { time: "04:00", price: 42800 },
  { time: "08:00", price: 43200 },
  { time: "12:00", price: 42900 },
  { time: "16:00", price: 43500 },
  { time: "20:00", price: 43800 },
];

const volumeData = [
  { time: "00:00", volume: 1200 },
  { time: "04:00", volume: 980 },
  { time: "08:00", volume: 1450 },
  { time: "12:00", volume: 1100 },
  { time: "16:00", volume: 1650 },
  { time: "20:00", volume: 1380 },
];

const analysisSteps = [
  { icon: Zap, label: "Analyzing market data", delay: 0 },
  { icon: TrendingUp, label: "Calculating technical indicators", delay: 800 },
  { icon: BarChart2, label: "Processing sentiment signals", delay: 1600 },
  { icon: CheckCircle, label: "Generating insights", delay: 2400 },
];

export const AnalysisDrawer = ({ isOpen, onClose, prompt }: AnalysisDrawerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [streamedText, setStreamedText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);

  const fullText = `Based on comprehensive analysis of Bitcoin's current market structure:

**Technical Analysis:**
• Price is trading above the 200-day MA at $42,800, indicating bullish trend
• RSI at 62 suggests healthy momentum without being overbought
• Volume profile shows strong support at $42,500 level

**Sentiment Analysis:**
• Social sentiment: 68% bullish (up 12% from yesterday)
• On-chain metrics show accumulation by long-term holders
• Exchange outflows increased 23% in the last 24 hours

**Key Levels:**
• Resistance: $44,200 (previous high)
• Support: $42,500 (volume cluster)
• Stop loss recommendation: Below $42,000`;

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setStreamedText("");
      setIsStreaming(false);

      // Step progression
      const stepTimer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < analysisSteps.length - 1) {
            return prev + 1;
          } else {
            clearInterval(stepTimer);
            setIsStreaming(true);
            return prev;
          }
        });
      }, 800);

      return () => clearInterval(stepTimer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isStreaming && streamedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setStreamedText(fullText.slice(0, streamedText.length + 1));
      }, 20);

      return () => clearTimeout(timer);
    }
  }, [isStreaming, streamedText, fullText]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-card border-l border-border z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">AI Analysis</h3>
                <p className="text-sm text-muted-foreground mt-1">{prompt}</p>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Analysis Steps */}
              <div className="space-y-3">
                {analysisSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStep;
                  const isComplete = index < currentStep;

                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: step.delay / 1000 }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          isComplete
                            ? "bg-green-500/20 text-green-400"
                            : isActive
                            ? "bg-blue-500/20 text-blue-400 animate-pulse"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-sm ${
                          isComplete || isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Charts */}
              {currentStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Price Action (24h)</h4>
                    <ResponsiveContainer width="100%" height={150}>
                      <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--popover))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "6px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="rgb(59, 130, 246)"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="text-sm font-medium mb-3">Volume Profile</h4>
                    <ResponsiveContainer width="100%" height={150}>
                      <BarChart data={volumeData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--popover))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "6px",
                          }}
                        />
                        <Bar dataKey="volume" fill="rgb(34, 197, 94)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {/* Streamed Analysis */}
              {isStreaming && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-secondary/50 rounded-lg p-4"
                >
                  <h4 className="text-sm font-medium mb-3">Analysis Summary</h4>
                  <div className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                    {streamedText}
                    {streamedText.length < fullText.length && (
                      <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse" />
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Paywall CTA */}
            <div className="p-6 border-t border-border bg-secondary/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Unlock Full Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Get detailed backtesting, real-time alerts, and unlimited AI queries with Premium
                  </p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Upgrade to Premium - $49/mo
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
