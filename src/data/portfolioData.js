// ============================================================================
// ARCHIVO CENTRAL DE DATOS DEL PORTFOLIO - JUAN MANUEL VARELA
// Datos reales extraídos de su trayectoria, CVs ejecutivos y perfil de GitHub
// ============================================================================

export const personalInfo = {
  name: 'Juan Manuel Varela',
  initials: 'JMV',
  role: 'Analista Senior de Operaciones, Planeamiento y Datos · Automatización de Procesos',
  badge: 'Disponible para roles estratégicos y transformación operativa',
  headlinePrefix: 'Optimizo operaciones de alto volumen mediante',
  headlineHighlight: 'automatización de procesos, modelado de datos y analítica predictiva.',
  subtitle:
    'Profesional con más de 10 años de trayectoria corporativa liderando el control de gestión, planeamiento operativo y optimización de procesos (Order-to-Cash, créditos masivos y recupero de cartera en empresas como Saputo Inc., DACAS LATAM y CNH Capital). Combino la visión estratégica del negocio con ingeniería aplicada en Python, SQL, Power BI (DAX) y APIs para eliminar cuellos de botella y maximizar la rentabilidad.',
  location: 'Buenos Aires, Argentina · Remoto / Híbrido',
  phone: '+54 9 11 6042-7256',
  email: 'varelajm84@outlook.com',
  linkedin: 'https://www.linkedin.com/in/juan-m-varela1984',
  github: 'https://github.com/varelajm10',
  cvUrl: '/cv-juan-manuel-varela.pdf',
  cvUrlEn: '/cv-juan-manuel-varela-en.pdf',
  cvFileName: 'Juan-Manuel-Varela-CV.pdf',
  cvFileNameEn: 'Juan-Manuel-Varela-CV-English.pdf',
};

export const impactMetrics = [
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
];

export const valuePillars = [
  {
    title: 'Análisis Operativo & Gestión de Desvíos',
    description:
      'Monitoreo continuo de desvíos, seguimiento de niveles de servicio (SLAs), estratificación matemática de bases y modelos de previsión de cobranza.',
    icon: 'TrendingUp',
  },
  {
    title: 'Automatización & Pipelines en Python',
    description:
      'Desarrollo de scripts, bots de procesos, consumo de APIs REST, web scraping y conectores automáticos que eliminan la carga manual en reportes y conciliaciones.',
    icon: 'Cpu',
  },
  {
    title: 'Business Intelligence & Modelado SQL',
    description:
      'Arquitectura de datos en esquema estrella, DAX avanzado en Power BI, dashboards ejecutivos intradiarios y consultas optimizadas en PostgreSQL y SQL Server.',
    icon: 'BarChart3',
  },
];

export const projectsData = [
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
    demoUrl: null,
    githubUrl: 'https://github.com/varelajm10',
    isConfidential: true,
    confidentialLabel: 'Saputo Inc. (Confidencial)',
    featured: false,
  },
];

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
