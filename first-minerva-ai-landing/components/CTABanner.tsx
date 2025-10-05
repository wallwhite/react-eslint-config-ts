"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Join thousands of traders already using AI to gain an edge in the markets.
            Start your free trial today - no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-zinc-900"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-zinc-400 mt-8">
            14-day money-back guarantee • Cancel anytime • No long-term contracts
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
