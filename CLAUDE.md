# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # Install dependencies (also works with pnpm)
npm run dev      # Start dev server (Vite)
npm run build    # Production build
```

There is no test runner configured.

## Architecture

This is a single-page React + TypeScript app built with Vite, exported from Figma Make. No routing — all state is managed at the `MovieGame` component level via a `GameMode` discriminated union (`"menu" | "unblur" | "redacted"`).

**Key files:**
- `src/app/components/movie-game.tsx` — root game shell; renders the main menu and switches between modes
- `src/app/components/unblur-poster-mode.tsx` — Unblur Challenge mode: 10-second countdown timer, CSS blur decrements by 2px/sec, one-shot guess to win
- `src/app/components/redacted-plot-mode.tsx` — Redacted Plot mode: actor names censored with `█████`, 3-strike system
- `src/app/data/movies.ts` — static `MOVIES` array (7 entries) with `Title`, `Year`, `Poster` (Unsplash URLs), `Plot`, `Actors`; `getRandomMovie()` picks randomly with no deduplication
- `src/app/components/figma/ImageWithFallback.tsx` — `<img>` wrapper that renders a placeholder SVG on load error; use this instead of bare `<img>` tags

**Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin). shadcn/ui components live in `src/app/components/ui/`. Animations use `motion/react` (Framer Motion). Custom blob animation classes (`animate-blob`, `animation-delay-2000`, `animation-delay-4000`) are defined in `src/styles/globals.css`.

**Path alias:** `@` maps to `./src` (configured in `vite.config.ts`).

**Figma asset imports:** The vite config includes a `figmaAssetResolver` plugin that resolves `figma:asset/<filename>` imports to `src/assets/<filename>`.

## Movie data

The `Movie` interface mirrors the OMDB API shape (`Title`, `Year`, `Poster`, `Plot`, `Actors`). Poster URLs currently point to Unsplash — not actual movie posters. To add movies, append to the `MOVIES` array in `src/app/data/movies.ts`; `getRandomMovie()` will automatically include them.

## Guess normalization

Both game modes normalize guesses the same way before comparing: lowercase, strip non-alphanumeric characters (except spaces), trim. Partial matches are not accepted — the full title must match exactly after normalization.
