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
  title: "CrystalAIze - Turn $1,000 into $47,000 with AI Trading | 89.3% Win Rate",
  description: "Join 47,283+ traders making $2,847/month with our AI-powered trading signals. 89.3% win rate, real-time alerts, 30-day money-back guarantee. Start free trial now!",
  keywords: "AI trading, crypto trading bot, stock market AI, trading signals, automated trading, profit alerts, whale tracking, momentum trading, day trading AI",
  openGraph: {
    title: "CrystalAIze - AI Trading with 89.3% Win Rate",
    description: "Turn $1,000 into $47,000 with AI-powered trading. Join 47,283+ profitable traders today!",
    type: "website",
    url: "https://crystalaize.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CrystalAIze AI Trading Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CrystalAIze - AI Trading with 89.3% Win Rate",
    description: "Turn $1,000 into $47,000 with AI-powered trading. Join 47,283+ profitable traders today!",
    images: ["/og-image.png"]
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
