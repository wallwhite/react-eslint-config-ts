'use client';

import { Twitter, Github, MessageCircle, Send } from 'lucide-react';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Indicators', href: '#indicators' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'API Docs', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="text-2xl font-bold text-zinc-50">
              Minerva AI
            </a>
            <p className="text-base text-zinc-400">
              AI-powered market intelligence for crypto and stock traders.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-zinc-400 transition-colors hover:text-zinc-50"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-base text-zinc-400 transition-colors hover:text-zinc-50"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-base text-zinc-400 transition-colors hover:text-zinc-50"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-zinc-800 pt-8">
          <p className="text-base text-zinc-400 xl:text-center">
            &copy; {new Date().getFullYear()} Minerva AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
