"use client";

import { useState, useEffect } from "react";

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-width section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited Time Offer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 font-semibold text-sm">LIMITED TIME OFFER</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold font-heading mb-6">
            Start Your <span className="gradient-text">Risk-Free</span> Trial Today
          </h2>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 15,000+ traders who are already using AI to dominate the markets.
            Get instant access to all features with our 7-day free trial.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold gradient-text">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Hours</div>
            </div>
            <div className="text-3xl font-bold text-gray-600 self-center">:</div>
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold gradient-text">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Minutes</div>
            </div>
            <div className="text-3xl font-bold text-gray-600 self-center">:</div>
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-3xl font-bold gradient-text">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-500 uppercase">Seconds</div>
            </div>
          </div>

          <p className="text-yellow-400 mb-8 font-semibold">
            50% discount ends soon - Regular price $99/month
          </p>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-effect rounded-xl p-6 border border-gray-800">
              <svg className="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-bold mb-2">No Risk</h3>
              <p className="text-sm text-gray-400">
                30-day money-back guarantee. Cancel anytime.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-gray-800">
              <svg className="w-12 h-12 text-blue-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-bold mb-2">Instant Access</h3>
              <p className="text-sm text-gray-400">
                Start using AI and indicators immediately.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-gray-800">
              <svg className="w-12 h-12 text-purple-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-bold mb-2">Save $600/year</h3>
              <p className="text-sm text-gray-400">
                Lock in 50% discount before it expires.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-blue-500/30">
              Start Free Trial Now
              <span className="block text-sm font-normal mt-1 opacity-90">
                No credit card required
              </span>
            </button>
            <button className="px-10 py-5 glass-effect text-white font-bold text-lg rounded-lg hover:bg-white/[0.05] transition-all duration-200 border border-gray-700">
              Schedule Demo
              <span className="block text-sm font-normal mt-1 opacity-90">
                See it in action
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Activation</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 p-8 glass-effect rounded-2xl border border-gray-800 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-300 italic mb-4">
              &ldquo;CrystalAIze turned my break-even trading into consistent profits. The AI catches opportunities I would never see. Best investment I&apos;ve made in my trading career.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                JH
              </div>
              <div className="text-left">
                <div className="font-semibold">John Harrison</div>
                <div className="text-sm text-gray-500">Professional Day Trader • +$127K profit</div>
              </div>
            </div>
          </div>

          {/* Final urgency message */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-2">
              Join before the price increases to $99/month
            </p>
            <div className="inline-flex items-center gap-2 text-green-400">
              <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">247 traders joined today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;