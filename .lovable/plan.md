

## Full Dark Theme Redesign

### Overview
Replace the current Apple-inspired glassmorphism theme with a clean, cohesive dark navy theme using the exact color specs provided. Add Space Grotesk and Inter fonts from Google Fonts.

---

### 1. Add Google Fonts to `index.html`
- Add `<link>` tags for **Space Grotesk** (headings, weights 500-700) and **Inter** (body, weights 400-500-600)
- These load from Google Fonts CDN

### 2. Rewrite `src/index.css` — New Design System
- **Replace all CSS variables** with the new palette:
  - `--background`: #0f172a (deep navy)
  - `--card`: #1e293b (secondary card bg)
  - `--foreground`: #e2e8f0 (body text)
  - `--muted-foreground`: #94a3b8 (slate gray)
  - `--primary`: #3b82f6 (accent blue)
  - `--primary hover`: #60a5fa
  - `--border`: #334155 (subtle slate border)
- **Remove** all glassmorphism utilities (`.glass`, `.glass-strong`), gradient text utilities, glow effects, animated gradients, `bg-gradient-mesh`, `bg-gradient-radial`
- **Set fonts**: `font-family: 'Inter', sans-serif` on body; headings use `'Space Grotesk', sans-serif`
- **Remove** float/glow-pulse keyframe animations
- Keep only accordion keyframes for shadcn compatibility

### 3. Update `tailwind.config.ts`
- Add `fontFamily` config for `sans: ['Inter', ...]` and `heading: ['Space Grotesk', ...]`

### 4. Update `src/components/portfolio/HeroSection.tsx`
- **Remove** all animated gradient blobs, `bg-gradient-mesh`, blur divs, `animate-pulse` backgrounds
- Replace with a simple `bg-[#0f172a]` background
- Remove `gradient-text-white`, `gradient-text-blue`, `gradient-text-purple` classes — use `text-white` and `text-[#3b82f6]` instead
- Remove `.glass` classes from the intro box — use `bg-[#1e293b] border border-[#334155]` instead
- Remove animated gradient border on headshot — use a simple `border-2 border-[#3b82f6]` ring
- Tags: replace `glass` with `bg-[#1e293b] border border-[#334155]`; remove Sparkles glow wrappers
- Buttons: primary CTA gets `bg-[#3b82f6] hover:bg-[#60a5fa] text-white rounded-lg` (8px radius); secondary CTA gets `border border-[#334155] bg-[#1e293b] hover:bg-[#334155] text-[#e2e8f0] rounded-lg`
- Social icons: replace glass styling with `bg-[#1e293b] border border-[#334155] hover:border-[#3b82f6]`
- Apply `font-heading` to the name heading

### 5. Update `src/components/portfolio/NavigationBar.tsx`
- Replace `glass` class on scroll with `bg-[#0f172a]/95 backdrop-blur-sm border-b border-[#334155]`
- Nav link hover: `hover:text-[#3b82f6]`
- Mobile menu: `bg-[#0f172a]/98`

### 6. Update `src/components/portfolio/AboutSection.tsx`
- Section bg: `bg-[#0f172a]`
- Remove gradient divider — replace with `bg-[#3b82f6]` solid line
- Stat cards: `bg-[#1e293b] border-[#334155]`; icon colors all become `text-[#3b82f6]`
- Skills pills: `bg-[#1e293b] text-[#e2e8f0] hover:bg-[#3b82f6] hover:text-white rounded-lg`

### 7. Update `src/components/portfolio/CareerHighlights.tsx`
- Section bg: replace `bg-secondary/30` with `bg-[#0f172a]`
- Remove gradient divider — solid `bg-[#3b82f6]`
- Cards: `bg-[#1e293b] border-[#334155]`
- Briefcase icon bg: `bg-[#3b82f6]/10`, icon: `text-[#3b82f6]`
- Role text: `text-[#3b82f6]`; bullet accent: `text-[#3b82f6]`
- Tags: `bg-[#0f172a] text-[#94a3b8] rounded-lg`
- Testimonial cards: same card styling; Quote icon: `text-[#3b82f6]`

### 8. Update `src/components/portfolio/BuildingNow.tsx`
- Section bg: `bg-[#0f172a]`
- Replace gradient divider with solid `bg-[#3b82f6]`
- Cards: `bg-[#1e293b] border-[#334155]`
- Tags: `bg-[#0f172a] text-[#94a3b8] rounded-lg`
- Buttons: `bg-[#3b82f6] text-white hover:bg-[#60a5fa] rounded-lg` for GitHub links; disabled "Coming Soon" uses `bg-[#334155] text-[#94a3b8]`

### 9. Update `src/components/portfolio/WorkProducts.tsx`
- Section bg: `bg-[#0f172a]`
- Replace gradient divider with solid `bg-[#3b82f6]`
- Cards: `bg-[#1e293b] border-[#334155]`
- Checkmark accent: `text-[#3b82f6]`
- Tags: `bg-[#0f172a] text-[#94a3b8] rounded-lg`
- Button: `bg-[#3b82f6] text-white hover:bg-[#60a5fa] rounded-lg`

### 10. Update `src/components/portfolio/Publications.tsx`
- Section bg: replace `bg-secondary/30` with `bg-[#0f172a]`
- Remove gradient thumbnails — replace with `bg-[#1e293b]` with a subtle `border-b border-[#334155]`
- Date badge: `bg-[#3b82f6] text-white` instead of white/90
- Publication name: `text-[#3b82f6]`
- Button: `border border-[#334155] text-[#e2e8f0] hover:border-[#3b82f6] hover:text-[#3b82f6] rounded-lg`
- Carousel arrows: styled to match theme

### 11. Update `src/components/portfolio/ContactSection.tsx`
- Section bg: replace gradient with `bg-[#0f172a]`
- Card: `bg-[#1e293b] border-[#334155]`
- CheckCircle icon: `text-[#3b82f6]`
- "Ideal for" box: `bg-[#0f172a] border border-[#334155]`
- Primary button: `bg-[#3b82f6] text-white hover:bg-[#60a5fa] rounded-lg`
- Outline button: `border-[#334155] text-[#e2e8f0] hover:border-[#3b82f6] rounded-lg`
- Links: `text-[#3b82f6] hover:text-[#60a5fa]`

### 12. Update `src/components/portfolio/Footer.tsx`
- Remove gradient background — use `bg-[#1e293b]`
- Border: `border-[#334155]`
- Remove `gradient-text-blue` on name — use `text-white`
- Remove glass styling on social icons — use `bg-[#0f172a] border border-[#334155] hover:border-[#3b82f6]`
- Remove gradient hover blurs on icons

### 13. Update `src/components/ui/button.tsx`
- Change default `border-radius` from `rounded-md` to `rounded-lg` (8px)
- Default variant: `bg-[#3b82f6] text-white hover:bg-[#60a5fa]`

### 14. Remove `src/App.css`
- Contains unused legacy Vite boilerplate styles; not needed

---

### Typography Summary
| Element | Font | Size | Color |
|---------|------|------|-------|
| h1 | Space Grotesk 700 | 48-56px desktop | #ffffff |
| h2 | Space Grotesk 700 | 36-48px | #ffffff |
| h3 | Space Grotesk 600 | 24-28px | #ffffff |
| Body | Inter 400 | 16-18px, line-height 1.6 | #e2e8f0 |
| Muted | Inter 400 | 14-16px | #94a3b8 |

### Files Changed (14 total)
1. `index.html` — add font links
2. `src/index.css` — full rewrite of design tokens
3. `tailwind.config.ts` — add font families
4. `src/components/ui/button.tsx` — update border radius and default colors
5. `src/components/portfolio/HeroSection.tsx` — strip gradients/glass, apply new theme
6. `src/components/portfolio/NavigationBar.tsx` — update nav styling
7. `src/components/portfolio/AboutSection.tsx` — apply new theme
8. `src/components/portfolio/CareerHighlights.tsx` — apply new theme
9. `src/components/portfolio/BuildingNow.tsx` — apply new theme
10. `src/components/portfolio/WorkProducts.tsx` — apply new theme
11. `src/components/portfolio/Publications.tsx` — apply new theme
12. `src/components/portfolio/ContactSection.tsx` — apply new theme
13. `src/components/portfolio/Footer.tsx` — apply new theme
14. `src/App.css` — delete (unused)

