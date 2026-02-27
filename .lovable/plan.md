

# Rebuild "What I'm Building Now" Section

## Changes

### 1. Move section order in Index.tsx
Reorder `<BuildingNow />` to appear directly after `<HeroSection />`, before `<AboutSection />`.

### 2. Rewrite BuildingNow.tsx
Complete rewrite with the new design spec:

**Header area (left-aligned, not centered):**
- "What I'm Building Now" in white, bold, Space Grotesk (`font-heading`)
- Subtitle below: "AI agent systems that solve problems I actually have." in `#94a3b8`

**Three project cards** in a horizontal grid (`md:grid-cols-3`, stacking on mobile):

Each card styled with:
- Background: `#1e293b`
- Border: `1px solid #334155`, radius `12px`
- Padding: `24px` (p-6)
- Hover: border transitions to `#3b82f6`, slight lift (`-translate-y-1`) + shadow

Card content structure:
- Emoji icon at top (span, ~24px)
- Title in white, bold, ~18-20px
- Description in `#e2e8f0`, 14-16px
- Tech tags as pill badges (`#334155` bg, `#94a3b8` text, rounded-full)
- Bottom link: "View on GitHub →" in `#3b82f6` (or grayed "Coming Soon" for card 3)

**Card data:**

| | Card 1 | Card 2 | Card 3 |
|---|---|---|---|
| Icon | magnifying glass | shopping bag | office building |
| Title | Job Interview Intelligence Agent | E-Commerce Marketing Agents | Enterprise AI Prototypes |
| Tags | Python, Claude API, Document AI | Python, Agent Architecture, E-Commerce | Python, Claude API, Enterprise AI |
| Link | View on GitHub → (#) | View on GitHub → (#) | Coming Soon (disabled) |

Descriptions as specified in the request.

**Animations:** Keep existing framer-motion staggered fade-up pattern with `useInView`.

### Technical scope
- Edit `src/pages/Index.tsx` — move `<BuildingNow />` after `<HeroSection />`
- Rewrite `src/components/portfolio/BuildingNow.tsx` — new layout, cards, styling. Remove shadcn Card/Button imports; use plain divs with Tailwind for precise control over the custom card styling.

