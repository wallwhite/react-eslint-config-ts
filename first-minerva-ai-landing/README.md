# Minerva AI Landing Page

A complete, production-ready landing page for Minerva AI - an advanced AI-powered trading intelligence platform.

## Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Recharts
- **Interactive AI Preview**: Fully functional AI chat interface with model selection and analysis tools
- **AI Drawer Simulation**: Realistic streaming AI responses with charts and tool usage visualization
- **Professional Design**: Clean, minimalistic zinc/white aesthetic inspired by Vercel
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Tasteful micro-interactions using Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui components
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd minerva-ai-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
minerva-ai-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── drawer.tsx
│   │   ├── select.tsx
│   │   ├── textarea.tsx
│   │   └── tabs.tsx
│   ├── Header.tsx          # Header with navigation
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── AIPreview.tsx       # Interactive AI preview component
│   ├── AIDrawer.tsx        # AI drawer with streaming simulation
│   ├── Features.tsx        # Features bento grid
│   ├── Indicators.tsx      # Indicators catalog
│   ├── Benefits.tsx        # Key benefits section
│   ├── Testimonials.tsx    # User testimonials
│   ├── Pricing.tsx         # Pricing tiers
│   ├── FAQ.tsx             # FAQ accordion
│   ├── CTABanner.tsx       # Final CTA banner
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## Landing Page Sections

1. **Header**: Fixed header with logo, navigation, and CTA button
2. **Hero**: Eye-catching hero with announce pill, title, description, CTAs, and interactive AI preview
3. **Features**: Bento grid showcasing key platform features
4. **Indicators**: Grid of 8 professional trading indicators with descriptions
5. **Benefits**: Statistics and benefits of using Minerva AI
6. **Testimonials**: 6 user testimonials from traders and analysts
7. **Pricing**: Three pricing tiers (Free, Premium, Ultimate)
8. **FAQ**: Accordion with 8 frequently asked questions
9. **CTA Banner**: Final conversion-focused call-to-action
10. **Footer**: Company information, links, and social media

## Interactive Features

### AI Preview
- Model selector (GPT-4, Claude 3, Gemini Pro, Llama 3)
- Analysis tool selector
- Quick prompt tabs
- Real-time prompt preview
- Send button activation

### AI Drawer
- Streaming text simulation
- Multi-step tool usage visualization
- Interactive Recharts graphs (price trends, sentiment analysis)
- Paywall with subscription CTA

## Customization

### Color Scheme
The landing page uses a zinc-based color palette. To customize colors, edit the CSS variables in `app/globals.css`.

### Content
All content is defined directly in component files for easy customization. Update text, testimonials, pricing, and FAQ content in their respective component files.

### Animations
Animation timing and effects can be adjusted by modifying the Framer Motion configuration in each component.

## Performance

- First Load JS: ~264 kB
- Optimized for Core Web Vitals
- Static generation for maximum performance
- Lazy loading of components
- Optimized images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

## Support

For questions or issues, contact support@minerva-ai.com
