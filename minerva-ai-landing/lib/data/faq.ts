import { FAQItem } from '@/lib/types';

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How accurate are the AI predictions?',
    answer:
      'Our AI models analyze historical data and real-time market conditions to provide probabilistic insights, not predictions. We recommend using these insights alongside your own research and risk management strategies. Our backtested accuracy shows a 30% improvement in signal quality compared to traditional indicators alone.',
    category: 'ai',
  },
  {
    id: 'faq-2',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time. If you cancel, you&apos;ll retain access to your plan until the end of your current billing period. We also offer a 30-day money-back guarantee for annual plans.',
    category: 'pricing',
  },
  {
    id: 'faq-3',
    question: 'Which TradingView indicators are included in each plan?',
    answer:
      'Free plan includes 3 basic indicators (Momentum Master, Volume Pulse, Support & Resistance Pro). Premium adds 6 more advanced indicators including AI Trend Detector and Smart Order Flow. Ultimate includes all 12 indicators including Quantum Signals, Whale Tracker Elite, and Options Flow X.',
    category: 'indicators',
  },
  {
    id: 'faq-4',
    question: 'How do I connect my exchange or wallet?',
    answer:
      'We use read-only API keys to securely connect to your exchanges. Simply navigate to Settings > Exchanges, select your exchange, and follow the guided setup. We never request withdrawal permissions. For wallets, you can add public addresses for read-only portfolio tracking.',
    category: 'technical',
  },
  {
    id: 'faq-5',
    question: 'What data sources do you use?',
    answer:
      'We aggregate data from 100+ exchanges, on-chain analytics providers (Glassnode, Nansen), social sentiment platforms (Twitter, Reddit, Discord), and traditional financial data feeds. All data is processed in real-time with built-in anomaly detection.',
    category: 'technical',
  },
  {
    id: 'faq-6',
    question: 'Is there a learning curve for beginners?',
    answer:
      'Minerva AI is designed for both beginners and professionals. New users can start with pre-built templates and AI-guided analysis. We provide comprehensive documentation, video tutorials, and community support. Most users are productive within their first trading session.',
    category: 'general',
  },
  {
    id: 'faq-7',
    question: 'Do you offer API access?',
    answer:
      'Yes, API access is included in the Ultimate plan. Our REST and WebSocket APIs allow you to integrate Minerva AI data and indicators into your own trading systems, bots, or applications. Full API documentation and SDKs are provided.',
    category: 'technical',
  },
  {
    id: 'faq-8',
    question: 'How is my data kept secure?',
    answer:
      'We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. API keys are encrypted and never stored in plain text. We&apos;re SOC 2 Type II compliant and conduct regular security audits. We never sell or share your trading data.',
    category: 'security',
  },
  {
    id: 'faq-9',
    question: 'What is your uptime guarantee?',
    answer:
      'We maintain 99.9% uptime SLA for all paid plans. Our infrastructure runs on redundant cloud servers with automatic failover. Real-time status updates are available at status.minerva-ai.com. Premium and Ultimate users get priority notifications for any service updates.',
    category: 'technical',
  },
  {
    id: 'faq-10',
    question: 'Can I build custom indicators?',
    answer:
      'Yes! Ultimate plan users have access to our custom indicator builder with Pine Script compatibility. You can backtest your strategies using our historical data, optimize parameters, and deploy them alongside our pre-built indicators. We also offer consulting for advanced custom development.',
    category: 'indicators',
  },
];
