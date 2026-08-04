import type { ResumeData } from '@manoj-portfolio/data';

export const resumeData: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Backend Engineer',
  tagline: 'Open to Remote Roles',
  summary:
    'Backend Engineer with nearly 4 years of experience designing and building distributed, event-driven backend systems and multi-tenant SaaS platforms for fast-moving startup environments. Skilled in developing scalable backend services, real-time telemetry processing pipelines, and cloud-native systems using Node.js, TypeScript, AWS, and Terraform, with strong async communication and self-directed ownership. Proven track record as a founding engineer taking backend systems from concept to production.',
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, India',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Founding Backend Engineer',
      period: 'Feb 2026 – Present',
      highlights: [
        'Led the architecture, development, and production ownership of a multi-tenant robotics SaaS platform, including backend architecture, database design, deployment strategy, and telemetry services from scratch.',
        'Architected and integrated an end-to-end Generative AI Assistant (v1.0) into the NestJS backend, implementing dual-mode execution, a multi-layer security model with SQL AST validation, and real-time WebSocket streaming — shipped as a production feature enabling a conversational interface to 40+ REST endpoints.',
        'Designed and operated cloud-native backend services on AWS using Node.js/NestJS, managing environments via Terraform-based Infrastructure as Code, containerized deployments, and CI/CD pipelines.',
        'Designed and implemented scalable NestJS/Node.js services for event-driven telemetry ingestion, device management, analytics, authentication, and multi-tenant RBAC.',
        'Built event-driven telemetry ingestion and processing pipelines for distributed robotic devices, enabling real-time monitoring and analytics.',
        'Mentored a small team of interns as the team grew, bringing them up to speed through code reviews and design discussions.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Software Engineer',
      period: 'May 2024 – Jan 2026',
      highlights: [
        'Architected and owned a distributed bulk-ingestion platform processing up to 2M rows per job using Redis-backed asynchronous processing, validation pipelines, and fault-tolerant job execution.',
        'Contributed to enterprise analytics products built on Microsoft Power BI and Microsoft Fabric, developing end-to-end Node.js backend services and REST APIs.',
        'Improved backend throughput by approximately 70% through queue-based processing, SQL optimization, and decoupling synchronous service execution paths.',
        'Designed retry-safe, idempotent, and asynchronous workflows for reliable long-running data processing and bulk-ingestion operations.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Software Engineer',
      period: 'Dec 2022 – Apr 2024',
      highlights: [
        'Led backend integration for industrial automation systems (PLCs, scanners, printers), building APIs and WebSocket-based communication for real-time production line operations using Laravel and MySQL.',
        'Delivered traceability and audit solutions with offline sync capabilities, reducing manual operational effort by ~50% and improving production reliability.',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Backend',
      skills: [
        'Node.js',
        'TypeScript',
        'JavaScript',
        'NestJS',
        'Express.js',
        'RESTful APIs',
        'WebSockets',
        'Microservices',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Asynchronous Processing',
        'Multi-Tenant Architecture',
        'JWT Authentication',
        'RBAC Authorization',
        'API Design',
        'System Design',
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
        'SQL Validation',
        'AI Workflow Orchestration',
        'LLM APIs',
      ],
    },
    {
      category: 'Data & Storage',
      skills: [
        'PostgreSQL',
        'Redis',
        'OLTP/OLAP Systems',
        'Schema Design',
        'Query Optimization',
        'Caching Strategies',
        'Azure SQL',
        'Snowflake',
        'Microsoft Fabric',
        'Databricks',
        'ClickHouse',
        'DynamoDB',
        'BullMQ',
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
        'Highly Available Architectures',
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
        'OpenAPI (Swagger)',
        'AsyncAPI',
        'Unit Testing',
        'Integration Testing',
        'Jest',
      ],
    },
  ],
  achievements: [
    {
      description:
        'Built and delivered three production-grade backend platforms from architecture to production deployment and operational ownership, taking products from concept to production.',
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
