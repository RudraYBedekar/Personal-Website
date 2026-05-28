export const RESUME_URL =
  'https://drive.google.com/file/d/1Hx97VpZW3nJFkvnvAcD9x6wHUaSQixDW/view?usp=sharing';

export const hero = {
  availability: 'Open to Full-Time Opportunities',
  targetRoles: 'Data Analytics · Data Engineering · BI & Analytics',
  relocation: 'US relocation',
  name: 'Rudra Yashodhan Bedekar',
  headline:
    'AI & Data Engineer shipping scalable pipelines, production analytics, and LLM systems on AWS.',
  intro:
    'From multi-million-row ETL and CI/CD-backed apps to RAG platforms and real-time diagnostics—systems built for reliability, observability, and impact.',
  resumeUrl: RESUME_URL,
  techStack: 'Python · SQL · AWS · Kafka · Power BI · LLMs',
  links: {
    github: 'https://github.com/RudraYBedekar',
    linkedin: 'https://www.linkedin.com/in/rudra-bedekar-259728258/',
    email: 'rudra.bedekar03@gmail.com',
  },
};

/** Roles and domains actively pursuing */
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
  },
  {
    title: 'NVIDIA-Certified Professional: Accelerated Data Science',
    issuer: 'NVIDIA',
    date: 'Dec 2025',
  },
];

export const secondaryCertification =
  'AWS Certified Machine Learning Engineer – Associate';

export interface Project {
  id: string;
  title: string;
  cardSummary: string;
  metrics: string[];
  stack: string[];
  problem: string;
  highlights: string[];
  repoLink: string;
}

/** Full catalog — detail panel can browse all; homepage shows 3 cards only. */
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
  },
  {
    id: 'warehouse-etl',
    title: 'Warehouse Data Pipeline',
    cardSummary: 'ETL automation and KPI dashboards for inventory and fulfillment.',
    metrics: ['ETL', 'Analytics'],
    stack: ['Python', 'SQL', 'Airflow', 'PostgreSQL', 'Tableau'],
    problem: 'Warehouse ops data was siloed with slow manual reporting.',
    highlights: [
      'End-to-end ETL with modeled schema for analytics-ready datasets.',
      'KPI dashboards for inventory, throughput, and fulfillment decisions.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/ETL-Manufacturing',
  },
  {
    id: 'chat-dataset',
    title: 'Chat With Your Dataset',
    cardSummary: 'Natural-language analytics and charts over uploaded CSVs via LLMs.',
    metrics: ['LLM', 'NL→SQL'],
    stack: ['Streamlit', 'LangChain', 'Pandas', 'Plotly'],
    problem: 'Analysts needed fast exploration without writing boilerplate viz code.',
    highlights: [
      'Multi-provider LLM support (Gemini, OpenAI, Hugging Face).',
      'Auto-generated Matplotlib/Plotly visuals from natural language queries.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/Chat-With-Your-Dataset',
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
  },
  {
    id: 'whoop-analytics',
    title: 'Whoop Fitness Analytics',
    cardSummary: 'Recovery prediction and A/B testing on wearable fitness data.',
    metrics: ['XGBoost', 'SHAP'],
    stack: ['Python', 'Streamlit', 'XGBoost', 'SHAP'],
    problem: 'Wearable data needed actionable recovery insights and experiment analysis.',
    highlights: [
      'XGBoost recovery models with SHAP explainability.',
      'Segmentation, hypothesis testing, and interactive EDA dashboards.',
    ],
    repoLink: 'https://github.com/RudraYBedekar/WhoopData',
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
  },
];

/** IDs shown as the 3 homepage cards */
export const homepageProjectIds = [
  'enterprise-ai',
  'autonomous-fleet',
  'llm-profiler',
] as const;

export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const githubProfile = 'https://github.com/RudraYBedekar';
export const githubRepositories =
  'https://github.com/RudraYBedekar?tab=repositories';

export const skillCategories = [
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Terraform'],
  },
  {
    title: 'Data Engineering',
    skills: ['SQL', 'ETL/ELT', 'Kafka', 'PostgreSQL', 'Snowflake', 'Data quality'],
  },
  {
    title: 'AI / ML',
    skills: ['LLMs', 'RAG', 'LangChain', 'Agents', 'scikit-learn', 'Hugging Face'],
  },
  {
    title: 'Backend & Apps',
    skills: ['Python', 'FastAPI', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'Analytics',
    skills: ['Power BI', 'Tableau', 'Streamlit', 'KPI reporting'],
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
    metrics: ['2M+ records', '75% faster', '96% KPI accuracy'],
    highlights: [
      'Built AWS ETL/ELT pipelines (Python, SQL) with automated validation, anomaly detection, and quality monitoring.',
      'Delivered Power BI forecasting and ops dashboards for weekly stakeholder reviews; RCA on pipeline failures.',
    ],
  },
  {
    year: 'Dec 2023 – May 2024',
    title: 'Web Developer Intern',
    company: 'GFX Bandits IT Solution LLP',
    location: 'Mumbai, India',
    metrics: ['Docker', 'Kubernetes', 'Jenkins CI/CD'],
    highlights: [
      'Shipped responsive apps (Python, JavaScript, SQL); containerized with Docker/K8s and Jenkins CI/CD.',
      'Optimized APIs and SQL for faster dashboards; debugged production issues via log monitoring.',
    ],
  },
  {
    year: 'Nov 2022 – Aug 2023',
    title: 'Data Analyst Intern',
    company: 'AY TechInsight Private Limited',
    location: 'Mumbai, India',
    metrics: ['3M+ records', '40% less manual work'],
    highlights: [
      'Transformed 3M+ records via Python, pandas, NumPy, SQL, and ETL workflows with automated quality checks.',
      'KPI, trend, and variance analysis to surface operational gaps and improve reporting accuracy.',
    ],
  },
];

export const contact = {
  headline: 'Open to opportunities',
  subline:
    'Especially interested in data analytics and data-domain roles—plus AI/data engineering. Full-time in the US, open to relocation.',
  footnote: 'Typically respond within 24–48 hours.',
  email: 'rudra.bedekar03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rudra-bedekar-259728258/',
  github: 'https://github.com/RudraYBedekar',
  resumeUrl: RESUME_URL,
};
