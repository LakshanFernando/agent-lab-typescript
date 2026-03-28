import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-full flex-col bg-base">
      <header className="flex items-center justify-between border-b border-neon/45 bg-panel/90 p-3 backdrop-blur-sm">
        <button
          onClick={onReset}
          className="px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-neon/85 transition-colors hover:text-neon"
        >
          ← Back
        </button>
        <h1 className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-neon [text-shadow:0_0_8px_rgba(57,255,20,0.35)]">
          Soc Ops
        </h1>
        <div className="w-16"></div>
      </header>

      <p className="px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.08em] text-text-muted">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="border-y border-win/60 bg-win/12 py-2 text-center font-display text-base font-semibold uppercase tracking-[0.14em] text-win [text-shadow:0_0_12px_rgba(255,0,170,0.55)]">
          BINGO SIGNAL ACQUIRED
        </div>
      )}

      <div className="flex flex-1 items-center justify-center p-3 sm:p-5">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
