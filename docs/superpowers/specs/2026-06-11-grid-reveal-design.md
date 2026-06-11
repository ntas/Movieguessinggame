# Grid Reveal Mode — Design Spec
_Date: 2026-06-11_

## Overview

Replace the "Unblur Challenge" mode with "Grid Reveal": a movie poster is hidden behind a grid of dark tiles that fade away one at a time. The player identifies the movie from four multiple-choice options before time runs out. A wrong guess ends the game immediately.

---

## Game Flow

```
Main menu
  └─ "Grid Reveal" card
       └─ Difficulty sub-screen
            ├─ Normal  →  4×6 grid, 24 tiles, 24 s timer
            └─ Hard    →  6×9 grid, 54 tiles, 54 s timer
```

---

## State Machine

`GameMode` in `movie-game.tsx` is extended:

| Value | Meaning |
|---|---|
| `"menu"` | Main menu (existing) |
| `"grid"` | Difficulty sub-screen (new transient state) |
| `"grid-normal"` | Active game — Normal difficulty |
| `"grid-hard"` | Active game — Hard difficulty |
| `"redacted"` | Existing mode, unchanged |

`"unblur"` is removed.

---

## Difficulty Settings

| Difficulty | Grid | Tiles | Timer | Reveal rate |
|---|---|---|---|---|
| Normal | 4 × 6 | 24 | 24 s | 1 tile/s |
| Hard | 6 × 9 | 54 | 54 s | 1 tile/s |

The Hard mode challenge comes from smaller tiles making the poster harder to read, not from increased time pressure.

---

## Game Screen

### Poster area
- Image rendered underneath a CSS grid overlay of opaque dark tiles (`bg-slate-950`).
- One random unrevealed tile fades out each second (opacity 1 → 0, 0.3 s transition).
- On game end (any outcome), all remaining tiles dissolve with a per-tile stagger delay (`index * 15 ms`) to create a dramatic full-reveal effect.

### Multiple choice
- Four options in a 2×2 grid rendered immediately when the game starts.
- One correct title + three random wrong titles drawn from `MOVIES`, shuffled each round.
- Player can click at any time during the countdown.
- Buttons are disabled once an answer is submitted.

### Timer
- Circular SVG countdown (matching existing style).
- Counts down from 24 s (Normal) or 54 s (Hard).
- Stops immediately when the player clicks an answer.

### Result states

**Won** (`gameState === "won"`):
- All tiles dissolve revealing full poster.
- Correct option highlighted green.
- Trophy icon + "Brilliant!" heading.
- Body: "You nailed it with {timeLeft}s to spare!"
- Play Again + Menu buttons.

**Lost — wrong answer** (`gameState === "lost"`, `picked !== correct`):
- All tiles dissolve.
- Selected wrong option: red background + strikethrough.
- Correct option: highlighted green.
- X icon + "Wrong Guess!" heading.
- Body: "It was {movie.Title} ({movie.Year})".
- Play Again + Menu buttons.

**Lost — time out** (`gameState === "lost"`, `timeLeft === 0`):
- Same as wrong-answer lost state except heading reads "Time's Up!".

---

## Files Changing

| File | Change |
|---|---|
| `src/app/components/movie-game.tsx` | Remove `"unblur"`, add `"grid"` / `"grid-normal"` / `"grid-hard"`; add difficulty sub-screen UI; update menu card copy and description |
| `src/app/components/unblur-poster-mode.tsx` | Full rewrite as grid reveal game component; accepts `difficulty: "normal" \| "hard"` prop |
| `src/app/data/movies.ts` | No changes |

---

## Key Constraints

- `MOVIES` has 7 entries — always enough for 3 wrong options + 1 correct.
- Tile reveal uses functional state updates (`setRevealed(prev => ...)`) to avoid stale closure issues inside `setInterval`.
- Timer expiry is handled in a separate `useEffect` watching `timeLeft` to avoid side-effects inside state updaters.
- `ImageWithFallback` used instead of bare `<img>` per project convention.
