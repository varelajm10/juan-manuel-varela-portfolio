// DATOS DE DEMOSTRACIÓN. No son testimonios reales.
// verified debe permanecer en false hasta contar con una referencia autorizada.
// Testimonials.jsx ignora cualquier ítem que no esté verificado.

export const demoTestimonials = [
  {
    id: 'demo-distribuidora-del-sur',
    demo: true,
    verified: false,
    company: 'Distribuidora del Sur',
    sector: {
      es: 'Distribución mayorista',
      en: 'Wholesale distribution',
    },
    quote: {
      es: 'Necesitábamos ordenar varios procesos administrativos que nos consumían demasiado tiempo. La solución propuesta simplificó el trabajo diario y nos permitió tener la información mucho más organizada.',
      en: 'We needed to organize several administrative processes that were taking too much time. The solution simplified the daily work and left the information much better organized.',
    },
    rating: 5,
  },
  {
    id: 'demo-grupo-andina',
    demo: true,
    verified: false,
    company: 'Grupo Andina',
    sector: {
      es: 'Servicios empresariales',
      en: 'Business services',
    },
    quote: {
      es: 'Juan entendió rápidamente lo que necesitábamos y desarrolló una herramienta adaptada a nuestra forma de trabajar. Valoramos especialmente la comunicación y la practicidad de la solución.',
      en: 'Juan quickly understood what we needed and built a tool adapted to the way we work. We especially valued the communication and how practical the solution was.',
    },
    rating: 5,
  },
  {
    id: 'demo-gestion-integral-pyme',
    demo: true,
    verified: false,
    company: 'Gestión Integral PyME',
    sector: {
      es: 'Consultoría administrativa',
      en: 'Administrative consulting',
    },
    quote: {
      es: 'El proyecto nos ayudó a centralizar información que antes manejábamos en distintas planillas. El desarrollo fue claro y se ajustó a los requerimientos que habíamos planteado.',
      en: 'The project helped us bring together information we used to keep in separate spreadsheets. The build was clear and matched the requirements we had set.',
    },
    rating: 4,
  },
];
