import type { ResumeData } from '@manoj-portfolio/data';

export const resumeData: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Full Stack Developer',
  tagline: 'React · Node.js · TypeScript · AWS',
  summary:
    'Full Stack Developer with nearly 4 years of experience building and scaling SaaS products end-to-end — from React/TypeScript frontends to Node.js backends, PostgreSQL/Redis data layers, and AWS cloud infrastructure. Proven track record as a founding engineer, owning architecture, deployment, and production support in fast-moving, product-first environments.',
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, India',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Founding Full Stack & Cloud Engineer',
      period: 'Feb 2026 – Present',
      highlights: [
        'Built and maintained a multi-tenant robotics SaaS platform using React, TypeScript, Node.js, PostgreSQL, Redis, Docker, Terraform, and AWS, owning frontend, backend services, cloud infrastructure, and production deployments through GitHub Actions-based CI/CD.',
        'Architected and integrated an end-to-end Generative AI Assistant (v1.0) into the NestJS backend, implementing dual-mode execution, a multi-layer security model with SQL AST validation, and real-time WebSocket streaming — shipped as a production feature enabling a conversational interface to 40+ REST endpoints.',
        'Developed responsive React dashboards for robot monitoring, fleet management, telemetry visualization, analytics, and administration, enabling real-time operational visibility.',
        'Designed and implemented backend services and REST APIs for authentication, RBAC, device management, telemetry ingestion, and reporting.',
        'Built real-time features using WebSockets, enabling live robot status, alerts, and telemetry updates.',
        'Designed PostgreSQL schemas, optimized complex SQL queries, and implemented Redis caching strategies to improve application performance and scalability.',
        'Mentored a small team of interns as the team grew, bringing them up to speed through code reviews and design discussions.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Software Engineer',
      period: 'May 2024 – Jan 2026',
      highlights: [
        'Developed enterprise analytics modules using Node.js, TypeScript, and Microsoft Fabric.',
        'Built REST APIs consumed by Power BI and enterprise web applications.',
        'Developed asynchronous backend services processing datasets of up to 2 million records.',
        'Improved API throughput by approximately 70% through SQL optimization, Redis queues, and asynchronous processing.',
        'Collaborated with frontend engineers to design and deliver end-to-end analytics features across web applications and backend services.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Software Engineer',
      period: 'Dec 2022 – Apr 2024',
      highlights: [
        'Developed production management applications using Laravel, MySQL, JavaScript, and WebSockets.',
        'Built APIs integrating PLCs, barcode scanners, and industrial printers.',
        'Implemented real-time communication between manufacturing systems and web dashboards.',
        'Reduced manual operational effort by approximately 50% through workflow automation.',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Frontend',
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Redux',
        'Zustand',
        'Responsive Web Design',
        'Material UI',
        'Reusable Components',
        'React Hooks',
        'Context API',
      ],
    },
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'TypeScript',
        'NestJS',
        'Express.js',
        'RESTful APIs',
        'WebSockets',
        'Microservices',
        'Event-Driven Architecture',
        'BullMQ',
        'Multi-Tenant Architecture',
        'JWT Authentication',
        'RBAC Authorization',
        'OAuth2',
      ],
    },
    {
      category: 'AI & Integration',
      skills: [
        'Generative AI',
        'LLM Integration',
        'Prompt Engineering',
        'AI Agents',
        'NL2SQL',
        'AI Workflow Orchestration',
        'LLM APIs',
      ],
    },
    {
      category: 'Data & Storage',
      skills: [
        'PostgreSQL',
        'MySQL',
        'Redis',
        'ClickHouse',
        'Azure SQL',
        'Microsoft Fabric',
        'Snowflake',
        'DynamoDB',
        'Schema Design',
        'Query Optimization',
        'Caching Strategies',
      ],
    },
    {
      category: 'Cloud & Infra',
      skills: [
        'AWS (IAM, EC2, ECS, ALB, RDS, ECR, CloudFront)',
        'Docker',
        'Terraform',
        'Linux',
        'GitHub Actions',
        'GitHub OIDC',
        'CI/CD',
        'Power BI',
        'Entra ID',
      ],
    },
    {
      category: 'Engineering Practices',
      skills: [
        'Git',
        'SOLID Principles',
        'Clean Code',
        'Code Reviews',
        'Agile/Scrum',
        'OpenAPI (Swagger)',
        'Unit Testing',
        'Integration Testing',
        'Jest',
        'Postman',
      ],
    },
  ],
  achievements: [
    {
      description:
        'Built and delivered three production-grade full-stack platforms from architecture and development through cloud deployment, production support, and continuous feature enhancements — as a founding/sole engineer on the most recent.',
    },
    {
      description:
        'Improved backend throughput by ~70% through asynchronous processing, SQL query optimization, and redesign of data flow and service execution paths.',
    },
    {
      description:
        'Reduced operational effort by ~50% by automating manual workflows and designing backend systems that eliminated repetitive operational processes.',
    },
    {
      description:
        'Designed and implemented event-driven telemetry ingestion pipelines for IoT robotics devices, enabling real-time monitoring, analytics, and operational visibility at scale.',
    },
  ],
  education: [
    {
      institution: 'Anna University (CEG Campus)',
      credential: 'B.E. Electronics & Communication Engineering',
      year: '2019',
    },
  ],
};
