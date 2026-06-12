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
