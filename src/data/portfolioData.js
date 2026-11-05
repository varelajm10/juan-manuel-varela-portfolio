// ============================================================================
// DICCIONARIO BILINGÜE Y DATOS - CONSUME siteConfig.js (CERO DUPLICACIÓN)
// ============================================================================
import { siteConfig } from '../config/siteConfig.js';

// Re-exportamos personalInfo consumiendo directamente siteConfig
export const personalInfo = {
  name: siteConfig.author.name,
  initials: siteConfig.author.initials,
  role: siteConfig.author.role,
  brand: siteConfig.author.brand,
  location: siteConfig.author.location,
  phone: siteConfig.author.phone,
  whatsappNumber: siteConfig.author.whatsappNumber,
  email: siteConfig.author.email,
  siteUrl: siteConfig.url,
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
      badge: 'Profesional independiente',
      heroCtaBanner:
        'Si tu equipo pierde horas en planillas, puedo armar la herramienta que las saque de la operación.',
      headline: 'Transformo problemas operativos en soluciones digitales.',
      headlineSub: '',
      subheadline:
        'Combino más de 10 años en créditos, cobranzas y procesos con automatización, software e inteligencia artificial. Armo herramientas que sacan el trabajo manual de la operación.',
      storyP1:
        'Diez años en Saputo, DACAS y CNH, entre créditos, cobranzas y conciliaciones. Desde 2024 diseño e implemento sistemas de automatización, portales internos e IA en producción (CoopMora, SECSA e Intranet RRHH), combinando más de una década de criterio financiero y operativo con desarrollo de software. Programo en Python para devolverle al equipo las horas que se van en planillas.',
      storyP2:
        'El punto de quiebre fue el hartazgo de ver cómo los equipos queman 15 a 20 horas por semana cruzando planillas a mano, copiando datos entre sistemas y corriendo atrás de cierres interminables. Ahí decidí aprender a programar en serio: scripts en Python, consultas avanzadas en SQL y modelos en Power BI para resolver mis propios cuellos de botella operativos.',
      storyP3:
        'Hoy uno esos dos mundos. No soy un desarrollador teórico ni un analista que solo hace presentaciones en PowerPoint: construyo herramientas, pipelines y tableros que funcionan en producción, le quitan el trabajo repetitivo a la gente y le devuelven tiempo al negocio para tomar decisiones estratégicas.',
      ctaProjects: 'Conocé mis soluciones',
      ctaContact: 'Hablemos de tu proyecto',
      ctaCv: 'Descargar CV (PDF)',
      ctaWhatsapp: 'WhatsApp Directo',
      metricsLabel: 'Resultados de mi trayectoria corporativa',
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
      title: 'Proyectos Destacados & Sistemas en Producción',
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
      engineeringLabel: 'Decisiones que el código fija',
      privacyNote:
        'Repositorio privado: contiene datos de clientes. La demo muestra la arquitectura, no la cartera.',
      items: [
        {
          id: 'agente-cobranzas-ia',
          image: '/projects/agente-cobranzas.jpg',
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
              label: 'Casos de pytest',
              detail: 'Segmentos, prioridad y fallback si la IA falla',
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
          engineering: [
            'agente/riesgo.py deja el puntaje 0–100 en factores visibles: 40% atraso, 25% saldo, 20% historial y 15% promesas.',
            'agente/redactor.py descarta la respuesta si amenaza, no respeta el importe o no devuelve JSON, y usa la plantilla.',
            '16 casos de pytest fijan segmentos, prioridad y ese fallback. Corren en local; el repo no publica un pipeline de CI.',
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
          image: '/projects/conciliacion.jpg',
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
          engineering: [
            'conciliador/core.py aplica las reglas de la más segura a la más flexible: número de factura, CUIT, nombre difuso, pago agrupado y parcial FIFO.',
            'Un parecido ambiguo no se imputa. El pago parcial queda para revisar. Los débitos se ignoran.',
            '11 tests exigen más del 90% en el dataset de prueba (el README mide 97,2% del importe) y que cada factura se use una sola vez.',
          ],
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Motor determinístico de imputación en 5 reglas que genera reportes de conciliación listos para el cierre contable sin depender de criterio subjetivo.',
        },
        {
          id: 'metanoia',
          image: '/projects/metanoia.jpg',
          title: 'Metanoia — Prototipos públicos de panel y ERP',
          category: 'Next.js · TypeScript',
          repoUrl: 'https://github.com/varelajm10/Metanoia.v1.0.1',
          githubUrl: 'https://github.com/varelajm10/Metanoia.v1.0.1',
          extraRepoUrl: 'https://github.com/varelajm10/metanoia-app',
          extraRepoLabel: 'Ver panel con IA',
          problem:
            'El seguimiento de saldos y cobranzas queda repartido en planillas que no conversan con el resto de la operación.',
          solution:
            'Dos prototipos públicos de la misma línea. Metanoia.v1.0.1 es un ERP modular multi-tenant con Next.js, TypeScript y Prisma sobre PostgreSQL, con módulos en distinto grado de avance. metanoia-app es un panel con asistentes de IA (Next.js, Firebase, Genkit/Gemini).',
          role: 'Diseño y construcción de los módulos que están en esos dos repositorios públicos.',
          impactMetric:
            'Prototipos abiertos para revisar la estructura. La herramienta usada con datos de la operación sigue en un repositorio privado.',
          tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Firebase'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'La versión interna no se publica. Estos dos repos muestran el prototipo de ERP y el panel con asistentes, sin datos de clientes.',
        },
        {
          id: 'cubo',
          image: '/projects/cubo.jpg',
          title: 'CUBO — Plataforma de créditos y cobranzas para empresas',
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
            'Sistema multiempresa que integra análisis de antigüedad de deuda, alertas de cobro y consultas automatizadas mediante Telegram.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'APIs REST', 'Order-to-Cash'],
          demoUrl: null,
          githubUrl: null, // Repositorio privado (Cobranzas)
          summaryCase:
            'Diseñada para reemplazar el cruce manual de planillas de cobranza por un sistema unificado con estados de cuenta en tiempo real y notificaciones automáticas.',
        },
        {
          id: 'gladys',
          image: '/projects/gladys.jpg',
          title: 'G.L.A.D.Y.S. / CoopMora - Radar de Riesgo Crediticio & BCRA',
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
            'Pipeline diario automatizado que releva situación crediticia en el BCRA y alertas de concursos, procesando desvíos con LLMs para reducir el monitoreo diario a minutos.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Alertas Automáticas', 'Scoring'],
          demoUrl: null,
          githubUrl: null, // Repositorio privado (Monitormora)
          summaryCase:
            'Rastreo programado de bases públicas y alertas automáticas a casillas de analistas ante pedidos de quiebra, cheques rechazados o cambios de situación crediticia.',
        },
        {
          id: 'ascensort',
          image: '/projects/rblca.png',
          imageFit: 'contain',
          imageRole: 'logo',
          imageAlt: 'RB&LCA Ascensores y Servicios Verticales',
          client: 'RB&LCA Ascensores y Servicios Verticales',
          title: 'AscenSort — Sistema de incidencias y auditorías con IA',
          category: 'Sistema de incidencias',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'La operación necesitaba una forma más ordenada de registrar, consultar y seguir incidencias de ascensores y escaleras mecánicas, además de contar con historial y con reportes.',
          solution:
            'Desarrollé un sistema para monitorear el funcionamiento de los equipos, consultar el historial, ver gráficos y generar reportes de incidencias. Como complemento, un agente de auditorías conectado a IA asiste la revisión y el control.',
          role: 'Diseño y desarrollo del sistema de incidencias y del agente de auditorías.',
          impact:
            'Sistema de incidencias para el monitoreo de ascensores y escaleras mecánicas, con historial, gráficos, reportes y un agente de auditorías conectado a inteligencia artificial.',
          features: [
            'Registro y seguimiento de incidencias',
            'Historial de eventos',
            'Visualización de gráficos',
            'Generación de reportes',
            'Monitoreo de ascensores y escaleras mecánicas',
            'Agente de auditorías con IA',
          ],
          privacyNote:
            'Repositorio privado: contiene datos de la operación. Se puede mostrar el sistema, no los registros de los equipos.',
          tags: ['Incidencias', 'Historial', 'Gráficos', 'Reportes', 'IA'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Sistema de incidencias para RB&LCA: registro, historial, gráficos, reportes y un agente de auditorías con IA.',
        },
        {
          id: 'portal-rrhh',
          image: '/projects/portal-comunidad.png',
          imageFit: 'contain',
          imagePad: false,
          imageRole: 'screenshot',
          imageAlt: 'Portal Comunidad, intranet de autogestión',
          title: 'Portal Comunidad - Intranet & Autogestión de RRHH',
          category: 'Intranet · React',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Licencias, adelantos, comunicados y pedidos a Sistemas circulaban por mail y planillas, sin un saldo ni un estado visible para cada persona.',
          solution:
            'Intranet corporativa para gestionar licencias y vacaciones, adelantos de sueldo, comunicados oficiales, directorio, credencial ART y mesa de ayuda de Sistemas.',
          role: 'Diseño y desarrollo del portal de autogestión y de los circuitos de RRHH y soporte.',
          impactMetric:
            'Centralización de comunicación interna y autogestión operativa: solicitud y saldo de vacaciones/licencias, adelantos de sueldo, directorio de personal, credencial ART y tickets de soporte IT.',
          tags: ['React', 'Tailwind CSS', 'Intranet', 'RRHH'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Portal Comunidad & Autogestión RRHH: intranet corporativa para gestión de licencias/vacaciones, solicitudes de adelantos de sueldo, comunicados oficiales, directorio y mesa de ayuda de Sistemas.',
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
            { name: 'React & Tailwind CSS', detail: 'Diseño y desarrollo de interfaces corporativas, intranets de autogestión y tableros operativos responsivos.' },
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
          role: 'Consultor de Automatización, Procesos & Desarrollador de Soluciones',
          company: 'Proyectos en Producción',
          period: 'Mayo 2024 — Actualidad',
          location: 'Remoto',
          summary:
            'Integración de modelos de lenguaje en flujos de crédito, cobranzas y cuentas corrientes que ya están en uso.',
          achievements: [
            'CoopMora: pipeline diario que releva cambios de situación crediticia en el BCRA y alertas de concursos, los procesa con un LLM y envía el informe al equipo de créditos.',
            'CUBO — Plataforma de créditos y cobranzas para empresas. Sistema multiempresa que integra análisis de antigüedad de deuda, alertas de cobro y consultas automatizadas mediante Telegram.',
            'SECSA: cuentas corrientes sobre Odoo, con un LLM que asiste el análisis de saldos y vencimientos junto a un tablero de cobro.',
            'Portal Comunidad & Autogestión RRHH: intranet corporativa para gestión de licencias/vacaciones, solicitudes de adelantos de sueldo, comunicados oficiales, directorio y mesa de ayuda de Sistemas.',
          ],
          tags: ['Python', 'LLM', 'SQL', 'Odoo'],
        },
        {
          role: 'Analista Senior de Créditos, Cobranzas y Operaciones',
          company: 'DACAS (Operación Regional LATAM)',
          period: 'Mar 2025 — Feb 2026',
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
          period: 'Jul 2018 — May 2024',
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
          period: 'Oct 2016 — Jun 2018',
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
          period: 'Oct 2014 — Sep 2016',
          location: 'Buenos Aires',
          summary:
            'Confección de informes operativos de cuentas corrientes y seguimiento de desvíos con macros de Excel.',
          achievements: [
            'Emisión periódica de reportes diarios, semanales y mensuales de cuentas comerciales utilizando VBA y módulos del ERP.',
          ],
          tags: ['Excel VBA', 'Reportería', 'ERPs'],
        },
      ],
      education: {
        title: 'Formación',
        items: [
          {
            name: 'Licenciatura en Administración de Empresas',
            place: 'UAI',
            detail: 'Cursada completa. Tesis en elaboración.',
          },
          { name: 'Python', place: 'UTN', detail: '' },
          { name: 'Power BI: DAX y modelado de datos', place: '', detail: '' },
          {
            name: 'Claude API, Claude Code, MCP y AI Fluency',
            place: 'Anthropic Academy',
            detail: '',
          },
          { name: 'Gemini e IA generativa', place: 'Google', detail: '' },
          {
            name: 'Inglés B2',
            place: '',
            detail: 'Intermedio avanzado, competencia profesional. Español nativo.',
          },
        ],
      },
    },
    services: {
      tag: 'Servicios',
      title: 'Soluciones para empresas',
      subtitle:
        'Desarrollo herramientas que ayudan a reducir tareas manuales, ordenar información y mejorar el control de los procesos.',
      cta: 'Consultar',
      items: [
        {
          id: 'automatizacion',
          title: 'Automatización de procesos',
          description:
            'Automatizo tareas repetitivas, procesamiento de datos, reportes y conciliaciones para reducir el trabajo manual y mejorar la eficiencia operativa.',
          applications: [
            'Automatización de Excel y procesos administrativos',
            'Conciliaciones y procesamiento de información',
            'Reportes automáticos',
          ],
        },
        {
          id: 'aplicaciones',
          title: 'Desarrollo de aplicaciones empresariales',
          description:
            'Desarrollo aplicaciones web y herramientas internas adaptadas a los procesos reales de cada empresa.',
          applications: [
            'Sistemas de gestión y dashboards operativos',
            'Seguimiento de incidencias',
            'Portales internos y autogestión',
          ],
        },
        {
          id: 'ia',
          title: 'Inteligencia artificial aplicada',
          description:
            'Integro inteligencia artificial en procesos existentes para asistir tareas de análisis, clasificación, consultas y generación de información.',
          applications: [
            'Agentes de IA',
            'Análisis de documentos y datos',
            'Auditorías y reportes asistidos',
          ],
        },
      ],
    },
    contact: {
      tag: 'Contacto Directo',
      title: 'Hablemos',
      subtitle:
        '¿Tu empresa pierde tiempo en tareas manuales, trabaja con información dispersa o necesita mejorar sus procesos? Contame qué necesitás resolver. Podemos evaluar una solución de automatización, software o inteligencia artificial adaptada a tu operación.',
      whatsappPrefill:
        'Hola Juan Manuel, vi tu portfolio y me gustaría conversar sobre una solución para mi empresa.',
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
        'Contame qué necesitás resolver en tu operación.',
      sendBtn: 'Enviar Mensaje',
      statusSent: 'Abriendo tu correo para enviar el mensaje...',
    },
    footer: {
      location: 'Buenos Aires, Argentina.',
      title: 'Profesional independiente',
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
      badge: 'Independent professional',
      heroCtaBanner:
        'If your team is losing hours to spreadsheets, I can build the tool that takes that work out of the operation.',
      headline: 'I turn operational problems into digital tools.',
      headlineSub: '',
      subheadline:
        'I combine 10+ years in credit, collections, and business processes with automation, software, and applied AI. I build tools that take manual work out of the operation.',
      storyP1:
        'Ten years at Saputo, DACAS, and CNH, across credit, collections, and bank reconciliations. Since 2024 I have designed and shipped automation systems, internal portals, and production AI (CoopMora, SECSA, and an HR intranet), combining more than a decade of financial and operational judgment with software development. I write Python so teams get back the hours they spend on spreadsheets.',
      storyP2:
        'The turning point was growing weary of watching teams burn 15 to 20 hours every week manually matching spreadsheets, copying records across fragmented ERPs, and scrambling through never-ending month-end closings. That led me to take programming seriously: writing robust Python scripts, advanced SQL queries, and Power BI models to solve my own team’s operational bottlenecks.',
      storyP3:
        'Today, I bridge those two worlds. I am neither an abstract developer nor an analyst confined to PowerPoint decks: I build tools, pipelines, and dashboards that run in production, strip away repetitive grunt work, and give businesses back the time they need to make strategic decisions.',
      ctaProjects: 'See my solutions',
      ctaContact: "Let's talk about your project",
      ctaCv: 'Download Resume (PDF)',
      ctaWhatsapp: 'Direct WhatsApp',
      metricsLabel: 'Results from my corporate experience',
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
      title: 'Featured Projects & Production Systems',
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
      engineeringLabel: 'Decisions the code locks in',
      privacyNote:
        'Private repository: it holds client data. A demo shows the architecture, not the customer book.',
      items: [
        {
          id: 'agente-cobranzas-ia',
          image: '/projects/agente-cobranzas.jpg',
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
              label: 'Pytest cases',
              detail: 'Segments, priority, and fallback when the model fails',
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
          engineering: [
            'agente/riesgo.py keeps the 0–100 score explainable: 40% days overdue, 25% balance, 20% history, 15% broken promises.',
            'agente/redactor.py rejects a draft that threatens, misses the amount, or is not JSON, then uses the template.',
            '16 pytest cases lock the segments, the sort order, and that fallback. They run locally; the repo does not publish a CI workflow.',
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
          image: '/projects/conciliacion.jpg',
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
          engineering: [
            'conciliador/core.py runs rules from safest to loosest: invoice number, tax ID, fuzzy name, grouped payment, and FIFO partials.',
            'An ambiguous name match is left unmatched. Partial payments are flagged for review. Debits are ignored.',
            '11 tests require over 90% on the sample book (the README measures 97.2% of amount) and that each invoice is used once.',
          ],
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Deterministic 5-rule matching engine that outputs month-end reconciliation Excel workbooks ready for sign-off without subjective guesswork.',
        },
        {
          id: 'metanoia',
          image: '/projects/metanoia.jpg',
          title: 'Metanoia — Public panel and ERP prototypes',
          category: 'Next.js · TypeScript',
          repoUrl: 'https://github.com/varelajm10/Metanoia.v1.0.1',
          githubUrl: 'https://github.com/varelajm10/Metanoia.v1.0.1',
          extraRepoUrl: 'https://github.com/varelajm10/metanoia-app',
          extraRepoLabel: 'View AI panel',
          problem:
            'Balance and collections follow-up sits in spreadsheets that do not connect to the rest of the operation.',
          solution:
            'Two public prototypes of the same line. Metanoia.v1.0.1 is a modular multi-tenant ERP in Next.js, TypeScript, and Prisma on PostgreSQL, with modules at different stages. metanoia-app is a management panel with AI assistants (Next.js, Firebase, Genkit/Gemini).',
          role: 'Design and build of the modules that are in those two public repositories.',
          impactMetric:
            'Open prototypes for reviewing the structure. The tool that runs on live operational data stays in a private repository.',
          tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Firebase'],
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'The internal version is not published. These two repos show the ERP prototype and the assistant panel, without client data.',
        },
        {
          id: 'cubo',
          image: '/projects/cubo.jpg',
          title: 'CUBO — Credit and collections platform for companies',
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
            'A multi-company system that brings together receivable-aging analysis, collection alerts, and automated queries through Telegram.',
          tags: ['Python', 'FastAPI', 'MongoDB', 'REST APIs', 'Order-to-Cash'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Designed to replace manual spreadsheet reconciliation with a unified hub providing real-time statements and automated notifications.',
        },
        {
          id: 'gladys',
          image: '/projects/gladys.jpg',
          title: 'G.L.A.D.Y.S. / CoopMora - Credit Risk & BCRA Radar',
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
            'A daily pipeline that checks BCRA credit status and insolvency filings, then uses an LLM to flag exceptions and cut daily monitoring to minutes.',
          tags: ['Python', 'Web Scraping', 'Streamlit', 'Automated Alerts', 'Scoring'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Scheduled scanning of public databases dispatching instant alerts to analysts upon bankruptcy filings, rejected checks, or credit rating downgrades.',
        },
        {
          id: 'ascensort',
          image: '/projects/rblca.png',
          imageFit: 'contain',
          imageRole: 'logo',
          imageAlt: 'RB&LCA Ascensores y Servicios Verticales',
          client: 'RB&LCA Ascensores y Servicios Verticales',
          title: 'AscenSort — Incident system and AI-assisted audits',
          category: 'Incident system',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'The operation needed a clearer way to record, look up, and follow incidents on elevators and escalators, plus history and the ability to report.',
          solution:
            'I built a system to monitor how the equipment is running, review history, see charts, and generate incident reports. Alongside it, an audit agent connected to AI assists review and control.',
          role: 'Design and development of the incident system and the audit agent.',
          impact:
            'An incident system for monitoring elevators and escalators, with history, charts, reports, and an audit agent connected to AI.',
          features: [
            'Incident logging and follow-up',
            'Event history',
            'Charts',
            'Incident reports',
            'Monitoring of elevators and escalators',
            'AI audit agent',
          ],
          privacyNote:
            'Private repository: it holds operational records. The system can be shown; the equipment logs stay private.',
          tags: ['Incidents', 'History', 'Charts', 'Reports', 'AI'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Incident system for RB&LCA: logging, history, charts, reports, and an AI audit agent.',
        },
        {
          id: 'portal-rrhh',
          image: '/projects/portal-comunidad.png',
          imageFit: 'contain',
          imagePad: false,
          imageRole: 'screenshot',
          imageAlt: 'Community Portal, self-service intranet',
          title: 'Community Portal - HR Intranet & Self-Service',
          category: 'Intranet · React',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Leave, salary advances, announcements, and IT requests moved through email and spreadsheets, with no visible balance or status for each person.',
          solution:
            'Corporate intranet for leave and vacation requests, salary advances, official announcements, a staff directory, ART credentials, and an IT help desk.',
          role: 'Design and development of the self-service portal and the HR and support workflows.',
          impactMetric:
            'Centralized internal communication and self-service: vacation and leave requests with balances, salary advances, staff directory, ART credential, and IT support tickets.',
          tags: ['React', 'Tailwind CSS', 'Intranet', 'HR'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Community Portal and HR self-service: a corporate intranet for leave and vacation, salary-advance requests, official announcements, a directory, and an IT help desk.',
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
            { name: 'React & Tailwind CSS', detail: 'Design and development of corporate interfaces, self-service intranets, and responsive operational dashboards.' },
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
          role: 'Automation, Process & Solutions Consultant',
          company: 'Production Projects',
          period: 'May 2024 — Present',
          location: 'Remote',
          summary:
            'Language models wired into credit, collections, and receivables workflows that are already in use.',
          achievements: [
            'CoopMora: a daily pipeline that checks BCRA credit-status changes and insolvency filings, processes them with an LLM, and sends the report to the credit team.',
            'CUBO — Credit and collections platform for companies. A multi-company system that brings together receivable-aging analysis, collection alerts, and automated queries through Telegram.',
            'SECSA: receivables on Odoo, with an LLM assisting balance and due-date analysis next to a collections board.',
            'Community Portal & HR Self-Service: a corporate intranet for leave and vacation requests, salary advances, official announcements, a staff directory, and an IT help desk.',
          ],
          tags: ['Python', 'LLM', 'SQL', 'Odoo'],
        },
        {
          role: 'Senior Credit, Collections & Operations Analyst',
          company: 'DACAS (LATAM Regional Operation)',
          period: 'Mar 2025 — Feb 2026',
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
          period: 'Jul 2018 — May 2024',
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
          period: 'Oct 2016 — Jun 2018',
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
          period: 'Oct 2014 — Sep 2016',
          location: 'Buenos Aires',
          summary:
            'Compilation of daily/monthly receivable status reports and deviation audits with Excel macros.',
          achievements: [
            'Produced scheduled tracking reports of commercial accounts and billing variances utilizing VBA and core ERP modules.',
          ],
          tags: ['Excel VBA', 'Reporting', 'ERPs'],
        },
      ],
      education: {
        title: 'Education',
        items: [
          {
            name: 'Bachelor’s degree in Business Administration',
            place: 'UAI',
            detail: 'Coursework completed. Thesis in progress.',
          },
          { name: 'Python', place: 'UTN', detail: '' },
          { name: 'Power BI: DAX and data modeling', place: '', detail: '' },
          {
            name: 'Claude API, Claude Code, MCP, and AI Fluency',
            place: 'Anthropic Academy',
            detail: '',
          },
          { name: 'Gemini and generative AI', place: 'Google', detail: '' },
          {
            name: 'English B2',
            place: '',
            detail: 'Upper intermediate, professional working proficiency. Spanish native.',
          },
        ],
      },
    },
    services: {
      tag: 'Services',
      title: 'Solutions for companies',
      subtitle:
        'I build tools that help reduce manual work, organize information, and improve control over processes.',
      cta: 'Ask about this',
      items: [
        {
          id: 'automatizacion',
          title: 'Process automation',
          description:
            'I automate repetitive tasks, data processing, reports, and reconciliations to reduce manual work and improve how the operation runs.',
          applications: [
            'Excel and administrative process automation',
            'Reconciliations and data processing',
            'Automatic reports',
          ],
        },
        {
          id: 'aplicaciones',
          title: 'Business application development',
          description:
            'I build web applications and internal tools adapted to each company’s actual processes.',
          applications: [
            'Management systems and operational dashboards',
            'Incident tracking',
            'Internal portals and self-service',
          ],
        },
        {
          id: 'ia',
          title: 'Applied artificial intelligence',
          description:
            'I add artificial intelligence to existing processes to assist analysis, classification, queries, and the production of information.',
          applications: [
            'AI agents',
            'Document and data analysis',
            'Assisted audits and reports',
          ],
        },
      ],
    },
    contact: {
      tag: 'Direct Contact',
      title: "Let's Connect",
      subtitle:
        'Is your company losing time on manual tasks, working with scattered information, or needing to improve its processes? Tell me what you need to solve. We can look at an automation, software, or AI solution adapted to your operation.',
      whatsappPrefill:
        'Hi Juan Manuel, I saw your portfolio and I would like to talk about a solution for my company.',
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
      messagePlaceholder: 'Tell me what you need to solve in your operation.',
      sendBtn: 'Send Message',
      statusSent: 'Opening your email client to send the message...',
    },
    footer: {
      location: 'Buenos Aires, Argentina.',
      title: 'Independent professional',
      vercel: 'Deployed on Vercel',
      backToTop: 'Top',
    },
  },
};
