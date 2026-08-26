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
      company: 'Haystack Robotics',
      role: 'Lead Backend Engineer',
      period: 'Feb 2026 – Present',
      highlights: [
        'Own a multi-tenant robotics SaaS platform end-to-end as it scales: backend architecture, database design, deployment strategy, and telemetry.',
        'Architected and integrated an end-to-end Generative AI Assistant (v1.0) into the NestJS backend, implementing dual-mode execution, a multi-layer security model with SQL AST validation, and real-time WebSocket streaming — shipped as a production feature enabling a conversational interface to 40+ REST endpoints.',
        'Designed AWS network architecture (VPC, subnets, security groups, ALB) using Terraform, and own backend deployments via containerized CI/CD pipelines.',
        'Implemented scalable NestJS/Node.js services for telemetry ingestion, device management, analytics, authentication, and RBAC, using Redis for caching and queue-based processing.',
        'Built Kafka-based event-driven ingestion and processing pipelines for distributed robotic devices, enabling real-time monitoring, analytics, and scalable backend processing.',
        'Partnered with robotics, AI, and embedded teams to integrate cloud services and telemetry into a unified platform, leading architecture decisions and mentoring a small team via code reviews.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Associate Product Developer',
      period: 'May 2024 – Jan 2026',
      highlights: [
        'Owned the primary data-ingestion backbone for enterprise analytics, processing up to 2M rows per job across 8 database engines, with idempotent, fault-tolerant, retry-safe execution in the backend.',
        'Built a bulk import pipeline sourcing data from files (CSV, Excel) or directly from any of 8 database engines, with normalization, validation, audit, and RBAC controls.',
        'Improved backend throughput by ~70% through queue-based processing, SQL optimization, query plan analysis and scaling, and decoupling synchronous service execution paths.',
        'Delivered end-to-end Node.js/Hapi.js backend services and REST APIs powering Microsoft Power BI, Microsoft Fabric, and Microsoft Graph API-integrated analytics modules in a cloud-native environment.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Software Developer',
      period: 'Dec 2022 – Apr 2024',
      highlights: [
        'Led integration for automation systems (PLCs, scanners, printers), building APIs and WebSocket-based communication for real-time production line operations using Node.js, Express, TypeScript, and MySQL.',
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
        'Hapi.js',
        'RESTful APIs',
        'gRPC',
        'WebSockets',
        'Kafka',
        'Microservices',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Asynchronous Processing',
        'Background Job Processing',
        'Idempotent APIs',
        'Multi-Tenant Architecture',
        'JWT Authentication',
        'RBAC Authorization',
        'Performance Optimization',
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
        'AI-Assisted Development (Claude, Cursor, ChatGPT)',
      ],
    },
    {
      category: 'Data & Storage',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'OLTP/OLAP Systems',
        'Schema Design',
        'Query Optimization',
        'Indexing',
        'Caching Strategies',
        'Blob/Object Storage',
        'MVCC',
        'Database Performance Tuning',
        'Azure SQL',
        'Snowflake',
        'Microsoft Fabric',
        'Databricks',
        'ClickHouse',
        'Polyglot Persistence',
        'DynamoDB',
        'BullMQ',
      ],
    },
    {
      category: 'Cloud & Infra',
      skills: [
        'AWS (IAM, EC2, ECS, Auto Scaling Groups, ALB, RDS, ECR, CloudFront, CloudWatch, S3)',
        'Load Balancing',
        'DNS',
        'Docker',
        'Terraform',
        'Linux',
        'GitHub Actions',
        'GitHub OIDC',
        'CI/CD',
        'Highly Available & Fault-Tolerant Architectures',
        'ETL',
        'Power BI',
        'Entra ID',
        'Microsoft Graph API',
        'Logging',
        'Monitoring',
      ],
    },
    {
      category: 'Engineering Practices',
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'Design Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
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
      year: '2022',
    },
  ],
  projects: [
    {
      id: 'schema-aware-nl2sql-assistant',
      name: 'Schema-Aware NL2SQL Assistant for Analytics Dashboards',
      tagline: 'A conversational interface to 40+ REST endpoints that never exposes raw data to the LLM — only the schema.',
      businessProblem:
        "A multi-tenant robotics SaaS platform needed a natural-language interface so operators could ask analytics questions in plain English instead of writing SQL or navigating dashboards — but sending raw tenant data to a third-party LLM was unacceptable given the platform's multi-tenant security and privacy requirements.",
      solution:
        'Built a Generative AI Assistant that only ever sees database schema — table names, column names, types, and relationships — never actual row data. The LLM turns a natural-language question into a candidate SQL query against that schema. Before anything executes, the query is parsed into an AST and run through a multi-layer validation model: read-only operations, enforced tenant scoping, and a blocklist of dangerous SQL patterns, so a prompt-injected or malformed query can never reach the database. Validated queries execute directly against PostgreSQL, and results stream back over WebSockets in real time — the LLM writes the query but never touches the data it returns.',
      myContribution: [
        'Designed the schema-only context strategy so the LLM never receives tenant data, only structural metadata.',
        'Built the SQL AST validation layer enforcing read-only access, tenant isolation, and a dangerous-pattern blocklist before any generated query executes.',
        'Implemented dual-mode execution (conversational assistant vs. direct structured queries) inside the existing NestJS backend.',
        'Added real-time WebSocket streaming for query results, and shipped the assistant as a production feature spanning 40+ REST endpoints.',
      ],
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'LLM APIs', 'NL2SQL', 'SQL AST Validation', 'WebSockets', 'Multi-Tenant RBAC'],
      links: [],
      isPlaceholder: false,
    },
    {
      id: 'monitoring-application',
      name: 'Monitoring Platform for Real-Time Device Fleets',
      tagline:
        'Full-stack, backend-heavy — device pairing, live telemetry, and a cross-platform desktop agent, deployed on AWS ECS via GitHub Actions.',
      businessProblem:
        'Teams needed one place to pair devices, see live status, and drill into historical telemetry — without hand-building ingestion, storage, and a live-updating dashboard from scratch, and without locking the companion desktop agent to a single OS.',
      solution:
        'Built a NestJS REST API (with Swagger docs) alongside a dedicated WebSocket service for live updates, backed by PostgreSQL, MongoDB, ClickHouse, and Redis, with separate ingestion and cron workers so ingest spikes never block API traffic. Devices pair through a QR code shown in the React dashboard, which then streams live status over WebSockets. Shipped a companion Electron desktop app packaged as an NSIS installer for Windows and an AppImage for Linux, with a tag-triggered GitHub Actions pipeline that builds both, publishes them to GitHub Releases and an S3 mirror, and a docs site covering install steps for each OS.',
      myContribution: [
        'Designed the multi-service backend split (API, WebSocket, ingestion worker, cron worker) sharing common auth/database packages in an npm-workspace monorepo.',
        'Built the QR-code device pairing flow and the real-time device dashboard in React.',
        'Set up AWS ECS/ECR deployment through GitHub Actions using OIDC, with no long-lived AWS credentials in CI.',
        'Added Windows and Linux packaging for the companion desktop app (electron-builder, NSIS + AppImage) and a tag-triggered release pipeline publishing to GitHub Releases and S3.',
        'Wrote the install and architecture docs so the desktop agent can be set up without touching a terminal.',
      ],
      technologies: [
        'NestJS',
        'React',
        'TypeScript',
        'Electron',
        'PostgreSQL',
        'MongoDB',
        'ClickHouse',
        'Redis',
        'WebSockets',
        'AWS ECS',
        'AWS ECR',
        'Docker',
        'GitHub Actions',
      ],
      links: [{ label: 'Architecture & Install Docs', url: 'https://phoenix.is-a.dev/monitor' }],
      isPlaceholder: false,
    },
  ],
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
      company: 'Haystack Robotics',
      role: 'Lead Backend Engineer',
      period: 'Feb. 2026 – heute',
      highlights: [
        'Verantwortet eine Multi-Tenant-SaaS-Plattform für Robotik end-to-end im laufenden Wachstum – Backend-Architektur, Datenbankdesign, Deployment-Strategie und Telemetrie.',
        'Konzipierte und integrierte einen vollständigen generativen KI-Assistenten (v1.0) in das NestJS-Backend, mit Dual-Mode-Ausführung, einem mehrschichtigen Sicherheitsmodell mit SQL-AST-Validierung und Echtzeit-WebSocket-Streaming – als Produktionsfeature ausgeliefert, das eine dialogbasierte Schnittstelle zu über 40 REST-Endpunkten ermöglicht.',
        'Entwarf die AWS-Netzwerkarchitektur (VPC, Subnetze, Security Groups, ALB) mit Terraform und verantwortet Backend-Deployments über containerisierte CI/CD-Pipelines.',
        'Implementierte skalierbare NestJS/Node.js-Services für Telemetrie-Erfassung, Geräteverwaltung, Analytics, Authentifizierung und RBAC, mit Redis für Caching und warteschlangenbasierte Verarbeitung.',
        'Baute Kafka-basierte ereignisgesteuerte Pipelines zur Erfassung und Verarbeitung von Telemetriedaten für verteilte Robotik-Geräte, die Echtzeit-Monitoring, Analytics und skalierbare Backend-Verarbeitung ermöglichen.',
        'Arbeitete eng mit Robotik-, KI- und Embedded-Teams zusammen, um Cloud-Services und Telemetrie in eine einheitliche Plattform zu integrieren, traf Architekturentscheidungen und betreute ein kleines Team durch Code-Reviews.',
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Associate Product Developer',
      period: 'Mai 2024 – Jan. 2026',
      highlights: [
        'Verantwortete das zentrale Daten-Ingestion-Rückgrat für Enterprise-Analytics, das bis zu 2 Millionen Zeilen pro Job über 8 Datenbank-Engines verarbeitet, mit idempotenter, fehlertoleranter und wiederholungssicherer Ausführung im Backend.',
        'Baute eine Massenimport-Pipeline, die Daten aus Dateien (CSV, Excel) oder direkt aus einer von 8 Datenbank-Engines bezieht, mit Normalisierung, Validierung, Audit und RBAC-Kontrollen.',
        'Steigerte den Backend-Durchsatz um rund 70 % durch warteschlangenbasierte Verarbeitung, SQL-Optimierung, Query-Plan-Analyse und -Skalierung sowie Entkopplung synchroner Service-Ausführungspfade.',
        'Lieferte durchgängige Node.js/Hapi.js-Backend-Services und REST-APIs für Analytics-Module auf Basis von Microsoft Power BI, Microsoft Fabric und der Microsoft Graph API in einer Cloud-nativen Umgebung.',
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Softwareentwickler',
      period: 'Dez. 2022 – Apr. 2024',
      highlights: [
        'Leitete die Integration von Automatisierungssystemen (SPS, Scanner, Drucker) und entwickelte APIs sowie WebSocket-basierte Kommunikation für Echtzeit-Produktionslinienabläufe mit Node.js, Express, TypeScript und MySQL.',
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
        'Hapi.js',
        'RESTful APIs',
        'gRPC',
        'WebSockets',
        'Kafka',
        'Microservices',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Asynchronous Processing',
        'Background Job Processing',
        'Idempotent APIs',
        'Multi-Tenant Architecture',
        'JWT Authentication',
        'RBAC Authorization',
        'Performance Optimization',
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
        'AI-Assisted Development (Claude, Cursor, ChatGPT)',
      ],
    },
    {
      category: 'Daten & Speicherung',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'OLTP/OLAP Systems',
        'Schema Design',
        'Query Optimization',
        'Indexing',
        'Caching Strategies',
        'Blob/Object Storage',
        'MVCC',
        'Database Performance Tuning',
        'Azure SQL',
        'Snowflake',
        'Microsoft Fabric',
        'Databricks',
        'ClickHouse',
        'Polyglot Persistence',
        'DynamoDB',
        'BullMQ',
      ],
    },
    {
      category: 'Cloud & Infrastruktur',
      skills: [
        'AWS (IAM, EC2, ECS, Auto Scaling Groups, ALB, RDS, ECR, CloudFront, CloudWatch, S3)',
        'Load Balancing',
        'DNS',
        'Docker',
        'Terraform',
        'Linux',
        'GitHub Actions',
        'GitHub OIDC',
        'CI/CD',
        'Highly Available & Fault-Tolerant Architectures',
        'ETL',
        'Power BI',
        'Entra ID',
        'Microsoft Graph API',
        'Logging',
        'Monitoring',
      ],
    },
    {
      category: 'Engineering-Praktiken',
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'Design Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
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
      year: '2022',
    },
  ],
  projects: [
    {
      id: 'schema-aware-nl2sql-assistant',
      name: 'Schema-basierter NL2SQL-Assistent für Analytics-Dashboards',
      tagline: 'Eine dialogbasierte Schnittstelle zu über 40 REST-Endpunkten, die dem LLM nie Rohdaten offenlegt — nur das Schema.',
      businessProblem:
        'Eine Multi-Tenant-SaaS-Plattform für Robotik benötigte eine natürlichsprachliche Schnittstelle, damit Bediener Analytics-Fragen in normalem Englisch stellen konnten, statt SQL zu schreiben oder Dashboards zu navigieren – doch das Senden von Rohdaten der Mandanten an ein Drittanbieter-LLM war angesichts der Multi-Tenant-Sicherheits- und Datenschutzanforderungen inakzeptabel.',
      solution:
        'Entwickelte einen generativen KI-Assistenten, der ausschließlich das Datenbankschema sieht – Tabellennamen, Spaltennamen, Typen und Beziehungen – niemals tatsächliche Zeilendaten. Das LLM wandelt eine natürlichsprachliche Frage anhand dieses Schemas in eine SQL-Abfrage um. Bevor irgendetwas ausgeführt wird, wird die Abfrage in einen AST geparst und durchläuft ein mehrschichtiges Validierungsmodell: reiner Lesezugriff, erzwungene Mandantenbegrenzung und eine Sperrliste gefährlicher SQL-Muster – sodass eine durch Prompt-Injection manipulierte oder fehlerhafte Abfrage niemals die Datenbank erreichen kann. Validierte Abfragen werden direkt gegen PostgreSQL ausgeführt, und die Ergebnisse werden in Echtzeit über WebSockets zurückgestreamt – das LLM schreibt die Abfrage, kommt aber nie mit den zurückgegebenen Daten in Berührung.',
      myContribution: [
        'Entwarf die Schema-only-Kontextstrategie, sodass das LLM niemals Mandantendaten erhält, sondern nur strukturelle Metadaten.',
        'Baute die SQL-AST-Validierungsschicht, die reinen Lesezugriff, Mandantenisolation und eine Sperrliste gefährlicher Muster durchsetzt, bevor eine generierte Abfrage ausgeführt wird.',
        'Implementierte Dual-Mode-Ausführung (dialogbasierter Assistent vs. direkte strukturierte Abfragen) im bestehenden NestJS-Backend.',
        'Fügte Echtzeit-WebSocket-Streaming für Abfrageergebnisse hinzu und lieferte den Assistenten als Produktionsfeature für über 40 REST-Endpunkte aus.',
      ],
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'LLM APIs', 'NL2SQL', 'SQL AST Validation', 'WebSockets', 'Multi-Tenant RBAC'],
      links: [],
      isPlaceholder: false,
    },
    {
      id: 'monitoring-application',
      name: 'Monitoring-Plattform für Echtzeit-Geräteflotten',
      tagline:
        'Full-Stack, backend-lastig — Gerätekopplung, Live-Telemetrie und ein plattformübergreifender Desktop-Agent, bereitgestellt auf AWS ECS über GitHub Actions.',
      businessProblem:
        'Teams brauchten einen zentralen Ort, um Geräte zu koppeln, ihren Live-Status zu sehen und in historische Telemetriedaten einzutauchen — ohne Ingestion, Speicherung und ein live aktualisiertes Dashboard von Grund auf selbst zu bauen, und ohne den begleitenden Desktop-Agenten an ein einzelnes Betriebssystem zu binden.',
      solution:
        'Eine NestJS-REST-API (mit Swagger-Doku) sowie ein eigener WebSocket-Dienst für Live-Updates wurden gebaut, unterstützt von PostgreSQL, MongoDB, ClickHouse und Redis, mit getrennten Ingestion- und Cron-Workern, damit Ingestion-Spitzen den API-Verkehr nie blockieren. Geräte werden per QR-Code im React-Dashboard gekoppelt, das anschließend den Live-Status über WebSockets streamt. Zusätzlich wurde eine begleitende Electron-Desktop-App ausgeliefert, verpackt als NSIS-Installer für Windows und als AppImage für Linux, mit einer tag-gesteuerten GitHub-Actions-Pipeline, die beide baut, auf GitHub Releases und einem S3-Spiegel veröffentlicht, sowie einer Docs-Seite mit Installationsschritten für jedes Betriebssystem.',
      myContribution: [
        'Die Aufteilung des Backends in mehrere Dienste (API, WebSocket, Ingestion-Worker, Cron-Worker) mit gemeinsamen Auth-/Datenbank-Paketen in einem npm-Workspace-Monorepo entworfen.',
        'Den QR-Code-Kopplungsablauf und das Echtzeit-Gerätedashboard in React gebaut.',
        'AWS-ECS/ECR-Deployment über GitHub Actions mit OIDC eingerichtet, ohne dauerhafte AWS-Zugangsdaten in der CI.',
        'Windows- und Linux-Pakete für die begleitende Desktop-App hinzugefügt (electron-builder, NSIS + AppImage) sowie eine tag-gesteuerte Release-Pipeline für GitHub Releases und S3.',
        'Die Installations- und Architekturdokumentation geschrieben, damit der Desktop-Agent ohne Terminal eingerichtet werden kann.',
      ],
      technologies: [
        'NestJS',
        'React',
        'TypeScript',
        'Electron',
        'PostgreSQL',
        'MongoDB',
        'ClickHouse',
        'Redis',
        'WebSockets',
        'AWS ECS',
        'AWS ECR',
        'Docker',
        'GitHub Actions',
      ],
      links: [{ label: 'Architektur- & Installationsdokumentation', url: 'https://phoenix.is-a.dev/monitor' }],
      isPlaceholder: false,
    },
  ],
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
      company: 'Haystack Robotics',
      role: 'Ingénieur Backend principal',
      period: 'Févr. 2026 – Aujourd’hui',
      highlights: [
        "Responsable de bout en bout d'une plateforme SaaS multi-tenant pour la robotique au fil de sa croissance : architecture backend, conception de base de données, stratégie de déploiement et télémétrie.",
        "A conçu et intégré un assistant d'IA générative de bout en bout (v1.0) dans le backend NestJS, avec exécution en double mode, un modèle de sécurité multicouche incluant la validation d'AST SQL, et un streaming WebSocket en temps réel — déployé en production, offrant une interface conversationnelle pour plus de 40 endpoints REST.",
        "A conçu l'architecture réseau AWS (VPC, sous-réseaux, groupes de sécurité, ALB) avec Terraform, et est responsable des déploiements backend via des pipelines CI/CD conteneurisés.",
        "A implémenté des services NestJS/Node.js évolutifs pour l'ingestion de télémétrie, la gestion des appareils, l'analytique, l'authentification et le RBAC, en utilisant Redis pour le cache et le traitement basé sur des files d'attente.",
        "A développé des pipelines événementiels basés sur Kafka pour l'ingestion et le traitement de télémétrie de dispositifs robotiques distribués, permettant un suivi en temps réel, de l'analytique et un traitement backend évolutif.",
        "A collaboré étroitement avec les équipes robotique, IA et embarqué pour intégrer les services cloud et la télémétrie dans une plateforme unifiée, en pilotant les décisions d'architecture et en encadrant une petite équipe via des revues de code.",
      ],
    },
    {
      company: 'Lumel Technologies',
      role: 'Associate Product Developer',
      period: 'Mai 2024 – Janv. 2026',
      highlights: [
        "Responsable de l'épine dorsale de l'ingestion de données pour l'analytique d'entreprise, traitant jusqu'à 2 millions de lignes par tâche sur 8 moteurs de base de données, avec une exécution idempotente, tolérante aux pannes et résiliente aux nouvelles tentatives dans le backend.",
        "A construit une pipeline d'import en masse s'alimentant à partir de fichiers (CSV, Excel) ou directement depuis l'un des 8 moteurs de base de données, avec normalisation, validation, audit et contrôles RBAC.",
        "A amélioré le débit backend d'environ 70 % grâce à un traitement basé sur des files d'attente, à l'optimisation SQL, à l'analyse et à la mise à l'échelle des plans d'exécution, et au découplage des chemins d'exécution synchrones.",
        "A livré des services backend Node.js/Hapi.js et des API REST de bout en bout alimentant des modules d'analytique intégrés à Microsoft Power BI, Microsoft Fabric et l'API Microsoft Graph dans un environnement cloud-natif.",
      ],
    },
    {
      company: 'Codentrix Technologies',
      role: 'Ingénieur logiciel',
      period: 'Déc. 2022 – Avr. 2024',
      highlights: [
        "A dirigé l'intégration de systèmes d'automatisation (automates, scanners, imprimantes), en développant des API et une communication basée sur WebSocket pour des opérations de ligne de production en temps réel avec Node.js, Express, TypeScript et MySQL.",
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
        'Hapi.js',
        'RESTful APIs',
        'gRPC',
        'WebSockets',
        'Kafka',
        'Microservices',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Asynchronous Processing',
        'Background Job Processing',
        'Idempotent APIs',
        'Multi-Tenant Architecture',
        'JWT Authentication',
        'RBAC Authorization',
        'Performance Optimization',
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
        'AI-Assisted Development (Claude, Cursor, ChatGPT)',
      ],
    },
    {
      category: 'Données et stockage',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'OLTP/OLAP Systems',
        'Schema Design',
        'Query Optimization',
        'Indexing',
        'Caching Strategies',
        'Blob/Object Storage',
        'MVCC',
        'Database Performance Tuning',
        'Azure SQL',
        'Snowflake',
        'Microsoft Fabric',
        'Databricks',
        'ClickHouse',
        'Polyglot Persistence',
        'DynamoDB',
        'BullMQ',
      ],
    },
    {
      category: 'Cloud et infrastructure',
      skills: [
        'AWS (IAM, EC2, ECS, Auto Scaling Groups, ALB, RDS, ECR, CloudFront, CloudWatch, S3)',
        'Load Balancing',
        'DNS',
        'Docker',
        'Terraform',
        'Linux',
        'GitHub Actions',
        'GitHub OIDC',
        'CI/CD',
        'Highly Available & Fault-Tolerant Architectures',
        'ETL',
        'Power BI',
        'Entra ID',
        'Microsoft Graph API',
        'Logging',
        'Monitoring',
      ],
    },
    {
      category: "Pratiques d'ingénierie",
      skills: ['Git', 'SOLID Principles', 'Clean Code', 'Code Reviews', 'Design Reviews', 'OpenAPI (Swagger)', 'AsyncAPI', 'Unit Testing', 'Integration Testing', 'Jest'],
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
      year: '2022',
    },
  ],
  projects: [
    {
      id: 'schema-aware-nl2sql-assistant',
      name: 'Assistant NL2SQL basé sur le schéma pour tableaux de bord analytiques',
      tagline: "Une interface conversationnelle pour plus de 40 endpoints REST qui n'expose jamais de données brutes au LLM — uniquement le schéma.",
      businessProblem:
        "Une plateforme SaaS multi-tenant pour la robotique avait besoin d'une interface en langage naturel permettant aux opérateurs de poser des questions analytiques en anglais courant plutôt que d'écrire du SQL ou de naviguer dans des tableaux de bord — mais l'envoi de données brutes des tenants à un LLM tiers était inacceptable compte tenu des exigences de sécurité et de confidentialité multi-tenant.",
      solution:
        "A développé un assistant d'IA générative qui ne voit jamais que le schéma de la base de données — noms de tables, noms de colonnes, types et relations — jamais les données de lignes réelles. Le LLM transforme une question en langage naturel en une requête SQL candidate à partir de ce schéma. Avant toute exécution, la requête est analysée en AST et passe par un modèle de validation multicouche : accès en lecture seule, isolation des tenants imposée, et une liste de blocage des motifs SQL dangereux — de sorte qu'une requête corrompue par injection de prompt ou malformée ne puisse jamais atteindre la base de données. Les requêtes validées s'exécutent directement sur PostgreSQL, et les résultats sont retransmis en temps réel via WebSockets — le LLM écrit la requête mais ne touche jamais aux données qu'elle retourne.",
      myContribution: [
        'A conçu la stratégie de contexte limité au schéma, afin que le LLM ne reçoive jamais de données des tenants, seulement des métadonnées structurelles.',
        "A construit la couche de validation d'AST SQL imposant l'accès en lecture seule, l'isolation des tenants et une liste de blocage des motifs dangereux avant l'exécution de toute requête générée.",
        "A implémenté une exécution en double mode (assistant conversationnel vs requêtes structurées directes) au sein du backend NestJS existant.",
        "A ajouté un streaming WebSocket en temps réel pour les résultats de requêtes, et a livré l'assistant en tant que fonctionnalité de production couvrant plus de 40 endpoints REST.",
      ],
      technologies: ['NestJS', 'Node.js', 'TypeScript', 'PostgreSQL', 'LLM APIs', 'NL2SQL', 'SQL AST Validation', 'WebSockets', 'Multi-Tenant RBAC'],
      links: [],
      isPlaceholder: false,
    },
    {
      id: 'monitoring-application',
      name: "Plateforme de supervision pour flottes d'appareils en temps réel",
      tagline:
        "Full-stack, à dominante backend — appairage d'appareils, télémétrie en direct et agent de bureau multiplateforme, déployée sur AWS ECS via GitHub Actions.",
      businessProblem:
        "Les équipes avaient besoin d'un endroit unique pour appairer des appareils, voir leur statut en direct et explorer l'historique de télémétrie — sans construire de zéro l'ingestion, le stockage et un tableau de bord mis à jour en direct, et sans enfermer l'agent de bureau associé dans un seul système d'exploitation.",
      solution:
        "Une API REST NestJS (avec documentation Swagger) et un service WebSocket dédié aux mises à jour en direct ont été mis en place, appuyés sur PostgreSQL, MongoDB, ClickHouse et Redis, avec des workers d'ingestion et de tâches planifiées séparés afin que les pics d'ingestion ne bloquent jamais le trafic de l'API. Les appareils s'appairent via un QR code affiché dans le tableau de bord React, qui diffuse ensuite le statut en direct via WebSockets. Une application de bureau Electron a également été livrée, empaquetée en installateur NSIS pour Windows et en AppImage pour Linux, avec un pipeline GitHub Actions déclenché par tag qui construit les deux, les publie sur GitHub Releases et un miroir S3, ainsi qu'un site de documentation présentant les étapes d'installation pour chaque système.",
      myContribution: [
        "Conçu la répartition du backend en plusieurs services (API, WebSocket, worker d'ingestion, worker planifié) partageant des paquets communs d'authentification et de base de données dans un monorepo en workspaces npm.",
        "Développé le flux d'appairage par QR code et le tableau de bord d'appareils en temps réel en React.",
        "Mis en place le déploiement AWS ECS/ECR via GitHub Actions avec OIDC, sans identifiants AWS permanents dans la CI.",
        "Ajouté l'empaquetage Windows et Linux pour l'application de bureau (electron-builder, NSIS + AppImage) ainsi qu'un pipeline de publication déclenché par tag vers GitHub Releases et S3.",
        "Rédigé la documentation d'installation et d'architecture afin que l'agent de bureau puisse être installé sans terminal.",
      ],
      technologies: [
        'NestJS',
        'React',
        'TypeScript',
        'Electron',
        'PostgreSQL',
        'MongoDB',
        'ClickHouse',
        'Redis',
        'WebSockets',
        'AWS ECS',
        'AWS ECR',
        'Docker',
        'GitHub Actions',
      ],
      links: [{ label: "Documentation d'architecture et d'installation", url: 'https://phoenix.is-a.dev/monitor' }],
      isPlaceholder: false,
    },
  ],
};

export const resumeDataByLocale: Record<LocaleCode, ResumeData> = { en, de, fr };
