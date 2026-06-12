// src/app/components/unblur-poster-mode.tsx
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowLeft, RotateCcw, Trophy, X, Star } from "lucide-react";
import { MOVIES, getRandomMovie, type Movie } from "../data/movies";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { calcScore, saveHighScore, type Difficulty } from "./scoring";

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
  if (pool.length < 3) throw new Error(`Need at least 4 movies; have ${pool.length + 1}`);
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
