import type { LocaleCode, ResumeData } from '@manoj-portfolio/data';

const en: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Backend Engineer',
  tagline: 'Node.js · TypeScript · AWS · Terraform',
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
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
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
  projects: [
    {
      id: 'robotics-saas-platform',
      name: 'Robotics SaaS Platform — Case Study Coming Soon',
      tagline: 'A detailed write-up of the multi-tenant backend architecture is in progress.',
      businessProblem: 'Full write-up in progress — check back soon.',
      solution: 'Full write-up in progress — check back soon.',
      myContribution: ['Write-up in progress.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'This project card is a placeholder. A full case study (problem, solution, my contribution, and links) will be added here.',
    },
    {
      id: 'telemetry-pipeline',
      name: 'Event-Driven Telemetry Pipeline — Case Study Coming Soon',
      tagline: 'A detailed write-up of the real-time ingestion pipeline is in progress.',
      businessProblem: 'Full write-up in progress — check back soon.',
      solution: 'Full write-up in progress — check back soon.',
      myContribution: ['Write-up in progress.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'This project card is a placeholder. A full case study (problem, solution, my contribution, and links) will be added here.',
    },
  ],
  workWithMe: {
    headline: "Let's work together",
    baseLocation: 'Chennai, India (IST, UTC+5:30)',
    baseTimezone: 'Asia/Kolkata',
    remoteAvailability: 'Open to remote roles worldwide',
    preferredEngagements: ['Full-time', 'Contract'],
    fallbackTimezoneNote: 'Based in India (IST, UTC+5:30) — available worldwide for remote collaboration.',
  },
  // TODO: add a real CV PDF under apps/web-backend/public/cv/ and set this to its path.
  cvUrl: undefined,
};

const de: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Backend-Entwickler',
  tagline: 'Node.js · TypeScript · AWS · Terraform',
  summary:
    'Backend-Entwickler mit knapp 4 Jahren Erfahrung in der Konzeption und Entwicklung verteilter, ereignisgesteuerter Backend-Systeme und Multi-Tenant-SaaS-Plattformen für schnelllebige Startup-Umgebungen. Erfahren in der Entwicklung skalierbarer Backend-Services, Echtzeit-Telemetrie-Verarbeitungspipelines und Cloud-nativer Systeme mit Node.js, TypeScript, AWS und Terraform, mit ausgeprägter asynchroner Kommunikation und eigenverantwortlicher Arbeitsweise. Nachgewiesene Erfolgsbilanz als Gründungsingenieur, der Backend-Systeme von der Konzeption bis zur Produktion führt.',
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, Indien',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Gründungs-Backend-Entwickler',
      period: 'Feb. 2026 – heute',
      highlights: [
        'Verantwortete Architektur, Entwicklung und Produktivbetrieb einer Multi-Tenant-SaaS-Plattform für Robotik – von der Backend-Architektur über das Datenbankdesign bis hin zu Deployment-Strategie und Telemetrie-Diensten, alles von Grund auf.',
        'Konzipierte und integrierte einen vollständigen generativen KI-Assistenten (v1.0) in das NestJS-Backend, mit Dual-Mode-Ausführung, einem mehrschichtigen Sicherheitsmodell mit SQL-AST-Validierung und Echtzeit-WebSocket-Streaming – als Produktionsfeature ausgeliefert, das eine dialogbasierte Schnittstelle zu über 40 REST-Endpunkten ermöglicht.',
        'Entwarf und betrieb Cloud-native Backend-Services auf AWS mit Node.js/NestJS, verwaltete Umgebungen mittels Terraform-basierter Infrastructure as Code, containerisierter Deployments und CI/CD-Pipelines.',
        'Entwarf und implementierte skalierbare NestJS/Node.js-Services für ereignisgesteuerte Telemetrie-Erfassung, Geräteverwaltung, Analytics, Authentifizierung und Multi-Tenant-RBAC.',
        'Entwickelte ereignisgesteuerte Pipelines zur Erfassung und Verarbeitung von Telemetriedaten für verteilte Robotik-Geräte und ermöglichte so Echtzeit-Monitoring und -Analytics.',
        'Betreute ein kleines Team von Praktikanten im Zuge des Teamwachstums und half ihnen durch Code-Reviews und Design-Diskussionen, sich schnell einzuarbeiten.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Softwareentwickler',
      period: 'Mai 2024 – Jan. 2026',
      highlights: [
        'Konzipierte und verantwortete eine verteilte Plattform für Massenimporte, die bis zu 2 Millionen Zeilen pro Job verarbeitet, mit Redis-gestützter asynchroner Verarbeitung, Validierungspipelines und fehlertoleranter Job-Ausführung.',
        'Trug zu Enterprise-Analytics-Produkten auf Basis von Microsoft Power BI und Microsoft Fabric bei und entwickelte durchgängige Node.js-Backend-Services und REST-APIs.',
        'Steigerte den Backend-Durchsatz um rund 70 % durch warteschlangenbasierte Verarbeitung, SQL-Optimierung und Entkopplung synchroner Service-Ausführungspfade.',
        'Entwarf wiederholungssichere, idempotente und asynchrone Workflows für zuverlässige, lang laufende Datenverarbeitungs- und Massenimport-Vorgänge.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Softwareentwickler',
      period: 'Dez. 2022 – Apr. 2024',
      highlights: [
        'Leitete die Backend-Integration industrieller Automatisierungssysteme (SPS, Scanner, Drucker) und entwickelte APIs sowie WebSocket-basierte Kommunikation für Echtzeit-Produktionslinienabläufe mit Laravel und MySQL.',
        'Lieferte Rückverfolgbarkeits- und Audit-Lösungen mit Offline-Synchronisierung, reduzierte den manuellen Arbeitsaufwand um ca. 50 % und verbesserte die Produktionszuverlässigkeit.',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Backend-Entwicklung',
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
      category: 'KI & Integration',
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
      category: 'Daten & Speicherung',
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
      category: 'Cloud & Infrastruktur',
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
      category: 'Engineering-Praktiken',
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
    },
  ],
  achievements: [
    {
      description:
        'Baute und lieferte drei produktionsreife Backend-Plattformen – von der Architektur über das Produktions-Deployment bis zur operativen Verantwortung – und führte Produkte von der Konzeption bis zur Produktion.',
    },
    {
      description:
        'Steigerte den Backend-Durchsatz um ca. 70 % durch asynchrone Verarbeitung, SQL-Query-Optimierung und Neugestaltung von Datenfluss und Service-Ausführungspfaden.',
    },
    {
      description:
        'Reduzierte den operativen Aufwand um ca. 50 % durch Automatisierung manueller Arbeitsabläufe und die Konzeption von Backend-Systemen, die repetitive operative Prozesse eliminierten.',
    },
    {
      description:
        'Entwarf und implementierte ereignisgesteuerte Telemetrie-Erfassungspipelines für IoT-Robotik-Geräte und ermöglichte so Echtzeit-Monitoring, Analytics und operative Transparenz im großen Maßstab.',
    },
  ],
  education: [
    {
      institution: 'Anna University (CEG Campus)',
      credential: 'B.E. Elektronik- und Kommunikationstechnik',
      year: '2019',
    },
  ],
  projects: [
    {
      id: 'robotics-saas-platform',
      name: 'Robotik-SaaS-Plattform — Fallstudie folgt in Kürze',
      tagline: 'Eine ausführliche Beschreibung der Multi-Tenant-Backend-Architektur ist in Arbeit.',
      businessProblem: 'Ausführliche Beschreibung in Arbeit — schauen Sie bald wieder vorbei.',
      solution: 'Ausführliche Beschreibung in Arbeit — schauen Sie bald wieder vorbei.',
      myContribution: ['Beschreibung in Arbeit.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'Diese Projektkarte ist ein Platzhalter. Eine vollständige Fallstudie (Problem, Lösung, mein Beitrag und Links) wird hier ergänzt.',
    },
    {
      id: 'telemetry-pipeline',
      name: 'Ereignisgesteuerte Telemetrie-Pipeline — Fallstudie folgt in Kürze',
      tagline: 'Eine ausführliche Beschreibung der Echtzeit-Erfassungspipeline ist in Arbeit.',
      businessProblem: 'Ausführliche Beschreibung in Arbeit — schauen Sie bald wieder vorbei.',
      solution: 'Ausführliche Beschreibung in Arbeit — schauen Sie bald wieder vorbei.',
      myContribution: ['Beschreibung in Arbeit.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'Diese Projektkarte ist ein Platzhalter. Eine vollständige Fallstudie (Problem, Lösung, mein Beitrag und Links) wird hier ergänzt.',
    },
  ],
  workWithMe: {
    headline: 'Lassen Sie uns zusammenarbeiten',
    baseLocation: 'Chennai, Indien (IST, UTC+5:30)',
    baseTimezone: 'Asia/Kolkata',
    remoteAvailability: 'Offen für Remote-Positionen weltweit',
    preferredEngagements: ['Festanstellung', 'Vertragsbasis'],
    fallbackTimezoneNote: 'Ansässig in Indien (IST, UTC+5:30) — weltweit verfügbar für die Remote-Zusammenarbeit.',
  },
  cvUrl: undefined,
};

const fr: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Ingénieur Backend',
  tagline: 'Node.js · TypeScript · AWS · Terraform',
  summary:
    "Ingénieur Backend avec près de 4 ans d'expérience dans la conception et le développement de systèmes backend distribués et événementiels, ainsi que de plateformes SaaS multi-tenant, pour des environnements de start-up en constante évolution. Compétent dans le développement de services backend évolutifs, de pipelines de traitement de télémétrie en temps réel et de systèmes cloud-natifs avec Node.js, TypeScript, AWS et Terraform, avec une solide communication asynchrone et une grande autonomie. Expérience avérée en tant qu'ingénieur fondateur, menant des systèmes backend de la conception à la mise en production.",
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, Inde',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Ingénieur Backend fondateur',
      period: 'Févr. 2026 – Aujourd’hui',
      highlights: [
        "A dirigé l'architecture, le développement et la responsabilité en production d'une plateforme SaaS multi-tenant pour la robotique, incluant l'architecture backend, la conception de base de données, la stratégie de déploiement et les services de télémétrie, entièrement construits à partir de zéro.",
        "A conçu et intégré un assistant d'IA générative de bout en bout (v1.0) dans le backend NestJS, avec exécution en double mode, un modèle de sécurité multicouche incluant la validation d'AST SQL, et un streaming WebSocket en temps réel — déployé en production, offrant une interface conversationnelle pour plus de 40 endpoints REST.",
        "A conçu et exploité des services backend cloud-natifs sur AWS avec Node.js/NestJS, en gérant les environnements via une infrastructure as code basée sur Terraform, des déploiements conteneurisés et des pipelines CI/CD.",
        "A conçu et implémenté des services NestJS/Node.js évolutifs pour l'ingestion événementielle de télémétrie, la gestion des appareils, l'analytique, l'authentification et le RBAC multi-tenant.",
        "A développé des pipelines événementiels d'ingestion et de traitement de télémétrie pour des dispositifs robotiques distribués, permettant un suivi et une analyse en temps réel.",
        'A encadré une petite équipe de stagiaires durant la croissance de l’équipe, en les formant via des revues de code et des discussions de conception.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Ingénieur logiciel',
      period: 'Mai 2024 – Janv. 2026',
      highlights: [
        "A conçu et piloté une plateforme distribuée d'ingestion en masse traitant jusqu'à 2 millions de lignes par tâche, avec un traitement asynchrone basé sur Redis, des pipelines de validation et une exécution tolérante aux pannes.",
        "A contribué à des produits d'analytique d'entreprise basés sur Microsoft Power BI et Microsoft Fabric, en développant des services backend Node.js et des API REST de bout en bout.",
        "A amélioré le débit backend d'environ 70 % grâce à un traitement basé sur des files d'attente, à l'optimisation SQL et au découplage des chemins d'exécution synchrones.",
        'A conçu des workflows asynchrones, idempotents et résilients aux nouvelles tentatives pour des opérations fiables de traitement de données et d’ingestion en masse de longue durée.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Ingénieur logiciel',
      period: 'Déc. 2022 – Avr. 2024',
      highlights: [
        "A dirigé l'intégration backend de systèmes d'automatisation industrielle (automates, scanners, imprimantes), en développant des API et une communication basée sur WebSocket pour des opérations de ligne de production en temps réel avec Laravel et MySQL.",
        "A livré des solutions de traçabilité et d'audit avec synchronisation hors ligne, réduisant l'effort opérationnel manuel d'environ 50 % et améliorant la fiabilité de la production.",
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Développement Backend',
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
      category: 'IA et intégration',
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
      category: 'Données et stockage',
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
      category: 'Cloud et infrastructure',
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
      category: "Pratiques d'ingénierie",
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
    },
  ],
  achievements: [
    {
      description:
        "A conçu et livré trois plateformes backend de qualité production, de l'architecture au déploiement en production et à la responsabilité opérationnelle, en menant les produits de la conception à la mise en production.",
    },
    {
      description:
        "A amélioré le débit backend d'environ 70 % grâce au traitement asynchrone, à l'optimisation des requêtes SQL et à la refonte des flux de données et des chemins d'exécution des services.",
    },
    {
      description:
        "A réduit l'effort opérationnel d'environ 50 % en automatisant des flux de travail manuels et en concevant des systèmes backend éliminant les processus opérationnels répétitifs.",
    },
    {
      description:
        "A conçu et implémenté des pipelines événementiels d'ingestion de télémétrie pour des dispositifs robotiques IoT, permettant un suivi en temps réel, de l'analytique et une visibilité opérationnelle à grande échelle.",
    },
  ],
  education: [
    {
      institution: 'Anna University (CEG Campus)',
      credential: "Diplôme d'ingénieur (B.E.) en électronique et communication",
      year: '2019',
    },
  ],
  projects: [
    {
      id: 'robotics-saas-platform',
      name: 'Plateforme SaaS pour la robotique — Étude de cas à venir',
      tagline: "Une description détaillée de l'architecture backend multi-tenant est en cours de rédaction.",
      businessProblem: 'Rédaction complète en cours — revenez bientôt.',
      solution: 'Rédaction complète en cours — revenez bientôt.',
      myContribution: ['Rédaction en cours.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'Cette fiche projet est un espace réservé. Une étude de cas complète (problème, solution, ma contribution et liens) sera ajoutée ici.',
    },
    {
      id: 'telemetry-pipeline',
      name: 'Pipeline de télémétrie événementielle — Étude de cas à venir',
      tagline: "Une description détaillée du pipeline d'ingestion en temps réel est en cours de rédaction.",
      businessProblem: 'Rédaction complète en cours — revenez bientôt.',
      solution: 'Rédaction complète en cours — revenez bientôt.',
      myContribution: ['Rédaction en cours.'],
      technologies: [],
      links: [],
      isPlaceholder: true,
      placeholderNote:
        'Cette fiche projet est un espace réservé. Une étude de cas complète (problème, solution, ma contribution et liens) sera ajoutée ici.',
    },
  ],
  workWithMe: {
    headline: 'Travaillons ensemble',
    baseLocation: 'Chennai, Inde (IST, UTC+5:30)',
    baseTimezone: 'Asia/Kolkata',
    remoteAvailability: 'Ouvert aux postes à distance dans le monde entier',
    preferredEngagements: ['Temps plein', 'Contrat'],
    fallbackTimezoneNote: 'Basé en Inde (IST, UTC+5:30) — disponible dans le monde entier pour une collaboration à distance.',
  },
  cvUrl: undefined,
};

export const resumeDataByLocale: Record<LocaleCode, ResumeData> = { en, de, fr };
