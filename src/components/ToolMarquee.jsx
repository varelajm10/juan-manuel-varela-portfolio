import React from 'react';

const copy = {
  es: {
    title: 'Tecnologías que forman parte de mis soluciones',
    note: 'Ecosistema en uso',
  },
  en: {
    title: 'Technologies that are part of my solutions',
    note: 'Active stack',
  },
};

const tools = [
  { id: 'python', name: 'Python', role: { es: 'Automatización y datos', en: 'Automation & data' } },
  { id: 'sql', name: 'SQL', role: { es: 'Modelado y cruces', en: 'Modeling & queries' } },
  { id: 'sap', name: 'SAP FI/AR', role: { es: 'Operación ERP', en: 'ERP operations' } },
  { id: 'odoo', name: 'Odoo', role: { es: 'Gestión empresarial', en: 'Business ERP' } },
  { id: 'powerbi', name: 'Power BI', role: { es: 'DAX y tableros', en: 'DAX & BI' } },
  { id: 'excel', name: 'Excel / VBA', role: { es: 'Procesos heredados', en: 'Legacy workflows' } },
  { id: 'fastapi', name: 'FastAPI', role: { es: 'APIs REST', en: 'REST APIs' } },
  { id: 'react', name: 'React', role: { es: 'Portales y web apps', en: 'Portals & web apps' } },
  { id: 'claude', name: 'Claude', role: { es: 'API y agentes', en: 'API & agents' } },
  { id: 'claudecode', name: 'Claude Code', role: { es: 'Desarrollo asistido', en: 'Assisted engineering' } },
  { id: 'gemini', name: 'Gemini', role: { es: 'IA aplicada', en: 'Applied AI' } },
  { id: 'chatgpt', name: 'ChatGPT', role: { es: 'Flujos con LLM', en: 'LLM workflows' } },
  { id: 'github', name: 'GitHub', role: { es: 'Control de versiones', en: 'Version control' } },
  { id: 'cursor', name: 'Cursor', role: { es: 'Entorno de código', en: 'Code environment' } },
  { id: 'vscode', name: 'VS Code', role: { es: 'Desarrollo diario', en: 'Daily editor' } },
];

export default function ToolMarquee({ lang }) {
  const t = copy[lang] || copy.es;

  return (
    <section
      id="herramientas"
      aria-labelledby="herramientas-titulo"
      className="border-b border-gridline bg-white"
    >
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gridline px-4 py-4 sm:px-6 lg:px-8">
          <h2
            id="herramientas-titulo"
            className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink-muted"
          >
            {t.title}
          </h2>
          <span className="font-mono text-xs text-petrol">{t.note}</span>
        </div>

        <ul className="grid grid-cols-2 gap-px bg-gridline sm:grid-cols-3 lg:grid-cols-5">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="group bg-white px-4 py-4 transition-colors hover:bg-petrol hover:text-paper sm:px-5"
            >
              <div className="font-mono text-xs font-semibold text-obsidian transition-colors group-hover:text-paper">
                {tool.name}
              </div>
              <div className="mt-1 text-xs text-ink-muted transition-colors group-hover:text-verdigris">
                {tool.role[lang] || tool.role.es}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
