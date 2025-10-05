import { useState, useCallback } from 'react';
import { StreamMessage } from '@/lib/types';
import { simulateAIStream } from '@/lib/data/mockStreams';

type StreamState = 'idle' | 'streaming' | 'completed' | 'error';

export const useStreamingSimulation = () => {
  const [state, setState] = useState<StreamState>('idle');
  const [messages, setMessages] = useState<StreamMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const startStreaming = useCallback(async (promptId: string) => {
    setState('streaming');
    setMessages([]);
    setError(null);

    try {
      const stream = simulateAIStream(promptId);

      for await (const message of stream) {
        setMessages((prev) => [...prev, message]);
      }

      setState('completed');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setState('error');
    }
  }, []);

  const reset = useCallback(() => {
    setState('idle');
    setMessages([]);
    setError(null);
  }, []);

  return {
    state,
    messages,
    error,
    startStreaming,
    reset,
    isStreaming: state === 'streaming',
    isCompleted: state === 'completed',
    isIdle: state === 'idle',
  };
};
