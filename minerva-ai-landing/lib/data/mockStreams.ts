import { StreamMessage, ChartData } from '@/lib/types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Generate mock BTC price data
const generateBTCPriceData = () => {
  const data = [];
  const basePrice = 43000;
  for (let i = 0; i < 30; i++) {
    const randomWalk = (Math.random() - 0.5) * 2000;
    data.push({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      price: basePrice + randomWalk + i * 100,
      ma20: basePrice + i * 95,
      ma50: basePrice + i * 85,
    });
  }
  return data;
};

// Generate sector heatmap data
const generateSectorHeatmap = () => {
  const sectors = [
    { name: 'DeFi', performance: 12.5, marketCap: 85 },
    { name: 'Layer 1', performance: -3.2, marketCap: 120 },
    { name: 'Layer 2', performance: 8.7, marketCap: 45 },
    { name: 'Gaming', performance: 15.3, marketCap: 28 },
    { name: 'NFT', performance: -8.4, marketCap: 32 },
    { name: 'Meme', performance: 22.1, marketCap: 18 },
  ];
  return sectors;
};

// Generate volume profile data
const generateVolumeProfile = () => {
  return [
    { price: 45000, volume: 1250, type: 'buy' },
    { price: 44500, volume: 2100, type: 'buy' },
    { price: 44000, volume: 3500, type: 'neutral' },
    { price: 43500, volume: 2800, type: 'sell' },
    { price: 43000, volume: 1900, type: 'sell' },
    { price: 42500, volume: 1100, type: 'sell' },
  ];
};

const streamResponses: Record<string, () => AsyncGenerator<StreamMessage>> = {
  'analyze-bitcoin': async function* () {
    yield {
      type: 'tool',
      content: 'Fetching BTC price data from exchanges...',
      timestamp: Date.now(),
    };
    await delay(800);

    yield {
      type: 'tool',
      content: 'Analyzing technical indicators (RSI, MACD, Bollinger Bands)...',
      timestamp: Date.now(),
    };
    await delay(1000);

    yield {
      type: 'tool',
      content: 'Checking support/resistance levels...',
      timestamp: Date.now(),
    };
    await delay(700);

    yield {
      type: 'text',
      content:
        'Based on current market conditions, Bitcoin is trading at $43,250 with key resistance at $44,800 and support at $42,100. The RSI is at 58, indicating neutral momentum.',
      timestamp: Date.now(),
    };
    await delay(600);

    yield {
      type: 'chart',
      content: {
        type: 'line',
        data: generateBTCPriceData(),
        config: {
          title: 'BTC Price with Moving Averages (30D)',
          xAxisKey: 'date',
          lines: [
            { dataKey: 'price', stroke: '#3b82f6', name: 'Price' },
            { dataKey: 'ma20', stroke: '#10b981', name: 'MA(20)' },
            { dataKey: 'ma50', stroke: '#f59e0b', name: 'MA(50)' },
          ],
        },
      } as ChartData,
      timestamp: Date.now(),
    };
    await delay(1200);

    yield {
      type: 'text',
      content:
        'Technical outlook: Price is above both MA(20) and MA(50), suggesting bullish momentum. Watch for a potential breakout above $44,800 or a pullback to test $42,100 support.',
      timestamp: Date.now(),
    };
    await delay(800);

    yield {
      type: 'paywall',
      content: 'Upgrade to Premium for full technical analysis, real-time alerts, and backtested strategies',
      timestamp: Date.now(),
    };
  },

  'market-sentiment': async function* () {
    yield { type: 'tool', content: 'Aggregating social sentiment data...', timestamp: Date.now() };
    await delay(900);

    yield { type: 'tool', content: 'Analyzing funding rates across exchanges...', timestamp: Date.now() };
    await delay(1100);

    yield { type: 'tool', content: 'Processing on-chain metrics...', timestamp: Date.now() };
    await delay(800);

    yield {
      type: 'text',
      content:
        'Current market sentiment is moderately bullish. Social sentiment score: 68/100. Funding rates are neutral at 0.01%. On-chain metrics show increasing accumulation by long-term holders.',
      timestamp: Date.now(),
    };
    await delay(700);

    yield {
      type: 'chart',
      content: {
        type: 'heatmap',
        data: generateSectorHeatmap(),
        config: {
          title: 'Crypto Sector Performance (24h)',
          xAxisKey: 'name',
          yAxisKey: 'performance',
        },
      } as ChartData,
      timestamp: Date.now(),
    };
    await delay(1000);

    yield {
      type: 'paywall',
      content: 'Upgrade to access detailed sentiment breakdowns and custom alerts',
      timestamp: Date.now(),
    };
  },

  'compare-btc-eth': async function* () {
    yield { type: 'tool', content: 'Fetching BTC and ETH data...', timestamp: Date.now() };
    await delay(850);

    yield { type: 'tool', content: 'Running comparative analysis...', timestamp: Date.now() };
    await delay(950);

    yield {
      type: 'text',
      content:
        'Over the last 30 days: BTC +8.2%, ETH +12.5%. ETH is outperforming with stronger momentum (RSI: 62 vs 58). However, BTC shows better volume support at current levels.',
      timestamp: Date.now(),
    };
    await delay(800);

    yield {
      type: 'paywall',
      content: 'Upgrade for detailed correlation analysis and pair trading strategies',
      timestamp: Date.now(),
    };
  },

  'volume-analysis': async function* () {
    yield { type: 'tool', content: 'Scanning volume across all assets...', timestamp: Date.now() };
    await delay(1000);

    yield { type: 'tool', content: 'Identifying unusual activity...', timestamp: Date.now() };
    await delay(900);

    yield {
      type: 'text',
      content:
        'Detected unusual volume in 3 assets: SOL (+285% volume), MATIC (+190%), AVAX (+165%). All showing signs of institutional accumulation with large buy orders.',
      timestamp: Date.now(),
    };
    await delay(700);

    yield {
      type: 'chart',
      content: {
        type: 'bar',
        data: generateVolumeProfile(),
        config: {
          title: 'BTC Volume Profile',
          xAxisKey: 'price',
          dataKey: 'volume',
        },
      } as ChartData,
      timestamp: Date.now(),
    };
    await delay(1000);

    yield {
      type: 'paywall',
      content: 'Upgrade to track institutional order flow in real-time',
      timestamp: Date.now(),
    };
  },

  'find-breakouts': async function* () {
    yield { type: 'tool', content: 'Scanning top 50 crypto assets...', timestamp: Date.now() };
    await delay(1100);

    yield { type: 'tool', content: 'Checking multi-timeframe confluence...', timestamp: Date.now() };
    await delay(1000);

    yield {
      type: 'text',
      content:
        'Found 4 potential breakout setups: LINK (daily/4h confluence), ATOM (forming cup & handle), INJ (breaking resistance), ARB (volume expansion). Probability score: 75-82%.',
      timestamp: Date.now(),
    };
    await delay(800);

    yield {
      type: 'paywall',
      content: 'Upgrade to get instant breakout alerts and detailed entry/exit levels',
      timestamp: Date.now(),
    };
  },

  'risk-assessment': async function* () {
    yield { type: 'tool', content: 'Calculating market volatility metrics...', timestamp: Date.now() };
    await delay(900);

    yield { type: 'tool', content: 'Analyzing cross-asset correlations...', timestamp: Date.now() };
    await delay(1000);

    yield { type: 'tool', content: 'Processing macro indicators...', timestamp: Date.now() };
    await delay(800);

    yield {
      type: 'text',
      content:
        'Current market risk: MODERATE (5.5/10). Volatility is below average. BTC-ETH correlation at 0.78. Macro indicators suggest stable conditions. Recommended position sizing: 60-70% of normal.',
      timestamp: Date.now(),
    };
    await delay(700);

    yield {
      type: 'paywall',
      content: 'Upgrade for advanced risk metrics and portfolio optimization tools',
      timestamp: Date.now(),
    };
  },
};

export async function* simulateAIStream(promptId: string): AsyncGenerator<StreamMessage> {
  const generator = streamResponses[promptId];
  if (!generator) {
    yield {
      type: 'text',
      content: 'Sorry, I couldn&apos;t process that request. Please try one of the suggested prompts.',
      timestamp: Date.now(),
    };
    return;
  }

  yield* generator();
}
