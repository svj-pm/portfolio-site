
# Rebuild Hero Section

Complete rewrite of `src/components/portfolio/HeroSection.tsx` with a minimal, typography-driven layout.

## What changes

**Remove:**
- Circular headshot photo (image stays in `/public` for use elsewhere)
- Centered layout, card-based description, tag pills, CTA buttons
- All current content and structure

**New layout — left-aligned, full viewport:**

The section uses `h-screen` with content starting ~30% from the top via `pt-[30vh]`. Left-aligned text within a container with comfortable left padding.

**Content stack (top to bottom):**

1. **Category label** — "VP OF PRODUCT" in uppercase, letter-spaced, `#94a3b8`, 12-14px. Preceded by a 40px-wide `#3b82f6` horizontal line on the left, inline with the text using flexbox.

2. **Name** — "Santiago Vinoth Jeyaseelan" in Space Grotesk, bold, white, ~48-56px on desktop (`text-5xl md:text-6xl`). Dominant element.

3. **Tagline** — "AI Builder. Enterprise & Consumer Products." in `#94a3b8`, regular weight, ~20-24px (`text-xl md:text-2xl`).

4. **Positioning paragraph** — The provided 3-sentence text in `#e2e8f0`, `max-w-[600px]`, standard body size (~16-18px).

5. **Icon links row** — LinkedIn, GitHub, Email using Lucide icons (`Linkedin`, `Github`, `Mail`), 20-24px, `#94a3b8` default color, `#3b82f6` on hover. Simple horizontal row with `gap-5`, no background circles or borders.

6. **Scroll indicator** — Centered `ChevronDown` at bottom of viewport, `#94a3b8`, gentle infinite bounce animation using framer-motion.

**Background:** Flat `#0f172a` (the existing `--background` CSS variable). No images, no gradients.

**Animations:** Staggered fade-up entrance using framer-motion (same pattern as current, but lighter — shorter delays, subtler movement).

## Technical details

- Single file edit: `src/components/portfolio/HeroSection.tsx`
- Adds `Github` import from `lucide-react` (LinkedIn, Mail, ChevronDown already imported)
- All colors use Tailwind arbitrary values (`text-[#94a3b8]`, `text-[#e2e8f0]`, `bg-[#3b82f6]`) to match exact hex specs
- Keeps `scrollToSection` utility and scroll-to-about on chevron click
- Font: Space Grotesk applied via `font-heading` class (already defined in CSS for headings); body text uses default Inter
