"use client";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  profit: string;
  tradingPair: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Michael Chen",
    role: "Day Trader",
    avatar: "MC",
    content: "CrystalAIze transformed my trading completely. The AI predictions are incredibly accurate, and the indicators have helped me identify profitable setups I would have missed otherwise. My win rate went from 45% to 73% in just 2 months.",
    profit: "+$24,500",
    tradingPair: "BTC/USDT",
    rating: 5,
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Swing Trader",
    avatar: "SW",
    content: "The sentiment analysis alone is worth the subscription. It helped me avoid major losses during the last market correction. The AI warned me 2 days before the crash while everyone else was still bullish.",
    profit: "+$18,200",
    tradingPair: "ETH/USD",
    rating: 5,
  },
  {
    id: "3",
    name: "David Thompson",
    role: "Crypto Investor",
    avatar: "DT",
    content: "I've tried dozens of trading tools, but nothing comes close to CrystalAIze. The multi-model AI approach gives me confidence in every trade. The risk management AI has saved me from countless bad decisions.",
    profit: "+$42,800",
    tradingPair: "Multiple",
    rating: 5,
  },
  {
    id: "4",
    name: "Lisa Rodriguez",
    role: "Stock Trader",
    avatar: "LR",
    content: "The pattern recognition AI is phenomenal. It catches setups that I would never spot manually. Combined with the volume flow indicator, I've had my best trading year ever.",
    profit: "+$31,600",
    tradingPair: "NVDA",
    rating: 5,
  },
  {
    id: "5",
    name: "James Park",
    role: "Options Trader",
    avatar: "JP",
    content: "The real-time analysis is a game-changer. I get instant insights on market movements and the AI explains exactly why certain trades are recommended. It's like having a team of analysts working 24/7.",
    profit: "+$27,900",
    tradingPair: "SPY Options",
    rating: 5,
  },
  {
    id: "6",
    name: "Emma Foster",
    role: "Forex Trader",
    avatar: "EF",
    content: "CrystalAIze's arbitrage scanner found opportunities I didn't know existed. The speed of execution recommendations has helped me capitalize on price discrepancies across exchanges consistently.",
    profit: "+$19,400",
    tradingPair: "EUR/USD",
    rating: 5,
  },
];

const stats = [
  { value: "$2.4M+", label: "Total Profits Generated", trend: "+127%" },
  { value: "15,000+", label: "Active Traders", trend: "+89%" },
  { value: "92%", label: "Win Rate Average", trend: "+34%" },
  { value: "4.9/5", label: "User Rating", trend: "1,200+ reviews" },
];

const SocialProof = () => {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 relative">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Trusted by Traders Worldwide
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Real Results from <span className="gradient-text">Real Traders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of traders who are already leveraging AI to consistently beat the market
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 text-center border border-gray-800"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
              <div className="text-xs text-green-400">{stat.trend}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-effect rounded-xl p-6 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div>
                  <div className="text-xs text-gray-500">Profit</div>
                  <div className="text-green-400 font-bold">{testimonial.profit}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Trading</div>
                  <div className="text-blue-400 font-semibold text-sm">{testimonial.tradingPair}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart Mockup */}
        <div className="mt-16 glass-effect rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6">Average User Performance Over Time</h3>
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-end justify-between gap-2">
              {Array.from({ length: 12 }, (_, i) => {
                const height = 20 + (i * 5) + (i > 6 ? (i - 6) * 10 : 0);
                return (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-500 hover:from-blue-500 hover:to-blue-300"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  />
                );
              })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 -mb-6">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div>
              <div className="text-sm text-gray-500">Average Monthly Return</div>
              <div className="text-2xl font-bold text-green-400">+18.7%</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Success Rate</div>
              <div className="text-2xl font-bold text-blue-400">92%</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-400">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="text-gray-400">15,000+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-400">4.9/5 Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;