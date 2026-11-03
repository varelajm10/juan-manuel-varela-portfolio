// ============================================================================
// DICCIONARIO BILINGÜE (ES / EN) Y DATOS COMPLETOS
// Juan Manuel Varela - Portfolio Ejecutivo
// ============================================================================

export const content = {
  es: {
    nav: {
      impact: 'Impacto',
      projects: 'Proyectos',
      skills: 'Competencias',
      experience: 'Trayectoria',
      contact: 'Contacto',
      viewCv: 'Ver CV Online',
      downloadCv: 'Descargar PDF',
      shareProfile: 'Compartir Perfil',
      copiedAlert: '¡Enlace del perfil copiado al portapapeles!',
    },
    hero: {
      badge: 'Disponible para roles estratégicos y transformación operativa',
      location: 'Buenos Aires, Argentina · Remoto / Híbrido',
      tagline: 'Finanzas Corporativas + Automatización con Software',
      headlinePrefix: 'Optimizo operaciones de alto volumen mediante',
      headlineHighlight: 'automatización de procesos, modelado de datos y analítica predictiva.',
      subtitle:
        'Profesional con más de 10 años de trayectoria corporativa liderando el control de gestión, planeamiento operativo y optimización de procesos (Order-to-Cash, créditos masivos y recupero de cartera en empresas como Saputo Inc., DACAS LATAM y CNH Capital). Combino la visión estratégica del negocio con ingeniería aplicada en Python, SQL, Power BI (DAX) y APIs para eliminar cuellos de botella y maximizar la rentabilidad.',
      ctaProjects: 'Explorar Casos de Negocio',
      ctaCv: 'Descargar CV Completo',
      ctaPreview: 'Previsualizar',
      badgeTrust1: 'Experiencia comprobada en multinacionales B2B',
      badgeTrust2: 'Desarrollo End-to-End (Datos, APIs, Frontend)',
      cardRole: 'Finance Ops & Process Automation',
      cardFocusLabel: 'Enfoque Operativo',
      cardFocusValue: 'Créditos, Cobranzas & Cash Flow',
      cardTechLabel: 'Core Tecnológico',
      cardMethodLabel: 'Metodología',
      cardMethodValue: 'Automatización RPA + Software a medida',
      whatsappBtn: 'WhatsApp Directo',
      whatsappMsg: 'Hola Juan Manuel, vi tu portfolio online y me gustaría conversar sobre una oportunidad.',
    },
    impact: {
      tag: 'Resultados Comprobables',
      title: 'Impacto cuantificable en operaciones corporativas',
      metrics: [
        {
          value: '-30%',
          label: 'Reducción de mora 30-60 días',
          detail: 'En Saputo Inc. mediante modelos de segmentación analítica y matrices de comportamiento.',
        },
        {
          value: '-60%',
          label: 'Tiempos de cierre contable/reportes',
          detail: 'Automatización de pipelines en SAP ERP y Power BI pasando de 5 a 2 días hábiles.',
        },
        {
          value: '+15 hs/sem',
          label: 'Ahorro operativo por equipo',
          detail: 'Desarrollo de Metanoia en DACAS LATAM para gestión de cobranzas y antigüedad de saldos.',
        },
        {
          value: '+10 Años',
          label: 'Trayectoria Corporativa B2B',
          detail: 'Experiencia directa en multinacionales de consumo masivo, tecnología y finanzas.',
        },
      ],
    },
    projects: {
      tag: 'Casos Prácticos & Desarrollos',
      title: 'Proyectos Destacados con Enfoque de Retorno',
      subtitle:
        'Cada desarrollo está diseñado desde el punto de vista del negocio: reducir horas manuales, acelerar cobranzas y eliminar errores operativos.',
      filterAll: 'Todos',
      strategicCase: '★ Caso Estratégico',
      problemLabel: 'Problema Operativo: ',
      solutionLabel: 'Solución Técnica: ',
      impactLabel: 'Impacto Clave',
      viewArchitecture: 'Ver Flujo de Arquitectura',
      hideArchitecture: 'Ocultar Arquitectura',
      viewDemo: 'Ver Demo',
      viewCode: 'Ver Código',
      privateBadge: 'Operación Corporativa Privada',
      items: [
        {
          id: 'metanoia-ops',
          title: 'Metanoia: Suite Operativa de Cobranzas y Antigüedad de Saldos',
          category: 'SaaS / Full Stack',
          problem:
            'En DACAS LATAM, el seguimiento de más de 100 clientes corporativos regionales requería consolidaciones manuales dispersas entre varios países y demoraba la detección de anomalías.',
          solution:
            'Herramienta operativa interna que centraliza métricas de aging, seguimiento de compromisos de pago y KPIs de gestión crediticia con cruces de bases automáticos.',
          impactMetric: 'Ahorro estimado de 15 horas semanales de trabajo manual y detección temprana de desvíos',
          tags: ['Python', 'SQL', 'Power BI', 'DAX', 'Order-to-Cash', 'Gestión Regional'],
          architecture: [
            { step: 'Fuentes', desc: 'Bases de datos de facturación regional y extractos bancarios multimoneda' },
            { step: 'Pipeline ETL', desc: 'Scripts en Python para normalización de tipos de cambio y conciliación' },
            { step: 'Modelo de Datos', desc: 'Esquema estrella en SQL para consolidación de deuda y aging' },
            { step: 'Entrega / UI', desc: 'Tableros ejecutivos en Power BI intradiarios y alertas automatizadas' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: true,
          confidentialLabel: 'Operación DACAS LATAM',
          featured: true,
        },
        {
          id: 'coopmora-alerts',
          title: 'CoopMora: Sistema de Alertas Tempranas y Scoring Operativo',
          category: 'Automatización / Data',
          problem:
            'Identificación tardía de cuentas en riesgo de mora y falta de previsibilidad en los tramos críticos de cartera activa.',
          solution:
            'Pipeline en Python que releva y cruza fuentes masivas de datos y bases activas a diario, calculando scoring predictivo y disparando alertas preventivas automáticas.',
          impactMetric: 'Monitoreo diario proactivo y reducción drástica de tiempos muertos de gestión',
          tags: ['Python', 'Pandas', 'Alertas Automáticas', 'Scoring', 'ETL'],
          architecture: [
            { step: 'Extracción', desc: 'Ingesta programada diaria de saldos abiertos y comportamiento histórico' },
            { step: 'Motor Heurístico', desc: 'Evaluación ponderada de scoring predictivo y matrices de riesgo en Pandas' },
            { step: 'Alertas', desc: 'Disparo de notificaciones prioritarias con asignación directa al gestor' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: true,
        },
        {
          id: 'cubo-channels',
          title: 'CUBO: Plataforma de Contactabilidad y Automatización de Canales Digitales',
          category: 'SaaS / Full Stack',
          problem:
            'Altas tasas de olvido en vencimientos de deuda y sobrecarga en la atención de consultas transaccionales repetitivas.',
          solution:
            'Plataforma operativa con recordatorios automatizados de vencimientos y asistente de consultas intradiarias integrado mediante APIs a mensajería digital (Telegram).',
          impactMetric: 'Automatización del 100% de avisos de vencimiento y mejora en la contactabilidad de cartera',
          tags: ['Python', 'APIs REST', 'Telegram Bot API', 'Automatización', 'SQL'],
          architecture: [
            { step: 'Gatillo Cron', desc: 'Evaluación automática cada mañana de vencimientos a 48hs y 24hs' },
            { step: 'API Connector', desc: 'Despacho individualizado vía Telegram Bot API y webhooks seguros' },
            { step: 'Registro', desc: 'Actualización en tiempo real del estado de entrega y respuesta del cliente' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: true,
        },
        {
          id: 'ascensort-analytics',
          title: 'AscenSort: Analizador Operativo de Desvíos, Fallas y Registros Masivos',
          category: 'Desktop App',
          problem:
            'Necesidad de auditar y encontrar patrones sistemáticos de fallas sobre registros masivos no estructurados con alta volumetría.',
          solution:
            'Aplicación desarrollada en Python, Pandas y SQLite para procesar registros masivos de eventos, analizar recurrencias y generar tableros de indicadores operativos.',
          impactMetric: 'Procesamiento masivo en segundos con generación de insights para decisiones correctivas',
          tags: ['Python', 'Pandas', 'SQLite', 'Desktop GUI', 'Analítica de Desvíos'],
          architecture: [
            { step: 'Ingesta Local', desc: 'Lectura eficiente de volcados crudos de logs y tablas desestructuradas' },
            { step: 'Indexación SQLite', desc: 'Estructuración relacional para consultas de agrupamiento instantáneas' },
            { step: 'Visualización', desc: 'Gráficos de Pareto y clustering de desvíos recurrentes para operaciones' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: false,
        },
        {
          id: 'sap-powerbi-pipeline',
          title: 'Pipeline Automatizado SAP ERP + Power BI (Reporting O2C)',
          category: 'Automatización / Data',
          problem:
            'Los cierres y la consolidación de informes mensuales de gestión en Saputo Inc. demoraban 5 días hábiles debido a extracciones manuales y reconciliaciones.',
          solution:
            'Rediseño y automatización de la extracción de SAP ERP vinculada a modelos dimensionales en Power BI con medidas DAX avanzadas y validación de consistencia.',
          impactMetric: 'Reducción del tiempo de cierre de 5 a 2 días hábiles y reducción del 20% en deuda +60 días',
          tags: ['SAP ERP', 'Power BI', 'DAX', 'SQL', 'Segmentación de Cartera', 'Modelado Dimensional'],
          architecture: [
            { step: 'SAP ERP (FI/AR)', desc: 'Extracción programada de partidas abiertas y documentos compensados' },
            { step: 'Normalización', desc: 'Validaciones de integridad contable en Power Query / SQL' },
            { step: 'Capa DAX', desc: 'Medidas complejas de morosidad, DSO y flujo de cobranzas proyectadas' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: true,
          confidentialLabel: 'Saputo Inc. (Confidencial)',
          featured: false,
        },
      ],
    },
    skills: {
      tag: 'Stack Integral',
      title: 'Competencias Técnicas y Criterio Financiero',
      subtitle:
        'La ventaja de hablar fluido el lenguaje financiero de un CFO y el código de un equipo de ingeniería de software.',
      tabAll: 'Todo',
    },
    experience: {
      tag: 'Trayectoria Comprobada',
      title: 'Experiencia Profesional & Logros Cuantificables',
      subtitle:
        'Trayectoria en roles de gestión corporativa con una transición orgánica hacia la automatización con código y la analítica estratégica.',
      educationTitle: 'Formación & Especializaciones',
    },
    cvSection: {
      badge: 'Currículum Vitae Ejecutivo Oficial',
      title: '¿Revisando perfiles para tu equipo u organización?',
      description:
        'Descargá el documento PDF estructurado para reclutadores de finanzas y tecnología, o previsualizalo al instante. Contiene antecedentes detallados, métricas de mora, conciliación y stacks técnicos aplicados.',
      atsBadge: 'Optimizado para ATS corporativos',
      yearBadge: 'Actualizado 2026',
      downloadEs: 'Descargar CV (Español)',
      downloadEn: 'Download CV (English)',
      previewBtn: 'Previsualizar en pantalla',
    },
    contact: {
      tag: 'Hablemos',
      title: '¿Tenés un desafío operativo o una vacante estratégica?',
      subtitle:
        'Respondo con prontitud a consultas sobre optimización de flujos de caja, desarrollo de soluciones de backend/automatización y posiciones de liderazgo funcional.',
      directEmail: 'Correo Electrónico',
      directLinkedin: 'Perfil Profesional',
      directGithub: 'Repositorios de Código',
      formTitle: 'Enviar mensaje rápido',
      formSubtitle: 'Ingresá los datos a continuación para ponernos en contacto directo.',
      nameLabel: 'Nombre completo',
      namePlaceholder: 'Ej. Carolina Ramos',
      emailLabel: 'Email corporativo o personal',
      emailPlaceholder: 'tu@empresa.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Ej. Oportunidad laboral / Automatización de procesos',
      messageLabel: 'Mensaje o propuesta',
      messagePlaceholder: 'Contame brevemente el objetivo, área a mejorar o rol...',
      sendBtn: 'Enviar Mensaje',
      whatsappCardTitle: 'Contacto Inmediato por WhatsApp',
      whatsappCardDesc: 'Ideal para reclutadores, coordinaciones urgentes o consultas directas.',
      whatsappAction: 'Chatear por WhatsApp',
    },
  },

  en: {
    nav: {
      impact: 'Impact',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      viewCv: 'View Online CV',
      downloadCv: 'Download PDF',
      shareProfile: 'Share Profile',
      copiedAlert: 'Profile link copied to clipboard!',
    },
    hero: {
      badge: 'Available for strategic leadership and operational transformation',
      location: 'Buenos Aires, Argentina · Remote / Hybrid',
      tagline: 'Corporate Finance + Software Process Automation',
      headlinePrefix: 'I optimize high-volume operations through',
      headlineHighlight: 'process automation, data modeling, and predictive analytics.',
      subtitle:
        'Professional with over 10 years of corporate experience leading management control, operational planning, and process optimization (Order-to-Cash, credit risk, and debt collection at corporations such as Saputo Inc., DACAS LATAM, and CNH Capital). I bridge strategic business insights with applied software engineering in Python, SQL, Power BI (DAX), and APIs to eliminate bottlenecks and maximize cash flow.',
      ctaProjects: 'Explore Business Cases',
      ctaCv: 'Download Full Resume',
      ctaPreview: 'Quick Preview',
      badgeTrust1: 'Proven track record in B2B multinationals',
      badgeTrust2: 'End-to-End development (Data, APIs, Frontend)',
      cardRole: 'Finance Ops & Process Automation',
      cardFocusLabel: 'Core Focus',
      cardFocusValue: 'Credit Risk, Collections & Cash Flow',
      cardTechLabel: 'Tech Stack',
      cardMethodLabel: 'Methodology',
      cardMethodValue: 'Custom Software + Intelligent Automation',
      whatsappBtn: 'Direct WhatsApp',
      whatsappMsg: 'Hi Juan Manuel, I viewed your portfolio and would like to connect regarding an opportunity.',
    },
    impact: {
      tag: 'Proven Results',
      title: 'Measurable Impact Across Corporate Operations',
      metrics: [
        {
          value: '-30%',
          label: '30-60 Days Overdue Reduction',
          detail: 'At Saputo Inc. using behavioral segmentation models and dynamic matrices.',
        },
        {
          value: '-60%',
          label: 'Reporting & Month-End Closing Time',
          detail: 'Automated SAP ERP + Power BI pipelines, reducing cycle from 5 to 2 business days.',
        },
        {
          value: '+15 hrs/wk',
          label: 'Operational Time Saved per Team',
          detail: 'Developed Metanoia at DACAS LATAM for daily collection and aging tracking.',
        },
        {
          value: '+10 Years',
          label: 'B2B Corporate Experience',
          detail: 'Hands-on track record in FMCG, tech distribution, and corporate financing.',
        },
      ],
    },
    projects: {
      tag: 'Practical Cases & Solutions',
      title: 'Featured High-ROI Projects',
      subtitle:
        'Engineered from a business-first perspective: cutting manual hours, accelerating collections, and eliminating operational errors.',
      filterAll: 'All',
      strategicCase: '★ Strategic Case',
      problemLabel: 'Business Problem: ',
      solutionLabel: 'Technical Solution: ',
      impactLabel: 'Key Business Impact',
      viewArchitecture: 'View Architecture Flow',
      hideArchitecture: 'Hide Architecture',
      viewDemo: 'Live Demo',
      viewCode: 'View Code',
      privateBadge: 'Private Corporate System',
      items: [
        {
          id: 'metanoia-ops',
          title: 'Metanoia: Collections & Aging Management Operating Suite',
          category: 'SaaS / Full Stack',
          problem:
            'At DACAS LATAM, managing over 100 regional corporate accounts required manual consolidation across multiple countries, causing delays in anomaly detection.',
          solution:
            'Internal operational platform unifying aging metrics, payment commitments, and credit management KPIs with automated data crosses.',
          impactMetric: 'Saved an estimated 15 weekly manual hours and enabled early deviation detection',
          tags: ['Python', 'SQL', 'Power BI', 'DAX', 'Order-to-Cash', 'LATAM Operations'],
          architecture: [
            { step: 'Data Sources', desc: 'Regional billing databases & multi-currency bank statements' },
            { step: 'ETL Pipeline', desc: 'Python scripts for FX normalization and automatic reconciliation' },
            { step: 'Data Model', desc: 'Star schema in SQL consolidating overdue debt and aging buckets' },
            { step: 'Delivery / UI', desc: 'Executive Power BI dashboards with automated alerts' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: true,
          confidentialLabel: 'DACAS LATAM Operation',
          featured: true,
        },
        {
          id: 'coopmora-alerts',
          title: 'CoopMora: Early Warning & Predictive Scoring System',
          category: 'Automatización / Data',
          problem:
            'Late detection of high-risk overdue accounts and lack of predictability in critical active portfolio buckets.',
          solution:
            'Daily Python pipeline extracting and cross-referencing massive transactional data, calculating predictive risk scores and dispatching automated alerts.',
          impactMetric: 'Enabled proactive daily monitoring and drastically minimized management delays',
          tags: ['Python', 'Pandas', 'Automated Alerts', 'Risk Scoring', 'ETL'],
          architecture: [
            { step: 'Extraction', desc: 'Scheduled daily ingestion of open receivables and historical behavior' },
            { step: 'Heuristic Engine', desc: 'Weighted predictive scoring and risk matrix evaluation in Pandas' },
            { step: 'Alerting', desc: 'High-priority notifications assigned directly to collection specialists' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: true,
        },
        {
          id: 'cubo-channels',
          title: 'CUBO: Digital Channel Notification & Contactability Platform',
          category: 'SaaS / Full Stack',
          problem:
            'High payment oversight rates on invoice due dates and team overload answering repetitive balance inquiries.',
          solution:
            'Operating suite dispatching automated due date reminders and real-time query assistant integrated via APIs to messaging apps (Telegram).',
          impactMetric: '100% automated payment reminders and significant uplift in portfolio contact rate',
          tags: ['Python', 'REST APIs', 'Telegram Bot API', 'Automation', 'SQL'],
          architecture: [
            { step: 'Cron Trigger', desc: 'Automated morning scan for invoices due within 48h and 24h' },
            { step: 'API Connector', desc: 'Customized notifications via Telegram Bot API with secure webhooks' },
            { step: 'Telemetry', desc: 'Real-time logging of delivery and customer payment confirmation' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: true,
        },
        {
          id: 'ascensort-analytics',
          title: 'AscenSort: Massive Log & Operational Deviation Analyzer',
          category: 'Desktop App',
          problem:
            'Need to audit and identify recurring failure patterns across voluminous unstructured data logs.',
          solution:
            'Desktop application built in Python, Pandas, and SQLite to ingest large event logs, compute recurrence clusters, and output KPI dashboards.',
          impactMetric: 'Processes thousands of records in seconds with actionable insights for operations',
          tags: ['Python', 'Pandas', 'SQLite', 'Desktop GUI', 'Deviation Analytics'],
          architecture: [
            { step: 'Local Ingestion', desc: 'High-performance parsing of raw logs and unorganized tables' },
            { step: 'SQLite Indexing', desc: 'Relational structuring for instant aggregation and querying' },
            { step: 'Visual Reporting', desc: 'Pareto charts and recurrence clustering for corrective actions' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: false,
          featured: false,
        },
        {
          id: 'sap-powerbi-pipeline',
          title: 'Automated SAP ERP + Power BI Pipeline (O2C Reporting)',
          category: 'Automatización / Data',
          problem:
            'Monthly closing and management reporting at Saputo Inc. took 5 business days due to manual ERP dumps and reconciliations.',
          solution:
            'Redesigned and automated SAP ERP extraction linked to dimensional models in Power BI with advanced DAX measures and audit checks.',
          impactMetric: 'Cut month-end closing from 5 to 2 business days and reduced +60 days overdue debt by 20%',
          tags: ['SAP ERP', 'Power BI', 'DAX', 'SQL', 'Portfolio Segmentation', 'Dimensional Modeling'],
          architecture: [
            { step: 'SAP ERP (FI/AR)', desc: 'Scheduled extraction of open items and clearing documents' },
            { step: 'Normalization', desc: 'Integrity and accounting consistency checks in SQL / Power Query' },
            { step: 'DAX Layer', desc: 'Advanced time intelligence, DSO calculation, and cash forecast' },
          ],
          demoUrl: null,
          githubUrl: 'https://github.com/varelajm10',
          isConfidential: true,
          confidentialLabel: 'Saputo Inc. (Confidential)',
          featured: false,
        },
      ],
    },
    skills: {
      tag: 'Comprehensive Stack',
      title: 'Technical Capabilities & Financial Acumen',
      subtitle:
        'The distinct advantage of speaking the financial language of a CFO and writing the code of a software engineering team.',
      tabAll: 'All',
    },
    experience: {
      tag: 'Proven Career',
      title: 'Professional Background & Tangible Achievements',
      subtitle:
        'Corporate leadership track record with an organic transition towards automated code pipelines and executive analytics.',
      educationTitle: 'Education & Certifications',
    },
    cvSection: {
      badge: 'Official Executive Resume',
      title: 'Reviewing profiles for your team or organization?',
      description:
        'Download the structured PDF resume optimized for finance and technology leaders, or preview it on-screen instantly. Includes comprehensive career milestones, metrics, and applied tech stacks.',
      atsBadge: 'Optimized for corporate ATS systems',
      yearBadge: 'Updated 2026',
      downloadEs: 'Descargar CV (Español)',
      downloadEn: 'Download CV (English)',
      previewBtn: 'Preview On-Screen',
    },
    contact: {
      tag: "Let's Connect",
      title: 'Have an operational challenge or strategic opening?',
      subtitle:
        'I reply promptly to inquiries regarding cash flow optimization, backend/automation engineering, and functional leadership roles.',
      directEmail: 'Email Address',
      directLinkedin: 'Professional Network',
      directGithub: 'Code Repositories',
      formTitle: 'Send a quick message',
      formSubtitle: 'Fill in your details below to establish direct contact.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. Sarah Jenkins',
      emailLabel: 'Corporate or Personal Email',
      emailPlaceholder: 'you@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Job Opportunity / Process Automation',
      messageLabel: 'Message or Proposal',
      messagePlaceholder: 'Briefly describe your objectives, challenge, or role...',
      sendBtn: 'Send Message',
      whatsappCardTitle: 'Instant WhatsApp Chat',
      whatsappCardDesc: 'Ideal for recruiters, fast coordination, or direct discussions.',
      whatsappAction: 'Chat on WhatsApp',
    },
  },
};

export const personalInfo = {
  name: 'Juan Manuel Varela',
  initials: 'JMV',
  role: 'Analista Senior de Operaciones, Planeamiento y Datos · Automatización de Procesos',
  location: 'Buenos Aires, Argentina · Remoto / Híbrido',
  phone: '+54 9 11 6042-7256',
  whatsappNumber: '5491160427256',
  email: 'varelajm84@outlook.com',
  linkedin: 'https://www.linkedin.com/in/juan-m-varela1984',
  github: 'https://github.com/varelajm10',
  cvUrl: '/cv-juan-manuel-varela.pdf',
  cvUrlEn: '/cv-juan-manuel-varela-en.pdf',
  cvFileName: 'Juan-Manuel-Varela-CV.pdf',
  cvFileNameEn: 'Juan-Manuel-Varela-CV-English.pdf',
};

export const skillsCategories = [
  {
    id: 'operations-kpis',
    name: 'Análisis Operativo & Control de Desvíos',
    shortName: 'Operaciones & KPIs',
    icon: 'Briefcase',
    description:
      'Dominio de procesos corporativos de alto volumen, mitigación de mora y control de niveles de servicio (SLA).',
    skills: [
      { name: 'Seguimiento de Niveles de Servicio (SLA)', level: 'Core', detail: 'Control de tiempos de respuesta, resolución de incidentes y desvíos' },
      { name: 'Segmentación Estratégica de Bases', level: 'Core', detail: 'Matrices de comportamiento, scoring predictivo y optimización de contactabilidad' },
      { name: 'Gestión Integral Order-to-Cash (O2C)', level: 'Core', detail: 'Créditos corporativos masivos, cobranzas complejas, flujo de fondos y DSO' },
      { name: 'Balanceo y Redistribución de Carga', level: 'Avanzado', detail: 'Optimización de asignación operativa para maximizar penetración y productividad' },
    ],
  },
  {
    id: 'automation-python',
    name: 'Programación & Automatización de Procesos',
    shortName: 'Python & Automatización',
    icon: 'Terminal',
    description:
      'Desarrollo de pipelines, extracción automática de datos y bots que sustituyen tareas administrativas repetitivas.',
    skills: [
      { name: 'Python (Pandas, Scripting)', level: 'Core', detail: 'Procesamiento masivo de datos, normalización de archivos y analítica' },
      { name: 'Integración de APIs & Mensajería', level: 'Avanzado', detail: 'Webhooks, bots de mensajería (Telegram API), alertas automáticas en tiempo real' },
      { name: 'Web Scraping & Extracción ETL', level: 'Avanzado', detail: 'Automatización de descargas bancarias, fiscales y portales de clientes' },
      { name: 'Excel Avanzado & Macros VBA', level: 'Core', detail: 'BUSCARX, ÍNDICE/COINCIDIR, tablas dinámicas avanzadas y scripts VBA' },
    ],
  },
  {
    id: 'data-bi',
    name: 'Bases de Datos & Business Intelligence',
    shortName: 'Data & BI',
    icon: 'Database',
    description:
      'Modelado dimensional de datos y creación de tableros de control ejecutivos intradiarios.',
    skills: [
      { name: 'Power BI & DAX Avanzado', level: 'Core', detail: 'Time Intelligence, KPIs complejos, esquemas estrella, tableros intradiarios' },
      { name: 'SQL (PostgreSQL / SQL Server)', level: 'Core', detail: 'Consultas complejas, CTEs, agrupamientos, vistas y cruce masivo de tablas' },
      { name: 'Modelado Dimensional', level: 'Avanzado', detail: 'Power Query (M), limpieza y estructuración de fuentes heterogéneas' },
      { name: 'Modelos de Previsión de Flujo de Fondos', level: 'Core', detail: 'Proyecciones de cobranza, dimensionamiento de recursos y escenarios' },
    ],
  },
  {
    id: 'erp-enterprise',
    name: 'Sistemas de Gestión ERP & Frontend',
    shortName: 'ERP & Software',
    icon: 'Code2',
    description:
      'Interacción a nivel transaccional y analítico con sistemas enterprise y desarrollo de soluciones web.',
    skills: [
      { name: 'SAP ERP (Módulos FI / AR)', level: 'Core', detail: 'Módulos transaccionales y reportería de cuentas a cobrar y gestión contable' },
      { name: 'Odoo ERP & Sistemas de Facturación', level: 'Avanzado', detail: 'Circuitos administrativos, conciliaciones y exportación estructurada' },
      { name: 'React & Tailwind CSS', level: 'Avanzado', detail: 'Diseño de dashboards web interactivos, portales internos y consumo de APIs' },
      { name: 'Git & GitHub', level: 'Core', detail: 'Control de versiones, flujos colaborativos y buenas prácticas de desarrollo' },
    ],
  },
];

export const experienceData = [
  {
    id: 'exp-dacas',
    role: 'Analista Senior de Créditos, Cobranzas y Operaciones',
    company: 'DACAS (Operación Regional LATAM)',
    period: 'Mar 2025 — Feb 2026',
    location: 'Buenos Aires, Argentina · Híbrido',
    summary:
      'Estandarización y control operativo regional sobre cartera corporativa de más de 100 clientes clave en América Latina.',
    achievements: [
      'Centralicé y estandaricé las métricas operativas y el seguimiento de cartera utilizando SQL y Power BI, facilitando el control cruzado entre países y la detección temprana de anomalías.',
      'Diseñé y desarrollé Metanoia, herramienta operativa para la gestión diaria de cobros, antigüedad de saldos y seguimiento de indicadores clave, ahorrando un estimado de 15 horas semanales de trabajo manual al equipo.',
      'Implementé mecanismos de seguimiento diario de casos críticos, reduciendo tiempos muertos y coordinando con las áreas comerciales y operativas ajustes ante desvíos de gestión.',
    ],
    technologies: ['SQL', 'Power BI', 'DAX', 'Python', 'Order-to-Cash', 'Gestión Regional LATAM'],
  },
  {
    id: 'exp-saputo',
    role: 'Analista Senior de Gestión de Cartera y Datos',
    company: 'Saputo Inc. (Líder en Consumo Masivo / Retail)',
    period: 'Jul 2018 — May 2024',
    location: 'Buenos Aires, Argentina',
    summary:
      'Liderazgo analítico del ciclo de créditos, cobranzas masivas y reporting de flujo de fondos para grandes cadenas y distribuidores.',
    achievements: [
      'Diseñé e implementé un modelo de segmentación analítica de cartera por matrices de comportamiento, reduciendo la deuda +60 días en un 20% en 6 meses (tramo 30–60 días: -30%; mora temprana: -11%), optimizando la contactabilidad del equipo.',
      'Rediseñé y automaticé la generación de reportes periódicos en SAP ERP y Power BI (DAX), reduciendo los tiempos de cierre y consolidación de 5 a solo 2 días hábiles.',
      'Desarrollé modelos en SQL y hojas de cálculo para la proyección de volumen y flujo de fondos, permitiendo anticipar escenarios y dimensionar la asignación de recursos.',
    ],
    technologies: ['SAP ERP (FI/AR)', 'Power BI', 'DAX', 'SQL', 'Excel Avanzado', 'Modelos Predictivos'],
  },
  {
    id: 'exp-cnh',
    role: 'Analista Semi-Senior de Procesos y Cuentas',
    company: 'XCMG - CNH Capital (Maquinaria & Financiación)',
    period: 'Sep 2016 — Jun 2018',
    location: 'Buenos Aires, Argentina',
    summary:
      'Gestión de cuentas corporativas, conciliaciones bancarias complejas y análisis de recupero.',
    achievements: [
      'Automaticé rutinas de conciliación de cuentas y flujos transaccionales mediante SAP ERP y Excel avanzado, acelerando los tiempos de procesamiento de información al cierre de período.',
      'Efectué análisis periódicos sobre carteras activas y vencidas para redefinir prioridades de contacto y límites operativos de crédito.',
    ],
    technologies: ['SAP ERP', 'Conciliaciones Complejas', 'Excel Avanzado / VBA', 'Riesgo Crediticio'],
  },
  {
    id: 'exp-ccu',
    role: 'Analista Junior de Reportes y Gestión Operativa',
    company: 'CCU Argentina (Bebidas & Consumo Masivo)',
    period: 'Oct 2014 — Oct 2016',
    location: 'Buenos Aires, Argentina',
    summary:
      'Generación de reportes de gestión de cartera comercial y seguimiento de desvíos operativos.',
    achievements: [
      'Confección y emisión de informes diarios, semanales y mensuales de seguimiento de cuentas y desvíos utilizando macros de Excel (VBA) y módulos transaccionales del ERP.',
    ],
    technologies: ['Excel VBA', 'Reportería Operativa', 'Sistemas ERP'],
  },
];

export const educationAndCertifications = [
  {
    title: 'Licenciatura en Administración de Empresas',
    institution: 'Universidad Abierta Interamericana (UAI)',
    detail: 'Cursada completa (tesis en elaboración). Foco en Finanzas Corporativas, Control de Gestión y Dirección de Operaciones.',
  },
  {
    title: 'Diplomatura en Python para Análisis de Datos',
    institution: 'Universidad Tecnológica Nacional (UTN)',
    detail: 'Especialización en automatización, pipelines de datos masivos, Pandas y analítica aplicada.',
  },
  {
    title: 'Power BI: DAX y Modelado de Datos',
    institution: 'Universidad Tecnológica Nacional (UTN)',
    detail: 'Modelado dimensional en esquema estrella, DAX avanzado, Time Intelligence y visualización ejecutiva.',
  },
];
