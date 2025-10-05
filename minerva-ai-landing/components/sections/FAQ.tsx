'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '@/lib/data/faq';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export const FAQ = () => {
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
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to know about Minerva AI
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-6 data-[state=open]:bg-zinc-900"
              >
                <AccordionTrigger className="text-left text-zinc-50 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
