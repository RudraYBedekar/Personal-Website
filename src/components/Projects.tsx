import { useRef, useState, useCallback, useEffect } from 'react';
import {
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  projects,
  homepageProjectIds,
  moreProjects,
  getProjectById,
  githubRepositories,
} from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import { ProjectIconVisual } from './projectIcons';

const parseProjectHash = (): string | null => {
  const hash = window.location.hash;
  const match = hash.match(/^#project-(.+)$/);
  return match ? match[1] : null;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.08 });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showMoreList, setShowMoreList] = useState(false);

  const homepageProjects = homepageProjectIds
    .map((id) => getProjectById(id))
    .filter(Boolean) as typeof projects;

  const selected = selectedId ? getProjectById(selectedId) : null;

  const openProject = useCallback((id: string, updateHash = true) => {
    setSelectedId(id);
    if (updateHash) {
      window.history.replaceState(null, '', `#project-${id}`);
    }
  }, []);

  const closeDetail = () => {
    setSelectedId(null);
    setShowMoreList(false);
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, '', '#projects');
    }
  };

  useEffect(() => {
    const id = parseProjectHash();
    if (id && getProjectById(id)) {
      setSelectedId(id);
    }

    const onHashChange = () => {
      const next = parseProjectHash();
      if (next && getProjectById(next)) {
        openProject(next, false);
      } else if (!next) {
        setSelectedId(null);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [openProject]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-6 md:py-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader
            title="Featured projects"
            subtitle="Tap a card for details · shareable links per project."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {homepageProjects.map((project) => {
              const isActive = selectedId === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => openProject(project.id)}
                  aria-expanded={isActive}
                  className={`focus-ring card-hover hover-glow group text-left flex flex-col rounded-lg border p-4 transition-all duration-200 bg-white dark:bg-zinc-900/50 ${
                    isActive
                      ? 'border-sky-500/60 bg-sky-500/5 ring-1 ring-sky-500/30'
                      : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50'
                  }`}
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-sky-500/20 to-violet-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400">
                      <ProjectIconVisual icon={project.icon} className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-wrap gap-1 min-w-0 mt-0.5">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider rounded bg-sky-500/10 text-sky-600 dark:text-sky-400"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
                    {project.title}
                  </h3>
                  <span className="mt-2.5 inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-sky-500 transition-colors">
                    View details
                    <ChevronRight
                      size={11}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Modal Overlay Popup */}
          {selected && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-955/65 backdrop-blur-md"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeDetail();
              }}
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.title} details`}
            >
              <article
                className="relative w-full max-w-lg rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 sm:p-6 shadow-2xl overflow-y-auto max-h-[90vh] transition-all animate-float"
                style={{ animationDuration: '0.3s', animationIterationCount: 1 }}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeDetail}
                  className="absolute top-4 right-4 focus-ring p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>

                <div className="flex items-start gap-3.5 mb-4 pr-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500/25 to-violet-500/15 border border-sky-500/25 text-sky-500">
                    <ProjectIconVisual icon={selected.icon} className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                      {selected.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 mt-0.5">{selected.problem}</p>
                  </div>
                </div>

                {/* Direct quick nav for featured or other projects */}
                <div className="flex flex-wrap gap-1 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                  {homepageProjects.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => openProject(p.id)}
                      className={`focus-ring px-2.5 py-0.5 text-[10px] rounded-md transition-colors font-medium ${
                        p.id === selected.id
                          ? 'bg-sky-600 text-white'
                          : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                      }`}
                    >
                      {p.title.split(' ')[0]}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setShowMoreList(!showMoreList)}
                    className="focus-ring px-2.5 py-0.5 text-[10px] rounded-md bg-zinc-150 dark:bg-zinc-805 text-zinc-505 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-medium"
                  >
                    +{moreProjects.length} more
                  </button>
                </div>

                {showMoreList && (
                  <div className="flex flex-wrap gap-1 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                    {moreProjects.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => openProject(p.id)}
                        className={`focus-ring px-2.5 py-0.5 text-[10px] rounded-md transition-colors font-medium ${
                          p.id === selected.id
                            ? 'bg-sky-600 text-white'
                            : 'bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 hover:text-sky-500'
                        }`}
                      >
                        {p.title}
                      </button>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 mb-4">
                  {selected.highlights.map((line) => (
                    <li
                      key={line}
                      className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2 pl-0"
                    >
                      <span className="text-sky-500 shrink-0">—</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 mb-4">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-1">
                  <a
                    href={selected.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1 text-[11px] font-semibold text-sky-500 hover:text-sky-400 transition-colors rounded"
                  >
                    <Github size={13} />
                    Repository
                    <ExternalLink size={11} />
                  </a>
                  {selected.demoLink && (
                    <a
                      href={selected.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-500 hover:text-sky-400 transition-colors rounded"
                    >
                      Live demo
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </article>
            </div>
          )}

          <a
            href={githubRepositories}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-sky-500 transition-colors rounded"
          >
            All 45+ repositories on GitHub
            <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
