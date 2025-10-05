"use client";

import { Button } from "@/components/ui/button";
import { Users, Clock, Shield, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const socialProof = [
  { icon: Users, label: "10K+ traders" },
  { icon: Clock, label: "99% uptime" },
  { icon: Shield, label: "SOC 2 Compliant" },
];

export const CTABanner = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16 text-center md:px-16"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to gain your edge?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Join 10,000+ traders using AI-powered market intelligence
            </p>

            <div className="mb-8 flex justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Start free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {socialProof.map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-blue-100">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
