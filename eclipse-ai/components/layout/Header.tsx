"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#indicators", label: "Indicators" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">eclipse-ai</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Sign up
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
