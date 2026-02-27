
Goal: make the headshot visibly move down so there is a small clear gap above the hair, and ensure the preview actually reflects the change.

What I found
- The current code in `src/components/portfolio/HeroSection.tsx` is already set to:
  - `scale-[1.8]`
  - `object-[50%_35%]`
- The image file exists at `public/headshot-ai.png`.
- Since you still don’t see a difference, this is likely a combination of:
  1) the current crop adjustment being too subtle at this zoom level, and/or  
  2) stale asset/render state in preview (same image URL with browser cache).

Implementation plan

1) Make crop movement explicit and strong (so it is clearly visible)
- Update the headshot image classes in `HeroSection.tsx` to use a deterministic vertical shift, not just subtle object-position tweaking.
- Proposed approach:
  - Keep `object-cover`
  - Slightly reduce zoom (if needed) to preserve natural framing
  - Add an explicit downward shift using `translate-y` (pixel-based), e.g. around `8–12px`
  - Keep circular mask + overflow hidden

Why: `translate-y` gives a guaranteed visible movement, while object-position with heavy scaling can look inconsistent.

2) Keep fine-control for future tuning
- Store crop settings as a small constant near the image (e.g. `HEADSHOT_SCALE`, `HEADSHOT_Y_OFFSET`) so future adjustments are one-line edits.
- This avoids trial-and-error scattered in class strings.

3) Prevent stale image/crop from caching confusion
- Bust potential cache by renaming the public image file to a versioned filename (example: `headshot-ai-v2.png`) and updating `src` accordingly.
- This ensures preview fetches the latest image asset immediately.

4) Validate in preview (desktop + mobile)
- Hard refresh preview once after change.
- Check:
  - visible gap above hair at initial load,
  - face remains centered,
  - no clipping at top/bottom on mobile.
- If needed, do one final micro-adjustment in 2–4px increments.

Technical edit scope
- `src/components/portfolio/HeroSection.tsx`
  - Replace current image crop classes with explicit vertical offset strategy.
  - Optionally introduce constants for crop tuning.
  - Update image filename if cache-busting is applied.
- `public/`
  - Add/rename versioned headshot asset for cache busting.

Acceptance criteria
- On first page load, there is a noticeable small space above the hair.
- Change is immediately visible in preview (not just in code).
- Crop remains good on desktop and mobile.
