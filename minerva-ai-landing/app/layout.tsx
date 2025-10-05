import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minerva AI - AI-Powered Crypto & Stock Analysis Platform',
  description:
    'Combine advanced TradingView indicators with GPT-4 powered analysis. Get actionable crypto and stock insights in seconds with Minerva AI.',
  keywords: [
    'crypto analysis',
    'stock analysis',
    'TradingView indicators',
    'AI trading',
    'market intelligence',
    'GPT-4',
    'technical analysis',
  ],
  authors: [{ name: 'Minerva AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://minerva-ai.com',
    title: 'Minerva AI - AI-Powered Market Intelligence',
    description: 'Advanced TradingView indicators + GPT-4 analysis for crypto and stocks',
    siteName: 'Minerva AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minerva AI - AI-Powered Market Intelligence',
    description: 'Advanced TradingView indicators + GPT-4 analysis',
    creator: '@minerva_ai',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
