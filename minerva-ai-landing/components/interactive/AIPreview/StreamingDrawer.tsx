'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStreamingSimulation } from '@/lib/hooks/useStreamingSimulation';
import { ResultsVisualization } from './ResultsVisualization';
import { StreamMessage } from '@/lib/types';

interface StreamingDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  promptId: string;
  promptText: string;
}

export const StreamingDrawer = ({
  open,
  onOpenChange,
  promptId,
  promptText,
}: StreamingDrawerProps) => {
  const { messages, startStreaming, reset } = useStreamingSimulation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && promptId) {
      reset();
      startStreaming(promptId);
    }
  }, [open, promptId, startStreaming, reset]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const scrollToPricing = () => {
    onOpenChange(false);
    setTimeout(() => {
      const pricing = document.querySelector('#pricing');
      pricing?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full overflow-y-auto border-zinc-800 bg-zinc-950 sm:max-w-2xl">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-zinc-50">
            <Sparkles className="h-5 w-5" />
            AI Analysis
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {/* Prompt Display */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-sm text-zinc-400">{promptText}</p>
          </div>

          {/* Messages */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Paywall Footer */}
          {messages.some((m) => m.type === 'paywall') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky bottom-0 mt-6 rounded-lg border border-zinc-700 bg-gradient-to-r from-zinc-900 to-zinc-800 p-6"
            >
              <h3 className="text-lg font-semibold text-zinc-50">
                Unlock Full Analysis
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {messages.find((m) => m.type === 'paywall')?.content as string}
              </p>
              <div className="mt-4 flex gap-3">
                <Button onClick={scrollToPricing} className="gap-2">
                  Upgrade Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={scrollToPricing}>
                  View Plans
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MessageItem = ({ message }: { message: StreamMessage }) => {
  if (message.type === 'tool') {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <Badge variant="outline" className="gap-2 border-zinc-700 bg-zinc-900 text-zinc-400">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="h-3 w-3" />
          </motion.div>
          {message.content as string}
        </Badge>
      </motion.div>
    );
  }

  if (message.type === 'text') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
      >
        <p className="text-sm text-zinc-300">{message.content as string}</p>
      </motion.div>
    );
  }

  if (message.type === 'chart') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <ResultsVisualization chartData={message.content} />
      </motion.div>
    );
  }

  return null;
};
