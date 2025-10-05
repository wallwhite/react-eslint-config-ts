'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ChatInterfaceProps {
  promptText: string;
  isEnabled: boolean;
  onSend: () => void;
}

export const ChatInterface = ({ promptText, isEnabled, onSend }: ChatInterfaceProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="space-y-3">
      <div className="relative">
        <textarea
          value={promptText || ''}
          readOnly
          placeholder="Try a sample prompt or click a tab below..."
          className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-zinc-300 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600"
          rows={3}
          onMouseEnter={() => !isEnabled && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />

        <AnimatePresence>
          {showTooltip && !isEnabled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>Preview mode - Select a quick prompt to see AI in action</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={onSend}
                disabled={!isEnabled}
                size="sm"
                className="gap-2"
              >
                <Send className="h-4 w-4" />
                Send
              </Button>
            </TooltipTrigger>
            {!isEnabled && (
              <TooltipContent>
                <p>Select a quick prompt first</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
