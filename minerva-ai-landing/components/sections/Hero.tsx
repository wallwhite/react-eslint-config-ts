'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AIPreview } from '@/components/interactive/AIPreview';
import { heroCopy } from '@/lib/data/copy';
import { fadeInUp, staggerContainer, slideInFromRight } from '@/lib/animations';

export const Hero = () => {
  const scrollToPricing = () => {
    const pricing = document.querySelector('#pricing');
    pricing?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="border-zinc-700 bg-zinc-900/50 text-zinc-300 mb-6">
                {heroCopy.announcePill}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              {heroCopy.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-zinc-400 sm:text-xl"
            >
              {heroCopy.description}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" className="gap-2" onClick={scrollToPricing}>
                {heroCopy.primaryCTA}
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="h-5 w-5" />
                {heroCopy.secondaryCTA}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - AI Preview */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
          >
            <AIPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
