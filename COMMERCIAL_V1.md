# Commercial V1.0 — jmvarela.dev

Versión comercial estable de la marca personal de Juan Manuel Varela. Una sola página, un solo dominio canónico, dos idiomas en el cliente.

Fecha de cierre de esta versión: 14 de noviembre de 2026.

## Posicionamiento

Juan Manuel Varela es un profesional independiente. La oferta es automatización de procesos, desarrollo de software empresarial e inteligencia artificial aplicada a negocios.

CUBO sigue siendo una marca de producto, visible en los proyectos, y no es el nombre del sitio.

La propuesta del encabezado es: «Transformo procesos manuales en soluciones digitales.»

## Estructura final

1. Hero, con nombre, oferta, dos llamados y acceso a correo y WhatsApp.
2. Problemas que hoy se resuelven a mano.
3. Soluciones para tu negocio, en tres líneas.
4. Proyectos destacados, con el resto disponible.
5. Colaboración para agencias y consultoras.
6. Metodología en cuatro pasos.
7. Cinta de tecnologías.
8. Experiencia resumida y formación.
9. Contacto.

La sección de habilidades salió del recorrido visible. Los datos siguen en `src/data/portfolioData.js` y en el CV en PDF.

No hay testimonios publicados. `src/data/demoTestimonials.js` guarda tres ejemplos ficticios con `verified: false` y `demo: true`. `Testimonials.jsx` solo renderiza ítems verificados que no estén marcados como demostración. Con la lista actual, la sección no aparece. No hay `Review` ni `AggregateRating` en Schema.org.

## Servicios

1. Automatización de procesos. Conciliaciones, Excel y CSV, cobranzas, validación de datos y reportes.
2. Desarrollo de software empresarial. Gestión, portales, seguimiento, dashboards, herramientas operativas y aplicaciones web.
3. Inteligencia artificial aplicada. Asistentes, clasificación de alertas, agentes, redacción asistida y flujos de trabajo. Una persona revisa el resultado.

No se publican precios, plazos ni porcentajes de ahorro.

## Público

- Empresas que necesitan sacar trabajo manual de la operación.
- Empresas que necesitan una aplicación o un sistema interno.
- Organizaciones que quieren aplicar inteligencia artificial a un proceso existente.
- Agencias y consultoras que necesitan capacidad técnica externa.

## Palabra clave y mapa de páginas

Hay una sola URL indexable: `https://jmvarela.dev/`.

- Principal: automatización de procesos empresariales.
- Secundarias, repartidas en el titular, los servicios y los casos: software a medida, aplicaciones empresariales, inteligencia artificial para empresas, automatización con Python, conciliaciones bancarias, colaboración con agencias.

No hay volúmenes de búsqueda medidos en esta versión.

| URL | Idioma indexable por defecto | Title |
| --- | --- | --- |
| `https://jmvarela.dev/` | Español (`es-AR` en el HTML inicial) | Juan Manuel Varela \| Automatización de procesos, software e IA para empresas |

## CTA y recorrido

- «Hablemos de tu proyecto» lleva a `#contacto`.
- «Ver proyectos» lleva a `#proyectos`.
- Cada servicio y la colaboración abren el contacto con el asunto ya escrito.
- WhatsApp usa `https://wa.me/5491130691984` y el teléfono `+54 9 11 3069-1984`.
- Correo: `juan@jmvarela.dev`.
- El formulario envía a `POST /api/contact`.

## Medición

`src/lib/track.js` emite un `CustomEvent` llamado `jmv:event` en la ventana. Si ya existe `window.dataLayer`, también hace `push`. No carga Google Analytics, Tag Manager ni ningún otro script.

Eventos preparados:

| Nombre | Cuándo |
| --- | --- |
| `cta_click` | Hero, navegación, cada servicio, colaboración, ficha y modal de proyecto. El detalle incluye `location` y, si aplica, `service` o `project`. |
| `contact_whatsapp` | Clic en WhatsApp del hero, del contacto o del modal. |
| `contact_email` | Clic en el correo del hero, del contacto o del pie. |
| `form_submit_success` | Respuesta correcta del formulario. |

Para medirlos hace falta, fuera de este repositorio: una propiedad de analítica, un contenedor que escuche `jmv:event` o `dataLayer`, el alta del sitio en Google Search Console y la verificación de que `RESEND_API_KEY` está configurada en el hosting. Nada de eso se agregó aquí.

## SEO

Verificado en el build y en el HTML servido en local:

- Canónica, Open Graph, Twitter Card, sitemap y `robots.txt` apuntan a `https://jmvarela.dev/`.
- Un solo `h1`.
- Schema.org `ProfilePage` + `Person`, con tres `Service` dentro de `OfferCatalog`. Sin reseñas.
- `public/404.html` está en el build, con `noindex` y enlace a la home.
- Imágenes de proyectos con `loading="lazy"`, `decoding="async"`, ancho y alto. La foto del hero no es lazy.
- No hay `hreflang`. No existen `/en` ni otra URL de idioma.

### Dominio

`jmvarela.dev` resuelve a `64.29.17.65` y `216.198.79.65`. `jvarela.dev` solo devolvió el SOA de Cloudflare, sin registro A. `www.jmvarela.dev` no devolvió registro en la consulta hecha el 14 de noviembre de 2026. No se configuró ninguna redirección.

### Limitación del inglés

El idioma se cambia en el navegador y se guarda en `localStorage`. El HTML que recibe un buscador, antes de ejecutar JavaScript, está en español: `lang="es"`, canónica única, `og:locale` inicial `es_AR` y JSON-LD en español. Después de elegir inglés, la página actualiza `lang`, el title, la meta description y `og:locale` a `en_US`. Ese contenido en inglés no tiene URL propia y no se declara como versión alternativa. Un buscador puede no indexarlo como página en inglés.

## Pruebas realizadas

- `npm run build` terminó correctamente el 14 de noviembre de 2026. Vite advirtió que los chunks de `pdfmake` y sus fuentes superan 500 kB. Esa dependencia ya estaba y se usa para el CV. No se partió el bundle en esta versión.
- `npm run lint` no corre: el script existe y ESLint no está instalado. No se agregó la dependencia.
- Revisión en el build local (`vite preview`) a 1280 px y a 390 px:
  - Un H1, navegación de escritorio y menú móvil con las seis secciones.
  - Español e inglés, con title distinto en cada uno.
  - Tema claro y oscuro.
  - «Consultar por este servicio» de automatización escribió «Consulta por automatización de procesos» y disparó `cta_click`.
  - WhatsApp y correo apuntan a los datos de `siteConfig.js`.
  - La sección de referencias no está en el DOM.
  - Las imágenes cargadas no quedaron rotas.
- `public/404.html` responde en `/404.html`. En el preview local, una ruta inexistente devuelve la aplicación, no esa 404. En Vercel, sin rewrites en `vercel.json`, el archivo `404.html` del build es el que corresponde a las rutas no encontradas. Eso no se comprobó en producción porque no hubo deploy.

No se envió el formulario contra la API. El preview no tiene Resend, y no se forzó un envío de prueba.

## Correcciones del 14 de noviembre de 2026

Después de la validación técnica se autorizaron tres correcciones. No cambió la estructura, el hero, los servicios, el portfolio, la trayectoria ni los textos comerciales.

### Contraste

Lighthouse marcaba 13 textos en modo oscuro: el gris `#71717a` sobre el fondo oscuro quedaba entre 3,90 y 4,12, por debajo de 4,5. En modo claro ese mismo gris ya superaba 4,5, así que se conservó `text-zinc-500` y se agregó `dark:text-zinc-400` solo en esos nodos: estado y candado de proyectos, ubicación de la trayectoria, rótulos LinkedIn, GitHub y CV, y las dos líneas monoespaciadas del pie. El tono oscuro pasa a `#a1a1aa`, el mismo secundario que ya usaba el resto de la página.

### Nombre accesible

El botón de idioma del móvil mostraba `ES` o `EN` y su `aria-label` no contenía esas letras. Ahora el nombre empieza por el texto visible, por ejemplo `ES Cambiar idioma a Inglés`. Al enlace de correo del contacto se le quitó el `aria-label` con dos puntos; el nombre queda en el texto visible del enlace.

### Abuso del formulario

Sin dependencias nuevas. `Contact.jsx` envía `form_started`, la hora en que se montó el formulario. `api/contact.js` rechaza el envío si esa marca tiene menos de 2 segundos o más de 24 horas (400). Si llega el encabezado `Origin`, solo acepta `https://jmvarela.dev` y los orígenes locales de prueba; si no llega, la petición sigue (403 cuando el origen está presente y no está permitido). Cada instancia guarda en memoria hasta 8 POST por IP cada 15 minutos y responde 429 al superarlas. El honeypot `company_website` sigue devolviendo 200 sin enviar correo y también consume ese cupo. El cliente sigue mostrando el mismo error genérico.

Esa memoria no se comparte entre instancias de Vercel y se vacía cuando la función arranca en frío. Un cliente que omita `Origin` no queda bloqueado por la lista de orígenes. Una vista previa `*.vercel.app` tampoco está en la lista. Quien deje la página abierta más de 24 horas tiene que recargarla para enviar. No reemplaza un límite en el borde de la red.

### Nueva medición

`npm run build` volvió a terminar el 14 de noviembre de 2026, con la misma advertencia de tamaño de `pdfmake`.

Lighthouse 13.6.0, solo accesibilidad, contra `http://127.0.0.1:4173/` del build nuevo, con `prefers-color-scheme: dark`. No es producción.

| Medición | Accesibilidad | Contraste | Nombre y texto visible |
| --- | --- | --- | --- |
| Móvil, 14 nov 2026 17:31:23 UTC | 100 | 1, cero elementos | 1, cero elementos |
| Escritorio, 14 nov 2026 17:31:36 UTC | 100 | 1, cero elementos | 1, cero elementos |

En el mismo preview, con el documento en clase `dark`, el texto de ubicación y el rótulo LinkedIn se pintan `rgb(161, 161, 170)`. El pie, sobre `rgb(9, 9, 11)`, da una relación de 7,76. El botón visible de idioma anuncia `ES Cambiar idioma a Inglés`. El enlace de correo ya no tiene `aria-label`.

La API se probó en local importando el handler, sin `RESEND_API_KEY` y sin enviar correo: envío inmediato 400, sin marca de tiempo 400, origen ajeno 403, honeypot 200, carga válida 503, y el noveno POST de la misma IP 429.

## Criterios de aceptación

1. La página comunica una oferta de servicios. Cumplido.
2. El recorrido ya no abre por un catálogo de habilidades ni por el CV. La trayectoria queda como respaldo, resumida. Cumplido.
3. Servicios y públicos están definidos. Cumplido.
4. Hay formas de consultar: formulario, WhatsApp y correo. Los enlaces se verificaron. El envío real del formulario no se ejecutó en esta pasada. Cumplido en código, pendiente de una prueba con la API en el hosting.
5. Los proyectos respaldan la oferta. El 97,2 % sigue descrito como un extracto de prueba sobre el importe total de los créditos. Cumplido.
6. El SEO técnico coincide con la arquitectura de una sola URL. Cumplido, con la limitación de indexación del inglés documentada arriba.
7. Español e inglés revisados en el navegador. Cumplido.
8. Escritorio y móvil de 390 px revisados, incluido el menú. Cumplido. No se hizo una pasada de tablet aparte del corte en el que el menú reemplaza la barra (por debajo de 1280 px).
9. El build de producción termina. Cumplido, con la advertencia de tamaño de `pdfmake`.
10. No quedan errores críticos conocidos en la interfaz revisada. Cumplido en el build local. El contraste y el nombre accesible que Lighthouse había marcado quedaron en 100 en la repetición en modo oscuro. El envío real del formulario y el comportamiento en producción siguen pendientes.

## Cierre de textos, 14 de noviembre de 2026

El subtítulo del hero pasa a combinar la experiencia en procesos con el desarrollo de la herramienta. El H1 no cambió. La sección de proyectos se llama «Proyectos y soluciones desarrolladas». Cada ficha tiene una sola naturaleza: proyecto técnico verificable, prototipo funcional, producto propio, implementación empresarial o desarrollo para cliente. El 97,2 % sigue limitado al extracto de prueba de la conciliación.

La metodología queda en cuatro pasos aplicables a automatización, software e inteligencia artificial. El último paso acompaña la puesta en uso. No promete soporte permanente.

En el hero y en el CV solo se publica la cifra verificable con la trayectoria del sitio: más de 10 años, desde 2014. Estas tres quedan fuera de la página, del HTML indexable y del CV hasta confirmación del propietario. No se despliegan mientras sigan pendientes:

- −30 % de mora de 30 a 60 días y −20 % de deuda de más de 60 días, en la gestión de cartera de Saputo (julio 2018 — mayo 2024).
- Cierre de reportes de 5 a 2 días hábiles, con SAP y Power BI, en Saputo.
- Unas 15 horas semanales de carga manual, estimación sobre la herramienta interna de cobranzas de DACAS (marzo 2025 — febrero 2026). No corresponde a los prototipos públicos de Metanoia.

## Pendientes externos

- Confirmar en el hosting que el dominio activo es `jmvarela.dev` y que `RESEND_API_KEY` envía a `juan@jmvarela.dev`.
- Probar un envío real del formulario después del deploy. El límite de 8 envíos en 15 minutos vive en la memoria de cada instancia y no frena un abuso repartido entre varias instancias.
- Dar de alta Search Console y, si se quiere medir, un tag manager que escuche `jmv:event` sin agregar el script en este repositorio.
- Decidir si `www.jmvarela.dev` y `jvarela.dev` deben redirigir. Hoy no se hizo, porque el segundo no resuelve a un sitio y el primero no mostró registro en la consulta DNS.
- Cuando exista una referencia autorizada, agregarla en `demoTestimonials.js` con `verified: true` y sin `demo: true`. Hasta entonces la sección sigue oculta.

## Congelamiento

Quedan fijos la estructura de esta página, la identidad visual, las tres categorías de servicio, la navegación y el dominio canónico `https://jmvarela.dev/`.

Un cambio posterior tiene que responder a un error, un problema de uso observado, datos de comportamiento, una necesidad comercial comprobada, un caso nuevo o una mejora de SEO con evidencia. No a una preferencia de diseño.
