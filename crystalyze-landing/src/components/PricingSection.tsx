"use client";

import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  limitations?: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with AI trading",
    features: [
      "3 Premium TradingView Indicators",
      "Basic AI Models Access",
      "5 Premium AI Requests/month",
      "Real-time Market Data",
      "Basic Pattern Recognition",
      "Community Support",
      "Mobile App Access",
    ],
    limitations: [
      "Limited to basic AI models",
      "5 premium requests only",
    ],
    cta: "Start Free",
  },
  {
    name: "Premium",
    price: "$49",
    originalPrice: "$99",
    description: "Advanced AI tools for serious traders",
    features: [
      "6 Premium TradingView Indicators (+3)",
      "All AI Models with Limits",
      "500 AI Requests/month",
      "Advanced Pattern Recognition",
      "Sentiment Analysis",
      "Risk Management AI",
      "Priority Support",
      "Custom Alerts",
      "Backtesting Tools",
    ],
    highlighted: true,
    badge: "MOST POPULAR",
    cta: "Start 7-Day Trial",
  },
  {
    name: "Ultimate",
    price: "$149",
    originalPrice: "$299",
    description: "Unlimited AI power for professional traders",
    features: [
      "10 Premium TradingView Indicators (+4)",
      "Unlimited AI Requests",
      "All Premium Features",
      "API Access",
      "Custom AI Training",
      "1-on-1 Onboarding",
      "White-glove Support",
      "Advanced Analytics",
      "Multi-account Support",
      "Early Access to New Features",
    ],
    badge: "BEST VALUE",
    cta: "Get Ultimate Access",
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const getPrice = (plan: PricingPlan) => {
    if (plan.price === "$0") return plan.price;

    const basePrice = parseInt(plan.price.replace("$", ""));
    if (billingCycle === "yearly") {
      return `$${Math.floor(basePrice * 0.8)}`;
    }
    return plan.price;
  };

  const getOriginalPrice = (plan: PricingPlan) => {
    if (!plan.originalPrice) return null;

    const basePrice = parseInt(plan.originalPrice.replace("$", ""));
    if (billingCycle === "yearly") {
      return `$${Math.floor(basePrice * 0.8)}`;
    }
    return plan.originalPrice;
  };

  return (
    <section className="py-20 relative">
      <div className="container-width section-padding">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mt-3 mb-4">
            Choose Your <span className="gradient-text">Trading Edge</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 glass-effect rounded-full">
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.highlighted ? "md:-mt-8" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div
                className={`h-full glass-effect rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.highlighted
                    ? "border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "border-gray-800 hover:border-blue-500/30"
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold">
                      {getPrice(plan)}
                    </span>
                    {plan.price !== "$0" && (
                      <span className="text-gray-400">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    )}
                  </div>

                  {getOriginalPrice(plan) && (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through">
                        {getOriginalPrice(plan)}
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        50% OFF
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {plan.limitations && plan.limitations.map((limitation, i) => (
                    <li key={`limitation-${i}`} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-500">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-200 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25"
                      : plan.name === "Free"
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 text-blue-400 hover:from-blue-500/20 hover:to-blue-600/20"
                  }`}
                >
                  {plan.cta}
                </button>

                {plan.highlighted && (
                  <p className="text-center text-xs text-gray-500 mt-4">
                    No credit card required • Cancel anytime
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 p-6 glass-effect rounded-2xl">
            <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div className="text-left">
              <h4 className="font-bold text-lg">30-Day Money Back Guarantee</h4>
              <p className="text-gray-400 text-sm">
                Try CrystalAIze risk-free. If you&apos;re not satisfied, get a full refund.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-12 p-8 glass-effect rounded-2xl text-center border border-gray-800">
          <h3 className="text-2xl font-bold mb-2">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">
            Get tailored AI solutions for hedge funds, prop trading firms, and institutions.
          </p>
          <button className="px-8 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/[0.05] transition-all duration-200 border border-gray-700">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;