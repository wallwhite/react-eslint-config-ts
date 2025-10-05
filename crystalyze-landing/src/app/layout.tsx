import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystalyze AI - AI-Powered Market Analysis for Crypto & Equities",
  description: "Professional-grade market intelligence, TradingView indicators, and AI-driven insights to make smarter trading decisions. Get started free in seconds.",
  keywords: "AI trading, trading indicators, TradingView, crypto analysis, equity analysis, market intelligence, trading signals, technical analysis, sentiment analysis, on-chain data",
  authors: [{ name: "Crystalyze AI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crystalyze.ai",
    title: "Crystalyze AI - AI-Powered Market Analysis",
    description: "Professional-grade market intelligence, TradingView indicators, and AI-driven insights",
    siteName: "Crystalyze AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystalyze AI - Market Analysis Platform",
    description: "AI-powered market intelligence for crypto and equities",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
