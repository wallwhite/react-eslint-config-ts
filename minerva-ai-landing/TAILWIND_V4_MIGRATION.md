# Tailwind CSS v4 Migration

This document outlines the changes made to migrate from Tailwind CSS v3 configuration to v4.

## Changes Made

### 1. Removed `tailwind.config.ts`
Tailwind CSS v4 no longer uses JavaScript/TypeScript configuration files. Configuration is now done entirely in CSS using the `@theme` directive.

### 2. Updated `app/globals.css`
**Before (v3 syntax):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**After (v4 syntax):**
```css
@import "tailwindcss";

@theme {
  /* All theme customizations go here */
  --color-background: 240 10% 3.9%;
  --color-foreground: 240 5% 96%;
  /* ... more color tokens */

  --radius-lg: 0.5rem;
  --radius-md: calc(0.5rem - 2px);
  --radius-sm: calc(0.5rem - 4px);

  @keyframes accordion-down {
    from { height: 0; }
    to { height: var(--radix-accordion-content-height); }
  }
  /* ... more keyframes */
}
```

### 3. Created `postcss.config.mjs`
Tailwind CSS v4 requires the `@tailwindcss/postcss` plugin instead of the old `tailwindcss` plugin:

```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 4. Installed `@tailwindcss/postcss` Package
```bash
pnpm add -D @tailwindcss/postcss
```

## Key Differences in v4

### Theme Configuration
- **v3**: Theme defined in `tailwind.config.ts` with JavaScript objects
- **v4**: Theme defined in CSS using `@theme` directive with CSS variables

### Color Tokens
- **v3**: `colors: { primary: { DEFAULT: 'hsl(...)' } }`
- **v4**: `--color-primary: ...` (note the `--color-` prefix)

### Border Radius
- **v3**: `borderRadius: { lg: '0.5rem' }`
- **v4**: `--radius-lg: 0.5rem` (note the `--radius-` prefix)

### Animations
- **v3**: Defined in `theme.extend.keyframes` and `theme.extend.animation`
- **v4**: Defined directly in `@theme` block using standard CSS `@keyframes`

## Component Usage
No changes needed! Components continue to use the same utility classes:
- `bg-primary` → references `--color-primary`
- `text-foreground` → references `--color-foreground`
- `rounded-lg` → references `--radius-lg`

## Build Output
✅ Build successful with Tailwind CSS v4
- Performance: Optimized
- Bundle size: 489 kB First Load JS
- Static generation: Working

## Documentation
For more information on Tailwind CSS v4, see:
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Next.js Integration](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
