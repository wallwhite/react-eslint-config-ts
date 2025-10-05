'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { pricingPlans } from '@/lib/data/pricing';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <SectionContainer id="pricing" className="bg-zinc-900/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Start free, upgrade as you grow
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`text-sm font-medium transition-colors ${
              billingCycle === 'monthly' ? 'text-zinc-50' : 'text-zinc-500'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-zinc-50 transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`text-sm font-medium transition-colors ${
              billingCycle === 'yearly' ? 'text-zinc-50' : 'text-zinc-500'
            }`}
          >
            Yearly
            {billingCycle === 'yearly' && (
              <Badge variant="outline" className="ml-2 border-green-500/50 text-green-400">
                Save 17%
              </Badge>
            )}
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div key={plan.id} variants={fadeInUp}>
              <Card
                className={`relative h-full border-zinc-800 bg-zinc-900/50 p-8 ${
                  plan.popular ? 'border-2 border-blue-500/50 shadow-lg shadow-blue-500/10' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-50">{plan.name}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{plan.description}</p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-zinc-50">
                      ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                    </span>
                    <span className="text-zinc-400">/month</span>
                  </div>

                  {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                    <p className="text-sm text-zinc-400">
                      Billed ${plan.price.yearly}/year
                    </p>
                  )}

                  <Button
                    className="w-full gap-2"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.id === 'free' ? 'Start Free' : 'Start 14-day trial'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <div className="space-y-3 pt-6 border-t border-zinc-800">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 flex-shrink-0 text-zinc-600" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-zinc-300' : 'text-zinc-600'
                          } ${feature.highlight ? 'font-medium' : ''}`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            30-day money-back guarantee
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            Cancel anytime
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            No credit card required for free plan
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
