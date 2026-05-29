export const RESUME_URL =
  'https://drive.google.com/file/d/1NBc0JU2eQ5jAd_bx61QzP0vkftx6tvlX/view?usp=drive_link';

export const SITE_URL = 'https://rudraybedekar.netlify.app';

export const site = {
  url: SITE_URL,
  title: 'Rudra Bedekar — Data & AI Engineer',
  description:
    'Data & AI Engineer specializing in analytics, ETL pipelines, Power BI, and LLM systems on AWS. Open to data analytics and full-time roles in the US.',
  ogImage: `${SITE_URL}/og-image.svg`,
};

export const hero = {
  statusLine:
    'Open to full-time · Data analytics & data engineering · US relocation',
  name: 'Rudra Yashodhan Bedekar',
  headline:
    'AI & Data Engineer building scalable data, analytics, and AI systems on AWS',
  intro:
    'I engineer high-throughput ETL/ELT pipelines, design executive-ready BI dashboards, and deploy production AI applications. Recipient of the Academic Excellence Award in Information Systems from George Mason University, I focus on building reliable, cost-efficient, and secure data infrastructure.',
  metricsLine:
    '3M+ records processed · 75% faster pipelines · AWS Certified',
  education: 'M.S. Information Systems · George Mason University (Academic Excellence Award Recipient)',
  workAuthorization: 'Authorized to work in the U.S.',
  resumeUrl: RESUME_URL,
  techStack: 'Python · SQL · AWS · Kafka · Power BI · LLMs',
  links: {
    github: 'https://github.com/RudraYBedekar',
    linkedin: 'https://www.linkedin.com/in/rudra-bedekar-259728258/',
    email: 'rudra.bedekar03@gmail.com',
  },
};

export const currentlyInterested = [
  'Data Analytics',
  'Data Engineering',
  'Business Intelligence',
  'Analytics Engineering',
  'Data Platform',
];

export const currentlyExploring = [
  'AI Agents',
  'RAG Systems',
  'Kafka Streaming',
  'LLM Evaluation',
  'Cloud Infrastructure',
];

export const featuredCertifications = [
  {
    title: 'AWS Certified Data Engineer – Associate',
    issuer: 'AWS',
    date: 'Dec 2025',
    logo: 'aws',
    verifyUrl:
      'https://www.linkedin.com/in/rudra-bedekar-259728258/details/certifications/',
  },
  {
    title: 'NVIDIA-Certified Professional: Accelerated Data Science',
    issuer: 'NVIDIA',
    date: 'Dec 2025',
    logo: 'nvidia',
    verifyUrl:
      'https://www.linkedin.com/in/rudra-bedekar-259728258/details/certifications/',
  },
];

export const secondaryCertification = {
  title: 'AWS Certified Machine Learning Engineer – Associate',
  verifyUrl:
    'https://www.linkedin.com/in/rudra-bedekar-259728258/details/certifications/',
};

export type ProjectIcon =
  | 'brain'
  | 'database'
  | 'chart'
  | 'car'
  | 'message'
  | 'cpu'
  | 'box'
  | 'docker';

export interface Project {
  id: string;
  title: string;
  cardSummary: string;
  metrics: string[];
  stack: string[];
  problem: string;
  highlights: string[];
  repoLink: string;
  demoLink?: string;
  icon: ProjectIcon;
}

export const projects: Project[] = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Adoption Hub',
    cardSummary: 'Governed RAG copilot with guardrails and usage analytics.',
    metrics: ['RAG', 'Enterprise'],
    stack: ['Python', 'LangChain', 'Streamlit', 'SQLite'],
    problem: 'Teams needed secure, grounded LLM access without shadow IT.',
    highlights: [
      'RAG over internal docs with structured prompt library and guardrails.',
      'Admin dashboard for usage tracking and compliance-ready pilots.',
    ],
    repoLink:
      'https://github.com/RudraYBedekar/Enterprise-AI-Adoption-Copilot-Enablement-Platform',
    icon: 'brain',
  },
  {
    id: 'warehouse-etl',
    title: 'Warehouse Data Pipeline',
    cardSummary: 'ETL automation and KPI dashboards for inventory and fulfillment.',
    metrics: ['ETL', '2M+ scale'],
    stack: ['Python', 'SQL', 'Airflow', 'PostgreSQL', 'Tableau'],
    problem: 'Warehouse ops data was siloed with slow manual reporting.',
    highlights: [
      'End-to-end ETL with modeled schema for analytics-ready datasets.',
      'KPI dashboards for inventory, throughput, and fulfillment decisions.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/ETL-Manufacturing',
    icon: 'database',
  },
  {
    id: 'whoop-analytics',
    title: 'Whoop Fitness Analytics',
    cardSummary: 'Recovery prediction and A/B testing on wearable fitness data.',
    metrics: ['XGBoost', 'SHAP'],
    stack: ['Python', 'Streamlit', 'XGBoost', 'SHAP'],
    problem: 'Wearable data needed actionable recovery insights and experiment analysis.',
    highlights: [
      'XGBoost recovery models with SHAP explainability for stakeholders.',
      'Segmentation, hypothesis testing, and interactive EDA dashboards.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/WhoopData',
    icon: 'chart',
  },
  {
    id: 'autonomous-fleet',
    title: 'Autonomous Fleet Reliability Platform',
    cardSummary: 'Fleet health monitoring with predictive maintenance and geospatial ops.',
    metrics: ['IoT', 'Real-time'],
    stack: ['Python', 'Streamlit', 'Pydeck', 'scikit-learn'],
    problem: 'Sensor fleets needed live reliability signals and failure prediction.',
    highlights: [
      'Geospatial tracking with RUL estimates and anomaly detection.',
      'Isolation Forest + Z-score pipelines for hardware reliability insights.',
    ],
    repoLink:
      'https://github.com/RudraYBedekar/Autonomous-Fleet-Reliability-Intelligence-Platform',
    icon: 'car',
  },
  {
    id: 'llm-profiler',
    title: 'LLM Inference Profiler',
    cardSummary: 'GPU profiling for latency, throughput, and memory across model configs.',
    metrics: ['GPU', 'Benchmarking'],
    stack: ['Python', 'LLM', 'CUDA profiling'],
    problem: 'Teams lacked consistent metrics to compare inference cost and performance.',
    highlights: [
      'End-to-end latency, throughput, and peak GPU memory benchmarks.',
      'Framework for comparing deployment configurations before production rollout.',
    ],
    repoLink:
      'https://github.com/RudraYBedekar/LLM-Inference-Performance-Analyzer-GPU-Profiling-Benchmarking',
    icon: 'cpu',
  },
  {
    id: 'vehicle-diagnostics',
    title: 'Vehicle Diagnostics Platform',
    cardSummary: 'Telemetry ingestion API with real-time fault and anomaly detection.',
    metrics: ['FastAPI', 'PostgreSQL'],
    stack: ['FastAPI', 'PostgreSQL', 'AsyncPG', 'Python'],
    problem: 'High-volume vehicle telemetry required real-time diagnostics and REST access.',
    highlights: [
      'Async ingestion and REST APIs for live monitoring and fault triage.',
      'Anomaly detection and root-cause analysis for production telemetry.',
    ],
    repoLink:
      'https://github.com/RudraYBedekar/Vehicle-Diagnostics-Fault-Detection-Platform',
    icon: 'car',
  },
  {
    id: 'chat-dataset',
    title: 'Chat With Your Dataset',
    cardSummary: 'Natural-language analytics and charts over uploaded CSVs via LLMs.',
    metrics: ['LLM', 'NL analytics'],
    stack: ['Streamlit', 'LangChain', 'Pandas', 'Plotly'],
    problem: 'Analysts needed fast exploration without writing boilerplate viz code.',
    highlights: [
      'Multi-provider LLM support (Gemini, OpenAI, Hugging Face).',
      'Auto-generated Matplotlib/Plotly visuals from natural language queries.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/Chat-With-Your-Dataset',
    icon: 'message',
  },
  {
    id: 'reliability-hardware',
    title: 'Hardware Reliability Analytics',
    cardSummary: 'Sensor fleet dashboard with predictive maintenance and live maps.',
    metrics: ['Pydeck', 'ML'],
    stack: ['Python', 'Streamlit', 'Pydeck', 'scikit-learn'],
    problem: 'Distributed hardware needed unified health visibility and failure prediction.',
    highlights: [
      'Live geospatial tracking with RUL and anomaly scoring.',
      'Streamlit ops dashboard for reliability engineering workflows.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/Reliability-Analytics-Hardware',
    icon: 'box',
  },
  {
    id: 'dockerai',
    title: 'Docker AI',
    cardSummary: 'Container-focused AI tooling and workflows.',
    metrics: ['Docker', 'AI'],
    stack: ['Python', 'Docker'],
    problem: 'Exploring portable AI workloads with containerized deployment patterns.',
    highlights: [
      'Docker-based packaging for reproducible AI experimentation.',
      'Focused on deployment consistency across environments.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/dockerai',
    icon: 'docker',
  },
];

export const homepageProjectIds = [
  'enterprise-ai',
  'warehouse-etl',
  'whoop-analytics',
] as const;

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const moreProjects = projects.filter(
  (p) => !homepageProjectIds.includes(p.id as (typeof homepageProjectIds)[number])
);

export const githubProfile = 'https://github.com/RudraYBedekar';
export const githubRepositories =
  'https://github.com/RudraYBedekar?tab=repositories';

export const skillCategories = [
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS',
      'IAM',
      'EC2',
      'S3',
      'Glue',
      'Athena',
      'Kinesis',
      'Bedrock',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD',
      'Terraform',
    ],
  },
  {
    title: 'Data Engineering',
    skills: [
      'SQL',
      'ETL/ELT',
      'dbt',
      'Kafka',
      'PostgreSQL',
      'Snowflake',
      'Data Validation',
      'Data Quality',
      'Data Pipelines',
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      'LLMs',
      'RAG',
      'LangChain',
      'AI Agents',
      'scikit-learn',
      'Hugging Face',
      'Predictive Analytics',
    ],
  },
  {
    title: 'Backend & Apps',
    skills: ['Python', 'FastAPI', 'JavaScript', 'REST APIs', 'API Integration'],
  },
  {
    title: 'Analytics & Viz',
    skills: [
      'Power BI',
      'Tableau',
      'Streamlit',
      'KPI Reporting',
      'Data Visualization',
      'Forecasting',
      'Trend Analysis',
    ],
  },
];

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
  metrics: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    year: 'Aug 2024 – May 2025',
    title: 'Data Analyst – Graduate Applied Project',
    company: 'George Mason University',
    location: 'Fairfax, VA',
    metrics: ['AWS ETL/ELT', '2M+ records', '75% faster', '96% KPI accuracy', 'Power BI'],
    highlights: [
      'Engineered AWS-based ETL/ELT pipelines using Python and SQL to process 2M+ records, reducing analytics runtime by 75%.',
      'Automated data validation, anomaly detection, and quality monitoring workflows, improving KPI reporting accuracy to 96%.',
      'Developed Power BI dashboards for forecasting, operational tracking, and trend analysis used in weekly stakeholder reviews.',
      'Investigated pipeline failures and reporting inconsistencies through root-cause analysis, improving reporting reliability.',
    ],
  },
  {
    year: 'Dec 2023 – May 2024',
    title: 'Web Developer Intern',
    company: 'GFX Bandits IT Solution LLP',
    location: 'Mumbai, India',
    metrics: ['Python & JS', 'Docker & K8s', 'Jenkins CI/CD', 'API Optimization'],
    highlights: [
      'Developed and deployed responsive web applications using Python, JavaScript, SQL, HTML, and CSS for workflow automation.',
      'Containerized applications using Docker and Kubernetes, improving deployment consistency across environments.',
      'Built Jenkins CI/CD pipelines automating build, testing, and deployment workflows.',
      'Optimized backend APIs and SQL queries, improving dashboard performance and reducing response time significantly.',
      'Debugged production issues and monitored logs to improve runtime stability and user experience.',
    ],
  },
  {
    year: 'Nov 2022 – Aug 2023',
    title: 'Data Analyst Intern',
    company: 'AY TechInsight Private Limited',
    location: 'Mumbai, India',
    metrics: ['3M+ records', 'Pandas & SQL', 'ETL workflows', '40% less manual effort'],
    highlights: [
      'Processed and transformed 3M+ records using Python, pandas, NumPy, SQL, and ETL workflows.',
      'Automated recurring reporting pipelines and data quality checks, reducing manual reporting effort by 40%.',
      'Performed KPI, trend, and variance analysis to identify operational performance gaps and business risks.',
      'Improved reporting accuracy and operational visibility through analytics automation and data validation workflows.',
    ],
  },
];

export const contact = {
  headline: 'Open to opportunities',
  subline:
    'Especially data analytics and data-domain roles—plus AI/data engineering. Full-time in the US, open to relocation.',
  footnote: 'Typically respond within 24–48 hours.',
  email: 'rudra.bedekar03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rudra-bedekar-259728258/',
  github: 'https://github.com/RudraYBedekar',
  resumeUrl: RESUME_URL,
};
