import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { hero } from '../data/portfolioData';

const Hero = () => {
  const {
    statusLine,
    name,
    headline,
    intro,
    metricsLine,
    resumeUrl,
    techStack,
    links,
  } = hero;

  return (
    <section id="home" className="relative flex items-center pt-16 pb-6 md:pb-8">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400 text-[10px] font-semibold uppercase tracking-wider max-w-full">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="leading-snug">{statusLine}</span>
        </div>

        {/* Text content wrapped in max-w-2xl */}
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5.5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1] mb-2.5">
            {name}
          </h1>

          <p className="text-base sm:text-lg text-zinc-800 dark:text-zinc-200 leading-snug mb-3.5 font-semibold">
            {headline}
          </p>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            {intro}
          </p>

          {/* Metrics horizontal layout */}
          {metricsLine && (
            <div className="inline-flex flex-wrap items-center gap-y-1.5 gap-x-4 border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100/10 dark:bg-zinc-900/10 rounded-lg px-4 py-2 mb-4 max-w-full text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
              {metricsLine.split(' · ').map((metric, idx, arr) => (
                <span key={metric} className="flex items-center gap-4">
                  <span>{metric}</span>
                  {idx < arr.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  )}
                </span>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-6 tracking-wider uppercase">
            Tech stack: <span className="text-zinc-600 dark:text-zinc-400">{techStack}</span>
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink size={14} />
              Resume
            </a>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover-glow bg-zinc-100/50 dark:bg-zinc-900/10 text-zinc-600 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Projects
              <ArrowDown size={14} />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-500">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded"
            >
              <Github size={14} />
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="focus-ring inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors rounded"
            >
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
