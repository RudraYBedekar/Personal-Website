import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const projects = [
    {
      title: 'Warehouse Data Pipeline & Analytics System',
      description: 'An end-to-end data pipeline for warehouse inventory, featuring ETL automation, schema modeling, and interactive KPI dashboards for real-time decision-making.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'SQL', 'Airflow', 'PostgreSQL', 'Tableau'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/ETL-Manufacturing'
    }
    ,
    {
      title: 'Anti-Theft Vehicle Detection with Obstacle Detection',
      description: 'Face recognition-based vehicle ignition system using Raspberry Pi, with real-time alerts, buzzer alarm, and GPS tracking to prevent unauthorized access.',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Face Recognition', 'IoT'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/ANTI-THEFT-VEHICLE-DETECTION-WITH-OBSTACLE-DETECTION'
    }
    ,
    {
      title: 'IoT-Based Health Patient Monitoring System',
      description: 'A real-time health tracking system using Arduino and IoT sensors to monitor vitals like heart rate and temperature, with wireless alerts for anomalies.',
      image: 'https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Arduino', 'IoT', 'ESP8266', 'DHT11', 'Healthcare'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/IoT-based-Health-Patient-Monitoring-System'
    }
    ,
    {
      title: 'NTLK-Review: Sentiment Dashboard with PySpark',
      description: 'A sentiment analysis dashboard built using PySpark and NLTK, visualizing product reviews and identifying anomalies over time with CSV-based data processing.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual hosted image URL
      tags: ['PySpark', 'NLTK', 'Sentiment Analysis', 'Data Visualization', 'CSV'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/NTLK-REVIEW'
    }
    
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Here are some of my recent projects that showcase my skills and expertise.
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card group relative overflow-hidden rounded-xl shadow-xl transition-all duration-1000 delay-${index * 150} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={project.demoLink}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-teal-500 hover:text-white transform hover:scale-110 transition-all duration-300"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.repoLink}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-teal-500 hover:text-white transform hover:scale-110 transition-all duration-300"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-700 delay-600 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors duration-300 inline-flex items-center gap-2"
          >
            <Github size={20} />
            <span>See More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;