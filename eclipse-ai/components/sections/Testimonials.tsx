"use client";

import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="border-b border-border py-20 md:py-32">
      <div className="container px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Trusted by Professionals
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            From hedge funds to independent traders, see what our users say
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-zinc-800 bg-zinc-900/50">
                <CardContent className="pt-6">
                  <Quote className="mb-4 h-8 w-8 text-blue-500/50" />
                  <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-zinc-100">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-zinc-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
