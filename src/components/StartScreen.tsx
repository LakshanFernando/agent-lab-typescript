interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden bg-base p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(57,255,20,0.05) 0px, rgba(57,255,20,0.05) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(57,255,20,0.05) 0px, rgba(57,255,20,0.05) 1px, transparent 1px, transparent 32px)',
          animation: 'neonPulse 8s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 w-full max-w-sm text-center">
        <h1 className="mb-1 font-display text-5xl font-bold tracking-[0.22em] text-neon [text-shadow:0_0_10px_rgba(57,255,20,0.45)]">
          SOC OPS
        </h1>
        <p className="mb-8 font-mono text-sm uppercase tracking-[0.28em] text-neon-soft">
          Social Bingo
        </p>

        <div className="mb-8 border border-neon/60 bg-panel/90 p-6 shadow-[0_0_28px_rgba(57,255,20,0.13)] backdrop-blur-sm">
          <h2 className="mb-3 font-display text-2xl font-semibold tracking-[0.1em] text-neon">
            Boot Protocol
          </h2>
          <ul className="space-y-2 text-left font-mono text-sm text-text-primary/90">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full border border-neon bg-transparent px-8 py-4 font-display text-xl font-semibold uppercase tracking-[0.16em] text-neon transition-all duration-200 hover:bg-neon hover:text-base active:scale-[0.99]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
