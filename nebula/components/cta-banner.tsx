"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, TrendingUp, Shield } from "lucide-react";

export const CTABanner = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join 10,000+ traders using AI-powered analysis to make smarter decisions.
              Start free, no credit card required.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => scrollToSection("pricing")}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/10"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 border-t border-border/50">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-blue-400" />
              <span>10,000+ Active Traders</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>34% Avg. Win Rate Increase</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>14-Day Money-Back Guarantee</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4">
            <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20">
              No Credit Card Required
            </Badge>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Setup in 2 Minutes
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
