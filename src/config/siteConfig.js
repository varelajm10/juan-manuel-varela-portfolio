// ============================================================================
// CONFIGURACIÓN CENTRAL DEL SITIO (ÚNICA FUENTE DE VERDAD)
// ============================================================================

export const siteConfig = {
  url: 'https://jvarela.dev',
  author: {
    name: 'Juan Manuel Varela',
    initials: 'JMV',
    phone: '+54 9 11 3069-1984',
    whatsappNumber: '5491130691984',
    email: 'juan@jmvarela.dev',
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
    linkedin: 'https://www.linkedin.com/in/juan-m-varela1984',
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

