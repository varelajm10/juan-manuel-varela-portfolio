// ============================================================================
// CONFIGURACIÓN CENTRAL DEL SITIO (ÚNICA FUENTE DE VERDAD)
// ============================================================================

export const siteConfig = {
  author: {
    name: 'Juan Manuel Varela',
    initials: 'JMV',
    phone: '+54 9 11 6042-7256',
    whatsappNumber: '5491160427256',
    email: 'varelajm84@outlook.com',
    location: {
      es: 'Buenos Aires, Argentina · Remoto / Híbrido',
      en: 'Buenos Aires, Argentina · Remote / Hybrid',
    },
    role: {
      es: 'Finanzas Corporativas & Automatización con Python',
      en: 'Corporate Finance & Python Automation',
    },
  },

  // Enlaces sociales y profesionales
  links: {
    github: 'https://github.com/varelajm10', // Confirmado
    linkedin: null, // TODO: PEGAR_URL_LINKEDIN (Confirmar URL real por escrito antes de enlazar)
  },

  // Documentos estáticos verificados en /public
  documents: {
    cvEs: '/cv-juan-manuel-varela.pdf',
    cvEn: '/cv-juan-manuel-varela-en.pdf',
    cvFileNameEs: 'CV-Juan-Manuel-Varela.pdf',
    cvFileNameEn: 'CV-Juan-Manuel-Varela-EN.pdf',
  },

  // Definición de tipos de estado para proyectos
  // 'code': Repositorio público verificado en GitHub
  // 'private_case': Desarrollo privado o corporativo (abre ProjectDetailModal)
  // 'demo_request': Solicitar demostración guiada (scroll a #contacto)
  projectStates: {
    CODE: 'code',
    PRIVATE_CASE: 'private_case',
    DEMO_REQUEST: 'demo_request',
  },
};
