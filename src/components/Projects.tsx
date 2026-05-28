import { useRef, useState, useCallback } from 'react';
import { ChevronRight, ExternalLink, Github, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  projects,
  homepageProjectIds,
  getProjectById,
  githubRepositories,
} from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.08 });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const homepageProjects = homepageProjectIds
    .map((id) => getProjectById(id))
    .filter(Boolean) as typeof projects;

  const selected = selectedId ? getProjectById(selectedId) : null;

  const openProject = useCallback((id: string) => {
    setSelectedId(id);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const closeDetail = () => setSelectedId(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 md:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader
            title="Featured projects"
            subtitle="Tap a card for details — 9 builds on GitHub."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {homepageProjects.map((project) => {
              const isActive = selectedId === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => openProject(project.id)}
                  className={`card-hover group text-left flex flex-col rounded-lg border p-4 transition-all duration-200 ${
                    isActive
                      ? 'border-sky-500/60 bg-sky-500/5 ring-1 ring-sky-500/30'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50'
                  }`}
                >
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide rounded bg-sky-500/10 text-sky-600 dark:text-sky-400"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1.5 group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed flex-grow">
                    {project.cardSummary}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 group-hover:text-sky-500 transition-colors">
                    View details
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="project-detail"
            ref={detailRef}
            className="scroll-mt-24"
            aria-live="polite"
          >
            <div
              className={`grid transition-all duration-300 ease-out ${
                selected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                {selected && (
                  <article
                    key={selected.id}
                    className="project-detail-panel rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                          {selected.title}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-1">{selected.problem}</p>
                      </div>
                      <button
                        type="button"
                        onClick={closeDetail}
                        className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors shrink-0"
                        aria-label="Close project details"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="flex gap-1.5 overflow-x-auto pb-2 mb-4 -mx-1 px-1 scrollbar-none">
                      {projects.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => openProject(p.id)}
                          className={`shrink-0 px-2.5 py-1 text-[11px] rounded-md whitespace-nowrap transition-colors ${
                            p.id === selected.id
                              ? 'bg-sky-600 text-white'
                              : 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700'
                          }`}
                        >
                          {p.title}
                        </button>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-5">
                      {selected.highlights.map((line) => (
                        <li
                          key={line}
                          className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2"
                        >
                          <span className="text-sky-500 shrink-0">—</span>
                          {line}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {selected.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={selected.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-500 hover:text-sky-400 transition-colors"
                    >
                      <Github size={14} />
                      View repository
                      <ExternalLink size={12} />
                    </a>
                  </article>
                )}
              </div>
            </div>
          </div>

          <a
            href={githubRepositories}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-sky-500 transition-colors"
          >
            All 45+ repositories on GitHub
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
