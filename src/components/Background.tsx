import { useEffect, useRef } from 'react';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0B] transition-colors duration-500"
    >
      {/* 1. Ambient Mesh Gradients (Floating Auroras) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-sky-400/20 to-indigo-500/20 dark:from-sky-500/10 dark:to-indigo-500/10 blur-[80px] sm:blur-[120px] animate-pulse-orbit-1" />
      <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 dark:from-violet-600/8 dark:to-fuchsia-600/4 blur-[80px] sm:blur-[120px] animate-pulse-orbit-2" />
      <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-emerald-400/20 to-teal-500/20 dark:from-emerald-500/8 dark:to-teal-500/8 blur-[80px] sm:blur-[120px] animate-pulse-orbit-3" />

      {/* 2. Static Subtle Base Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(113 113 122 / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(113 113 122 / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
        }}
      />

      {/* 3. Interactive Cursor Spotlight Grid */}
      <div
        className="absolute inset-0 opacity-[0.28] dark:opacity-[0.15] hidden sm:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(113 113 122 / 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(113 113 122 / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
        }}
      />

      {/* 4. Elegant Animated Tech/Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full stroke-zinc-200/50 dark:stroke-zinc-800/40 fill-none hidden md:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glow-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="30%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="70%" stopColor="#6366f1" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glow-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="40%" stopColor="#ec4899" stopOpacity="1" />
            <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Left Side Tech Line */}
        <path
          d="M 150 0 L 150 300 L 200 350 L 200 600 L 120 680 L 120 900"
          strokeWidth="1"
        />
        <path
          d="M 150 0 L 150 300 L 200 350 L 200 600 L 120 680 L 120 900"
          strokeWidth="1.5"
          stroke="url(#glow-grad-1)"
          className="animate-dash"
        />

        {/* Right Side Tech Line */}
        <path
          d="M 1290 0 L 1290 250 L 1240 300 L 1240 550 L 1320 630 L 1320 900"
          strokeWidth="1"
        />
        <path
          d="M 1290 0 L 1290 250 L 1240 300 L 1240 550 L 1320 630 L 1320 900"
          strokeWidth="1.5"
          stroke="url(#glow-grad-2)"
          className="animate-dash"
        />

        {/* Glowing node intersections */}
        <circle cx="200" cy="350" r="3.5" className="fill-sky-400 dark:fill-sky-500 animate-pulse" />
        <circle cx="1240" cy="300" r="3.5" className="fill-purple-400 dark:fill-purple-500 animate-pulse" />
        <circle cx="120" cy="680" r="2.5" className="fill-indigo-400 dark:fill-indigo-500 opacity-60" />
        <circle cx="1320" cy="630" r="2.5" className="fill-pink-400 dark:fill-pink-500 opacity-60" />
      </svg>

      {/* 5. Fine Grain / Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.015] dark:opacity-[0.025] mix-blend-overlay" />
    </div>
  );
};

export default Background;
