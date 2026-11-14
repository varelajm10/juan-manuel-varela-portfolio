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
  brandShort: siteConfig.author.brandShort,
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
      solutions: 'Soluciones',
      projects: 'Proyectos',
      skills: 'Habilidades',
      simulator: 'Simulador',
      collaborate: 'Colaboración',
      methodology: 'Metodología',
      experience: 'Trayectoria',
      contact: 'Contacto',
      downloadCv: 'Descargar CV (PDF)',
    },
    ui: {
      toSpanish: 'ES - Cambiar idioma a Español',
      toEnglish: 'EN - Cambiar idioma a Inglés',
      toggleToEnglish: 'Cambiar idioma a Inglés',
      toggleToSpanish: 'Cambiar idioma a Español',
      themeToLight: 'Cambiar a modo claro',
      themeToDark: 'Cambiar a modo oscuro',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú',
      copyEmail: 'Copiar email',
      copyEmailAddress: 'Copiar dirección de email',
      sendEmail: 'Enviar correo electrónico a Juan Manuel Varela',
    },
    seo: {
      title: 'Juan Manuel Varela | Automatización de procesos, software e IA para empresas',
      description:
        'Automatizo procesos administrativos, desarrollo aplicaciones a medida e integro inteligencia artificial en la operación. Menos trabajo manual y mejor control de la información.',
    },
    hero: {
      badge: 'Profesional independiente',
      eyebrow: 'Juan Manuel Varela · Automatización, software e IA para empresas',
      heroCtaBanner:
        'Si tu equipo pierde horas en planillas, puedo armar la herramienta que las saque de la operación.',
      headline: 'Transformo procesos manuales en soluciones digitales.',
      headlineSub: '',
      subheadline:
        'Combino más de 10 años de experiencia en procesos empresariales con desarrollo tecnológico para crear automatizaciones, aplicaciones y soluciones de inteligencia artificial que resuelven problemas reales de negocio.',
      storyP1:
        'Diez años en Saputo, DACAS y CNH, entre créditos, cobranzas y conciliaciones. Desde 2024 diseño e implemento sistemas de automatización, portales internos e IA en producción (CoopMora, SECSA e Intranet RRHH), combinando más de una década de criterio financiero y operativo con desarrollo de software. Programo en Python para devolverle al equipo las horas que se van en planillas.',
      storyP3:
        'Hoy uno esos dos mundos. No soy un desarrollador teórico ni un analista que solo hace presentaciones en PowerPoint: construyo herramientas, pipelines y tableros que funcionan en producción, le quitan el trabajo repetitivo a la gente y le devuelven tiempo al negocio para tomar decisiones estratégicas.',
      ctaProjects: 'Ver proyectos',
      ctaContact: 'Hablemos de tu proyecto',
      availability:
        'Colaboro con empresas y equipos en proyectos de automatización, análisis de datos y desarrollo de soluciones digitales.',
      ctaCv: 'Descargar CV (PDF)',
      ctaWhatsapp: 'WhatsApp Directo',
      metricsLabel: 'Experiencia en empresas',
    },
    metrics: [
      {
        value: '+10 años',
        label: 'En procesos empresariales',
        detail: 'Desde 2014, en créditos, cobranzas y procesos de empresas de consumo masivo, maquinaria y operación regional.',
      },
    ],
    projects: {
      tag: 'Implementaciones, productos y prototipos',
      title: 'Proyectos y soluciones desarrolladas',
      subtitle:
        'Conciliación bancaria, un agente de cobranzas y una plataforma de créditos. El resto de los casos sigue disponible.',
      problemLabel: 'El Problema:',
      solutionLabel: 'La Solución:',
      impactLabel: 'Qué se verificó:',
      roleLabel: 'Mi Rol:',
      stackLabel: 'Stack Tecnológico:',
      statusLabel: 'Estado del Proyecto:',
      btnCaseDetails: 'Ver el caso',
      valueLabel: 'Qué hace:',
      techToggle: 'Detalle técnico',
      btnRequestDemo: 'Solicitar Demo',
      btnViewRepo: 'Ver Repositorio',
      viewCase: 'Ver resumen',
      hideCase: 'Ocultar resumen',
      statusPrivate: 'Privado — Solicitar Demo',
      statusPrivateCase: 'Proyecto Corporativo / Privado',
      statusPublic: 'Código Disponible',
      flagshipBadge: 'Proyecto destacado',
      viewAllProjects: 'Ver todos los proyectos',
      showFeaturedOnly: 'Mostrar solo los destacados',
      flagshipMetricsTitle: 'Qué muestra el prototipo',
      flagshipPipelineTitle: 'Pipeline Operativo Automatizado',
      engineeringLabel: 'Decisiones que el código fija',
      modalProblem: '1. Problema de Negocio',
      modalSolution: '2. Solución Técnica',
      modalFeatures: 'Qué hace el sistema',
      modalStack: '3. Stack Tecnológico',
      modalRole: '4. Mi Rol',
      modalImpact: 'Qué se verificó',
      modalStatus: 'Estado:',
      privateProject: 'Proyecto privado',
      codeAvailable: 'Código disponible',
      privateDemo: 'Privado — Demostración bajo solicitud',
      publicCode: 'Código público',
      closeDialog: 'Cerrar ventana de detalles',
      scrollDetails: 'Detalles del proyecto desplazables',
      consultPrompt: 'Si te interesa el producto, escribime y lo vemos con la herramienta a la vista.',
      demoPrompt: '¿Te interesa conocer la arquitectura o ver una demo funcional?',
      requestDemo: 'Solicitar Demostración',
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
          statusLabel: 'Prototipo funcional',
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Priorización cuantitativa de cartera y redacción asistida, con controles para que el aviso respete importes y fechas.',
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
            'Motor de conciliación bancaria desarrollado para automatizar el procesamiento de extractos y reducir tareas manuales. En un extracto de prueba, el motor concilió automáticamente el 97,2 % del importe total de los créditos.',
          impactMetric:
            'Motor de conciliación bancaria desarrollado para automatizar el procesamiento de extractos y reducir tareas manuales. En un extracto de prueba, el motor concilió automáticamente el 97,2 % del importe total de los créditos.',
          engineering: [
            'conciliador/core.py aplica las reglas de la más segura a la más flexible: número de factura, CUIT, nombre difuso, pago agrupado y parcial FIFO.',
            'Un parecido ambiguo no se imputa. El pago parcial queda para revisar. Los débitos se ignoran.',
            '11 tests exigen más del 90% en el dataset de prueba (el README mide 97,2% del importe) y que cada factura se use una sola vez.',
          ],
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          statusLabel: 'Proyecto técnico verificable',
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
          statusLabel: 'Prototipo funcional',
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Estos dos repositorios muestran el prototipo de ERP y el panel con asistentes. La herramienta usada con datos de la operación está en un repositorio privado.',
        },
        {
          id: 'cubo',
          image: '/projects/cubo.jpg',
          title: 'CUBO — Plataforma de créditos y cobranzas para empresas',
          category: 'Web App & API',
          statusLabel: 'Producto propio',
          cardProof: false,
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
            'Plataforma propia de créditos y cobranzas: seguimiento de compromisos, antigüedad de saldos, alertas de cobro y consultas por Telegram.',
        },
        {
          id: 'cubo-inspecta',
          image: '/projects/cubo-inspecta.svg',
          imageFit: 'contain',
          imageRole: 'logo',
          logoSize: 'lg',
          imageAlt: 'CUBO INSPECTA',
          title: 'CUBO INSPECTA — Auditorías e inspecciones inteligentes',
          category: 'Auditorías e inspecciones con IA',
          statusLabel: 'Producto propio',
          cardProof: false,
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Muchas empresas hacen inspecciones y auditorías con planillas, documentos y fotografías guardados por separado. Eso complica ordenar la información, seguir observaciones y armar informes.',
          solution:
            'CUBO INSPECTA es una herramienta propia, independiente de los proyectos de clientes, pensada para ese tipo de proceso. El detalle funcional se comparte en una consulta, cuando se puede mostrar la herramienta.',
          role: 'Diseño y desarrollo del producto.',
          privacyNote:
            'Producto propio. Esta ficha no incluye repositorio público ni datos de clientes.',
          impact:
            'Producto propio de la marca CUBO, orientado a auditorías e inspecciones.',
          consultLabel: 'Consultar por CUBO INSPECTA',
          contactSubject: 'Consulta por CUBO INSPECTA',
          whatsappText:
            'Hola Juan Manuel, vi CUBO INSPECTA en tu portfolio y me gustaría conocer más sobre la herramienta de auditorías e inspecciones.',
          tags: ['Producto propio', 'Auditorías'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'Producto propio de la marca CUBO para auditorías e inspecciones.',
        },
        {
          id: 'gladys',
          image: '/projects/gladys.jpg',
          title: 'G.L.A.D.Y.S. / CoopMora - Radar de Riesgo Crediticio & BCRA',
          category: 'Pipeline & Scraping',
          statusLabel: 'Implementación empresarial',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Consulta manual, dispersa y repetitiva de boletines oficiales, fuentes de noticias financieras y registros públicos de morosidad comercial.',
          solution:
            'Pipeline en Python con web scraping y procesamiento de texto que consolida alertas tempranas de insolvencia y emite reportes diarios por correo y panel en Streamlit.',
          role: 'Desarrollo de scrapers, normalización de datos y panel analítico en Streamlit.',
          impactMetric:
            'Pipeline diario, en uso en el equipo de créditos, que releva la situación en el BCRA y las alertas de concursos y entrega un informe.',
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
          statusLabel: 'Desarrollo para cliente',
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
          statusLabel: 'Implementación empresarial',
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
        'El mismo recorrido sirve para una automatización, un desarrollo de software o una aplicación de inteligencia artificial.',
      steps: [
        {
          number: '01',
          title: 'Entendemos el problema',
          description:
            'Analizo cómo trabaja tu equipo, identifico las dificultades y detecto oportunidades de mejora.',
        },
        {
          number: '02',
          title: 'Definimos la solución',
          description:
            'Establecemos los objetivos, el alcance y la tecnología más adecuada para resolver el problema.',
        },
        {
          number: '03',
          title: 'Desarrollamos y validamos',
          description:
            'Construyo la solución, pruebo su funcionamiento y realizo los ajustes necesarios antes de implementarla.',
        },
        {
          number: '04',
          title: 'Implementamos y acompañamos',
          description:
            'Pongo la herramienta en funcionamiento, documento su uso y acompaño su incorporación al trabajo diario.',
        },
      ],
    },
    experience: {
      tag: 'Respaldo',
      title: 'Experiencia que respalda el trabajo',
      subtitle:
        'Más de una década en créditos, cobranzas y procesos. Ese criterio es el que uso al diseñar una herramienta.',
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
            'Diseñé y desarrollé la herramienta interna de gestión diaria de cobros y saldos de la operación regional.',
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
            'Implementé un modelo de segmentación de cartera por matrices de comportamiento para la mora de 30 a 60 días y la deuda de más de 60 días.',
            'Automaticé reportes periódicos entre SAP ERP y Power BI (DAX) para el cierre y la consolidación.',
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
    problems: {
      title: 'El trabajo que hoy se hace a mano',
      items: [
        {
          id: 'manual',
          title: 'Horas en planillas, conciliaciones y reportes',
          text: 'El cierre depende de copiar datos, cruzar archivos y armar el mismo informe otra vez.',
        },
        {
          id: 'scattered',
          title: 'Información repartida en archivos que no se hablan',
          text: 'Saldos, incidencias o trámites viven en planillas distintas y nadie ve el estado real.',
        },
        {
          id: 'repeat',
          title: 'Lecturas y clasificaciones que el equipo repite',
          text: 'Alertas, textos y criterios se revisan a mano, con el mismo criterio, todos los días.',
        },
      ],
    },
    services: {
      tag: 'Servicios',
      title: 'Soluciones para tu negocio',
      subtitle:
        'Tres formas de trabajar, según el problema. El alcance se define con el proceso real, no con un paquete cerrado.',
      cta: 'Consultar por este servicio',
      items: [
        {
          id: 'automatizacion',
          kicker: 'Automatización de procesos',
          title: 'Menos tareas manuales. Más tiempo para tu negocio.',
          description:
            'Automatizo procesos administrativos y operativos para reducir trabajo repetitivo, errores y tiempos de ejecución.',
          examples: [
            'Conciliaciones bancarias',
            'Procesamiento de archivos Excel y CSV',
            'Automatización de cobranzas',
            'Integración y validación de datos',
            'Generación automática de reportes',
          ],
          subject: 'Consulta por automatización de procesos',
        },
        {
          id: 'aplicaciones',
          kicker: 'Desarrollo de software empresarial',
          title: 'Herramientas diseñadas para la forma en que trabaja tu empresa.',
          description:
            'Desarrollo aplicaciones web y sistemas internos para digitalizar y simplificar procesos de la operación.',
          examples: [
            'Aplicaciones de gestión',
            'Portales internos',
            'Sistemas de seguimiento',
            'Dashboards',
            'Herramientas operativas',
            'Aplicaciones web personalizadas',
          ],
          subject: 'Consulta por desarrollo de software',
        },
        {
          id: 'ia',
          kicker: 'Inteligencia artificial aplicada',
          title: 'Inteligencia artificial aplicada a problemas reales.',
          description:
            'Integro inteligencia artificial en procesos y aplicaciones para clasificar información, redactar borradores y asistir el trabajo diario. Una persona sigue revisando el resultado.',
          examples: [
            'Asistentes internos',
            'Clasificación de alertas',
            'Agentes de IA',
            'Redacción asistida',
            'Automatización de flujos de trabajo',
          ],
          subject: 'Consulta por inteligencia artificial',
        },
      ],
    },
    collaboration: {
      title: '¿Necesitás sumar capacidad técnica a tu próximo proyecto?',
      text: 'Colaboro con agencias, consultoras y equipos de tecnología que necesitan desarrollar automatizaciones, aplicaciones empresariales o soluciones con inteligencia artificial.',
      text2:
        'Puedo integrarme a proyectos existentes o participar en desarrollos específicos, aportando experiencia técnica y conocimiento de procesos de negocio.',
      cta: 'Conversemos sobre una colaboración',
      subject: 'Consulta por una colaboración',
    },
    contact: {
      tag: 'Contacto Directo',
      title: '¿Tenés un proceso que querés mejorar o una idea que necesitás desarrollar?',
      subtitle: 'Contame qué necesitás y evaluemos cómo convertirlo en una solución concreta.',
      whatsappPrefill:
        'Hola Juan Manuel, vi tu portfolio y me gustaría conversar sobre una solución para mi empresa.',
      whatsappTitle: 'WhatsApp Directo',
      whatsappBtn: 'Chatear →',
      emailTitle: 'Correo Electrónico',
      copiedEmail: 'Copiado',
      formTitle: 'Enviar mensaje',
      formSubtitle: 'Contame qué proceso necesitás mejorar o qué solución tenés en mente.',
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
      sending: 'Enviando mensaje...',
      statusAccepted: 'Tu mensaje se envió correctamente. Gracias por contactarme.',
      statusError: 'No se pudo enviar. Tus datos siguen en el formulario: probá de nuevo o escribinos por WhatsApp.',
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
      solutions: 'Solutions',
      projects: 'Projects',
      skills: 'Skills',
      simulator: 'Simulator',
      collaborate: 'Collaboration',
      methodology: 'Methodology',
      experience: 'Experience',
      contact: 'Contact',
      downloadCv: 'Download Resume (PDF)',
    },
    ui: {
      toSpanish: 'ES - Switch language to Spanish',
      toEnglish: 'EN - Switch language to English',
      toggleToEnglish: 'Switch language to English',
      toggleToSpanish: 'Switch language to Spanish',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close menu',
      copyEmail: 'Copy email',
      copyEmailAddress: 'Copy email address',
      sendEmail: 'Send email to Juan Manuel Varela',
    },
    seo: {
      title: 'Juan Manuel Varela | Process automation, business software and applied AI',
      description:
        'I automate administrative work, build custom business applications, and apply AI to day-to-day operations. Less manual work and clearer control of the information.',
    },
    hero: {
      badge: 'Independent professional',
      eyebrow: 'Juan Manuel Varela · Process automation, business software and applied AI',
      heroCtaBanner:
        'If your team is losing hours to spreadsheets, I can build the tool that takes that work out of the operation.',
      headline: 'I turn manual processes into digital tools.',
      headlineSub: '',
      subheadline:
        'I combine more than 10 years of experience in business processes with software development to build automations, applications, and AI solutions that solve real business problems.',
      storyP1:
        'Ten years at Saputo, DACAS, and CNH, across credit, collections, and bank reconciliations. Since 2024 I have designed and shipped automation systems, internal portals, and production AI (CoopMora, SECSA, and an HR intranet), combining more than a decade of financial and operational judgment with software development. I write Python so teams get back the hours they spend on spreadsheets.',
      storyP3:
        'Today, I bridge those two worlds. I am neither an abstract developer nor an analyst confined to PowerPoint decks: I build tools, pipelines, and dashboards that run in production, strip away repetitive grunt work, and give businesses back the time they need to make strategic decisions.',
      ctaProjects: 'View projects',
      ctaContact: "Let's talk about your project",
      availability:
        'I work with companies and teams on automation, data analysis, and digital tools, as an external professional.',
      ctaCv: 'Download Resume (PDF)',
      ctaWhatsapp: 'Direct WhatsApp',
      metricsLabel: 'Experience in companies',
    },
    metrics: [
      {
        value: '+10 years',
        label: 'In business processes',
        detail: 'Since 2014, in credit, collections, and processes at consumer-goods, machinery, and regional operations.',
      },
    ],
    projects: {
      tag: 'Implementations, products, and prototypes',
      title: 'Projects and solutions developed',
      subtitle:
        'A bank reconciliation engine, a collections agent, and a credit platform. The other cases stay available.',
      problemLabel: 'The Problem:',
      solutionLabel: 'The Solution:',
      impactLabel: 'What was verified:',
      roleLabel: 'My Role:',
      stackLabel: 'Tech Stack:',
      statusLabel: 'Project Status:',
      btnCaseDetails: 'See the case',
      valueLabel: 'What it does:',
      techToggle: 'Technical detail',
      btnRequestDemo: 'Request Demo',
      btnViewRepo: 'View Repository',
      viewCase: 'View summary',
      hideCase: 'Hide summary',
      statusPrivate: 'Private — Request Demo',
      statusPrivateCase: 'Corporate / Private System',
      statusPublic: 'Code Available',
      flagshipBadge: 'Featured project',
      viewAllProjects: 'View all projects',
      showFeaturedOnly: 'Show featured projects only',
      flagshipMetricsTitle: 'What the prototype shows',
      flagshipPipelineTitle: 'Automated Operations Pipeline',
      engineeringLabel: 'What the code decides',
      modalProblem: '1. Business problem',
      modalSolution: '2. Technical solution',
      modalFeatures: 'What the system does',
      modalStack: '3. Tech stack',
      modalRole: '4. My role',
      modalImpact: 'What was verified',
      modalStatus: 'Status:',
      privateProject: 'Private project',
      codeAvailable: 'Code available',
      privateDemo: 'Private — Demo on request',
      publicCode: 'Public code',
      closeDialog: 'Close project details',
      scrollDetails: 'Scrollable project details',
      consultPrompt: 'If this product is relevant, write to me and we can look at the tool together.',
      demoPrompt: 'Want to see how it is built, or walk through a working demo?',
      requestDemo: 'Request a demo',
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
            { step: '04', name: 'WhatsApp/Email', desc: 'Message ready to send' },
          ],
          engineering: [
            'agente/riesgo.py keeps the 0–100 score explainable: 40% days overdue, 25% balance, 20% history, 15% broken promises.',
            'agente/redactor.py rejects a draft that threatens, misses the amount, or is not JSON, then uses the template.',
            '16 pytest cases lock the segments, the sort order, and that fallback. They run locally; the repo does not publish a CI workflow.',
          ],
          tags: ['Python', 'Streamlit', 'Claude API', 'Pytest', 'Credit Risk', 'Offline Fallback'],
          statusLabel: 'Working prototype',
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'Quantitative portfolio prioritization and assisted drafting, with checks so the notice respects amounts and dates.',
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
            'Bank reconciliation engine designed to automate statement processing and reduce manual tasks. On a sample bank statement, the engine automatically reconciled 97.2% of the total credit amount.',
          impactMetric:
            'Bank reconciliation engine designed to automate statement processing and reduce manual tasks. On a sample bank statement, the engine automatically reconciled 97.2% of the total credit amount.',
          engineering: [
            'conciliador/core.py runs rules from safest to loosest: invoice number, tax ID, fuzzy name, grouped payment, and FIFO partials.',
            'An ambiguous name match is left unmatched. Partial payments are flagged for review. Debits are ignored.',
            '11 tests require over 90% on the sample book (the README measures 97.2% of amount) and that each invoice is used once.',
          ],
          tags: ['Python', 'Pandas', 'RapidFuzz', 'openpyxl', 'Pytest'],
          statusLabel: 'Verifiable technical project',
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
          statusLabel: 'Working prototype',
          isPublic: true,
          isPrivate: false,
          state: siteConfig.projectStates.CODE,
          demoUrl: null,
          summaryCase:
            'These two repositories show the ERP prototype and the assistant panel. The tool used with operational data is in a private repository.',
        },
        {
          id: 'cubo',
          image: '/projects/cubo.jpg',
          title: 'CUBO — Credit and collections platform for companies',
          category: 'Web App & API',
          statusLabel: 'Own product',
          cardProof: false,
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
            'Own credit and collections platform: commitment tracking, receivable aging, collection alerts, and Telegram queries.',
        },
        {
          id: 'cubo-inspecta',
          image: '/projects/cubo-inspecta.svg',
          imageFit: 'contain',
          imageRole: 'logo',
          logoSize: 'lg',
          imageAlt: 'CUBO INSPECTA',
          title: 'CUBO INSPECTA — Intelligent audits and inspections',
          category: 'Audits and inspections with AI',
          statusLabel: 'Own product',
          cardProof: false,
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Many companies run inspections and audits with spreadsheets, documents, and photos kept apart. That makes it harder to organize the information, follow up on findings, and prepare reports.',
          solution:
            'CUBO INSPECTA is my own tool for that kind of work, separate from client projects. Functional detail is shared in a conversation, when the tool can be shown.',
          role: 'Product design and development.',
          privacyNote:
            'Independent product. This page does not include a public repository or client data.',
          impact:
            'An independent product under the CUBO brand, built for audits and inspections.',
          consultLabel: 'Ask about CUBO INSPECTA',
          contactSubject: 'Inquiry about CUBO INSPECTA',
          whatsappText:
            'Hi Juan Manuel, I saw CUBO INSPECTA on your portfolio and I would like to know more about the audit and inspection tool.',
          tags: ['Own product', 'Audits'],
          demoUrl: null,
          githubUrl: null,
          summaryCase:
            'An independent CUBO product for audits and inspections.',
        },
        {
          id: 'gladys',
          image: '/projects/gladys.jpg',
          title: 'G.L.A.D.Y.S. / CoopMora - Credit Risk & BCRA Radar',
          category: 'Pipeline & Scraping',
          statusLabel: 'Business implementation',
          state: siteConfig.projectStates.PRIVATE_CASE,
          isPrivate: true,
          isPublic: false,
          problem:
            'Manual, repetitive browsing of official gazettes, financial news outlets, and commercial bankruptcy registries.',
          solution:
            'Python pipeline with web scraping and automated text processing that aggregates early insolvency alerts and delivers daily email digests and Streamlit reports.',
          role: 'Web scraper development, data sanitation, and Streamlit analytics UI.',
          impactMetric:
            'A daily pipeline, in use by the credit team, that checks BCRA status and insolvency filings and delivers a report.',
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
          statusLabel: 'Built for a client',
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
          statusLabel: 'Business implementation',
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
        'The same path fits an automation, a software build, or an applied-AI solution.',
      steps: [
        {
          number: '01',
          title: 'We understand the problem',
          description:
            'I look at how your team works, identify the difficulties, and find opportunities to improve.',
        },
        {
          number: '02',
          title: 'We define the solution',
          description:
            'We set the objectives, the scope, and the technology best suited to the problem.',
        },
        {
          number: '03',
          title: 'We build and validate',
          description:
            'I build the solution, test how it works, and make the adjustments needed before it goes into use.',
        },
        {
          number: '04',
          title: 'We implement and support adoption',
          description:
            'I put the tool into operation, document how to use it, and help the team bring it into daily work.',
        },
      ],
    },
    experience: {
      tag: 'Background',
      title: 'Experience behind the work',
      subtitle:
        'More than a decade in credit, collections, and business processes. That judgment is what I use when designing a tool.',
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
            'Designed and built the internal tool for daily collections and balance tracking in the regional operation.',
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
            'Designed a behavioral segmentation matrix for 30–60 day overdue balances and for debt older than 60 days.',
            'Automated periodic reports between SAP ERP and Power BI (DAX) for closing and consolidation.',
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
    problems: {
      title: 'Work that is still done by hand',
      items: [
        {
          id: 'manual',
          title: 'Hours spent on spreadsheets, reconciliations, and reports',
          text: 'The close depends on copying data, matching files, and building the same report again.',
        },
        {
          id: 'scattered',
          title: 'Information split across files that do not connect',
          text: 'Balances, incidents, or internal requests live in separate spreadsheets, and nobody sees the real status.',
        },
        {
          id: 'repeat',
          title: 'Reading and sorting the team repeats every day',
          text: 'Alerts, drafts, and criteria are reviewed by hand, with the same judgment, every day.',
        },
      ],
    },
    services: {
      tag: 'Services',
      title: 'Solutions for your business',
      subtitle:
        'Three ways of working, depending on the problem. Scope is defined by the real process, not by a fixed package.',
      cta: 'Ask about this service',
      items: [
        {
          id: 'automatizacion',
          kicker: 'Process automation',
          title: 'Less manual work. More time for the business.',
          description:
            'I automate administrative and operational processes to cut repetitive work, mistakes, and the time a task takes.',
          examples: [
            'Bank reconciliations',
            'Excel and CSV file processing',
            'Collections automation',
            'Data integration and validation',
            'Automatic report generation',
          ],
          subject: 'Inquiry: process automation',
        },
        {
          id: 'aplicaciones',
          kicker: 'Business software',
          title: 'Tools shaped around how your company works.',
          description:
            'I build web applications and internal systems to digitize and simplify how the operation runs.',
          examples: [
            'Management applications',
            'Internal portals',
            'Tracking systems',
            'Dashboards',
            'Operational tools',
            'Custom web applications',
          ],
          subject: 'Inquiry: business software',
        },
        {
          id: 'ia',
          kicker: 'Applied artificial intelligence',
          title: 'Artificial intelligence applied to real problems.',
          description:
            'I add artificial intelligence to processes and applications to classify information, draft text, and assist daily work. A person still reviews the result.',
          examples: [
            'Internal assistants',
            'Alert classification',
            'AI agents',
            'Assisted drafting',
            'Workflow automation',
          ],
          subject: 'Inquiry: applied AI',
        },
      ],
    },
    collaboration: {
      title: 'Need extra technical capacity on your next project?',
      text: 'I work with agencies, consultancies, and technology teams that need automations, business applications, or applied artificial intelligence.',
      text2:
        'I can join an existing project or take on a defined piece of work, bringing technical experience and a working knowledge of business processes.',
      cta: "Let's talk about a collaboration",
      subject: 'Inquiry: a collaboration',
    },
    contact: {
      tag: 'Direct Contact',
      title: 'Do you have a process to improve, or an idea you need to build?',
      subtitle: 'Tell me what you need, and we can look at how to turn it into a concrete solution.',
      whatsappPrefill:
        'Hi Juan Manuel, I saw your portfolio and I would like to talk about a solution for my company.',
      whatsappTitle: 'Direct WhatsApp',
      whatsappBtn: 'Chat Now →',
      emailTitle: 'Email Address',
      copiedEmail: 'Copied',
      formTitle: 'Send a Message',
      formSubtitle: 'Tell me which process you need to improve, or what solution you have in mind.',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Reason for reaching out',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me what you need to solve in your operation.',
      sendBtn: 'Send Message',
      sending: 'Sending message...',
      statusAccepted: 'Your message was sent successfully. Thank you for reaching out.',
      statusError: 'The message could not be sent. Your details are still in the form. Try again or use WhatsApp.',
    },
    footer: {
      location: 'Buenos Aires, Argentina.',
      title: 'Independent professional',
      vercel: 'Deployed on Vercel',
      backToTop: 'Top',
    },
  },
};
