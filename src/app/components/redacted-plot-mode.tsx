import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ArrowLeft, RotateCcw, Trophy, X } from "lucide-react";
import { getRandomMovie, type Movie } from "../data/movies";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RedactedPlotModeProps {
  onBackToMenu: () => void;
}

export function RedactedPlotMode({ onBackToMenu }: RedactedPlotModeProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [redactedPlot, setRedactedPlot] = useState("");
  const [guess, setGuess] = useState("");
  const [strikes, setStrikes] = useState(0);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);

  const normalizeString = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  };

  const redactPlot = (plot: string, actors: string): string => {
    let redacted = plot;
    
    // Split actors by comma and get individual names
    const actorNames = actors.split(",").map(name => name.trim());
    
    // For each actor, extract first and last names
    actorNames.forEach(actor => {
      const nameParts = actor.split(" ");
      nameParts.forEach(part => {
        if (part.length > 2) { // Only redact names longer than 2 characters
          // Create a case-insensitive regex to find the name
          const regex = new RegExp(`\\b${part}\\b`, "gi");
          redacted = redacted.replace(regex, "█████");
        }
      });
    });

    // Also redact common character patterns like "Mr./Mrs./Dr. [Name]"
    redacted = redacted.replace(/\b(Mr\.|Mrs\.|Ms\.|Dr\.|Professor)\s+[A-Z][a-z]+/g, "$1 █████");
    
    return redacted;
  };

  const startGame = () => {
    const newMovie = getRandomMovie();
    setMovie(newMovie);
    setRedactedPlot(redactPlot(newMovie.Plot, newMovie.Actors));
    setGuess("");
    setStrikes(0);
    setGameState("playing");
    setWrongGuesses([]);
  };

  const handleGuess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movie || gameState !== "playing" || !guess.trim()) return;

    const normalizedGuess = normalizeString(guess);
    const normalizedTitle = normalizeString(movie.Title);

    if (normalizedGuess === normalizedTitle) {
      setGameState("won");
    } else {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);
      setWrongGuesses([...wrongGuesses, guess]);
      setGuess("");

      if (newStrikes >= 3) {
        setGameState("lost");
      }
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

          {wrongGuesses.length > 0 && (
            <motion.div
              className="space-y-2 sm:space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xs sm:text-sm font-medium text-white/60">Previous Guesses:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {wrongGuesses.map((wrongGuess, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs sm:text-sm">
                      {wrongGuess}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

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
                placeholder="Type the movie title..."
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                className="text-base sm:text-lg bg-white/10 border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm focus:bg-white/20"
                autoFocus
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-base sm:text-lg"
                size="lg"
                disabled={!guess.trim()}
              >
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
                className="text-center space-y-4 sm:space-y-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/20"
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
                    You guessed <strong className="text-white">{movie.Title}</strong> with {remainingLives} {remainingLives === 1 ? 'life' : 'lives'} left!
                  </p>
                </div>

                <motion.div
                  className="relative aspect-[2/3] max-h-[320px] sm:max-h-[400px] max-w-[240px] sm:max-w-[300px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
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

                <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl text-left space-y-3 sm:space-y-4 border border-white/10">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/60 mb-1 sm:mb-2">Starring:</p>
                    <p className="text-xs sm:text-sm text-white/90">{movie.Actors}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/60 mb-1 sm:mb-2">Full Plot:</p>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/80">{movie.Plot}</p>
                  </div>
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
                className="text-center space-y-4 sm:space-y-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-white/20"
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Game Over!</h3>
                  <p className="text-base sm:text-lg text-white/80 px-2">
                    The movie was <strong className="text-white">{movie.Title}</strong> ({movie.Year})
                  </p>
                </div>

                <motion.div
                  className="relative aspect-[2/3] max-h-[320px] sm:max-h-[400px] max-w-[240px] sm:max-w-[300px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
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

                <div className="p-4 sm:p-6 bg-white/5 rounded-xl sm:rounded-2xl text-left space-y-3 sm:space-y-4 border border-white/10">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/60 mb-1 sm:mb-2">Starring:</p>
                    <p className="text-xs sm:text-sm text-white/90">{movie.Actors}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white/60 mb-1 sm:mb-2">Full Plot:</p>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/80">{movie.Plot}</p>
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <Button onClick={onBackToMenu} size="lg" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-200">
                    <ArrowLeft className="mr-1 sm:mr-2 size-4" />
                    Menu
                  </Button>
                  <Button onClick={startGame} size="lg" className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
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
