import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Warehouse Data Pipeline & Analytics System',
      description: 'An end-to-end data pipeline for warehouse inventory, featuring ETL automation, schema modeling, and interactive KPI dashboards for real-time decision-making.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'SQL', 'Airflow', 'PostgreSQL', 'Tableau'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/ETL-Manufacturing'
    },
    {
      title: 'Anti-Theft Vehicle Detection with Obstacle Detection',
      description: 'Face recognition-based vehicle ignition system using Raspberry Pi, with real-time alerts, buzzer alarm, and GPS tracking to prevent unauthorized access.',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'Raspberry Pi', 'Face Recognition', 'IoT'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/ANTI-THEFT-VEHICLE-DETECTION-WITH-OBSTACLE-DETECTION'
    },
    {
      title: 'OptiSupply – AI-Powered Supply Chain Dashboard',
      description: '**SmartSupplyChainAI** is a modular, AI-driven supply chain analytics dashboard built with Streamlit. It helps logistics teams optimize warehouse locations, forecast demand, detect delivery anomalies, and plan optimized delivery routes using real-world APIs and geospatial data.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ["Python", "Streamlit", "AI", "Geospatial", "Logistics"],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/SmartSupplyChainAI'
    },
    {
      title: 'IoT-Based Health Patient Monitoring System',
      description: 'A real-time health tracking system using Arduino and IoT sensors to monitor vitals like heart rate and temperature, with wireless alerts for anomalies.',
      image: 'https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Arduino', 'IoT', 'ESP8266', 'DHT11', 'Healthcare'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/IoT-based-Health-Patient-Monitoring-System'
    },
    {
      title: 'NTLK-Review: Sentiment Dashboard with PySpark',
      description: 'A sentiment analysis dashboard built using PySpark and NLTK, visualizing product reviews and identifying anomalies over time with CSV-based data processing.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PySpark', 'NLTK', 'Sentiment Analysis', 'Data Visualization', 'CSV'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/NTLK-REVIEW'
    },
    {
      title: 'AVTrajectoryAnalysis: Autonomous Vehicle Behavior Clustering',
      description: 'An AV trajectory analysis and behavior clustering tool using Python and simulated/real vehicle data. It extracts kinematic features like speed and turning radius, applies clustering, and visualizes trajectory behaviors. Built for exploratory analysis of autonomous driving behavior using the Waymo Open Dataset structure.',
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas', 'Clustering', 'Matplotlib', 'Waymo', 'AV'],
      demoLink: '#',
      repoLink: 'https://github.com/RudraYBedekar/AVTrajectoryAnalysis'
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
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </h2>
          <div className={`w-20 h-1 bg-teal-600 mx-auto rounded transition-all duration-700 delay-200 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`mt-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Here are some of my recent projects that showcase my skills and expertise. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer project-card group relative overflow-hidden rounded-xl shadow-xl transition-all duration-1000 delay-${index * 150} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.repoLink}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-teal-500 hover:text-white transform hover:scale-110 transition-all duration-300"
                    aria-label="View GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {project.title}
                </h3>
                {expandedIndex === index && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-2">
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

        <div className="text-center mt-12">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-900 font-medium hover:bg-teal-600 dark:hover:bg-teal-400 transition-colors duration-300"
            >
              Show More Projects
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;

