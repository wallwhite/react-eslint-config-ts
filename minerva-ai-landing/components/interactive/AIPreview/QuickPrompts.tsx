'use client';

import * as Icons from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { quickPrompts } from '@/lib/data/copy';

interface QuickPromptsProps {
  selectedId: string;
  onSelect: (id: string, prompt: string) => void;
}

export const QuickPrompts = ({ selectedId, onSelect }: QuickPromptsProps) => {
  return (
    <div className="overflow-x-auto">
      <Tabs value={selectedId} onValueChange={(id) => {
        const prompt = quickPrompts.find(p => p.id === id);
        if (prompt) {
          onSelect(id, prompt.prompt);
        }
      }}>
        <TabsList className="inline-flex w-full min-w-max gap-2 bg-transparent p-0">
          {quickPrompts.map((prompt) => {
            const IconComponent = Icons[prompt.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <TabsTrigger
                key={prompt.id}
                value={prompt.id}
                className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-400 transition-colors data-[state=active]:border-zinc-500 data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-50 hover:bg-zinc-750 hover:text-zinc-300"
              >
                {IconComponent && <IconComponent className="h-4 w-4" />}
                {prompt.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};
