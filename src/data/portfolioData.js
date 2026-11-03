// ============================================================================
// DICCIONARIO BILINGÜE Y DATOS - CONSUME siteConfig.js (CERO DUPLICACIÓN)
// ============================================================================
import { siteConfig } from '../config/siteConfig';

// Re-exportamos personalInfo consumiendo directamente siteConfig
export const personalInfo = {
  name: siteConfig.author.name,
  initials: siteConfig.author.initials,
  role: siteConfig.author.role,
  location: siteConfig.author.location,
  phone: siteConfig.author.phone,
  whatsappNumber: siteConfig.author.whatsappNumber,
  email: siteConfig.author.email,
  linkedin: siteConfig.links.linkedin, // null / TODO
  github: siteConfig.links.github,
  cvUrl: siteConfig.documents.cvEs,
  cvUrlEn: siteConfig.documents.cvEn,
  cvFileName: siteConfig.documents.cvFileNameEs,
  cvFileNameEn: siteConfig.documents.cvFileNameEn,
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
      // CTA Principal - Opción A (Activa por defecto según aprobación)
      // Alternativa documentada Opción C: "Finanzas estratégicas con criterio de negocio y código en producción. Conversemos sobre tu circuito operativo."
      heroCtaBanner:
        '¿Buscás un perfil que conecte finanzas corporativas, datos y automatización? Hablemos de tu proceso.',
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
      roleLabel: 'Mi Rol:',
      stackLabel: 'Stack Tecnológico:',
      statusLabel: 'Estado del Proyecto:',
      btnCaseDetails: 'Ver Detalles Técnicos',
      btnRequestDemo: 'Solicitar Demo',
      btnViewRepo: 'Ver Repositorio',
      viewCase: 'Ver resumen',
      hideCase: 'Ocultar resumen',
      statusPrivate: 'Privado — Solicitar Demo',
      statusPrivateCase: 'Proyecto Corporativo / Privado',
      statusPublic: 'Código Disponible',
      flagshipBadge: 'Proyecto destacado',
      flagshipMetricsTitle: 'Métricas de Arquitectura & Negocio',
      flagshipPipelineTitle: 'Pipeline Operativo Automatizado',
      items: [
        {
          id: 'agente-cobranzas-ia',
          title: 'Agente de IA de Cobranzas & Scoring de Riesgo',
          category: 'Python · Streamlit · IA Aplicada',
          isFlagship: true,
          repoUrl: 'https://github.com/varelajm10/agente-cobranzas-ia',
          githubUrl: 'https://github.com/varelajm10/agente-cobranzas-ia',
          problem:
            'Cada mañana el equipo de cuentas por cobrar enfrenta cientos de clientes vencidos sin una priorización cuantitativa. Se recurre a mensajes genéricos idénticos o se descuidan cuentas clave, deteriorando la relación comercial o incrementando innecesariamente el DSO (días promedio de cobro).',
          solution:
            'Motor algorítmico en Python con scoring de riesgo ponderado (0–100) que segmenta a los deudores en 4 estrategias operativas. Un redactor con Claude API genera avisos contextualizados para WhatsApp y email, auditados por guardrails determinísticos que impiden alucinaciones en importes o fechas, con fallback offline sin costo de tokens.',
          role: 'Diseño de reglas de riesgo crediticio, arquitectura de validación de prompts, desarrollo de app en Streamlit y suite de 16 tests automatizados.',
          impact:
            'Scoring de riesgo 0–100 en tiempo real, 16 tests automatizados con pytest y 100% operable offline sin costo de API mediante plantillas.',
          impactMetric:
            'Scoring de riesgo 0–100 en tiempo real, 16 tests automatizados con pytest y 100% operable offline sin costo de API mediante plantillas.',
          flagshipMetrics: [
            {
              value: '4 Variables',
              label: 'Matriz de Scoring Ponderado',
              detail: '40% atraso, 25% saldo, 20% historial, 15% promesas',
            },
            {
              value: '4 Estrategias',
              label: 'Segmentación Operativa',
              detail: 'Preventivo, Amigable, Firme y Pre-judicial',
            },
            {
              value: '16 Tests',
              label: 'Cobertura Pytest en CI',
              detail: 'Validación de scoring, guardrails y sanitización',
            },
            {
              value: '100% Offline',
              label: 'Modo Local sin Costo API',
              detail: 'Motor con plantillas determinísticas de fallback',
            },
          ],
          pipeline: [
            { step: '01', name: 'Cartera Vencida', desc: 'Ingesta y normalización' },
            { step: '02', name: 'Scoring 0–100', desc: 'Ponderación de riesgo' },
            { step: '03', name: 'Guardrails', desc: 'Validación anti-alucinación' },
            { step: '04', name: 'WhatsApp/Email', desc: 'Mensaje listo para envío' },
          ],
          tags: ['Python', 'Streamlit', 'Claude API', 'Pytest', 'Scoring de Riesgo', 'Offline Fallback'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Priorización cuantitativa de cartera y redacción asistida con guardrails para contactar clientes por WhatsApp o correo según su nivel de criticidad.',
        },
        {
          id: 'conciliacion-bancaria',
          title: 'Motor de Conciliación Bancaria Automática',
          category: 'Python · Algoritmos de Negocio · Pandas',
          repoUrl: 'https://github.com/varelajm10/conciliacion-bancaria',
          githubUrl: 'https://github.com/varelajm10/conciliacion-bancaria',
          problem:
            'Conciliación manual de extractos bancarios contra facturas abiertas: clientes que pagan con referencias incompletas, agrupan facturas o hacen pagos a cuenta, consumiendo días de trabajo manual en cada cierre contable.',
          solution:
            'Algoritmo en cascada de 5 reglas determinísticas (Nº factura, CUIT, matching difuso con RapidFuzz, pagos agrupados y pagos parciales FIFO) con exportación a Excel multisolapa formateado con semáforo de confianza.',
          role: 'Modelado de las 5 reglas de imputación contable, motor de matching en pandas, exportador de reportes con openpyxl y 11 tests unitarios.',
          impact:
            '97.2% de imputación automática sobre extractos de prueba y reducción del tiempo de conciliación de días a segundos.',
          impactMetric:
            '97.2% de imputación automática sobre extractos de prueba y reducción del tiempo de conciliación de días a segundos.',
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Motor determinístico de imputación en 5 reglas que genera reportes de conciliación listos para el cierre contable sin depender de criterio subjetivo.',
        },
        {
          id: 'cubo',
          title: 'CUBO — Cobranzas y Aging (antigüedad de deuda)',
          category: 'Web App & API',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Dispersión constante en el seguimiento de deudores, conciliación manual de pagos y falta de proyección certera de mora entre múltiples canales de cobro.',
          solution:
            'Aplicación web y API (FastAPI, MongoDB) para el circuito Order-to-Cash (del pedido al cobro): seguimiento de compromisos, riesgo crediticio y antigüedad de saldos.',
          role: 'Diseño integral de arquitectura, desarrollo backend en FastAPI, modelado en MongoDB y lógica de cálculo de aging.',
          impactMetric:
            'Automatización completa del cálculo de antigüedad de deuda y disparador de alertas de cobro.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'APIs REST', 'Order-to-Cash'],
          demoUrl: null,
          githubUrl: null, // Repositorio privado (Cobranzas)
          summaryCase:
            'Diseñada para reemplazar el cruce manual de planillas de cobranza por un sistema unificado con estados de cuenta en tiempo real y notificaciones automáticas.',
        },
        {
          id: 'gladys',
          title: 'G.L.A.D.Y.S. — Monitor de Riesgo Crediticio & Deudores',
          category: 'Pipeline & Scraping',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Consulta manual, dispersa y repetitiva de boletines oficiales, fuentes de noticias financieras y registros públicos de morosidad comercial.',
          solution:
            'Pipeline en Python con web scraping y procesamiento de texto que consolida alertas tempranas de insolvencia y emite reportes diarios por correo y panel en Streamlit.',
          role: 'Desarrollo de scrapers, normalización de datos y panel analítico en Streamlit.',
          impactMetric:
            'Detección temprana de alertas de insolvencia y reducción a minutos en el monitoreo diario.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Alertas Automáticas', 'Scoring'],
          demoUrl: null,
          githubUrl: null, // Repositorio privado (Monitormora)
          summaryCase:
            'Rastreo programado de bases públicas y alertas automáticas a casillas de analistas ante pedidos de quiebra, cheques rechazados o cambios de situación crediticia.',
        },
        {
          id: 'ascensort',
          title: 'AscenSort — Análisis Operativo & Control Estadístico',
          category: 'Desktop App',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Fallas repetitivas sin trazabilidad en reportes de servicio técnico, falta de identificación de causas raíz y riesgo constante de incumplimiento de SLAs.',
          solution:
            'Aplicación de escritorio en Python (CustomTkinter + pandas + matplotlib) para ingesta de registros masivos, métricas de mantenimiento y gráficos de control de desvíos.',
          role: 'Desarrollo de aplicación de escritorio, ingesta de logs masivos y visualizaciones estadísticas.',
          impactMetric:
            'Detección inmediata de patrones de averías y generación de reportes ejecutivos automatizados.',
          tags: ['Python', 'Pandas', 'CustomTkinter', 'Matplotlib', 'Control Estadístico'],
          demoUrl: null,
          githubUrl: null, // Repositorio privado (ascensort)
          summaryCase:
            'Procesa miles de líneas de registros técnicos crudos en segundos, graficando frecuencias de falla y tiempos de resolución sin requerir conexión a internet.',
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
      heroCtaBanner:
        'Looking for a professional connecting corporate finance, data, and code? Let’s talk.',
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
      roleLabel: 'My Role:',
      stackLabel: 'Tech Stack:',
      statusLabel: 'Project Status:',
      btnCaseDetails: 'Technical Details',
      btnRequestDemo: 'Request Demo',
      btnViewRepo: 'View Repository',
      viewCase: 'View summary',
      hideCase: 'Hide summary',
      statusPrivate: 'Private — Request Demo',
      statusPrivateCase: 'Corporate / Private System',
      statusPublic: 'Code Available',
      flagshipBadge: 'Featured project',
      flagshipMetricsTitle: 'Architecture & Business Metrics',
      flagshipPipelineTitle: 'Automated Operations Pipeline',
      items: [
        {
          id: 'agente-cobranzas-ia',
          title: 'AI Collections Agent & Risk Scoring Engine',
          category: 'Python · Streamlit · Applied AI',
          isFlagship: true,
          repoUrl: 'https://github.com/varelajm10/agente-cobranzas-ia',
          githubUrl: 'https://github.com/varelajm10/agente-cobranzas-ia',
          problem:
            'Every morning accounts receivable teams face hundreds of overdue debtors without quantitative prioritization. Operators resort to identical generic notices or neglect key accounts, increasing Days Sales Outstanding (DSO) or harming commercial relationships.',
          solution:
            'Algorithmic Python engine calculating a transparent risk score (0–100) and segmenting accounts into 4 operational strategies. An AI assistant with Claude API drafts contextual, professional WhatsApp/email notices, strictly governed by business guardrails against hallucinated balances, featuring a 100% offline fallback without API token cost.',
          role: 'Credit risk rules design, prompt validation architecture, Streamlit UI development, and 16 automated tests.',
          impact:
            'Real-time 0–100 risk scoring, 16 automated tests with pytest, and 100% offline operable with zero API cost via fallback templates.',
          impactMetric:
            'Real-time 0–100 risk scoring, 16 automated tests with pytest, and 100% offline operable with zero API cost via fallback templates.',
          flagshipMetrics: [
            {
              value: '4 Variables',
              label: 'Weighted Scoring Matrix',
              detail: '40% days overdue, 25% balance, 20% history, 15% promises',
            },
            {
              value: '4 Strategies',
              label: 'Operational Segmentation',
              detail: 'Preventive, Friendly, Firm, and Pre-legal',
            },
            {
              value: '16 Tests',
              label: 'Pytest Suite in CI',
              detail: 'Scoring validation, prompt guardrails, and sanitization',
            },
            {
              value: '100% Offline',
              label: 'Zero-Cost Local Mode',
              detail: 'Deterministic templating engine without API dependencies',
            },
          ],
          pipeline: [
            { step: '01', name: 'Overdue book', desc: 'Ingestion & normalization' },
            { step: '02', name: '0–100 Scoring', desc: 'Risk-weighted grading' },
            { step: '03', name: 'Guardrails', desc: 'Anti-hallucination check' },
            { step: '04', name: 'WhatsApp/Email', desc: 'Production-ready dispatch' },
          ],
          tags: ['Python', 'Streamlit', 'Claude API', 'Pytest', 'Credit Risk', 'Offline Fallback'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Quantitative portfolio prioritization and guardrail-validated drafting to contact customers via WhatsApp or email based on account criticality.',
        },
        {
          id: 'conciliacion-bancaria',
          title: 'Automated Bank Reconciliation Engine',
          category: 'Python · Business Algorithms · Pandas',
          repoUrl: 'https://github.com/varelajm10/conciliacion-bancaria',
          githubUrl: 'https://github.com/varelajm10/conciliacion-bancaria',
          problem:
            'Manual reconciliation of bank statements against open invoices: customers paying with incomplete references, batching invoices, or paying on account, consuming days of manual work at every monthly close.',
          solution:
            'Cascading deterministic 5-rule algorithm (Invoice #, Tax ID, fuzzy name matching with RapidFuzz, grouped payments, and FIFO partial payments) with multi-sheet formatted Excel export and confidence scoring.',
          role: 'Modeling of 5 accounting matching rules, pandas reconciliation engine, openpyxl report generator, and 11 unit tests.',
          impact:
            '97.2% automated match rate on test datasets and reduction of reconciliation time from days to seconds.',
          impactMetric:
            '97.2% automated match rate on test datasets and reduction of reconciliation time from days to seconds.',
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Deterministic 5-rule matching engine that outputs month-end reconciliation Excel workbooks ready for sign-off without subjective guesswork.',
        },
        {
          id: 'cubo',
          title: 'CUBO — Collections and Aging (age of unpaid invoices)',
          category: 'Web App & API',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Fragmented follow-up on overdue debtors, manual payment matching, and lack of reliable aging projections across sales channels.',
          solution:
            'Web platform and API (FastAPI, MongoDB) for the Order-to-Cash cycle (from customer order through cash collection): commitment tracking, credit risk, and invoice age.',
          role: 'Full architectural design, FastAPI backend development, MongoDB data modeling, and aging calculation logic.',
          impactMetric:
            'Full automation of receivable aging calculations and automated collection alerts.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'REST APIs', 'Order-to-Cash'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Designed to replace manual spreadsheet reconciliation with a unified hub providing real-time statements and automated notifications.',
        },
        {
          id: 'gladys',
          title: 'G.L.A.D.Y.S. — Credit Risk & Debtor Monitor',
          category: 'Pipeline & Scraping',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Manual, repetitive browsing of official gazettes, financial news outlets, and commercial bankruptcy registries.',
          solution:
            'Python pipeline with web scraping and automated text processing that aggregates early insolvency alerts and delivers daily email digests and Streamlit reports.',
          role: 'Web scraper development, data sanitation, and Streamlit analytics UI.',
          impactMetric:
            'Early insolvency detection reduced from hours to minutes in daily monitoring.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Automated Alerts', 'Scoring'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Scheduled scanning of public databases dispatching instant alerts to analysts upon bankruptcy filings, rejected checks, or credit rating downgrades.',
        },
        {
          id: 'ascensort',
          title: 'AscenSort — Operational Analysis & Statistical Control',
          category: 'Desktop App',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Recurring equipment failures without traceability in field reports and constant SLA compliance risks.',
          solution:
            'Python desktop app (CustomTkinter + pandas + matplotlib) for massive raw event log ingestion, maintenance metrics, and statistical control charts.',
          role: 'Desktop application development, log parser ingestion, and statistical visualization.',
          impactMetric:
            'Instant breakdown pattern discovery and automated executive reporting.',
          tags: ['Python', 'Pandas', 'CustomTkinter', 'Matplotlib', 'Statistical Control'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Parses thousands of unstructured log lines in seconds, plotting failure frequencies and resolution times without requiring internet connectivity.',
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
