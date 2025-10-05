'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
import { benefitsCopy } from '@/lib/data/copy';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const KeyBenefits = () => {
  return (
    <SectionContainer className="bg-zinc-950">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            Outcomes that matter
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Measurable results from day one
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefitsCopy.map((benefit) => {
            const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div key={benefit.id} variants={fadeInUp}>
                <Card className="h-full border-zinc-800 bg-zinc-900/50 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800">
                    {IconComponent && <IconComponent className="h-6 w-6 text-zinc-400" />}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-zinc-50">
                    {benefit.title}
                  </h3>
                  <p className="mb-4 text-sm text-zinc-400">
                    {benefit.description}
                  </p>
                  <div className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3">
                    <p className="text-sm font-semibold text-zinc-300">
                      {benefit.stat}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
