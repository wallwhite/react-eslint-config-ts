# Minerva AI Landing Page

A high-conversion SaaS landing page for Minerva AI - an AI-powered crypto & stock analysis platform with TradingView indicator packages.

## Features

- **Next.js 15+** with App Router and TypeScript strict mode
- **Tailwind CSS v4** with Zinc color theme
- **shadcn/ui** components for consistent UI
- **Framer Motion** for smooth animations
- **Recharts** for interactive data visualizations
- **Interactive AI Preview** with streaming simulation
- **Responsive Design** optimized for 320px-1440px+ screens
- **Accessibility** WCAG 2.1 AA compliant
- **SEO Optimized** with metadata and structured data

## 10 Key Sections

1. **Header** - Sticky navigation with logo, links, and CTAs
2. **Hero** - Announcement pill, headline, description, and interactive AI Preview
3. **Indicators Spotlight** - Showcase of 12 TradingView indicators
4. **Bento Grid Features** - 6 feature tiles highlighting capabilities
5. **Key Benefits** - Outcome-focused proof points
6. **Testimonials** - Social proof from traders
7. **Pricing** - Three-tier pricing with monthly/yearly toggle
8. **FAQ** - 10 questions addressing common objections
9. **Final CTA** - Conversion-focused banner
10. **Footer** - Product, company, legal, and social links

## Interactive AI Preview

The standout feature is the AI Preview in the Hero section:

- **Default State**: Inactive chat interface with readonly textarea
- **Hover Info**: Shows "Preview mode" tooltip
- **6 Quick Prompt Tabs**:
  - Analyze Bitcoin
  - Market Sentiment
  - Compare BTC vs ETH
  - Volume Analysis
  - Find Breakouts
  - Risk Assessment
- **Tab Click**: Prefills prompt and enables Send button
- **Streaming Simulation**: Opens drawer with:
  - Tool badges showing actions
  - Typing effect for AI responses
  - Recharts demo graphs (BTC line chart + sector heatmap)
  - Paywall footer with upgrade CTA

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm package manager

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - TypeScript validation
- `pnpm format` - Format code with Prettier

## Project Structure

```
minerva-ai-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   ├── interactive/       # AI Preview components
│   └── shared/            # Reusable components
├── lib/
│   ├── data/              # Mock data and content
│   ├── utils/             # Utility functions
│   ├── hooks/             # React hooks
│   ├── animations.ts      # Framer Motion variants
│   └── types.ts           # TypeScript types
└── public/                # Static assets
```

## Data Layer

All content is managed in `/lib/data/`:

- `indicators.ts` - 12 indicators (3 free, 6 premium, 3 ultimate)
- `pricing.ts` - Pricing plans with features
- `copy.ts` - Marketing copy for all sections
- `testimonials.ts` - User testimonials
- `faq.ts` - FAQ items
- `mockStreams.ts` - AI streaming simulation

## Tech Stack

- **Framework**: Next.js 15.5.4
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.14
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion 11.18.2
- **Charts**: Recharts 2.15.4
- **Icons**: Lucide React
- **Language**: TypeScript 5.9.3

## Performance Targets

- Lighthouse Performance: ≥90
- Lighthouse Accessibility: ≥95
- Lighthouse SEO: ≥90
- WCAG 2.1 AA compliance
- Mobile-first responsive design

## Customization

### Update Content

Edit files in `/lib/data/` to update:
- Indicator listings
- Pricing plans and features
- Marketing copy
- Testimonials
- FAQ items

### Add New Sections

1. Create component in `/components/sections/`
2. Import and add to `/app/page.tsx`
3. Update navigation links in Header if needed

### Modify Styling

- Theme colors: `tailwind.config.ts`
- CSS variables: `app/globals.css`
- Component variants: Individual component files

## License

This is a demonstration project for Minerva AI.

## Support

For questions or issues, please contact the development team.
