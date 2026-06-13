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
      <div className="min-h-screen w-full flex items-start sm:items-center justify-center p-4 sm:p-6 md:p-8 pt-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
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
    <div className="min-h-screen w-full flex items-start sm:items-center justify-center p-4 sm:p-6 md:p-8 pt-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-x-hidden">
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
