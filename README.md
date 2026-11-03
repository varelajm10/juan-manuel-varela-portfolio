# Portfolio & CV Online Interactivo — Juan Manuel Varela

Aplicación web moderna, minimalista y ultra optimizada para desplegar en **Vercel**, diseñada con una estética limpia inspirada en **shadcn/ui** y **Tailwind CSS**. 

Combina la visión estratégica de **Administración y Finanzas Corporativas (Créditos, Cobranzas y Flujo de Caja)** con la ingeniería de software aplicada a la **Automatización de Procesos (Python, FastAPI, SQL, Power BI, React)**.

---

## 🚀 Características Principales

1. **Header / Navegación fija:**
   - Marca personal con monograma `JV`.
   - Navegación suave por anclas: *Sobre mí*, *Proyectos*, *Habilidades*, *Trayectoria*, *Contacto*.
   - Botón CTA directo para **Descargar CV (PDF)**.
   - Botón interactivo para **Preview de CV** en modal sin abandonar la página.
   - Switch instantáneo **Dark / Light mode** (con modo oscuro por defecto y persistencia en `localStorage`).

2. **Hero Section de Alto Impacto:**
   - Propuesta de valor híbrida: Finanzas + Automatización + Software.
   - Badges de estado operativo y ubicación.
   - Enlaces directos a perfiles de **LinkedIn**, **GitHub** y botón de copia rápida de correo al portapapeles.
   - Métricas cuantitativas de impacto (`-75% en procesos manuales`, `+45 hs/mes ahorradas`, `100% trazabilidad`, etc.).
   - Pilares de valor con íconos de Lucide React.

3. **Showcase de Proyectos (Portfolio Grid):**
   - Tarjetas con filtros por categoría: *SaaS / Full Stack*, *Automatización / Data*, *Desktop App*.
   - Planteo claro de **Desafío de Negocio**, **Solución Técnica** y **Resultado Clave**.
   - Badges con tags del stack técnico.
   - Botones para *Ver Demo*, *Código en GitHub* y badge de *Propiedad Privada / Confidencial*.

4. **Habilidades Técnicas y de Negocio (Tabs / Bloques):**
   - *Automatización & Backend:* Python, FastAPI, Web Scraping, Scripts ETL.
   - *Data & BI:* Power BI, DAX Avanzado, Modelado dimensional, SQL.
   - *Frontend & Core:* React, Tailwind CSS, Git, Linux, Vercel.
   - *Metodologías & Negocio:* Gestión de créditos y cobranzas B2B, Cash Flow, reducción de DSO, SOPs.

5. **Trayectoria & Experiencia Laboral:**
   - Timeline vertical interactivo.
   - Bullets orientados a logros cuantitativos y reducción de tiempos.
   - Bloque complementario de *Formación y Especialización Continua*.

6. **Módulo de Descarga y Preview de CV:**
   - Apunta al archivo `/public/cv-juan-manuel-varela.pdf`.
   - Vista previa interactiva completa en modal modal accesible con tecla `ESC`.

7. **Contacto & Footer:**
   - Formulario de contacto directo con validación y enlace directo `mailto` preformateado.
   - Copia de email en un clic.
   - Badges de copyright y mención de *Desplegado en Vercel*.

---

## 🛠️ Stack Tecnológico

- **React 18**
- **Vite** (Rápido, bundle ultra liviano y optimizado para producción)
- **Tailwind CSS v3** con paleta de colores neutra (Zinc / Emerald / Sky)
- **Lucide React** (Íconos modernos y consistentes)
- **Vercel** (Configuración lista en `vercel.json`)

---

## 📂 Estructura del Proyecto

```text
Juan Manuel Varela/
├── public/
│   └── cv-juan-manuel-varela.pdf     # Documento PDF descargable
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                # Header fijo, dark mode switch y CTA
│   │   ├── Hero.jsx                  # Hero section, métricas e impacto
│   │   ├── Projects.jsx              # Showcase de proyectos y filtros
│   │   ├── Skills.jsx                # Habilidades técnicas y de negocio
│   │   ├── Experience.jsx            # Timeline de trayectoria profesional
│   │   ├── CvSection.jsx             # Sección dedicada de descarga y preview
│   │   ├── CvModal.jsx               # Modal interactivo de lectura rápida
│   │   ├── Contact.jsx               # Formulario de contacto y enlaces directos
│   │   └── Footer.jsx                # Pie de página y retorno arriba
│   ├── data/
│   │   └── portfolioData.js          # Archivo central de datos y textos
│   ├── App.jsx                       # Orquestador principal y estado del tema
│   ├── index.css                     # Directivas Tailwind y estilos de grid
│   └── main.jsx                      # Punto de entrada de React
├── index.html                        # HTML con tipografías y metadatos SEO
├── tailwind.config.js                # Configuración de modo oscuro y extensiones
├── postcss.config.js
├── vite.config.js                    # Configuración de compilación Vite
├── vercel.json                       # Parámetros de despliegue en Vercel
├── package.json                      # Dependencias y scripts
└── README.md
```

---

## ⚙️ Pasos para Ejecutar Localmente

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en el navegador.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🚀 Despliegue en Vercel (1 Clic)

### Opción A: Desde GitHub (Recomendada)
1. Subí este repositorio a tu cuenta de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio y cv online interactivo"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```
2. Ingresá a [Vercel](https://vercel.com) e importá el repositorio.
3. El archivo `vercel.json` autodetectará Vite y configurará el comando de build (`npm run build`) y el directorio de salida (`dist`).

### Opción B: Con Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📝 Cómo Personalizar Tus Datos

Todos los textos, proyectos, empresas, métricas y enlaces están centralizados en:
👉 [`src/data/portfolioData.js`](file:///c:/Juan%20Manuel%20Varela/src/data/portfolioData.js)

Para actualizar tu CV en PDF oficial, simplemente reemplaza el archivo en:
👉 `public/cv-juan-manuel-varela.pdf`

