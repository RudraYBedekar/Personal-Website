import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { experienceItems } from '../data/portfolioData';

interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-white dark:bg-gray-800 overflow-hidden"
    >
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              About <span className="text-teal-600 dark:text-teal-400">Me</span>
            </h2>
          </div>

          {/* Experience Section */}
          <div className="mt-24">
            <h3
              className={`text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-700 ${isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              Experience
            </h3>

            <div className="space-y-12">
              {experienceItems.map((item: ExperienceItem, index: number) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center transition-all duration-700 delay-${index * 200} ${isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
                >
                  {/* Year before title */}
                  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
                    <p className="text-teal-600 font-medium">{item.year}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                      {/* Title and Company */}
                      <div className="mb-4">
                        <p className="font-bold text-xl text-gray-900 dark:text-white">
                          {item.title}
                        </p>
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                          {item.company} | {item.location}
                        </p>
                      </div>

                      {/* Description List */}
                      <ul className="text-gray-700 dark:text-gray-300">
                        {item.description.map((desc: string, idx: number) => (
                          <li key={idx} className="mb-2">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
