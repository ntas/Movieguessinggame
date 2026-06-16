import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, RotateCcw, Trophy, X } from "lucide-react";
import { MOVIES, getRandomMovie, type Movie } from "../data/movies";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function buildOptions(correct: Movie): Movie[] {
  const pool = MOVIES.filter(m => m.Title !== correct.Title);
  const wrong = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  return [...wrong, correct].sort(() => Math.random() - 0.5);
}

interface RedactedPlotModeProps {
  onBackToMenu: () => void;
}

export function RedactedPlotMode({ onBackToMenu }: RedactedPlotModeProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [options, setOptions] = useState<Movie[]>([]);
  const [redactedPlot, setRedactedPlot] = useState("");
  const [strikes, setStrikes] = useState(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [wrongPicks, setWrongPicks] = useState<string[]>([]);

  const redactPlot = (plot: string, title: string, actors: string): string => {
    const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let redacted = plot;

    // Redact full title
    redacted = redacted.replace(new RegExp(esc(title), "gi"), "█████");

    // Redact individual title words (skip short stop words)
    const STOP = new Set(["a","an","the","of","in","on","at","to","for","and","or","but","is","it","as","are","was","with","from"]);
    title.split(/[\s:,\-–]+/).forEach(word => {
      const clean = word.replace(/[^a-zA-Z0-9]/g, "");
      if (clean.length > 1 && !STOP.has(clean.toLowerCase())) {
        redacted = redacted.replace(new RegExp(`\\b${esc(clean)}\\b`, "gi"), "█████");
      }
    });

    // Redact abbreviations (e.g. E.T., U.S.A.)
    redacted = redacted.replace(/\b([A-Z]\.){2,}/g, "█████");

    // Redact all standalone numbers
    redacted = redacted.replace(/\b\d+\b/g, "█████");

    // Redact actor names (each part longer than 2 chars)
    actors.split(",").forEach(actor => {
      actor.trim().split(" ").forEach(part => {
        if (part.length > 2) {
          redacted = redacted.replace(new RegExp(`\\b${esc(part)}\\b`, "gi"), "█████");
        }
      });
    });

    // Redact names after honorifics
    redacted = redacted.replace(/\b(Mr\.|Mrs\.|Ms\.|Dr\.|Professor)\s+[A-Z][a-z]+/g, "$1 █████");

    return redacted;
  };

  const startGame = () => {
    const newMovie = getRandomMovie();
    setMovie(newMovie);
    setOptions(buildOptions(newMovie));
    setRedactedPlot(redactPlot(newMovie.Plot, newMovie.Title, newMovie.Actors));
    setStrikes(0);
    setGameState("playing");
    setWrongPicks([]);
  };

  const handlePick = (choice: Movie) => {
    if (!movie || gameState !== "playing") return;
    if (choice.Title === movie.Title) {
      setGameState("won");
    } else {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      setWrongPicks(prev => [...prev, choice.Title]);
      if (newStrikes >= 3) setGameState("lost");
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  if (!movie) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const remainingLives = 3 - strikes;

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center p-3 sm:p-4 md:p-6 pt-4 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-x-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
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
              <div className="flex gap-1.5 sm:gap-2">
                {[1, 2, 3].map((life) => (
                  <motion.div
                    key={life}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: life * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {life <= remainingLives ? (
                      <span className="text-2xl sm:text-3xl drop-shadow-lg select-none">🍿</span>
                    ) : (
                      <span className="text-2xl sm:text-3xl opacity-20 grayscale select-none">🍿</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl text-white mb-1 sm:mb-2">Redacted Plot</CardTitle>
              <CardDescription className="text-sm sm:text-base text-white/60">
                Decode the censored synopsis and name the movie
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          {gameState === "playing" && (
            <motion.div
              className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-3 sm:mb-4 flex-wrap">
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs sm:text-sm">Year: {movie.Year}</Badge>
                <Badge className="bg-white/10 text-white border-white/20 text-xs sm:text-sm">Strikes: {strikes}/3</Badge>
              </div>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">{redactedPlot}</p>
            </motion.div>
          )}

          {gameState === "playing" && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {options.map((opt, i) => {
                const isWrong = wrongPicks.includes(opt.Title);
                return (
                  <motion.button
                    key={opt.Title}
                    whileHover={isWrong ? {} : { scale: 1.02, y: -2 }}
                    whileTap={isWrong ? {} : { scale: 0.97 }}
                    onClick={() => handlePick(opt)}
                    disabled={isWrong}
                    className={`p-3 sm:p-4 text-sm sm:text-base font-medium text-left rounded-xl border leading-snug transition-colors duration-200 flex items-start gap-2 ${
                      isWrong
                        ? "bg-red-500/15 border-red-400/30 text-red-300/50 line-through cursor-not-allowed"
                        : "bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white cursor-pointer"
                    }`}
                  >
                    <span className="shrink-0 font-bold text-white/40">{["A","B","C","D"][i]}.</span>
                    {opt.Title}
                  </motion.button>
                );
              })}
            </motion.div>
          )}

          <AnimatePresence>
            {(gameState === "won" || gameState === "lost") && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="space-y-4 sm:space-y-5"
              >
                {/* Highlighted options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {options.map((opt, i) => {
                    const correct = opt.Title === movie.Title;
                    const wrong = wrongPicks.includes(opt.Title);
                    return (
                      <div
                        key={opt.Title}
                        className={`p-3 sm:p-4 text-sm sm:text-base font-medium rounded-xl border leading-snug flex items-start gap-2 ${
                          correct
                            ? "bg-emerald-500/25 border-emerald-400/50 text-emerald-200"
                            : wrong
                            ? "bg-red-500/20 border-red-400/40 text-red-300/60 line-through"
                            : "bg-white/5 border-white/10 text-white/30"
                        }`}
                      >
                        <span className="shrink-0 font-bold opacity-60">{["A","B","C","D"][i]}.</span>
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
                  className={`text-center space-y-4 sm:space-y-5 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border ${
                    gameState === "won"
                      ? "bg-emerald-500/10 border-emerald-500/30"
                      : "bg-red-500/10 border-red-500/30"
                  }`}
                >
                  <div className="flex justify-center">
                    {gameState === "won"
                      ? <Trophy className="size-14 sm:size-16 text-yellow-400 drop-shadow-lg" />
                      : <X className="size-14 sm:size-16 text-red-400 drop-shadow-lg" />
                    }
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {gameState === "won" ? "Brilliant!" : "Game Over!"}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70">
                      {gameState === "won"
                        ? `You got it with ${remainingLives} ${remainingLives === 1 ? "life" : "lives"} left!`
                        : `The movie was ${movie.Title} (${movie.Year})`
                      }
                    </p>
                  </div>

                  <motion.div
                    className="relative aspect-[2/3] w-56 sm:w-64 md:w-72 lg:w-80 mx-auto rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <ImageWithFallback
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="p-4 bg-white/5 rounded-xl text-left space-y-3 border border-white/10">
                    <div>
                      <p className="text-xs font-medium text-white/50 mb-1">Starring:</p>
                      <p className="text-xs sm:text-sm text-white/80">{movie.Actors}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white/50 mb-1">Full Plot:</p>
                      <p className="text-xs sm:text-sm leading-relaxed text-white/70">{movie.Plot}</p>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <Button onClick={onBackToMenu} size="lg" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/40">
                      <ArrowLeft className="mr-1 sm:mr-2 size-4" />
                      Menu
                    </Button>
                    <Button onClick={startGame} size="lg" className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                      <RotateCcw className="mr-1 sm:mr-2 size-4" />
                      {gameState === "won" ? "Play Again" : "Try Again"}
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
      </motion.div>
    </div>
  );
}
