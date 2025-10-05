# Getting Started with Nebula Landing Page

## 🚀 Quick Start

The development server is already running at:
```
http://localhost:3001
```

## 📂 Project Location

```bash
cd /Users/admin/workspace/crystalyze-main/landings-crystalyze-ai/nebula
```

## 🛠 Available Commands

### Development
```bash
# Start development server
npm run dev

# The server will run on http://localhost:3001
# (Port 3000 was already in use)
```

### Production
```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 What's Included

### Sections (in order)
1. **Header** - Sticky navigation
2. **Hero** - Main headline with CTAs
3. **AI Preview** - Interactive demo (most complex feature)
4. **Features** - Bento grid layout
5. **Benefits** - Why choose Nebula
6. **Indicators** - TradingView indicators carousel
7. **Testimonials** - User reviews
8. **Pricing** - Three tier pricing
9. **FAQ** - Accordion with 10 questions
10. **CTA Banner** - Final conversion push
11. **Footer** - Links and newsletter

### Interactive Features

**AI Preview Component** (Main Feature):
- Click any of the 6 preview tabs
- Watch as the textarea fills with a prompt
- Click "Analyze" to see the AI response
- Drawer slides in with streaming text animation
- View the paywall overlay at the bottom

**Navigation**:
- Click nav links to smooth scroll to sections
- Hover effects on all interactive elements
- Responsive mobile menu (on mobile devices)

## 🎯 Testing the Landing Page

1. **Open the page**: http://localhost:3001

2. **Test AI Preview**:
   - Click "Analyze Bitcoin Trend" tab
   - See the prompt populate
   - Click "Analyze" button
   - Watch the drawer slide in
   - See the streaming text animation
   - View the chart placeholder
   - See the paywall overlay

3. **Test Navigation**:
   - Click "Features" in header → scrolls to features
   - Click "Indicators" → scrolls to indicators
   - Click "Pricing" → scrolls to pricing
   - Click "FAQ" → scrolls to FAQ

4. **Test Responsive**:
   - Resize browser window
   - Check mobile, tablet, desktop views
   - All layouts adapt perfectly

5. **Test Interactions**:
   - Hover over cards (see gradient effects)
   - Click carousel arrows (indicators section)
   - Expand FAQ items (accordion)
   - View pricing tiers (note "Most Popular" badge)

## 🎨 Customization

### Colors
The primary blue color is defined in `/app/globals.css`:
```css
--primary: oklch(0.65 0.22 250);
```

To change the accent color, modify this value.

### Content
All copy can be found in the component files:
- `/components/hero.tsx` - Headlines
- `/components/pricing.tsx` - Pricing tiers
- `/components/faq.tsx` - FAQ questions
- `/components/testimonials.tsx` - Testimonials
- etc.

### Components
All components are in `/components/`:
- Fully typed with TypeScript
- Use shadcn/ui primitives
- Styled with Tailwind CSS v4

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Tech Stack

- Next.js 15 (App Router + Turbopack)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (New York theme)
- Lucide Icons

## 📝 Important Files

```
/app/page.tsx              # Main landing page
/app/layout.tsx            # Root layout (dark mode)
/app/globals.css           # Global styles
/components/ai-preview.tsx # Complex AI demo
/components/pricing.tsx    # Pricing tiers
```

## 🎉 Features Highlights

✅ Dark theme with blue accents
✅ Smooth scroll navigation
✅ Interactive AI preview with streaming
✅ Responsive on all devices
✅ Production-ready build
✅ Type-safe TypeScript
✅ Optimized performance

## 🚨 Known Info

- Port 3001 is used (3000 was taken)
- Dark mode is forced (no toggle needed)
- All animations are optimized
- Build is production-ready

## 📞 Support

For questions about the implementation, refer to:
- `IMPLEMENTATION_SUMMARY.md` - Complete feature list
- Component files in `/components/` - Individual implementations
- `README.md` - Project overview

---

**Status**: ✅ Production Ready
**Server**: http://localhost:3001
**Build**: Successful
