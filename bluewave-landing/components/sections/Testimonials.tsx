"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by professional traders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how Bluewave is helping traders gain their edge
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-zinc-700 hover:shadow-lg">
                <CardContent className="pt-6">
                  {/* Rating */}
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-sm leading-relaxed text-zinc-200">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-semibold text-zinc-100">{testimonial.author}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-xs text-muted-foreground"
        >
          Individual results may vary. Past performance is not indicative of future results.
        </motion.p>
      </div>
    </section>
  );
};
