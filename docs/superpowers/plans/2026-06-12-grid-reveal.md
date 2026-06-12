# Grid Reveal Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Unblur Challenge with a Grid Reveal mode — a movie poster hidden behind tiles that reveal one per second, with multiple-choice answers, two difficulty levels, and a localStorage high-score system.

**Architecture:** Three files change. A new `scoring.ts` module holds all pure scoring logic. `movie-game.tsx` gains a difficulty sub-screen and updated routing. `unblur-poster-mode.tsx` is fully rewritten as `GridRevealMode` which accepts a `difficulty` prop and manages the tile reveal loop via two `useEffect` hooks (one for the interval, one for timer expiry).

**Tech Stack:** React 18, TypeScript, Framer Motion (`motion/react`), Tailwind CSS v4, lucide-react, localStorage

> **Note:** This project has no test runner configured. TDD steps are replaced with browser console verification and manual UI checks.

---

### Task 1: Create scoring utility

**Files:**
- Create: `src/app/components/scoring.ts`

- [ ] **Step 1: Create `scoring.ts`**

```ts
// src/app/components/scoring.ts
export type Difficulty = "normal" | "hard";

const MULTIPLIERS: Record<Difficulty, number> = { normal: 1, hard: 2 };
const LS_KEYS: Record<Difficulty, string> = {
  normal: "gridReveal_highScore_normal",
  hard:   "gridReveal_highScore_hard",
};

export function calcScore(timeLeft: number, timerDuration: number, difficulty: Difficulty): number {
  return Math.round((timeLeft / timerDuration) * 1000 * MULTIPLIERS[difficulty]);
}

export function getHighScore(difficulty: Difficulty): number | null {
  const raw = localStorage.getItem(LS_KEYS[difficulty]);
  if (raw === null) return null;
  const n = parseInt(raw, 10);
  return isNaN(n) ? null : n;
}

export function saveHighScore(difficulty: Difficulty, score: number): boolean {
  const current = getHighScore(difficulty);
  if (current === null || score > current) {
    localStorage.setItem(LS_KEYS[difficulty], String(score));
    return true;
  }
  return false;
}
```

- [ ] **Step 2: Start dev server and verify in browser console**

```bash
npm run dev
```

Open `http://localhost:5173`. In DevTools console run:

```js
import("/src/app/components/scoring.ts").then(m => {
  console.log(m.calcScore(24, 24, "normal"))   // expected: 1000
  console.log(m.calcScore(12, 24, "normal"))   // expected: 500
  console.log(m.calcScore(54, 54, "hard"))     // expected: 2000
  console.log(m.calcScore(27, 54, "hard"))     // expected: 1000
  m.saveHighScore("normal", 750)
  console.log(m.getHighScore("normal"))        // expected: 750
  console.log(m.saveHighScore("normal", 600))  // expected: false (not a new best)
  console.log(m.saveHighScore("normal", 900))  // expected: true
  console.log(m.getHighScore("normal"))        // expected: 900
})
```

Expected: all values match comments above, no errors thrown.

- [ ] **Step 3: Commit**

```bash
git add src/app/components/scoring.ts
git commit -m "feat: add grid reveal scoring utility"
```

---

### Task 2: Update `movie-game.tsx` — routing and difficulty sub-screen

**Files:**
- Modify: `src/app/components/movie-game.tsx`

- [ ] **Step 1: Replace the full contents of `movie-game.tsx`**

```tsx
// src/app/components/movie-game.tsx
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LayoutGrid, FileText, Sparkles, ArrowLeft, Film } from "lucide-react";
import { GridRevealMode } from "./unblur-poster-mode";
import { RedactedPlotMode } from "./redacted-plot-mode";
import { getHighScore } from "./scoring";
import { motion } from "motion/react";

export type GameMode = "menu" | "grid" | "grid-normal" | "grid-hard" | "redacted";

export function MovieGame() {
  const [gameMode, setGameMode] = useState<GameMode>("menu");

  if (gameMode === "grid-normal" || gameMode === "grid-hard") {
    return (
      <GridRevealMode
        difficulty={gameMode === "grid-normal" ? "normal" : "hard"}
        onBackToMenu={() => setGameMode("grid")}
      />
    );
  }

  if (gameMode === "grid") {
    const normalBest = getHighScore("normal");
    const hardBest = getHighScore("hard");
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg relative z-10"
        >
          <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
            <CardHeader className="p-5 sm:p-8 pb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setGameMode("menu")}
                className="self-start mb-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/40 transition-all duration-200 rounded-xl px-4"
              >
                <ArrowLeft className="mr-2 size-4" />
                Back
              </Button>
              <CardTitle className="text-3xl sm:text-4xl text-white">Grid Reveal</CardTitle>
              <CardDescription className="text-white/70 mt-1">Choose your difficulty</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 px-5 sm:px-8 pb-7">

              <motion.div whileHover={{ scale: 1.02, y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card
                  className="cursor-pointer bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                  onClick={() => setGameMode("grid-normal")}
                >
                  <CardHeader className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">Normal</CardTitle>
                        <CardDescription className="text-white/60 mt-1">4×6 grid · 24 tiles · 24s</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/40 mb-0.5">Max score</div>
                        <div className="text-sm font-bold text-blue-300">1 000 pts</div>
                        {normalBest !== null && (
                          <div className="text-xs text-white/50 mt-1">Best: {normalBest} pts</div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -3 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Card
                  className="cursor-pointer bg-gradient-to-br from-red-500/20 to-orange-500/20 border-white/30 backdrop-blur-sm hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
                  onClick={() => setGameMode("grid-hard")}
                >
                  <CardHeader className="p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl text-white">Hard</CardTitle>
                        <CardDescription className="text-white/60 mt-1">6×9 grid · 54 tiles · 54s</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-white/40 mb-0.5">Max score</div>
                        <div className="text-sm font-bold text-red-300">2 000 pts</div>
                        {hardBest !== null && (
                          <div className="text-xs text-white/50 mt-1">Best: {hardBest} pts</div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>

            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (gameMode === "redacted") {
    return <RedactedPlotMode onBackToMenu={() => setGameMode("menu")} />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 md:w-80 md:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-3 sm:space-y-6 p-5 sm:p-8 pb-4 sm:pb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center"
            >
              <div className="relative">
                <Film className="size-16 sm:size-20 text-white drop-shadow-2xl" />
                <Sparkles className="size-5 sm:size-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
              </div>
            </motion.div>
            <div>
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-2 sm:mb-3">
                Plot Twist!
              </CardTitle>
              <CardDescription className="text-base sm:text-lg text-white/70 px-2">
                Test your cinema knowledge with immersive challenges
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 md:px-8 pb-5 sm:pb-8">

            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card
                className="cursor-pointer bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-white/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
                onClick={() => setGameMode("grid")}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl backdrop-blur-sm shrink-0">
                      <LayoutGrid className="size-6 sm:size-8 text-blue-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">Grid Reveal</CardTitle>
                      <CardDescription className="text-sm sm:text-base text-white/60 leading-relaxed">
                        A movie poster hides behind tiles that flip away one by one.
                        Name the film before the grid disappears!
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
              <Card
                className="cursor-pointer bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-white/30 backdrop-blur-sm hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
                onClick={() => setGameMode("redacted")}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-emerald-500/20 rounded-xl backdrop-blur-sm shrink-0">
                      <FileText className="size-6 sm:size-8 text-emerald-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">Redacted Plot</CardTitle>
                      <CardDescription className="text-sm sm:text-base text-white/60 leading-relaxed">
                        Decode the censored synopsis with all names hidden behind blocks.
                        Three guesses to crack the code!
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <div className="pt-4 sm:pt-6 text-center">
              <p className="text-xs sm:text-sm text-white/40">
                Copyright &copy; 2026 Sam Phiri x 31twelve
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

With the dev server running at `http://localhost:5173`:
- Main menu shows "Grid Reveal" card with `LayoutGrid` icon (not Eye)
- Clicking "Grid Reveal" → difficulty sub-screen with Normal and Hard cards
- "Back" from difficulty sub-screen → main menu
- Clicking Normal or Hard → TypeScript will error because `GridRevealMode` is not yet exported from `unblur-poster-mode.tsx` — this is expected, fix in Task 3

- [ ] **Step 3: Commit**

```bash
git add src/app/components/movie-game.tsx
git commit -m "feat: add grid reveal routing and difficulty sub-screen"
```

---

### Task 3: Rewrite `unblur-poster-mode.tsx` as `GridRevealMode`

**Files:**
- Modify: `src/app/components/unblur-poster-mode.tsx`

- [ ] **Step 1: Replace the full contents of `unblur-poster-mode.tsx`**

```tsx
// src/app/components/unblur-poster-mode.tsx
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, RotateCcw, Trophy, X, Star } from "lucide-react";
import { MOVIES, getRandomMovie, type Movie } from "../data/movies";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { calcScore, getHighScore, saveHighScore, type Difficulty } from "./scoring";

interface GridRevealModeProps {
  difficulty: Difficulty;
  onBackToMenu: () => void;
}

const CONFIGS = {
  normal: { cols: 4, rows: 6, total: 24, timer: 24 },
  hard:   { cols: 6, rows: 9, total: 54, timer: 54 },
} as const;

function buildOptions(correct: Movie): Movie[] {
  const pool = MOVIES.filter(m => m.Title !== correct.Title);
  const wrong = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  return [...wrong, correct].sort(() => Math.random() - 0.5);
}

export function GridRevealMode({ difficulty, onBackToMenu }: GridRevealModeProps) {
  const { cols, rows, total, timer } = CONFIGS[difficulty];

  const [movie, setMovie] = useState<Movie | null>(null);
  const [options, setOptions] = useState<Movie[]>([]);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(timer);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isNewBest, setIsNewBest] = useState(false);

  const startGame = () => {
    const m = getRandomMovie();
    setMovie(m);
    setOptions(buildOptions(m));
    setRevealed([]);
    setTimeLeft(timer);
    setGameState("playing");
    setPicked(null);
    setScore(0);
    setIsNewBest(false);
  };

  // Reveal one random tile + decrement timer every second
  useEffect(() => {
    if (gameState !== "playing" || !movie) return;
    const id = setInterval(() => {
      setRevealed(prev => {
        if (prev.length >= total) return prev;
        const s = new Set(prev);
        let n: number;
        do { n = Math.floor(Math.random() * total); } while (s.has(n));
        return [...prev, n];
      });
      setTimeLeft(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [gameState, movie, total]);

  // End game when timer reaches zero
  useEffect(() => {
    if (timeLeft === 0 && gameState === "playing") setGameState("lost");
  }, [timeLeft, gameState]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { startGame(); }, []);

  const handlePick = (choice: Movie) => {
    if (!movie || gameState !== "playing") return;
    setPicked(choice.Title);
    if (choice.Title === movie.Title) {
      const s = calcScore(timeLeft, timer, difficulty);
      const newBest = saveHighScore(difficulty, s);
      setScore(s);
      setIsNewBest(newBest);
      setGameState("won");
    } else {
      setGameState("lost");
    }
  };

  if (!movie) return null;

  const gameOver = gameState !== "playing";
  const circumference = 2 * Math.PI * 28;
  const timerProgress = (timer - timeLeft) / timer;

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-lg relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="p-4 sm:p-6 pb-3">
            <div className="flex items-center justify-between mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToMenu}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/40 transition-all duration-200 rounded-xl px-4"
              >
                <ArrowLeft className="mr-2 size-4" />
                Back
              </Button>
              <div className="relative size-14">
                <svg className="size-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="4" />
                  <motion.circle
                    cx="32" cy="32" r="28"
                    fill="none" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset: circumference * timerProgress }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-bold text-white">{timeLeft}s</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl sm:text-3xl text-white">Grid Reveal</CardTitle>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                difficulty === "hard"
                  ? "bg-red-500/20 text-red-300 border-red-500/30"
                  : "bg-blue-500/20 text-blue-300 border-blue-500/30"
              }`}>
                {difficulty === "hard" ? "Hard" : "Normal"}
              </span>
            </div>
            <CardDescription className="text-white/60 mt-1">
              The poster reveals square by square — pick the right movie!
            </CardDescription>
          </CardHeader>

          <CardContent className="p-4 sm:p-6 pt-2 space-y-4">

            {/* Poster with grid overlay */}
            <div className="flex justify-center">
              <div
                className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
                style={{ aspectRatio: "2/3", width: "200px" }}
              >
                <ImageWithFallback
                  src={movie.Poster}
                  alt="Movie Poster"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${cols}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gap: "1px",
                    backgroundColor: "rgba(0,0,0,0.25)",
                  }}
                >
                  {Array.from({ length: total }, (_, i) => (
                    <motion.div
                      key={i}
                      className="bg-slate-950"
                      animate={{ opacity: revealed.includes(i) || gameOver ? 0 : 1 }}
                      transition={{ duration: 0.3, delay: gameOver ? i * 0.015 : 0 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Multiple choice / result */}
            <AnimatePresence mode="wait">
              {!gameOver ? (
                <motion.div
                  key="options"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 gap-2"
                >
                  {options.map(opt => (
                    <motion.button
                      key={opt.Title}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handlePick(opt)}
                      className="p-3 text-sm font-medium text-white text-left bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl leading-snug transition-colors duration-200"
                    >
                      {opt.Title}
                    </motion.button>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* Highlighted answer options */}
                  <div className="grid grid-cols-2 gap-2">
                    {options.map(opt => {
                      const correct = opt.Title === movie.Title;
                      const wrong = picked === opt.Title && !correct;
                      return (
                        <div
                          key={opt.Title}
                          className={`p-3 text-sm font-medium rounded-xl border leading-snug ${
                            correct
                              ? "bg-emerald-500/25 border-emerald-400/50 text-emerald-200"
                              : wrong
                              ? "bg-red-500/25 border-red-400/50 text-red-300 line-through"
                              : "bg-white/5 border-white/10 text-white/30"
                          }`}
                        >
                          {opt.Title}
                        </div>
                      );
                    })}
                  </div>

                  {/* Result banner */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                    className={`text-center py-4 px-3 rounded-xl border ${
                      gameState === "won"
                        ? "bg-emerald-500/20 border-emerald-500/30"
                        : "bg-red-500/20 border-red-500/30"
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      {gameState === "won"
                        ? <Trophy className="size-10 text-yellow-400 drop-shadow-lg" />
                        : <X className="size-10 text-red-400 drop-shadow-lg" />
                      }
                    </div>

                    {gameState === "won" && (
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-white">{score} pts</span>
                        {isNewBest && (
                          <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                            <Star className="size-3" />
                            New best!
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-lg font-bold text-white mb-1">
                      {gameState === "won"
                        ? "Brilliant!"
                        : timeLeft === 0
                        ? "Time's Up!"
                        : "Wrong Guess!"}
                    </p>
                    <p className="text-sm text-white/70">
                      {gameState === "won"
                        ? `You nailed it with ${timeLeft}s to spare!`
                        : `It was ${movie.Title} (${movie.Year})`}
                    </p>
                  </motion.div>

                  <div className="flex gap-2">
                    <Button
                      onClick={onBackToMenu}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/40"
                    >
                      <ArrowLeft className="mr-2 size-4" />
                      Back
                    </Button>
                    <Button
                      onClick={startGame}
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      <RotateCcw className="mr-2 size-4" />
                      Play Again
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 2: Verify Normal mode**

At `http://localhost:5173`:
1. Click "Grid Reveal" → difficulty sub-screen
2. Click "Normal" → game starts
3. Confirm: 4-column × 6-row tile grid over the poster, "24s" timer, 4 answer buttons in 2×2 grid
4. Wait ~5 seconds — confirm 5 tiles have faded to reveal the poster underneath
5. Click the correct answer → all remaining tiles dissolve, trophy shown, score displayed (should be less than 1000 since time has passed), "New best!" badge on first win
6. Click "Play Again" → new movie, fresh grid
7. Click "Back" → returns to difficulty sub-screen (not main menu)
8. Difficulty sub-screen now shows "Best: N pts" under Normal

- [ ] **Step 3: Verify Hard mode**

1. From difficulty sub-screen, click "Hard"
2. Confirm: 6-column × 9-row tile grid (more, smaller tiles), "54s" timer, "Hard" badge in header
3. Let timer expire — "Time's Up!" shown, correct answer highlighted green
4. Win a round — confirm score is up to 2000 pts range, separate "Best" from Normal

- [ ] **Step 4: Verify wrong-answer flow**

1. Start Normal game, immediately click a wrong answer
2. Confirm: wrong option shows red + strikethrough, correct option highlighted green, "Wrong Guess!" heading, no score shown

- [ ] **Step 5: Commit**

```bash
git add src/app/components/unblur-poster-mode.tsx
git commit -m "feat: rewrite unblur mode as grid reveal with difficulty and scoring"
```
