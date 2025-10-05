'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { testimonials } from '@/lib/data/testimonials';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const Testimonials = () => {
  return (
    <SectionContainer className="bg-zinc-900/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold text-zinc-50 sm:text-4xl">
            Trusted by traders worldwide
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            See what our users are saying
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="h-full border-zinc-800 bg-zinc-900/50 p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="mb-6 text-zinc-300">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800" />
                  <div>
                    <p className="font-medium text-zinc-50">{testimonial.author}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
