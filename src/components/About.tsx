import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const experienceItems = [
    {
      year: 'Aug 2024 – May 2025',
      title: 'Data Analyst Intern (Academic)',
      company: 'George Mason University',
      location: 'Fairfax, Virginia',
      description: [
        'Designed and optimized ETL pipelines using SQL, Python, AWS Glue, and S3 to process over 5,000 survey records, improving processing efficiency and reducing runtime by 40%.',
        'Developed predictive models using regression and chi-squared tests to uncover adoption trends, leading to actionable insights presented through Tableau dashboards.',
        'Created and maintained dashboards for 20+ faculty members, enabling data-driven decisions and improving departmental research outcomes.',
        'Implemented automated data quality checks, ensuring 99% data integrity in survey datasets, leading to more reliable research findings.'
      ]
    },
    {
      year: 'Dec 2023 – May 2024',
      title: 'Website Developer Intern',
      company: 'GFX Bandits IT Solution LLP',
      location: 'Mumbai, India',
      description: [
        'Analyzed over 10,000 website traffic sessions using Python, delivering actionable insights that improved client retention by 30%.',
        'Developed interactive Excel and Power BI dashboards, reducing reporting delays by 25% and enhancing real-time decision-making for clients.',
        'Refined SQL queries and automated database tasks using Python, optimizing schema design and boosting query performance by 15%.',
        'Collaborated with cross-functional teams to ensure dashboard alignment with business needs, resulting in a 20% increase in project delivery speed.'
      ]
    },
    {
      year: 'Aug 2022 – May 2023',
      title: 'Undergraduate Project Assistant – Face Recognition',
      company: 'Ramrao Adik Institute of Technology',
      location: 'Mumbai, India',
      description: [
        'Developed a Python/OpenCV pipeline to process over 5,000 face images, achieving 92% recognition accuracy and reducing training time by 18%.',
        'Utilized machine learning algorithms and fine-tuned model parameters to optimize facial recognition accuracy, enhancing overall system reliability.',
        'Presented project outcomes through interactive dashboards and reports, making technical insights accessible to non-technical stakeholders.',
        'Conducted performance analysis to identify bottlenecks, leading to a 10% improvement in processing time for large image datasets.'
      ]
    },
    {
      year: 'May 2019 – July 2019',
      title: 'Trainee Engineer',
      company: 'Shavison Electronics Pvt. Ltd.',
      location: 'Mumbai, India',
      description: [
        'Monitored **PCB assembly production** data, including throughput and defect rates, and performed root-cause analysis on production processes to improve yield by **8%** through process adjustments.',
        'Worked with **hardware** to perform testing and troubleshooting on **PCBs** and embedded systems, ensuring quality standards were met before assembly.',
        'Automated **manufacturing KPI reports** using **Excel and SQL**, cutting manual effort by **20%** and enabling faster quality-control decisions, optimizing workflow and enhancing productivity.',
        'Leveraged **software** tools to develop and maintain data collection systems that integrated **SQL** databases with reporting dashboards, ensuring real-time data availability for decision-making.',
        'Collaborated with the hardware team to ensure seamless **data transfer** from embedded systems to software solutions for better analysis and monitoring.'
      ]
    }
  ];

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
              className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
                isInView
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
              className={`text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              Experience
            </h3>

            <div className="space-y-12">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row sm:items-center transition-all duration-700 delay-${index * 200} ${
                    isInView
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
                        {item.description.map((desc, idx) => (
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
