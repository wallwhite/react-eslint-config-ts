'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
import { featuresCopy } from '@/lib/data/copy';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const BentoGrid = () => {
  return (
    <SectionContainer id="features" className="bg-zinc-900/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            Everything you need to trade smarter
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Powerful features built for professional traders
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuresCopy.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className={index === 0 ? 'md:col-span-2' : ''}
            >
              <Card className="group h-full border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-800 p-2">
                      <Icons.Sparkles className="h-5 w-5 text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-50">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                        <Icons.Check className="mt-0.5 h-4 w-4 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
