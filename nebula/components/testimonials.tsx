"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Day Trader",
    avatar: "MC",
    rating: 5,
    content: "Nebula completely changed my trading game. The AI analysis is incredibly accurate, and I've increased my win rate from 52% to 71% in just 2 months. The GPT-4 insights are like having a professional analyst on call 24/7.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah Williams",
    role: "Crypto Investor",
    avatar: "SW",
    rating: 5,
    content: "As someone who's tried countless platforms, Nebula stands out. The TradingView indicators are professional-grade, and the automated alerts have saved me from several bad trades. Worth every penny of the Premium subscription.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Alex Rodriguez",
    role: "Swing Trader",
    avatar: "AR",
    rating: 4,
    content: "The multi-model AI analysis is a game-changer. Being able to compare GPT-4, Claude, and Gemini perspectives on the same trade setup gives me incredible confidence. The risk management tools alone justify the cost.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Jennifer Park",
    role: "Portfolio Manager",
    avatar: "JP",
    rating: 5,
    content: "I manage a $2M portfolio and Nebula has become an essential tool. The real-time data, advanced charting, and portfolio tracking features are institutional-grade. The backtesting capabilities helped me optimize my strategy significantly.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "David Thompson",
    role: "Options Trader",
    avatar: "DT",
    rating: 5,
    content: "The AI-powered signal accuracy is unmatched. I use Nebula for both crypto and stock options trading. The sentiment analysis has been particularly valuable for timing entries around major news events. Highly recommend!",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Rachel Kim",
    role: "Forex & Crypto Trader",
    avatar: "RK",
    rating: 4,
    content: "Nebula's indicators have given me an edge I never had before. The Liquidity Heatmap Pro shows exactly where the big players are positioned. Combined with AI analysis, I'm making smarter, more profitable decisions daily.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted by
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}10,000+ Traders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about their results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className={`bg-gradient-to-br ${testimonial.gradient}`}>
                      <AvatarFallback className="text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
