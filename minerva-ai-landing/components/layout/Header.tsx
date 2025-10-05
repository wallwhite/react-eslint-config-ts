'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Indicators', href: '#indicators' },
  { label: 'Pricing', href: '#pricing' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800' : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-zinc-50">
              Minerva AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" className="text-zinc-400 hover:text-zinc-50">
              Sign in
            </Button>
            <Button onClick={() => scrollToSection('#pricing')}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-zinc-400" />
            ) : (
              <Menu className="h-6 w-6 text-zinc-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="space-y-1 border-t border-zinc-800 bg-zinc-950 px-4 pb-4 pt-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full py-2 text-left text-base font-medium text-zinc-400 transition-colors hover:text-zinc-50"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full text-zinc-400 hover:text-zinc-50">
                Sign in
              </Button>
              <Button className="w-full" onClick={() => scrollToSection('#pricing')}>
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
