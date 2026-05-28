import { useRef } from 'react';
import { Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  currentlyExploring,
  currentlyInterested,
  featuredCertifications,
  secondaryCertification,
  skillCategories,
} from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 md:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader title="Skills & certifications" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {featuredCertifications.map((cert) => (
              <div
                key={cert.title}
                className="flex gap-2.5 rounded-lg border border-sky-500/20 bg-sky-500/5 dark:bg-sky-500/10 p-3"
              >
                <Award
                  className="text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"
                  size={16}
                />
                <div>
                  <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-[10px] text-zinc-500 mt-0.5">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-zinc-400 mb-8 -mt-4">Also: {secondaryCertification}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="card-hover rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-3"
              >
                <h3 className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 mb-2 uppercase tracking-wide">
                  {category.title}
                </h3>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-500 leading-relaxed">
                  {category.skills.join(' · ')}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 dark:bg-sky-500/10 p-4">
              <p className="text-[11px] font-semibold text-sky-700 dark:text-sky-400 uppercase tracking-wide mb-3">
                Currently interested in
              </p>
              <div className="flex flex-wrap gap-2">
                {currentlyInterested.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs rounded-md bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/25 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 p-4">
              <p className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-3">
                Also exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {currentlyExploring.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
