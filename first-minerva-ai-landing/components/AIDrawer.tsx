"use client";

import * as React from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle, Search, TrendingUp, Lock } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AIDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
  model: string;
}

// Sample data for charts
const priceData = [
  { time: "00:00", price: 42500, volume: 1200 },
  { time: "04:00", price: 43200, volume: 1450 },
  { time: "08:00", price: 42800, volume: 1350 },
  { time: "12:00", price: 44100, volume: 1800 },
  { time: "16:00", price: 43900, volume: 1600 },
  { time: "20:00", price: 45200, volume: 2100 },
];

const sentimentData = [
  { source: "Twitter", positive: 68, negative: 32 },
  { source: "Reddit", positive: 72, negative: 28 },
  { source: "News", positive: 55, negative: 45 },
  { source: "Telegram", positive: 78, negative: 22 },
];

const AIDrawer = ({ isOpen, onClose, prompt, model }: AIDrawerProps) => {
  const [streamingText, setStreamingText] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(0);
  const [isStreaming, setIsStreaming] = React.useState(false);

  const fullResponse = `Based on my analysis of ${prompt}, here are the key insights:

**Market Overview:**
The current market shows strong bullish momentum with increasing volume and positive sentiment across major platforms. Technical indicators suggest a continuation pattern is forming.

**Key Findings:**
1. Price action has broken above the 20-day moving average with strong volume
2. RSI indicates healthy momentum without being overbought (currently at 64)
3. Social sentiment is overwhelmingly positive across all major platforms
4. On-chain metrics show accumulation by large holders

**Technical Analysis:**
The charts below show the price trend and sentiment analysis. Notice the increasing volume alongside price appreciation, which is a bullish confirmation signal.

**Risk Assessment:**
- Support level: $42,000
- Resistance level: $46,500
- Risk/Reward Ratio: 1:3.2 (Favorable)

**Recommendation:**
Consider a position with strict risk management. Place stop-loss at $41,800 and initial target at $46,000.`;

  const steps = [
    { label: "Analyzing market data", icon: Search },
    { label: "Processing sentiment", icon: TrendingUp },
    { label: "Generating insights", icon: CheckCircle },
  ];

  React.useEffect(() => {
    if (isOpen) {
      setStreamingText("");
      setCurrentStep(0);
      setIsStreaming(true);

      // Simulate tool usage steps
      const stepInterval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(stepInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);

      // Simulate streaming text
      let index = 0;
      const textInterval = setInterval(() => {
        if (index < fullResponse.length) {
          setStreamingText(fullResponse.slice(0, index + 1));
          index += 2;
        } else {
          clearInterval(textInterval);
          setIsStreaming(false);
        }
      }, 20);

      return () => {
        clearInterval(stepInterval);
        clearInterval(textInterval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="AI Analysis Results">
      <div className="space-y-6">
        {/* Model Info */}
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="secondary">{model}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            {isStreaming ? "Analyzing..." : "Analysis complete"}
          </div>
        </div>

        {/* Tool Usage Steps */}
        <div className="bg-zinc-50 rounded-lg p-4 space-y-3">
          <div className="text-sm font-semibold text-zinc-900">Processing Steps:</div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isComplete = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div key={index} className="flex items-center space-x-3">
                {isComplete ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : isActive ? (
                  <Loader2 className="h-5 w-5 text-zinc-600 animate-spin" />
                ) : (
                  <Icon className="h-5 w-5 text-zinc-400" />
                )}
                <span
                  className={`text-sm ${
                    isComplete
                      ? "text-green-700 font-medium"
                      : isActive
                      ? "text-zinc-900 font-medium"
                      : "text-zinc-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Streaming Response */}
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-sm text-zinc-700 leading-relaxed">
            {streamingText}
            {isStreaming && <span className="inline-block w-2 h-4 bg-zinc-900 ml-1 animate-pulse" />}
          </div>
        </div>

        {/* Charts */}
        {currentStep >= 2 && (
          <div className="space-y-6">
            <div className="bg-white border border-zinc-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-4 text-zinc-900">Price Trend Analysis</h4>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#18181b"
                    fill="#e4e4e7"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white border border-zinc-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-4 text-zinc-900">Sentiment Analysis</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={sentimentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                  <XAxis dataKey="source" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="positive" fill="#22c55e" />
                  <Bar dataKey="negative" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Paywall */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 rounded-lg p-6 text-white">
          <div className="flex items-start space-x-4">
            <div className="bg-white/10 p-3 rounded-lg">
              <Lock className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Unlock Full Analysis</h4>
              <p className="text-sm text-zinc-300 mb-4">
                Get access to advanced insights, real-time alerts, and unlimited AI analysis.
                Subscribe now to unlock all premium features.
              </p>
              <Button variant="secondary" size="sm">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AIDrawer;
