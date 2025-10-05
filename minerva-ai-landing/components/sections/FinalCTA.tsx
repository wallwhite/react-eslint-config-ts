'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ctaBannerCopy } from '@/lib/data/copy';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp } from '@/lib/animations';

export const FinalCTA = () => {
  const scrollToPricing = () => {
    const pricing = document.querySelector('#pricing');
    pricing?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionContainer className="bg-gradient-to-r from-zinc-900 to-zinc-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
          {ctaBannerCopy.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          {ctaBannerCopy.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="gap-2" onClick={scrollToPricing}>
            {ctaBannerCopy.primaryCTA}
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            {ctaBannerCopy.secondaryCTA}
          </Button>
        </div>
      </motion.div>
    </SectionContainer>
  );
};
