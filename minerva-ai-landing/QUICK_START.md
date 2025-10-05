# Minerva AI Landing Page - Quick Start Guide

## 🚀 Getting Started (2 minutes)

### Prerequisites
- Node.js 18+ or 20+
- pnpm installed (`npm install -g pnpm`)

### Installation

```bash
# Navigate to project
cd /Users/admin/workspace/crystalyze-main/landings-crystalyze-ai/minerva-ai-landing

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📁 Key Files to Know

### Content & Data
- `/lib/data/copy.ts` - All marketing copy
- `/lib/data/pricing.ts` - Pricing plans
- `/lib/data/indicators.ts` - TradingView indicators
- `/lib/data/testimonials.ts` - User testimonials
- `/lib/data/faq.ts` - FAQ items
- `/lib/data/mockStreams.ts` - AI streaming responses

### Main Components
- `/app/page.tsx` - Homepage composition
- `/components/sections/Hero.tsx` - Hero with AI Preview
- `/components/interactive/AIPreview/` - AI Preview components
- `/components/sections/Pricing.tsx` - Pricing section

### Configuration
- `/tailwind.config.ts` - Tailwind theme
- `/app/globals.css` - Global styles
- `/next.config.ts` - Next.js config

## 🎨 Customization

### Update Marketing Copy
Edit `/lib/data/copy.ts`:
```typescript
export const heroCopy = {
  title: 'Your new headline here',
  description: 'Your new description',
  // ...
};
```

### Change Pricing
Edit `/lib/data/pricing.ts`:
```typescript
{
  name: 'Premium',
  price: { monthly: 29, yearly: 290 },
  // ...
}
```

### Modify Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: 240 5.9% 10%;
  /* Change these values */
}
```

## 🧪 Interactive AI Preview

Located in Hero section (`/components/sections/Hero.tsx`)

### How it works:
1. User hovers textarea → sees "Preview mode" tooltip
2. Clicks quick prompt tab → prefills prompt
3. Clicks Send → opens streaming drawer
4. Shows: Tool badges → AI response → Charts → Paywall

### Modify prompts:
Edit `/lib/data/copy.ts`:
```typescript
export const quickPrompts = [
  { id: 'analyze-bitcoin', label: 'Analyze Bitcoin', prompt: '...' },
  // Add more prompts
];
```

### Modify streaming responses:
Edit `/lib/data/mockStreams.ts`:
```typescript
'analyze-bitcoin': async function* () {
  yield { type: 'tool', content: 'Fetching data...' };
  yield { type: 'text', content: 'Analysis here...' };
  yield { type: 'chart', content: chartData };
}
```

## 📊 Charts (Recharts)

Three chart types in `/components/interactive/AIPreview/ResultsVisualization.tsx`:

1. **Line Chart** - BTC price with moving averages
2. **Bar Chart** - Volume profile
3. **Heatmap** - Sector performance

### Add new chart:
```typescript
// In mockStreams.ts
yield {
  type: 'chart',
  content: {
    type: 'line', // or 'bar', 'heatmap'
    data: yourData,
    config: { title: 'Chart Title', xAxisKey: 'date' }
  }
};
```

## 🎭 Animations

Framer Motion variants in `/lib/animations.ts`:
- `fadeInUp` - Entrance from bottom
- `slideInFromRight` - AI Preview entrance
- `staggerContainer` - Sequential children

### Use in components:
```tsx
import { fadeInUp } from '@/lib/animations';

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Content
</motion.div>
```

## 🏗️ Add New Section

1. Create component in `/components/sections/NewSection.tsx`
2. Import in `/app/page.tsx`
3. Add to page:
```tsx
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Add here */}
      <NewSection />
      <Footer />
    </main>
  );
}
```

## 📱 Responsive Breakpoints

Tailwind breakpoints used:
- `sm:` 640px (small tablets)
- `md:` 768px (tablets)
- `lg:` 1024px (laptops)
- `xl:` 1280px (desktops)
- `2xl:` 1536px (large desktops)

## 🔧 Available Commands

```bash
pnpm dev        # Development server (http://localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm typecheck  # Check TypeScript
pnpm format     # Format with Prettier
```

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Missing dependencies
```bash
pnpm install
```

### Type errors
```bash
# Check types
pnpm typecheck
```

## 📦 Add Images

Place images in:
- `/public/images/indicators/` - Indicator preview images
- `/public/images/logos/` - Brand logos
- `/public/images/avatars/` - Testimonial avatars

Update paths in data files:
```typescript
// In indicators.ts
image: '/images/indicators/momentum-master.png'
```

## 🚢 Deploy to Production

### Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm install -g vercel

# Deploy
vercel
```

### Build locally
```bash
pnpm build
pnpm start
```

## 📚 Documentation

- **README.md** - Full setup guide
- **IMPLEMENTATION_SUMMARY.md** - Detailed implementation
- **COMPLETION_REPORT.md** - Final delivery report

## 🆘 Need Help?

1. Check TypeScript types in `/lib/types.ts`
2. Review component examples in sections
3. See data structure in `/lib/data/`
4. Read inline code comments

## ✨ Key Features

✅ Interactive AI Preview with streaming
✅ Recharts data visualizations  
✅ Responsive design (320px-1440px+)
✅ Framer Motion animations
✅ shadcn/ui components
✅ TypeScript strict mode
✅ Production-ready content

---

**Happy coding! 🎉**
