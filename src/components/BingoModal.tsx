interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-xs border border-neon bg-panel p-6 text-center shadow-[0_0_30px_rgba(57,255,20,0.28)] [animation:modalIn_220ms_ease-out]">
        <div className="mb-3 font-display text-5xl">◉</div>
        <h2 className="mb-2 font-display text-4xl font-bold uppercase tracking-[0.16em] text-neon [text-shadow:0_0_16px_rgba(57,255,20,0.7)]">
          BINGO!
        </h2>
        <p className="mb-6 font-mono text-sm uppercase tracking-[0.08em] text-text-primary/85">
          Signal locked. Line completed.
        </p>

        <button
          onClick={onDismiss}
          className="w-full border border-neon bg-transparent px-6 py-3 font-display text-lg font-semibold uppercase tracking-[0.12em] text-neon transition-all duration-200 hover:bg-neon hover:text-base active:scale-[0.99]"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
