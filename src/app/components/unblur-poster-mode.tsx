import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { ArrowLeft, RotateCcw, Trophy, X } from "lucide-react";
import { getRandomMovie, type Movie } from "../data/movies";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface UnblurPosterModeProps {
  onBackToMenu: () => void;
}

export function UnblurPosterMode({ onBackToMenu }: UnblurPosterModeProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [blurAmount, setBlurAmount] = useState(20);
  const [timeLeft, setTimeLeft] = useState(10);
  const [guess, setGuess] = useState("");
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  };

  const startGame = () => {
    const newMovie = getRandomMovie();
    setMovie(newMovie);
    setBlurAmount(20);
    setTimeLeft(10);
    setGuess("");
    setGameState("playing");

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setGameState("lost");
          return 0;
        }
        return prev - 1;
      });

      setBlurAmount((prev) => {
        const newBlur = prev - 2;
        return newBlur < 0 ? 0 : newBlur;
      });
    }, 1000);
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movie || gameState !== "playing") return;

    const normalizedGuess = normalizeString(guess);
    const normalizedTitle = normalizeString(movie.Title);

    if (normalizedGuess === normalizedTitle) {
      setGameState("won");
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  useEffect(() => {
    startGame();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  if (!movie) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const progress = ((10 - timeLeft) / 10) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
          <CardHeader className="space-y-3 sm:space-y-4 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBackToMenu}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-violet-500/40 hover:shadow-violet-500/60 transition-all duration-200 rounded-xl px-4"
              >
                <ArrowLeft className="mr-1 sm:mr-2 size-4" />
                Back
              </Button>
              <div className="relative size-16 sm:size-20">
                <svg className="size-full -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    className="text-white/20"
                  />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="text-blue-400"
                    initial={{ strokeDasharray: "213.628", strokeDashoffset: 0 }}
                    animate={{
                      strokeDashoffset: (213.628 * (10 - timeLeft)) / 10
                    }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-white">{timeLeft}s</span>
                </div>
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 sm:mb-2">Unblur Challenge</CardTitle>
              <CardDescription className="text-sm sm:text-base text-white/60">
                Guess the movie as the poster reveals itself
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <motion.div
              className="relative aspect-[2/3] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] max-w-[280px] sm:max-w-[360px] md:max-w-[400px] mx-auto bg-black/20 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ImageWithFallback
                src={movie.Poster}
                alt="Movie Poster"
                className="w-full h-full object-cover"
                style={{
                  filter: `blur(${blurAmount}px)`,
                  transition: "filter 1s ease-out"
                }}
              />
            </motion.div>

            {gameState === "playing" && (
              <motion.form
                onSubmit={handleGuess}
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Input
                  type="text"
                  placeholder="Type your guess..."
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  className="text-base sm:text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm focus:bg-white/20"
                  autoFocus
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-base sm:text-lg" size="lg">
                  Submit Guess
                </Button>
              </motion.form>
            )}

            <AnimatePresence>
              {gameState === "won" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center space-y-3 sm:space-y-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/20"
                >
                  <motion.div
                    className="flex justify-center"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Trophy className="size-16 sm:size-20 text-yellow-400 drop-shadow-lg" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Brilliant!</h3>
                    <p className="text-base sm:text-lg text-white/80 px-2">
                      You guessed <strong className="text-white">{movie.Title}</strong> with {timeLeft} seconds left!
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Button onClick={onBackToMenu} size="lg" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-200">
                      <ArrowLeft className="mr-1 sm:mr-2 size-4" />
                      Menu
                    </Button>
                    <Button onClick={startGame} size="lg" className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                      <RotateCcw className="mr-1 sm:mr-2 size-4 sm:size-5" />
                      <span className="hidden sm:inline">Play Again</span>
                      <span className="sm:hidden">Again</span>
                    </Button>
                  </div>
                </motion.div>
              )}

              {gameState === "lost" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center space-y-3 sm:space-y-4 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/20"
                >
                  <motion.div
                    className="flex justify-center"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <X className="size-16 sm:size-20 text-red-400 drop-shadow-lg" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Time's Up!</h3>
                    <p className="text-base sm:text-lg text-white/80 px-2">
                      The movie was <strong className="text-white">{movie.Title}</strong> ({movie.Year})
                    </p>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Button onClick={onBackToMenu} size="lg" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-200">
                      <ArrowLeft className="mr-1 sm:mr-2 size-4" />
                      Menu
                    </Button>
                    <Button onClick={startGame} size="lg" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      <RotateCcw className="mr-1 sm:mr-2 size-4 sm:size-5" />
                      <span className="hidden sm:inline">Try Another</span>
                      <span className="sm:hidden">Again</span>
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
