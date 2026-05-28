const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0A0A0B]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.35] dark:opacity-[0.1]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgb(113 113 122 / 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(113 113 122 / 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }}
    />

    {/* Soft gradient orbs */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[min(100%,800px)] h-[380px] bg-gradient-to-b from-sky-500/[0.08] to-transparent dark:from-sky-500/[0.14] rounded-full blur-3xl animate-pulse-slow" />
    <div className="absolute bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-violet-500/[0.04] dark:bg-violet-500/[0.08] rounded-full blur-3xl animate-drift" />
    <div className="absolute top-[40%] -left-[8%] w-[320px] h-[320px] bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] rounded-full blur-3xl animate-drift-reverse" />

    {/* Data-flow network (subtle SVG) */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.18] dark:opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(14 165 233)" stopOpacity="0" />
          <stop offset="50%" stopColor="rgb(14 165 233)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(14 165 233)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#lineGrad)" strokeWidth="0.5" fill="none">
        <path d="M 80 120 L 280 200 L 480 140 L 680 220 L 900 160" className="animate-dash" />
        <path d="M 120 400 L 320 320 L 520 380 L 720 300 L 920 360" className="animate-dash" style={{ animationDelay: '1s' }} />
        <path d="M 200 80 L 200 280 L 400 360 L 600 280 L 800 400" className="animate-dash" style={{ animationDelay: '2s' }} />
      </g>
      <g fill="rgb(14 165 233)" className="opacity-60">
        {[
          [80, 120],
          [280, 200],
          [480, 140],
          [680, 220],
          [900, 160],
          [120, 400],
          [320, 320],
          [520, 380],
          [720, 300],
          [200, 80],
          [400, 360],
          [600, 280],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" className="animate-node-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
        ))}
      </g>
    </svg>

    {/* Floating data dots */}
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-sky-500/30 dark:bg-sky-400/20 animate-float"
          style={{
            left: `${8 + (i * 7.5) % 88}%`,
            top: `${12 + (i * 11) % 78}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${14 + (i % 5) * 2}s`,
          }}
        />
      ))}
    </div>
  </div>
);

export default Background;
