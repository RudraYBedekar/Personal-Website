import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const technicalSkills = [
    'HTML & CSS',
    'Python',
    'Python for Data Science',
    'R Programming',
    'Pandas',
    'NumPy',
    'SQL',
    'Power BI',
    'Tableau',
    'scikit-learn',
    'Matplotlib',
    'Seaborn',
    'Jupyter',
    'Git',
    'AWS'
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Creativity'
  ];

  const bgColors = ['bg-teal-100', 'bg-blue-100', 'bg-green-100', 'bg-cyan-100', 'bg-indigo-100'];
  const softBgColors = ['bg-purple-100', 'bg-pink-100', 'bg-yellow-100', 'bg-rose-100', 'bg-violet-100'];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-teal-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A combination of technical expertise and soft skills that helps me create 
            exceptional user experiences and work effectively in diverse teams.
          </p>
        </div>

        {/* Technical Skills */}
        <div className={`mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className={`${bgColors[index % bgColors.length]} dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg text-center shadow hover:shadow-lg transition duration-300 cursor-default h-16 flex items-center justify-center font-medium text-sm`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`${softBgColors[index % softBgColors.length]} dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-lg text-center shadow hover:shadow-lg transition duration-300 cursor-default h-16 flex items-center justify-center font-medium text-sm`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
