import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { experienceItems } from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 md:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader title="Experience" subtitle="Impact at scale." />

          <div className="relative pl-6 sm:pl-8">
            <div
              className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800"
              aria-hidden
            />

            <div className="space-y-8">
              {experienceItems.map((item, index) => (
                <article key={`${item.company}-${item.year}`} className="relative">
                  <div
                    className="absolute -left-6 sm:-left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-50 dark:border-[#0A0A0B] bg-sky-500 ring-4 ring-sky-500/10"
                    aria-hidden
                  />

                  <div className="card-hover rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-4 sm:p-5 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-500">
                          {item.company} · {item.location}
                        </p>
                      </div>
                      <time className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5">
                        {item.year}
                      </time>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2 py-0.5 text-[10px] font-medium rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-1.5">
                      {item.highlights.map((line) => (
                        <li
                          key={line}
                          className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pl-0"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {index < experienceItems.length - 1 && (
                    <span className="sr-only">Next role</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
