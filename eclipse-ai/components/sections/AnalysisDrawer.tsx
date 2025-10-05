"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Database, TrendingUp, Zap, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AnalysisDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
}

const toolSteps = [
  { icon: Globe, label: "Searching web for latest news...", delay: 1000 },
  { icon: Database, label: "Fetching on-chain data...", delay: 1500 },
  { icon: TrendingUp, label: "Running price action scan...", delay: 2000 },
  { icon: Zap, label: "Generating backtest snapshot...", delay: 2500 },
];

const priceData = [
  { time: "Jan 1", price: 42000, volume: 28000 },
  { time: "Jan 5", price: 41200, volume: 32000 },
  { time: "Jan 10", price: 43500, volume: 35000 },
  { time: "Jan 15", price: 44800, volume: 38000 },
  { time: "Jan 20", price: 43200, volume: 29000 },
  { time: "Jan 25", price: 45600, volume: 41000 },
  { time: "Jan 30", price: 47200, volume: 45000 },
];

export const AnalysisDrawer = ({
  isOpen,
  onClose,
  prompt,
}: AnalysisDrawerProps) => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [showCharts, setShowCharts] = useState(false);
  const [streamedText, setStreamedText] = useState("");

  const fullText =
    "Based on the analysis, Bitcoin is showing strong momentum with increasing volume and positive sentiment across social media and news sources. On-chain metrics indicate accumulation by long-term holders, while technical indicators suggest a potential breakout above the $48,000 resistance level. Key support remains at $42,000...";

  useEffect(() => {
    if (isOpen) {
      setActiveSteps([]);
      setShowCharts(false);
      setStreamedText("");

      toolSteps.forEach((step, index) => {
        setTimeout(() => {
          setActiveSteps((prev) => [...prev, index]);
        }, step.delay);
      });

      setTimeout(() => {
        setShowCharts(true);
      }, 3000);

      setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < fullText.length) {
            setStreamedText((prev) => prev + fullText[index]);
            index++;
          } else {
            clearInterval(interval);
          }
        }, 20);
      }, 3500);
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full overflow-y-auto sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 animate-pulse text-blue-500" />
            Analysis in progress...
          </SheetTitle>
          <SheetDescription className="text-left">
            {prompt}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-3">
            <AnimatePresence>
              {toolSteps.map((step, index) => (
                activeSteps.includes(index) && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-3"
                  >
                    <step.icon className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-zinc-300">{step.label}</span>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          {showCharts && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <h3 className="mb-4 text-sm font-semibold">Price Action (30D)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis
                      dataKey="time"
                      stroke="#71717a"
                      fontSize={12}
                    />
                    <YAxis stroke="#71717a" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="border-zinc-800 bg-zinc-900/50 p-4">
                <h3 className="mb-4 text-sm font-semibold">Volume Analysis</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis
                      dataKey="time"
                      stroke="#71717a"
                      fontSize={12}
                    />
                    <YAxis stroke="#71717a" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                      }}
                    />
                    <Bar dataKey="volume" fill="#52525b" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <p className="text-sm leading-relaxed text-zinc-300">
                  {streamedText}
                </p>
              </div>

              <Card className="border-gradient relative overflow-hidden border-2 border-blue-500/50 bg-gradient-to-br from-blue-950/20 to-zinc-900/50 p-6">
                <div className="absolute right-0 top-0 h-32 w-32 bg-blue-500/10 blur-3xl" />
                <h3 className="mb-2 text-lg font-bold">
                  Unlock Full Analysis + Actionable Signals
                </h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Upgrade to Premium for complete AI analysis, backtested
                  signals, and all indicator packages
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Premium Trial
                </Button>
              </Card>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
