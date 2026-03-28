import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[60px] select-none items-center justify-center border p-1 text-center font-mono text-[11px] leading-tight transition-all duration-200 sm:text-xs';

  const stateClasses = square.isFreeSpace
    ? 'border-neon/65 bg-panel text-neon [text-shadow:0_0_8px_rgba(57,255,20,0.35)]'
    : square.isMarked
      ? isWinning
        ? 'border-win bg-win/12 text-win shadow-[0_0_12px_rgba(255,0,170,0.45)] [text-shadow:0_0_8px_rgba(255,0,170,0.35)]'
        : 'border-neon bg-neon/12 text-neon shadow-[0_0_12px_rgba(57,255,20,0.3)]'
      : 'border-border-muted bg-panel text-text-primary/85 hover:border-neon/40 hover:text-text-primary';

  const freeSpaceClasses = square.isFreeSpace ? 'font-display text-sm font-bold tracking-[0.14em]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto">
        {square.isFreeSpace ? '[ FREE ]' : square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span
          className={`absolute right-0.5 top-0.5 text-[11px] ${
            isWinning ? 'text-win' : 'text-neon'
          }`}
        >
          ✓
        </span>
      )}
    </button>
  );
}
