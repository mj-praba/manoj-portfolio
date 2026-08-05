import type { LocaleCode, ResumeData } from '@manoj-portfolio/data';

const en: ResumeData = {
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
      skills: ['Generative AI', 'LLM Integration', 'Prompt Engineering', 'AI Agents', 'NL2SQL', 'AI Workflow Orchestration', 'LLM APIs'],
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
  projects: [
    {
      id: 'robotics-dashboard-suite',
      name: 'Robotics Fleet Dashboard Suite — Case Study Coming Soon',
      tagline: 'A detailed write-up of the React/Node.js fleet management platform is in progress.',
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
      id: 'analytics-web-app',
      name: 'Enterprise Analytics Web App — Case Study Coming Soon',
      tagline: 'A detailed write-up of the end-to-end analytics product is in progress.',
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
  // TODO: add a real CV PDF under apps/web-fullstack/public/cv/ and set this to its path.
  cvUrl: undefined,
};

const de: ResumeData = {
  name: 'Manoj Prabahar J',
  title: 'Full-Stack-Entwickler',
  tagline: 'React · Node.js · TypeScript · AWS',
  summary:
    'Full-Stack-Entwickler mit knapp 4 Jahren Erfahrung im Aufbau und der Skalierung von SaaS-Produkten end-to-end – von React/TypeScript-Frontends über Node.js-Backends bis hin zu PostgreSQL/Redis-Datenschichten und AWS-Cloud-Infrastruktur. Nachgewiesene Erfolgsbilanz als Gründungsingenieur mit Verantwortung für Architektur, Deployment und Produktivbetrieb in schnelllebigen, produktorientierten Umgebungen.',
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, Indien',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Gründungs-Full-Stack- & Cloud-Entwickler',
      period: 'Feb. 2026 – heute',
      highlights: [
        'Entwickelte und betreute eine Multi-Tenant-SaaS-Plattform für Robotik mit React, TypeScript, Node.js, PostgreSQL, Redis, Docker, Terraform und AWS – verantwortlich für Frontend, Backend-Services, Cloud-Infrastruktur und Produktions-Deployments über GitHub-Actions-basierte CI/CD.',
        'Konzipierte und integrierte einen vollständigen generativen KI-Assistenten (v1.0) in das NestJS-Backend, mit Dual-Mode-Ausführung, einem mehrschichtigen Sicherheitsmodell mit SQL-AST-Validierung und Echtzeit-WebSocket-Streaming – als Produktionsfeature ausgeliefert, das eine dialogbasierte Schnittstelle zu über 40 REST-Endpunkten ermöglicht.',
        'Entwickelte responsive React-Dashboards für Roboter-Monitoring, Flottenmanagement, Telemetrie-Visualisierung, Analytics und Administration und ermöglichte so Echtzeit-Transparenz im Betrieb.',
        'Entwarf und implementierte Backend-Services und REST-APIs für Authentifizierung, RBAC, Geräteverwaltung, Telemetrie-Erfassung und Reporting.',
        'Entwickelte Echtzeitfunktionen mit WebSockets für Live-Roboterstatus, Warnmeldungen und Telemetrie-Updates.',
        'Entwarf PostgreSQL-Schemata, optimierte komplexe SQL-Abfragen und implementierte Redis-Caching-Strategien zur Verbesserung von Performance und Skalierbarkeit der Anwendung.',
        'Betreute ein kleines Team von Praktikanten im Zuge des Teamwachstums und half ihnen durch Code-Reviews und Design-Diskussionen, sich schnell einzuarbeiten.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Softwareentwickler',
      period: 'Mai 2024 – Jan. 2026',
      highlights: [
        'Entwickelte Enterprise-Analytics-Module mit Node.js, TypeScript und Microsoft Fabric.',
        'Entwickelte REST-APIs, die von Power BI und Enterprise-Webanwendungen genutzt wurden.',
        'Entwickelte asynchrone Backend-Services zur Verarbeitung von Datensätzen mit bis zu 2 Millionen Einträgen.',
        'Steigerte den API-Durchsatz um rund 70 % durch SQL-Optimierung, Redis-Warteschlangen und asynchrone Verarbeitung.',
        'Arbeitete eng mit Frontend-Entwicklern zusammen, um durchgängige Analytics-Funktionen über Webanwendungen und Backend-Services hinweg zu konzipieren und auszuliefern.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Softwareentwickler',
      period: 'Dez. 2022 – Apr. 2024',
      highlights: [
        'Entwickelte Produktionsmanagement-Anwendungen mit Laravel, MySQL, JavaScript und WebSockets.',
        'Entwickelte APIs zur Integration von SPS, Barcode-Scannern und Industriedruckern.',
        'Implementierte Echtzeitkommunikation zwischen Fertigungssystemen und Web-Dashboards.',
        'Reduzierte den manuellen operativen Aufwand um rund 50 % durch Workflow-Automatisierung.',
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Frontend-Entwicklung',
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
      category: 'Backend-Entwicklung',
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
      category: 'KI & Integration',
      skills: ['Generative AI', 'LLM Integration', 'Prompt Engineering', 'AI Agents', 'NL2SQL', 'AI Workflow Orchestration', 'LLM APIs'],
    },
    {
      category: 'Daten & Speicherung',
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
      category: 'Cloud & Infrastruktur',
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
      category: 'Engineering-Praktiken',
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
        'Baute und lieferte drei produktionsreife Full-Stack-Plattformen – von Architektur und Entwicklung über Cloud-Deployment bis hin zu Produktivsupport und kontinuierlichen Feature-Erweiterungen – bei der aktuellsten als Gründungs- bzw. alleiniger Entwickler.',
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
      id: 'robotics-dashboard-suite',
      name: 'Robotik-Flotten-Dashboard-Suite — Fallstudie folgt in Kürze',
      tagline: 'Eine ausführliche Beschreibung der React/Node.js-Flottenmanagement-Plattform ist in Arbeit.',
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
      id: 'analytics-web-app',
      name: 'Enterprise-Analytics-Webanwendung — Fallstudie folgt in Kürze',
      tagline: 'Eine ausführliche Beschreibung des durchgängigen Analytics-Produkts ist in Arbeit.',
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
  title: 'Développeur Full Stack',
  tagline: 'React · Node.js · TypeScript · AWS',
  summary:
    "Développeur Full Stack avec près de 4 ans d'expérience dans la conception et la mise à l'échelle de produits SaaS de bout en bout — des interfaces React/TypeScript aux backends Node.js, en passant par les couches de données PostgreSQL/Redis et l'infrastructure cloud AWS. Expérience avérée en tant qu'ingénieur fondateur, responsable de l'architecture, du déploiement et du support en production dans des environnements produit en évolution rapide.",
  contact: {
    email: 'manojprabaharj@gmail.com',
    phone: '+91-989-449-8313',
    location: 'Chennai, Inde',
    linkedinUrl: 'https://www.linkedin.com/in/manoj-prabahar-j',
  },
  experience: [
    {
      company: 'Haystack Robotics (via Cloudesign Technologies)',
      role: 'Ingénieur Full Stack & Cloud fondateur',
      period: 'Févr. 2026 – Aujourd’hui',
      highlights: [
        "A développé et maintenu une plateforme SaaS multi-tenant pour la robotique avec React, TypeScript, Node.js, PostgreSQL, Redis, Docker, Terraform et AWS, en assurant la responsabilité du frontend, des services backend, de l'infrastructure cloud et des déploiements en production via une CI/CD basée sur GitHub Actions.",
        "A conçu et intégré un assistant d'IA générative de bout en bout (v1.0) dans le backend NestJS, avec exécution en double mode, un modèle de sécurité multicouche incluant la validation d'AST SQL, et un streaming WebSocket en temps réel — déployé en production, offrant une interface conversationnelle pour plus de 40 endpoints REST.",
        'A développé des tableaux de bord React responsives pour le suivi des robots, la gestion de flotte, la visualisation de télémétrie, l’analytique et l’administration, offrant une visibilité opérationnelle en temps réel.',
        "A conçu et implémenté des services backend et des API REST pour l'authentification, le RBAC, la gestion des appareils, l'ingestion de télémétrie et le reporting.",
        'A développé des fonctionnalités en temps réel avec WebSockets, permettant le suivi en direct du statut des robots, des alertes et des mises à jour de télémétrie.',
        'A conçu des schémas PostgreSQL, optimisé des requêtes SQL complexes et mis en place des stratégies de cache Redis pour améliorer la performance et la scalabilité de l’application.',
        'A encadré une petite équipe de stagiaires durant la croissance de l’équipe, en les formant via des revues de code et des discussions de conception.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Ingénieur logiciel',
      period: 'Mai 2024 – Janv. 2026',
      highlights: [
        "A développé des modules d'analytique d'entreprise avec Node.js, TypeScript et Microsoft Fabric.",
        "A développé des API REST consommées par Power BI et des applications web d'entreprise.",
        "A développé des services backend asynchrones traitant des jeux de données allant jusqu'à 2 millions d'enregistrements.",
        "A amélioré le débit des API d'environ 70 % grâce à l'optimisation SQL, aux files d'attente Redis et au traitement asynchrone.",
        'A collaboré avec des ingénieurs frontend pour concevoir et livrer des fonctionnalités analytiques de bout en bout à travers les applications web et les services backend.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Ingénieur logiciel',
      period: 'Déc. 2022 – Avr. 2024',
      highlights: [
        'A développé des applications de gestion de production avec Laravel, MySQL, JavaScript et WebSockets.',
        'A développé des API intégrant des automates programmables, des scanners de codes-barres et des imprimantes industrielles.',
        'A mis en place une communication en temps réel entre les systèmes de fabrication et les tableaux de bord web.',
        "A réduit l'effort opérationnel manuel d'environ 50 % grâce à l'automatisation des flux de travail.",
      ],
    },
  ],
  skillCategories: [
    {
      category: 'Développement Frontend',
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
      category: 'Développement Backend',
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
      category: 'IA et intégration',
      skills: ['Generative AI', 'LLM Integration', 'Prompt Engineering', 'AI Agents', 'NL2SQL', 'AI Workflow Orchestration', 'LLM APIs'],
    },
    {
      category: 'Données et stockage',
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
      category: 'Cloud et infrastructure',
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
      category: "Pratiques d'ingénierie",
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
        "A conçu et livré trois plateformes full-stack de qualité production, de l'architecture et du développement au déploiement cloud, au support en production et aux améliorations continues des fonctionnalités — en tant qu'ingénieur fondateur/unique sur la plus récente.",
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
      id: 'robotics-dashboard-suite',
      name: 'Suite de tableaux de bord pour flotte robotique — Étude de cas à venir',
      tagline: 'Une description détaillée de la plateforme de gestion de flotte React/Node.js est en cours de rédaction.',
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
      id: 'analytics-web-app',
      name: "Application web d'analytique d'entreprise — Étude de cas à venir",
      tagline: "Une description détaillée du produit d'analytique de bout en bout est en cours de rédaction.",
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
