// ============================================================================
// DATOS REALES Y COPYWRITING HUMANO EN PRIMERA PERSONA
// Juan Manuel Varela — Finanzas, Automatización & Datos
// ============================================================================

export const personalInfo = {
  name: 'Juan Manuel Varela',
  initials: 'JMV',
  role: 'Administración, Finanzas Corporativas & Automatización con Python',
  location: 'Buenos Aires, Argentina · Remoto / Híbrido',
  phone: '+54 9 11 6042-7256',
  whatsappNumber: '5491160427256',
  email: 'varelajm84@outlook.com',
  linkedin: 'https://www.linkedin.com/in/juan-m-varela1984',
  github: 'https://github.com/varelajm10',
  cvUrl: '/cv-juan-manuel-varela.pdf',
  cvFileName: 'CV-Juan-Manuel-Varela.pdf',
};

// Historia real en primera persona (3 párrafos)
export const aboutStory = {
  paragraph1:
    'Llevo más de diez años en la trinchera de la administración y las finanzas corporativas. Pasé por empresas de consumo masivo, maquinaria y distribución tecnológica (Saputo Inc., DACAS LATAM, CNH Capital), administrando carteras masivas de clientes, aprobando límites de crédito, conciliando bancos y peleando día a día contra la morosidad para cuidar el flujo de fondos.',
  paragraph2:
    'El punto de quiebre fue el hartazgo de ver cómo los equipos queman 15 a 20 horas por semana cruzando planillas a mano, copiando datos entre sistemas y corriendo atrás de cierres interminables. Ahí decidí aprender a programar en serio: scripts en Python, consultas avanzadas en SQL y modelos en Power BI para resolver mis propios cuellos de botella operativos.',
  paragraph3:
    'Hoy uno esos dos mundos. No soy un desarrollador teórico ni un analista que solo hace presentaciones en PowerPoint: construyo herramientas, pipelines y tableros que funcionan en producción, le quitan el trabajo repetitivo a la gente y le devuelven tiempo al negocio para tomar decisiones estratégicas.',
};

export const impactMetrics = [
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
];

// Fichas de proyectos con estructura rígida de 3 puntos
export const realProjects = [
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
    privateLabel: 'Proyecto Corporativo / Privado',
    summaryCase:
      'Diseñada para reemplazar el cruce manual de planillas de cobranza por un sistema unificado con estados de cuenta en tiempo real y notificaciones automáticas.',
    demoUrl: null,
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
    privateLabel: null,
    summaryCase:
      'Rastreo programado de bases públicas y alertas automáticas a casillas de analistas ante pedidos de quiebra, cheques rechazados o cambios de situación crediticia.',
    demoUrl: null,
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
    privateLabel: null,
    summaryCase:
      'Procesa miles de líneas de registros técnicos crudos en segundos, graficando frecuencias de falla y tiempos de resolución sin requerir conexión a internet.',
    demoUrl: null,
    githubUrl: 'https://github.com/varelajm10',
  },
];

// 3 bloques claros por nivel de uso (sin keyword stuffing)
export const honestSkills = [
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
];

export const experienceData = [
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
];
