"use client";

import { KeyboardEvent, useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "#hero" },
  { label: "Product", href: "#workflow" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsMenuOpen(prev => !prev);
    }
  }, []);

  const handleMobileLinkKeyDown = useCallback((event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter") {
      setIsMenuOpen(false);
    }
  }, []);

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="flex h-[88px] items-center bg-[radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--secondary)_100%)]">
      <div className="layout-shell flex w-full items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3 text-foreground transition-colors hover:text-secondary-foreground"
          aria-label="CrystalAIze home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold tracking-[0.35em]">
            CA
          </div>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            Trading Intelligence
          </span>
        </a>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Primary navigation">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              tabIndex={0}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#pricing" className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground" tabIndex={0}>
            View Plans
          </a>
          <a href="#cta" className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/20 transition hover:bg-secondary/80" tabIndex={0}>
            Start Free Trial
          </a>
        </div>

        <button
          onClick={handleToggleMenu}
          onKeyDown={handleMenuKeyDown}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition hover:border-secondary hover:text-secondary md:hidden"
          tabIndex={0}
          type="button"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`md:hidden ${isMenuOpen ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"} absolute top-full left-0 right-0 overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300`}
      >
        <div className="layout-shell py-6">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                onKeyDown={handleMobileLinkKeyDown}
                className="rounded-xl border border-border px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:border-secondary hover:text-secondary"
                tabIndex={0}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#pricing"
              onClick={handleCloseMenu}
              onKeyDown={handleMobileLinkKeyDown}
              className="rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:border-secondary"
              tabIndex={0}
            >
              View Plans
            </a>
            <a
              href="#cta"
              onClick={handleCloseMenu}
              onKeyDown={handleMobileLinkKeyDown}
              className="rounded-xl bg-secondary px-4 py-3 text-center text-sm font-semibold text-secondary-foreground shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/20 transition hover:bg-secondary/80"
              tabIndex={0}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

