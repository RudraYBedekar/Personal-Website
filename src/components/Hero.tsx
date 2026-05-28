import { ArrowDown, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { hero } from '../data/portfolioData';

const Hero = () => {
  const { availability, targetRoles, relocation, name, headline, intro, resumeUrl, techStack, links } =
    hero;

  return (
    <section id="home" className="relative flex items-center pt-28 pb-16 md:pb-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            {availability}
          </div>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-400 text-xs font-medium">
            Interested in {targetRoles}
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-500">{relocation}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.12] mb-4">
          {name}
        </h1>

        <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl leading-snug mb-3 font-medium">
          {headline}
        </p>

        <p className="text-sm text-zinc-500 dark:text-zinc-500 max-w-xl leading-relaxed mb-8">
          {intro}
        </p>

        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 mb-8 tracking-wide">
          {techStack}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-8">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} />
            Resume
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900/80 transition-colors"
          >
            Experience
            <ArrowDown size={14} />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500 dark:text-zinc-500">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
