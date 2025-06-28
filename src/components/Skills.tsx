import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'SQL', 'Python', 'Advanced Excel', 'Tableau', 'Microsoft BI',
    'GCP (BigQuery, Airflow)', 'AWS (S3, Athena)', 'Hive',
    'Data Wrangling', 'Regression', 'Fleet Optimization', 'Performance Metrics',
    'Scikit-learn', 'TensorFlow', 'PyTorch',
    'Data Visualization', 'Dashboard Creation', 'Operational Insights','R Programming',
    'Machine Learning', 'Deep Learning', 'Natural Language Processing', 
    'Data Mining', 'Predictive Analytics', 'Statistical Analysis',
     'Data Engineering', 'Data Warehousing', 'ETL Processes'

  ];

  const softSkills = [
    'Problem Solving', 'Communication', 'Team Collaboration',
    'Time Management', 'Adaptability', 'Creativity'
  ];

  const techColors = ['bg-teal-100', 'bg-blue-100', 'bg-green-100', 'bg-cyan-100', 'bg-indigo-100'];
  const softColors = ['bg-purple-100', 'bg-pink-100', 'bg-yellow-100', 'bg-rose-100', 'bg-violet-100'];

  return (
    <section className="py-8 bg-gradient-to-br from-white via-teal-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-sm">
      <div className="container mx-auto px-4 text-center">
        {/* Technical Skills */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {technicalSkills.map((skill, index) => (
            <span
              key={index}
              className={`${techColors[index % techColors.length]} dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm`}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Soft Skills */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className={`${softColors[index % softColors.length]} dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
