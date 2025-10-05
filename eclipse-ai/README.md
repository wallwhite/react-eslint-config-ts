# eclipse-ai Landing Page

A complete, production-ready SaaS landing page for eclipse-ai - an AI analytics platform for crypto and equities.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (dark theme, zinc color scheme)
- **Framer Motion** (tasteful micro-interactions)
- **Recharts** (demo graphs in analysis drawer)

## Features

### Complete Information Architecture (10 Sections)

1. **Header** - Sticky navigation with logo, anchor links, Sign up (primary) + Login (ghost)
2. **Hero** - Announcement pill + H1 + subcopy + dual CTAs + AI preview block + 6 shortcut tabs
3. **Indicators Carousel** - 6 professional TradingView indicators with cards
4. **Bento Features** - 6 tiles showcasing AI capabilities
5. **Benefits** - ROI-focused bullets highlighting key advantages
6. **Testimonials** - 4 credible quotes from industry professionals
7. **Pricing** - Free/Premium/Ultimate comparison table
8. **FAQ** - 10 accordion items answering common questions
9. **Final CTA** - Strong closer with social proof badges
10. **Footer** - Links, legal, socials

### Interactive AI Preview

- **Initial State**: Disabled textarea with tooltip guidance
- **Model Selector**: Choose between Claude, GPT-4, Gemini
- **Tools Display**: Web Search, On-chain Data, Price Action
- **6 Shortcut Tabs**: Pre-configured prompts for common analyses
- **Tab Interaction**: Click to inject prompt and enable Send button

### Analysis Drawer Simulation

- **Tool-step Animations**: Sequential display of analysis steps
- **Recharts Graphs**: Price action (LineChart) and Volume (BarChart)
- **Streaming Text**: Typewriter effect for analysis results
- **Paywall Slab**: Upgrade prompt with gradient border

## Project Structure

```
eclipse-ai/
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with CSS variables
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with navigation
│   │   └── Footer.tsx      # Footer with links and socials
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AIPreviewBlock.tsx
│   │   ├── ShortcutTabs.tsx
│   │   ├── AnalysisDrawer.tsx
│   │   ├── IndicatorsCarousel.tsx
│   │   ├── BentoFeatures.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── indicators.ts       # Indicator data
│   ├── testimonials.ts     # Testimonial quotes
│   ├── faqs.ts            # FAQ items
│   ├── pricing.ts         # Pricing tiers
│   ├── features.ts        # Feature data
│   └── shortcuts.ts       # AI prompt shortcuts
└── lib/
    └── utils.ts           # Utility functions
```

## Getting Started

### Installation

```bash
# Navigate to project directory
cd eclipse-ai

# Install dependencies (already done during setup)
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Design Decisions

### Theme & Styling

- **Dark Mode Default**: Classic shadcn dark theme with zinc color scale
- **Blue Accent (#3b82f6)**: Used for primary CTAs and interactive elements
- **Radial Gradients**: Subtle background effects on hero section
- **Glass-morphism**: Applied to key cards for depth

### Animations

- **Framer Motion**: Used throughout for smooth, performant animations
- **Stagger Effects**: Sequential reveals for cards and tabs
- **Hover States**: Scale transforms on interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference

### Responsive Design

- **Mobile**: Full-screen drawer, horizontal scrolling tabs, stacked layouts
- **Tablet**: 2-column bento grid, 3-column pricing
- **Desktop**: Full multi-column layouts

### Accessibility

- **Semantic HTML**: Proper use of header, main, section, footer
- **ARIA Labels**: All interactive elements properly labeled
- **Focus Trap**: Implemented in drawer component
- **Keyboard Navigation**: Full Tab, Enter, Escape support
- **Focus-visible States**: Clear visual feedback for keyboard users

### Performance

- **Code Splitting**: Drawer lazy-loaded with dynamic imports
- **Tree Shaking**: Framer Motion optimized for bundle size
- **Optimized Images**: Using next/image for automatic optimization
- **Minimal Dependencies**: Only essential packages included

## Content

All content is production-ready with no lorem ipsum:

- **Hero Copy**: Compelling value proposition
- **6 Real Indicators**: Momentum Shift Detector, Smart Money Tracker, etc.
- **6 Feature Tiles**: Multi-Model AI Routing, Cross-Asset Analysis, etc.
- **4 Testimonials**: From Quantitative PMs, Hedge Fund Analysts, etc.
- **3 Pricing Tiers**: Free, Premium ($49/mo), Ultimate ($149/mo)
- **10 FAQ Items**: Common questions with detailed answers

## Key Interactions

### Shortcut Tab → Drawer Flow

1. User clicks shortcut tab
2. Prompt injected into textarea
3. Textarea and Send button enabled
4. User clicks Send
5. Drawer opens from right
6. Tool-steps animate sequentially (1s, 1.5s, 2s, 2.5s)
7. Charts render after 3s
8. Text streams with typewriter effect
9. Paywall appears at bottom

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## License

Proprietary - eclipse-ai

## Notes

- All animations respect reduced-motion preferences
- Keyboard navigation fully implemented
- Mobile-first responsive design
- Production-ready content throughout
- SOC 2 compliant messaging included
