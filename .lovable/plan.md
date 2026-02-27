

## New Section: "What I'm Building Now"

### Overview
Create a new section component positioned between Career Highlights and Work Products. This section highlights your active AI agent projects with an introductory narrative paragraph followed by three project cards with tech badges and GitHub links.

### New File: `src/components/portfolio/BuildingNow.tsx`

**Section structure:**
- Section heading: "What I'm Building Now"
- Gradient divider (matching existing sections)
- Introductory paragraph: "I started building AI agent systems in 2025..."
- 3 project cards in a responsive grid (stacks on mobile, 3 columns on desktop)

**Each project card includes:**
- Project name as card title
- Description text
- Tech tags/badges (styled like the existing rounded-full tags in Career Highlights and Work Products)
- "View on GitHub" button with arrow icon

**Three projects:**
1. **Interview Intelligence Agent** - Tags: Python, Claude API, Agent Architecture
2. **E-Commerce Marketing Agents** - Tags: Python, Claude API, Autonomous Agents
3. **Enterprise AI Prototypes** - Tags: LLMs, Agent Architecture, Automation

**Design patterns (matching existing codebase):**
- Uses framer-motion for scroll-triggered animations (useInView, same pattern as CareerHighlights/WorkProducts)
- Uses shadcn Card components
- Uses the same tag styling (`px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium`)
- Background alternates: Career uses `bg-secondary/30`, so this section will use `bg-background` (same as Work Products), and Work Products can stay as-is or we shift backgrounds
- GitHub links open in new tab with ExternalLink icon

### Update: `src/pages/Index.tsx`
- Import `BuildingNow` component
- Place it between `<CareerHighlights />` and `<WorkProducts />`

### Update: `src/components/portfolio/NavigationBar.tsx`
- Add a "Building" nav link between "Career" and "Work" pointing to `id="building"`

### Technical Details

The component follows the exact same pattern as `WorkProducts.tsx`:
- `useRef` + `useInView` for scroll animation
- `motion.div` with staggered delays for card entrance
- Section uses `id="building"` for nav scrolling
- Cards use `Card`, `CardHeader`, `CardTitle`, `CardContent` from shadcn
- GitHub button uses `Button` with `asChild` wrapping an anchor tag

