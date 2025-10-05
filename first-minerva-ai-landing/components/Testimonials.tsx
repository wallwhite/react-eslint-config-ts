"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    company: "Apex Capital",
    content: "Minerva AI has completely transformed how I analyze markets. The AI insights are incredibly accurate and have helped me identify opportunities I would have missed. My win rate has improved by 35% since I started using it.",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Crypto Investor",
    company: "Independent",
    content: "The multi-model AI support is a game-changer. Being able to compare insights from GPT-4, Claude, and other models gives me confidence in my trading decisions. The indicators are professional-grade and worth every penny.",
    avatar: "MR",
  },
  {
    name: "Emma Thompson",
    role: "Quantitative Analyst",
    company: "Horizon Trading",
    content: "As a quant, I'm impressed by the depth of analysis Minerva AI provides. The backtesting capabilities and sentiment analysis tools are on par with institutional-grade platforms, but at a fraction of the cost.",
    avatar: "ET",
  },
  {
    name: "David Park",
    role: "Day Trader",
    company: "Self-Employed",
    content: "I've tried many trading tools, but Minerva AI stands out. The real-time alerts have saved me from bad trades multiple times, and the AI analysis helps me stay disciplined. It's like having a team of analysts working 24/7.",
    avatar: "DP",
  },
  {
    name: "Lisa Anderson",
    role: "Portfolio Manager",
    company: "Vertex Investments",
    content: "The integration of AI models with traditional technical analysis is brilliant. We use Minerva AI for our entire fund, and it's become an essential part of our decision-making process. Highly recommended for serious traders.",
    avatar: "LA",
  },
  {
    name: "James Wilson",
    role: "Forex Trader",
    company: "Independent",
    content: "What impressed me most is the accuracy of the sentiment analysis across multiple platforms. Combined with the custom indicators, I've been able to catch market movements before they happen. Best investment I've made in my trading career.",
    avatar: "JW",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what professional traders and investors are saying about Minerva AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-full h-12 w-12 flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
