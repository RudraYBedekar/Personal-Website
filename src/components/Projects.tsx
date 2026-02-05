import { useRef, useState } from 'react';
import { Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const staticProjects = projects.slice(0, 3);
  const marqueeProjects = projects.slice(3);
  const displayMarqueeProjects = [...marqueeProjects, ...marqueeProjects];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-5xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Here are some of my recent projects that showcase my skills and expertise. The top featured projects highlight my focus on Data Analysis and Engineering.
          </p>
        </div>

        {/* Static Grid for Top 3 Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {staticProjects.map((project: Project, index: number) => (
            <div
              key={`static-${index}`}
              className={`group perspective-1000 h-[400px] transition-all duration-1000 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer shadow-xl rounded-xl ${expandedIndex === index ? 'rotate-y-180' : ''}`}
              >
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                      <h3 className="text-xl font-bold text-white p-4 drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-white/10 text-white border border-white/20 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-3 py-1 bg-white/5 text-gray-300 border border-white/10 text-xs font-medium rounded-full">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-400 italic">Tap for details</span>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-teal-600 text-white rounded-lg border border-white/10 transition-colors z-10 backdrop-blur-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#0a0a16]/95 border border-teal-500/50 p-6 flex flex-col justify-center text-center shadow-xl backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex justify-center gap-4 mt-auto">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-teal-400 transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-500 transition-colors shadow-lg border border-teal-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Marquee for Other Projects */}
        <div className="w-full overflow-hidden select-none relative">
          <div className="flex animate-marquee pause-on-hover py-4">
            {displayMarqueeProjects.map((project: Project, index: number) => (
              <div
                key={`marquee-${index}`}
                className="flex-shrink-0 w-80 md:w-96 mx-4 group perspective-1000 h-[400px]"
                // Note: Expanded state in marquee is tricky, simplified to just show content or use simple flip on hover if supported, 
                // but for marquee moving items, click-to-flip can be jarring. 
                // We'll use a hover-based flip for the marquee items for better UX, or click if pauses.
                // Let's stick to the same Click logic but ensuring marquee pauses.
                onClick={() => setExpandedIndex(expandedIndex === (index + 3) ? null : (index + 3))}
              // Index offset by 3 to avoid conflict with static if we used single state, but actually key collision matters more. 
              // Actually, expandedIndex state is single shared state. clicking one closes others.
              // To avoid index collision, we construct unique ID or just use offset.
              >
                <div
                  className={`relative w-full h-full transform-style-3d transition-transform duration-700 cursor-pointer shadow-xl rounded-xl ${expandedIndex === (index + 3) ? 'rotate-y-180' : ''}`}
                >
                  {/* Front Face (Same as static) */}
                  <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                        <h3 className="text-xl font-bold text-white p-4 drop-shadow-md">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-white/10 text-white border border-white/20 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-center text-sm text-gray-400 italic">Tap for details</div>
                    </div>
                  </div>

                  {/* Back Face (Same as static) */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#0a0a16]/95 border border-teal-500/50 p-6 flex flex-col justify-center text-center shadow-xl backdrop-blur-xl">
                    <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-4 mt-auto">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-500 transition-colors shadow-lg border border-teal-500"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
