'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { indicators } from '@/lib/data/indicators';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const IndicatorsSpotlight = () => {
  return (
    <SectionContainer id="indicators" className="bg-zinc-950">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            Premium TradingView Indicators
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Professional-grade indicators used by institutional traders
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {indicators.slice(0, 6).map((indicator) => (
            <motion.div key={indicator.id} variants={fadeInUp}>
              <Card className="group h-full border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg text-zinc-50">
                        {indicator.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={
                          indicator.tier === 'free'
                            ? 'border-green-500/50 text-green-400'
                            : indicator.tier === 'premium'
                              ? 'border-blue-500/50 text-blue-400'
                              : 'border-purple-500/50 text-purple-400'
                        }
                      >
                        {indicator.tier.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-zinc-400">
                    {indicator.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {indicator.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
