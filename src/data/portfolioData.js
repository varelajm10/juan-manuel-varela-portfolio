// ============================================================================
// DICCIONARIO BILINGÜE (ES / EN) CON TONO HUMANO Y DIRECTO
// ============================================================================

export const personalInfo = {
  name: 'Juan Manuel Varela',
  initials: 'JMV',
  role: {
    es: 'Finanzas Corporativas & Automatización con Python',
    en: 'Corporate Finance & Python Automation',
  },
  location: {
    es: 'Buenos Aires, Argentina · Remoto / Híbrido',
    en: 'Buenos Aires, Argentina · Remote / Hybrid',
  },
  phone: '+54 9 11 6042-7256',
  whatsappNumber: '5491160427256',
  email: 'varelajm84@outlook.com',
  linkedin: 'https://www.linkedin.com/in/juan-m-varela1984',
  github: 'https://github.com/varelajm10',
  cvUrl: '/cv-juan-manuel-varela.pdf',
  cvUrlEn: '/cv-juan-manuel-varela-en.pdf',
  cvFileName: 'CV-Juan-Manuel-Varela.pdf',
  cvFileNameEn: 'CV-Juan-Manuel-Varela-EN.pdf',
};

export const content = {
  es: {
    nav: {
      about: 'Sobre Mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      simulator: 'Simulador',
      methodology: 'Metodología',
      experience: 'Trayectoria',
      contact: 'Contacto',
      downloadCv: 'Descargar CV (PDF)',
    },
    hero: {
      badge: 'Disponible para roles en Finanzas, Operaciones & Automatización',
      headline:
        'Administración, finanzas corporativas y herramientas que resuelven ',
      headlineSub: 'el trabajo manual de todos los días.',
      storyP1:
        'Llevo más de diez años en la trinchera de la administración y las finanzas corporativas. Pasé por empresas de consumo masivo, maquinaria y distribución tecnológica (Saputo Inc., DACAS LATAM, CNH Capital), administrando carteras masivas de clientes, aprobando límites de crédito, conciliando bancos y peleando día a día contra la morosidad para cuidar el flujo de fondos.',
      storyP2:
        'El punto de quiebre fue el hartazgo de ver cómo los equipos queman 15 a 20 horas por semana cruzando planillas a mano, copiando datos entre sistemas y corriendo atrás de cierres interminables. Ahí decidí aprender a programar en serio: scripts en Python, consultas avanzadas en SQL y modelos en Power BI para resolver mis propios cuellos de botella operativos.',
      storyP3:
        'Hoy uno esos dos mundos. No soy un desarrollador teórico ni un analista que solo hace presentaciones en PowerPoint: construyo herramientas, pipelines y tableros que funcionan en producción, le quitan el trabajo repetitivo a la gente y le devuelven tiempo al negocio para tomar decisiones estratégicas.',
      ctaProjects: 'Ver Proyectos Reales',
      ctaCv: 'Descargar CV (PDF)',
      ctaWhatsapp: 'WhatsApp Directo',
    },
    metrics: [
      {
        value: '-30%',
        label: 'Reducción de mora 30–60 días',
        detail: 'En Saputo Inc., implementando matrices analíticas de comportamiento y segmentación de cartera.',
      },
      {
        value: '5 ➔ 2 días',
        label: 'Cierre y consolidación de reportes',
        detail: 'Automatización de pipelines en SAP ERP y Power BI eliminando la carga manual de datos.',
      },
      {
        value: '+15 h/sem',
        label: 'Ahorro operativo por equipo',
        detail: 'Desarrollo de Metanoia en DACAS LATAM para seguimiento diario de saldos y cobranzas.',
      },
      {
        value: '+10 Años',
        label: 'Experiencia real en operaciones',
        detail: 'En empresas multinacionales B2B, sin intermediarios ni teoría abstracta.',
      },
    ],
    projects: {
      tag: 'Casos Reales con Prueba de Negocio',
      title: 'Herramientas construidas para resolver fricción operativa',
      subtitle:
        'Cada proyecto responde a una necesidad concreta: eliminar horas manuales, evitar errores en conciliaciones o monitorear deudores en tiempo real.',
      problemLabel: 'El Problema:',
      solutionLabel: 'La Solución:',
      impactLabel: 'El Impacto / Métrica:',
      privateBadge: 'Privado',
      publicBadge: 'Código Disponible',
      privateCaseLabel: 'Proyecto Corporativo / Privado',
      viewRepo: 'Ver Repositorio',
      viewCase: 'Ver resumen de caso',
      hideCase: 'Cerrar detalle',
      items: [
        {
          id: 'cubo',
          title: 'CUBO — Plataforma de Gestión de Cobranzas & Aging',
          category: 'Web App & API',
          problem:
            'Dispersión constante en el seguimiento de deudores, conciliación manual de pagos y falta de proyección certera de mora entre múltiples canales de cobro.',
          solution:
            'Aplicación web y API construida con FastAPI, MongoDB y frontend interactivo para seguimiento de compromisos, clasificación de riesgo crediticio y aging de saldos.',
          impactMetric: 'Automatización completa del cálculo de antigüedad de deuda y disparador de alertas de cobro.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'APIs REST', 'Order-to-Cash'],
          isPrivate: true,
          summaryCase:
            'Diseñada para reemplazar el cruce manual de planillas de cobranza por un sistema unificado con estados de cuenta en tiempo real y notificaciones automáticas.',
          githubUrl: 'https://github.com/varelajm10',
        },
        {
          id: 'gladys',
          title: 'G.L.A.D.Y.S. — Monitor de Riesgo Crediticio & Deudores',
          category: 'Pipeline & Scraping',
          problem:
            'Consulta manual, dispersa y repetitiva de boletines oficiales, fuentes de noticias financieras y registros públicos de morosidad comercial.',
          solution:
            'Pipeline en Python con web scraping y procesamiento de texto que consolida alertas tempranas de insolvencia y emite reportes diarios por correo y panel en Streamlit.',
          impactMetric: 'Detección temprana de alertas de insolvencia y reducción a minutos en el monitoreo diario.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Alertas Automáticas', 'Scoring'],
          isPrivate: false,
          summaryCase:
            'Rastreo programado de bases públicas y alertas automáticas a casillas de analistas ante pedidos de quiebra, cheques rechazados o cambios de situación crediticia.',
          githubUrl: 'https://github.com/varelajm10',
        },
        {
          id: 'ascensort',
          title: 'AscenSort — Análisis Operativo & Control Estadístico',
          category: 'Desktop App',
          problem:
            'Fallas repetitivas sin trazabilidad en reportes de servicio técnico, falta de identificación de causas raíz y riesgo constante de incumplimiento de SLAs.',
          solution:
            'Aplicación de escritorio en Python (CustomTkinter + pandas + matplotlib) para ingesta de registros masivos, métricas de mantenimiento y gráficos de control de desvíos.',
          impactMetric: 'Detección inmediata de patrones de averías y generación de reportes ejecutivos automatizados.',
          tags: ['Python', 'Pandas', 'CustomTkinter', 'Matplotlib', 'Control Estadístico'],
          isPrivate: false,
          summaryCase:
            'Procesa miles de líneas de registros técnicos crudos en segundos, graficando frecuencias de falla y tiempos de resolución sin requerir conexión a internet.',
          githubUrl: 'https://github.com/varelajm10',
        },
      ],
    },
    skills: {
      tag: 'Jerarquización Honesta',
      title: 'Habilidades agrupadas por nivel de uso real',
      subtitle:
        'Sin listas infladas ni palabras de relleno. Separado exactamente entre lo que hago todos los días en finanzas, cómo lo programo con código y las herramientas de soporte.',
      blocks: [
        {
          category: '1. Core Financiero & Procesos',
          subtitle: 'El criterio de negocio forjado en más de 10 años de gestión',
          items: [
            { name: 'Gestión de Créditos y Cobranzas', detail: 'Evaluación de riesgo crediticio, fijación de límites y recupero de cartera vencida.' },
            { name: 'Conciliaciones Bancarias & Cuentas Corrientes', detail: 'Control de extractos, imputación de pagos y desvíos transaccionales.' },
            { name: 'Auditoría de Cuentas por Cobrar / Pagar', detail: 'Saneamiento de partidas abiertas, gestión de retenciones y soporte al cierre.' },
            { name: 'Modelado de KPIs & Flujo de Fondos', detail: 'Cálculo de DSO, antigüedad de deuda (aging), previsión de cobranza y mora temprana.' },
          ],
        },
        {
          category: '2. Automatización & Datos (Dominio Diario)',
          subtitle: 'Las herramientas con las que resuelvo problemas operativos todos los días',
          items: [
            { name: 'Python (Pandas, Requests, Async)', detail: 'Limpieza masiva de datos, procesamiento de planillas, integración con APIs y scripts.' },
            { name: 'Power BI & DAX Avanzado', detail: 'Modelado en esquema estrella, Time Intelligence y dashboards para gerencia y directorio.' },
            { name: 'SQL (PostgreSQL / SQL Server)', detail: 'Consultas complejas, CTEs, agrupamientos y cruce masivo de bases de datos.' },
            { name: 'Extracción de Datos (Web Scraping / APIs)', detail: 'Automatización de descargas bancarias, fiscales y monitoreo de fuentes públicas.' },
          ],
        },
        {
          category: '3. Herramientas de Soporte & Despliegue',
          subtitle: 'Tecnologías que complementan la infraestructura de las soluciones',
          items: [
            { name: 'Sistemas ERP (SAP FI/AR, Odoo)', detail: 'Operación transaccional y extracción de módulos de clientes y facturación.' },
            { name: 'FastAPI & APIs REST', detail: 'Construcción de endpoints ligeros y microservicios para intercomunicar sistemas.' },
            { name: 'Git & GitHub / Linux & Bash', detail: 'Control de versiones, trabajo estructurado y ejecución de rutinas en servidores.' },
            { name: 'React básico & Tailwind CSS', detail: 'Desarrollo de interfaces de usuario funcionales para portales y tableros web.' },
          ],
        },
      ],
    },
    calculator: {
      tag: 'Simulador de Impacto Operativo',
      title: '¿Cuántas horas pierde tu equipo en tareas manuales?',
      subtitle:
        'Calculá el tiempo operativo y las jornadas que se pueden recuperar al mes eliminando planillas manuales, conciliaciones repetitivas y armado manual de reportes.',
      teamLabel: 'Tamaño del equipo administrativo / operativo',
      personLabel: 'persona',
      peopleLabel: 'personas',
      hoursLabel: 'Horas semanales manuales por persona',
      hoursSuffix: 'h/semana',
      hoursNote:
        'Conciliaciones bancarias, cruce de planillas Excel, bajada de comprobantes y armado de reportes periódicos.',
      savedMonthlyTitle: 'Horas Operativas Ahorrables al Mes',
      savedMonthlyDesc: (saved, total) =>
        `Reducción estimada del 70% sobre las ${total} horas manuales totales dedicadas al mes.`,
      daysLabel: 'Días Laborales',
      daysDesc: 'días devueltos al equipo al mes',
      efficiencyLabel: 'Eficiencia',
      efficiencyDesc: 'en fricción manual y errores',
      ctaQuestion: '¿Querés recuperar estas horas en tu operación?',
      ctaBtn: 'Hablemos de tu proceso',
    },
    methodology: {
      tag: 'Estructura de Trabajo',
      title: 'Metodología de trabajo en 4 pasos',
      subtitle:
        'El código y los reportes responden a una arquitectura de procesos bien pensada. Cómo transformo una operación manual en un circuito ordenado y escalable.',
      steps: [
        {
          number: '01',
          title: 'Diagnóstico & Detección de Fricción',
          description:
            'Relevamiento del circuito administrativo (Order-to-Cash, conciliaciones, facturación). Identificación de cuellos de botella, riesgos de error y horas invertidas.',
        },
        {
          number: '02',
          title: 'Limpieza e Integración de Datos',
          description:
            'Conexión y saneamiento de fuentes dispersas (ERPs, extractos bancarios, bases SQL, hojas de cálculo) para asegurar trazabilidad y datos limpios.',
        },
        {
          number: '03',
          title: 'Automatización de Flujos',
          description:
            'Implementación de scripts y pipelines en Python / herramientas digitales que procesan, concilian y alertan sin intervención manual ni margen de error.',
        },
        {
          number: '04',
          title: 'Dashboards & Adopción en Equipo',
          description:
            'Tableros ejecutivos en Power BI para control en tiempo real, documentación clara y acompañamiento del equipo para garantizar una adopción fluida.',
        },
      ],
    },
    experience: {
      tag: 'Trayectoria Real',
      title: 'Experiencia corporativa y logros concretos',
      subtitle:
        'Más de una década de gestión en consumo masivo, maquinaria y distribución de tecnología.',
      items: [
        {
          role: 'Analista Senior de Créditos, Cobranzas y Operaciones',
          company: 'DACAS (Operación Regional LATAM)',
          period: '2025 — 2026',
          location: 'Buenos Aires · Híbrido',
          summary:
            'Control operativo y crediticio sobre cartera regional de más de 100 cuentas en América Latina.',
          achievements: [
            'Centralicé métricas operativas y seguimiento de clientes usando SQL y Power BI, facilitando el control cruzado entre países.',
            'Diseñé y desarrollé Metanoia, herramienta interna para gestión diaria de cobros y saldos que ahorró ~15 horas semanales de carga manual al equipo.',
            'Implementé alertas tempranas para casos críticos de cartera, reduciendo tiempos muertos y coordinando ajustes directos con comercial.',
          ],
          tags: ['SQL', 'Power BI', 'Python', 'Order-to-Cash'],
        },
        {
          role: 'Analista Senior de Gestión de Cartera y Datos',
          company: 'Saputo Inc. (Consumo Masivo / Retail)',
          period: '2018 — 2024',
          location: 'Buenos Aires',
          summary:
            'Administración de cuentas corrientes comerciales, riesgo crediticio y proyecciones de recaudación.',
          achievements: [
            'Implementé un modelo de segmentación de cartera por matrices de comportamiento, bajando la mora de 30-60 días en un 30% y la deuda +60 en un 20%.',
            'Automaticé reportes periódicos entre SAP ERP y Power BI (DAX), reduciendo el tiempo de cierre y consolidación de 5 a 2 días hábiles.',
            'Construí modelos en SQL para proyección de flujo de fondos, permitiendo anticipar escenarios financieros para la gerencia.',
          ],
          tags: ['SAP ERP (FI/AR)', 'Power BI', 'DAX', 'SQL', 'Excel Avanzado'],
        },
        {
          role: 'Analista de Procesos y Cuentas',
          company: 'XCMG - CNH Capital (Maquinaria & Créditos)',
          period: '2016 — 2018',
          location: 'Buenos Aires',
          summary:
            'Conciliaciones bancarias complejas, seguimiento de financiamiento y recupero de créditos.',
          achievements: [
            'Automaticé rutinas de conciliación y flujos transaccionales mediante SAP y Excel avanzado, agilizando el procesamiento al cierre de período.',
            'Efectué análisis periódicos de carteras activas y vencidas para definir prioridades de contacto y límites de crédito.',
          ],
          tags: ['SAP ERP', 'Conciliaciones', 'Excel VBA', 'Riesgo'],
        },
        {
          role: 'Analista de Reportes y Gestión Operativa',
          company: 'CCU Argentina (Consumo Masivo)',
          period: '2014 — 2016',
          location: 'Buenos Aires',
          summary:
            'Confección de informes operativos de cuentas corrientes y seguimiento de desvíos con macros de Excel.',
          achievements: [
            'Emisión periódica de reportes diarios, semanales y mensuales de cuentas comerciales utilizando VBA y módulos del ERP.',
          ],
          tags: ['Excel VBA', 'Reportería', 'ERPs'],
        },
      ],
    },
    contact: {
      tag: 'Contacto Directo',
      title: 'Hablemos',
      subtitle:
        'Si en tu equipo están perdiendo horas con planillas manuales, querés optimizar cobranzas o tenés una oportunidad laboral para un perfil de finanzas y código, escribime directamente.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappBtn: 'Chatear →',
      emailTitle: 'Correo Electrónico',
      copiedEmail: 'Copiado',
      formTitle: 'Enviar mensaje',
      formSubtitle: 'Completá los datos y te respondo a la brevedad.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Correo Electrónico',
      emailPlaceholder: 'tu@empresa.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Motivo de contacto',
      messageLabel: 'Mensaje',
      messagePlaceholder:
        'Contame brevemente sobre tu equipo, circuito a mejorar o la posición...',
      sendBtn: 'Enviar Mensaje',
      statusSent: 'Abriendo tu correo para enviar el mensaje...',
    },
    footer: {
      location: 'Buenos Aires, Argentina.',
      title: 'Portfolio profesional',
      vercel: 'Desplegado en Vercel',
      backToTop: 'Inicio',
    },
  },

  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      skills: 'Skills',
      simulator: 'Simulator',
      methodology: 'Methodology',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Download Resume (PDF)',
    },
    hero: {
      badge: 'Available for Finance, Operations & Automation roles',
      headline:
        'Corporate finance, operations, and applied code solving ',
      headlineSub: 'everyday manual friction.',
      storyP1:
        'I have spent over a decade in the operational trenches of corporate administration and finance. I worked across FMCG, heavy machinery, and tech distribution corporations (Saputo Inc., DACAS LATAM, CNH Capital), managing extensive customer portfolios, approving credit limits, reconciling bank accounts, and actively mitigating overdue debt to protect cash flow.',
      storyP2:
        'The turning point was growing weary of watching teams burn 15 to 20 hours every week manually matching spreadsheets, copying records across fragmented ERPs, and scrambling through never-ending month-end closings. That led me to take programming seriously: writing robust Python scripts, advanced SQL queries, and Power BI models to solve my own team’s operational bottlenecks.',
      storyP3:
        'Today, I bridge those two worlds. I am neither an abstract developer nor an analyst confined to PowerPoint decks: I build tools, pipelines, and dashboards that run in production, strip away repetitive grunt work, and give businesses back the time they need to make strategic decisions.',
      ctaProjects: 'View Practical Projects',
      ctaCv: 'Download Resume (PDF)',
      ctaWhatsapp: 'Direct WhatsApp',
    },
    metrics: [
      {
        value: '-30%',
        label: '30–60 Days Overdue Reduction',
        detail: 'At Saputo Inc., deploying behavioral segmentation and risk matrices.',
      },
      {
        value: '5 ➔ 2 days',
        label: 'Closing & Reporting Cycle',
        detail: 'Automated SAP ERP + Power BI pipelines eliminating manual data dumps.',
      },
      {
        value: '+15 h/wk',
        label: 'Operational Time Saved / Team',
        detail: 'Engineered Metanoia at DACAS LATAM for daily balance and collections tracking.',
      },
      {
        value: '+10 Years',
        label: 'Corporate Operations Experience',
        detail: 'Hands-on track record in B2B multinationals, without intermediaries.',
      },
    ],
    projects: {
      tag: 'Real-World Business Cases',
      title: 'Tools Engineered to Eliminate Operational Friction',
      subtitle:
        'Each project addresses an exact business pain: eliminating manual hours, avoiding reconciliation errors, or tracking debtors in real time.',
      problemLabel: 'The Problem:',
      solutionLabel: 'The Solution:',
      impactLabel: 'The Impact / Metric:',
      privateBadge: 'Private',
      publicBadge: 'Code Available',
      privateCaseLabel: 'Corporate / Private System',
      viewRepo: 'View Repository',
      viewCase: 'View case summary',
      hideCase: 'Close details',
      items: [
        {
          id: 'cubo',
          title: 'CUBO — Collections Management & Aging Platform',
          category: 'Web App & API',
          problem:
            'Fragmented follow-up on overdue debtors, manual payment matching, and lack of reliable aging projections across sales channels.',
          solution:
            'Web platform and API built with FastAPI, MongoDB, and interactive UI for payment commitment tracking, credit risk scoring, and balance aging.',
          impactMetric: 'Full automation of receivable aging calculations and automated collection alerts.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'REST APIs', 'Order-to-Cash'],
          isPrivate: true,
          summaryCase:
            'Designed to replace manual spreadsheet reconciliation with a unified hub providing real-time statements and automated notifications.',
          githubUrl: 'https://github.com/varelajm10',
        },
        {
          id: 'gladys',
          title: 'G.L.A.D.Y.S. — Credit Risk & Debtor Monitor',
          category: 'Pipeline & Scraping',
          problem:
            'Manual, repetitive browsing of official gazettes, financial news outlets, and commercial bankruptcy registries.',
          solution:
            'Python pipeline with web scraping and automated text processing that aggregates early insolvency alerts and delivers daily email digests and Streamlit reports.',
          impactMetric: 'Early insolvency detection reduced from hours to minutes in daily monitoring.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Automated Alerts', 'Scoring'],
          isPrivate: false,
          summaryCase:
            'Scheduled scanning of public databases dispatching instant alerts to analysts upon bankruptcy filings, rejected checks, or credit rating downgrades.',
          githubUrl: 'https://github.com/varelajm10',
        },
        {
          id: 'ascensort',
          title: 'AscenSort — Operational Analysis & Statistical Control',
          category: 'Desktop App',
          problem:
            'Recurring equipment failures without traceability in field reports and constant SLA compliance risks.',
          solution:
            'Python desktop app (CustomTkinter + pandas + matplotlib) for massive raw event log ingestion, maintenance metrics, and statistical control charts.',
          impactMetric: 'Instant breakdown pattern discovery and automated executive reporting.',
          tags: ['Python', 'Pandas', 'CustomTkinter', 'Matplotlib', 'Statistical Control'],
          isPrivate: false,
          summaryCase:
            'Parses thousands of unstructured log lines in seconds, plotting failure frequencies and resolution times without requiring internet connectivity.',
          githubUrl: 'https://github.com/varelajm10',
        },
      ],
    },
    skills: {
      tag: 'Honest Hierarchy',
      title: 'Skills Grouped by Actual Day-to-Day Use',
      subtitle:
        'No inflated keyword stuffing. Structured cleanly between daily corporate finance routines, practical code automation, and supporting tools.',
      blocks: [
        {
          category: '1. Core Finance & Processes',
          subtitle: 'Business judgment honed across 10+ years of corporate management',
          items: [
            { name: 'Credit & Collections Management', detail: 'Credit risk assessments, exposure limits, and bad-debt portfolio recovery.' },
            { name: 'Bank & Ledger Reconciliations', detail: 'Statement audits, cash allocation, and transactional discrepancy resolution.' },
            { name: 'AR / AP Audits & Closing Support', detail: 'Open item cleanup, tax withholding certificates, and month-end closing support.' },
            { name: 'Financial KPIs & Cash Flow Modeling', detail: 'DSO metrics, debt aging, collection velocity, and liquidity forecasting.' },
          ],
        },
        {
          category: '2. Automation & Data (Daily Stack)',
          subtitle: 'The primary tools I use every day to solve business bottlenecks',
          items: [
            { name: 'Python (Pandas, Requests, Async)', detail: 'Massive data cleaning, spreadsheet automation, API integration, and headless scripts.' },
            { name: 'Power BI & Advanced DAX', detail: 'Star schema modeling, Time Intelligence, and executive dashboards for C-level reporting.' },
            { name: 'SQL (PostgreSQL / SQL Server)', detail: 'Complex queries, CTEs, window functions, and cross-database reconciliation.' },
            { name: 'Data Extraction (Web Scraping / APIs)', detail: 'Automated retrieval of banking, fiscal, and public credit registry data.' },
          ],
        },
        {
          category: '3. Supporting Tools & Deployment',
          subtitle: 'Technologies that power and support robust solution delivery',
          items: [
            { name: 'ERP Systems (SAP FI/AR, Odoo)', detail: 'Transactional operations and customer ledger extraction from core enterprise modules.' },
            { name: 'FastAPI & REST APIs', detail: 'Lightweight microservices and webhook endpoints connecting decoupled internal systems.' },
            { name: 'Git & GitHub / Linux & Bash', detail: 'Structured version control, collaborative workflows, and automated cron execution.' },
            { name: 'Core React & Tailwind CSS', detail: 'Functional frontends and clean dashboards for internal portals and web tools.' },
          ],
        },
      ],
    },
    calculator: {
      tag: 'Operational Impact Simulator',
      title: 'How many manual hours does your team lose?',
      subtitle:
        'Calculate the monthly operational hours and working days recovered by eliminating manual spreadsheets, repetitive reconciliations, and manual reports.',
      teamLabel: 'Administrative / Operations team size',
      personLabel: 'person',
      peopleLabel: 'people',
      hoursLabel: 'Weekly manual hours per person',
      hoursSuffix: 'h/week',
      hoursNote:
        'Bank reconciliations, Excel spreadsheet crosses, voucher downloads, and recurring report compilation.',
      savedMonthlyTitle: 'Recoverable Operational Hours / Month',
      savedMonthlyDesc: (saved, total) =>
        `Estimated 70% reduction over ${total} total manual hours spent per month.`,
      daysLabel: 'Working Days',
      daysDesc: 'business days returned to team each month',
      efficiencyLabel: 'Efficiency',
      efficiencyDesc: 'reduction in manual friction & errors',
      ctaQuestion: 'Want to reclaim these hours in your operation?',
      ctaBtn: "Let's discuss your workflow",
    },
    methodology: {
      tag: 'Working Framework',
      title: '4-Step Operational Framework',
      subtitle:
        'Every script and dashboard responds to well-designed process architecture. How I turn manual operations into streamlined, scalable workflows.',
      steps: [
        {
          number: '01',
          title: 'Diagnosis & Friction Mapping',
          description:
            'Full review of administrative workflows (Order-to-Cash, reconciliations, billing). Pinpointing bottlenecks, risk vectors, and wasted hours.',
        },
        {
          number: '02',
          title: 'Data Cleaning & Integration',
          description:
            'Connecting and sanitizing fragmented data sources (ERPs, bank statements, SQL databases, spreadsheets) to ensure traceability.',
        },
        {
          number: '03',
          title: 'Workflow Automation',
          description:
            'Deploying robust Python scripts and pipelines that process, reconcile, and notify without human error or intervention.',
        },
        {
          number: '04',
          title: 'Dashboards & Team Adoption',
          description:
            'Real-time Power BI control dashboards, clear documentation, and hands-on team enablement to guarantee frictionless adoption.',
        },
      ],
    },
    experience: {
      tag: 'Proven Career',
      title: 'Corporate Background & Measurable Results',
      subtitle:
        'Over a decade of leadership in FMCG, heavy equipment, and technology distribution.',
      items: [
        {
          role: 'Senior Credit, Collections & Operations Analyst',
          company: 'DACAS (LATAM Regional Operation)',
          period: '2025 — 2026',
          location: 'Buenos Aires · Hybrid',
          summary:
            'Operational and credit control across 100+ strategic corporate accounts in Latin America.',
          achievements: [
            'Standardized operational and collection metrics using SQL and Power BI, enabling cross-border auditing and early anomaly detection.',
            'Engineered Metanoia, an internal daily collections tool that saved ~15 manual weekly hours across the team.',
            'Implemented early-warning triggers for critical accounts, slashing idle delays and coordinating real-time commercial adjustments.',
          ],
          tags: ['SQL', 'Power BI', 'Python', 'Order-to-Cash'],
        },
        {
          role: 'Senior Portfolio & Data Analyst',
          company: 'Saputo Inc. (FMCG / Retail Leader)',
          period: '2018 — 2024',
          location: 'Buenos Aires',
          summary:
            'Management of commercial receivables, credit exposure, and rolling cash flow projections.',
          achievements: [
            'Designed a behavioral segmentation matrix, reducing 30-60 day overdue debt by 30% and +60 day debt by 20%.',
            'Automated SAP ERP + Power BI (DAX) closing pipelines, reducing reporting cycle from 5 to 2 business days.',
            'Built predictive SQL models for cash inflow forecasting, empowering management with proactive liquidity scenarios.',
          ],
          tags: ['SAP ERP (FI/AR)', 'Power BI', 'DAX', 'SQL', 'Advanced Excel'],
        },
        {
          role: 'Process & Receivables Analyst',
          company: 'XCMG - CNH Capital (Machinery & Financing)',
          period: '2016 — 2018',
          location: 'Buenos Aires',
          summary:
            'Complex bank reconciliations, corporate financing audits, and debt recovery.',
          achievements: [
            'Automated ledger reconciliation routines via SAP and advanced Excel, speeding up period-end closing times.',
            'Analyzed active and delinquent accounts to re-calibrate contact priorities and credit parameters.',
          ],
          tags: ['SAP ERP', 'Reconciliations', 'Excel VBA', 'Risk'],
        },
        {
          role: 'Operations & Reporting Analyst',
          company: 'CCU Argentina (Beverages & FMCG)',
          period: '2014 — 2016',
          location: 'Buenos Aires',
          summary:
            'Compilation of daily/monthly receivable status reports and deviation audits with Excel macros.',
          achievements: [
            'Produced scheduled tracking reports of commercial accounts and billing variances utilizing VBA and core ERP modules.',
          ],
          tags: ['Excel VBA', 'Reporting', 'ERPs'],
        },
      ],
    },
    contact: {
      tag: 'Direct Contact',
      title: "Let's Connect",
      subtitle:
        'If your team is losing valuable hours to manual spreadsheets, looking to streamline collections, or seeking a proven finance-and-code hybrid, reach out directly.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappBtn: 'Chat Now →',
      emailTitle: 'Email Address',
      copiedEmail: 'Copied',
      formTitle: 'Send a Message',
      formSubtitle: 'Leave your details below and I will get back to you promptly.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Reason for reaching out',
      messageLabel: 'Message',
      messagePlaceholder:
        'Briefly tell me about your team, workflow bottleneck, or open role...',
      sendBtn: 'Send Message',
      statusSent: 'Opening your email client to send the message...',
    },
    footer: {
      location: 'Buenos Aires, Argentina.',
      title: 'Professional portfolio',
      vercel: 'Deployed on Vercel',
      backToTop: 'Top',
    },
  },
};
