"use client";

import { Star, Trophy, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  role: string;
  experience: string;
  timeUsing: string;
  improvement: {
    before: string;
    after: string;
  };
  quote: string;
  rating: number;
  verified: boolean;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Rodriguez",
    location: "Miami, FL",
    avatar: "MR",
    role: "Day Trader",
    experience: "3 years trading",
    timeUsing: "6 months using platform",
    improvement: {
      before: "Basic chart reading",
      after: "Advanced pattern recognition"
    },
    quote: "The AI indicators helped me understand market patterns I never noticed before. The educational content and real-time analysis have significantly improved my technical analysis skills.",
    rating: 5,
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "SC",
    role: "Crypto Investor",
    experience: "2 years experience",
    timeUsing: "4 months using tools",
    improvement: {
      before: "Emotional trading",
      after: "Data-driven decisions"
    },
    quote: "CrystalAIze transformed how I analyze markets. The momentum scanner and educational resources helped me develop a systematic approach to trading instead of relying on gut feelings.",
    rating: 5,
    verified: true,
    featured: true
  },
  {
    id: 3,
    name: "David Thompson",
    location: "New York, NY",
    avatar: "DT",
    role: "Stock Trader",
    experience: "5 years trading",
    timeUsing: "1 year subscriber",
    improvement: {
      before: "Manual analysis",
      after: "AI-assisted insights"
    },
    quote: "The combination of AI analysis and educational content is incredible. I've learned more about technical indicators in the past year than in my previous five years of trading.",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    name: "Emily Watson",
    location: "Austin, TX",
    avatar: "EW",
    role: "Part-time Trader",
    experience: "Beginner level",
    timeUsing: "3 months learning",
    improvement: {
      before: "No trading knowledge",
      after: "Understanding basics"
    },
    quote: "As a complete beginner, the educational resources and AI guidance have been invaluable. I'm learning to read charts and understand market dynamics at my own pace.",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    name: "James Park",
    location: "Los Angeles, CA",
    avatar: "JP",
    role: "Options Trader",
    experience: "4 years experience",
    timeUsing: "8 months using AI",
    improvement: {
      before: "Inconsistent strategy",
      after: "Systematic approach"
    },
    quote: "The risk management tools and market analysis have helped me develop a more disciplined trading approach. The educational webinars are particularly valuable.",
    rating: 5,
    verified: true
  },
  {
    id: 6,
    name: "Lisa Anderson",
    location: "Chicago, IL",
    avatar: "LA",
    role: "Swing Trader",
    experience: "1 year trading",
    timeUsing: "5 months subscriber",
    improvement: {
      before: "Following tips",
      after: "Independent analysis"
    },
    quote: "Finally understanding how to analyze markets independently! The AI tools provide insights while teaching me why certain patterns matter.",
    rating: 5,
    verified: true
  }
];

const stats = [
  { label: "User Satisfaction", value: "94%", sublabel: "rating our tools" },
  { label: "Active Learners", value: "10K+", sublabel: "improving daily" },
  { label: "Analysis Reports", value: "500K+", sublabel: "generated monthly" },
  { label: "Educational Hours", value: "1,200+", sublabel: "of content available" }
];

export const SuccessStories = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-4">
            <Trophy className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">USER EXPERIENCES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Real Traders Share Their{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how traders are using our <span className="text-white font-semibold">AI tools and educational resources</span>
            to improve their market analysis skills and make more informed decisions.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800">
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mt-1">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Featured testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {testimonials.filter(t => t.featured).map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-500/20 p-8 hover:scale-105 transition-transform"
            >
              {/* Verified badge */}
              <div className="absolute top-6 right-6 flex items-center gap-1 rounded-full bg-emerald-500/20 px-3 py-1">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">VERIFIED USER</span>
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role} • {testimonial.location}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience highlight */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 mb-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Learning Progress</span>
                  <span className="text-xs text-blue-400">{testimonial.timeUsing}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-400">
                    <BookOpen className="h-4 w-4 text-gray-500 inline mr-1" />
                    {testimonial.improvement.before}
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  <div className="text-sm font-semibold text-blue-400">
                    {testimonial.improvement.after}
                  </div>
                </div>
                <div className="text-right mt-2">
                  <span className="text-xs text-gray-500">
                    {testimonial.experience}
                  </span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>

        {/* Regular testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.filter(t => !t.featured).map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl bg-gray-950/50 border border-gray-800 p-6 hover:border-gray-700 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.verified && (
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                )}
              </div>

              {/* Experience */}
              <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Experience</span>
                  <span className="text-xs text-gray-500">{testimonial.timeUsing}</span>
                </div>
                <div className="text-sm font-semibold text-blue-400 mt-1">
                  {testimonial.improvement.after}
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-400 line-clamp-3">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 p-8">
            <h3 className="text-2xl font-bold text-white">
              Join 10,000+ Traders Learning Every Day
            </h3>
            <p className="text-gray-400 max-w-2xl">
              Access professional AI tools, educational resources, and a supportive community.
              Start your journey to becoming a more informed trader.
            </p>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105">
                Start Your Free Trial
                <BookOpen className="h-5 w-5" />
              </button>
              <div className="text-left">
                <div className="text-sm text-gray-500">7-day free trial</div>
                <div className="text-sm font-semibold text-blue-400">No credit card required</div>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              * Results vary. Trading involves risk. Educational content for informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};