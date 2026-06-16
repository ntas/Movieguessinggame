# Design-sync notes

## Repo quirks

- No `dist/` — this is a game app, not a library. The converter runs with `--entry ./src/app/components/index.ts` to synthesize the bundle directly from source.
- No `tsconfig.json` existed at first sync — one was created at repo root with `paths: {"@/*": ["./src/*"]}` so esbuild resolves `@/` imports from the barrel entry.
- `componentSrcMap` in config.json explicitly pins all 31 components (bypasses DTS discovery, which finds 0 exports because there's no built dist with `.d.ts` files).
- `ImageWithFallback` lands in the `figma` group (lives at `src/app/components/figma/ImageWithFallback.tsx`).
- CSS entry is the Vite-hashed output (`dist/assets/index-CDL7UZqL.css`) — on rebuild the hash changes; update `cssEntry` in config.json accordingly.

## Known render warns

- `[TOKENS_MISSING]` for `--radix-navigation-menu-viewport-height`, `--radix-context-menu-*`, `--sidebar-width`, `--skeleton-width`, `--color-bg`, etc. — these are Radix UI tokens set via inline JS at runtime; expected to be absent in static CSS. Non-blocking.

## Re-sync risks

- **CSS hash rotates on every Vite rebuild**: `dist/assets/index-CDL7UZqL.css` will have a new filename after any code change. Update `cfg.cssEntry` before running the converter again (or grep `dist/assets/*.css` to find the new name).
- **Poster URLs are Unsplash placeholders**, not real TMDB posters — MovieGame and RedactedPlotMode cards show placeholder images (network-fetched at render time).
- `GridRevealMode` ships as a floor card — it needs complex runtime state (TMDB URL, countdown timer, option array) that can't render statically. Author a preview if a static representation becomes useful.
- `MOVIES` array is hardcoded in `src/app/data/movies.ts` — if more movies are added the bundle stays valid (they're runtime data, not imported into the components directly).
