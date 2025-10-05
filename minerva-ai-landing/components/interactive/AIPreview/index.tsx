'use client';

import { useState } from 'react';
import { ChatInterface } from './ChatInterface';
import { QuickPrompts } from './QuickPrompts';
import { StreamingDrawer } from './StreamingDrawer';
import { Card } from '@/components/ui/card';

export const AIPreview = () => {
  const [selectedPromptId, setSelectedPromptId] = useState<string>('');
  const [promptText, setPromptText] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePromptSelect = (id: string, text: string) => {
    setSelectedPromptId(id);
    setPromptText(text);
  };

  const handleSend = () => {
    if (selectedPromptId && promptText) {
      setDrawerOpen(true);
    }
  };

  return (
    <>
      <Card className="relative overflow-hidden border-zinc-700 bg-zinc-900/50 p-6 backdrop-blur-sm">
        <div className="space-y-4">
          <ChatInterface
            promptText={promptText}
            isEnabled={!!selectedPromptId}
            onSend={handleSend}
          />
          <QuickPrompts
            selectedId={selectedPromptId}
            onSelect={handlePromptSelect}
          />
        </div>
      </Card>

      <StreamingDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        promptId={selectedPromptId}
        promptText={promptText}
      />
    </>
  );
};
