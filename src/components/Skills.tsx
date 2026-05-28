import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import {
  currentlyExploring,
  currentlyInterested,
  featuredCertifications,
  secondaryCertification,
  skillCategories,
} from '../data/portfolioData';
import SectionHeader from './SectionHeader';

const CertLogo = ({ logo }: { logo: string }) => {
  if (logo === 'aws') {
    return (
      <span className="text-[9px] font-bold text-[#FF9900] tracking-tight shrink-0 bg-[#FF9900]/10 px-1.5 py-0.5 rounded border border-[#FF9900]/25">
        AWS
      </span>
    );
  }
  if (logo === 'nvidia') {
    return (
      <span className="text-[9px] font-bold text-[#76B900] tracking-tight shrink-0 bg-[#76B900]/10 px-1.5 py-0.5 rounded border border-[#76B900]/25">
        NVIDIA
      </span>
    );
  }
  return <Award className="text-sky-600 dark:text-sky-400 shrink-0" size={14} />;
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-6 md:py-8 border-t border-zinc-200/80 dark:border-zinc-800/80 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <SectionHeader title="Skills & certifications" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            {/* Column 1: Certifications (Span 4) */}
            <div className="md:col-span-4 space-y-4">
              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5">
                  Certifications
                </h3>
                <div className="space-y-1.5">
                  {featuredCertifications.map((cert) => (
                    <a
                      key={cert.title}
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring card-hover hover-glow flex gap-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-2.5 items-center group"
                    >
                      <CertLogo logo={cert.logo} />
                      <div className="min-w-0 flex-grow">
                        <p className="text-[11px] font-semibold text-zinc-850 dark:text-zinc-100 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {cert.title}
                        </p>
                      </div>
                      <ExternalLink
                        size={12}
                        className="shrink-0 text-zinc-400 group-hover:text-sky-500"
                        aria-hidden
                      />
                    </a>
                  ))}
                </div>
                <p className="text-[9px] text-zinc-400 dark:text-zinc-500 mt-2 pl-1 font-medium">
                  Also:{' '}
                  <a
                    href={secondaryCertification.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-sky-600 dark:text-sky-400 hover:underline rounded"
                  >
                    {secondaryCertification.title}
                  </a>
                </p>
              </div>
            </div>

            {/* Column 2: Tech Stack categories (Span 5) */}
            <div className="md:col-span-5 space-y-4">
              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5">
                  Technical Stack
                </h3>
                <div className="rounded-lg border border-zinc-200 dark:border-zinc-805 bg-white dark:bg-zinc-900/50 p-3.5 space-y-2.5">
                  {skillCategories.map((category) => (
                    <div
                      key={category.title}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 pb-2.5 last:pb-0 border-b last:border-0 border-zinc-100 dark:border-zinc-800/80"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 sm:w-32 shrink-0">
                        {category.title}
                      </span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                        {category.skills.join(' · ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Interested & Exploring (Span 3) */}
            <div className="md:col-span-3 space-y-4">
              {/* Focus Area */}
              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5">
                  Focus Areas
                </h3>
                <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 dark:bg-sky-500/10 p-3">
                  <div className="flex flex-wrap gap-1">
                    {currentlyInterested.map((role) => (
                      <span
                        key={role}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-sky-500/15 text-sky-800 dark:text-sky-300 border border-sky-500/25 font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Also exploring */}
              <div>
                <h3 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2.5">
                  Exploring
                </h3>
                <div className="rounded-lg border border-dashed border-zinc-300 dark:border-zinc-800 p-3">
                  <div className="flex flex-wrap gap-1">
                    {currentlyExploring.map((topic) => (
                      <span
                        key={topic}
                        className="px-1.5 py-0.5 text-[10px] rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
