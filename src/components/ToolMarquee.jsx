import paths from '../data/toolIconPaths.json';

const copy = {
  es: 'Tecnologías que forman parte de mis soluciones',
  en: 'Technologies that are part of my solutions',
};

const tools = [
  { id: 'python', name: 'Python', path: paths.python },
  { id: 'sap', name: 'SAP', path: paths.sap },
  { id: 'odoo', name: 'Odoo', path: paths.odoo },
  { id: 'vscode', name: 'VS Code', mark: 'VS' },
  { id: 'cursor', name: 'Cursor', path: paths.cursor },
  { id: 'chatgpt', name: 'ChatGPT', mark: 'GPT' },
  { id: 'gemini', name: 'Gemini', path: paths.gemini },
  { id: 'claude', name: 'Claude', path: paths.claude },
  { id: 'claudecode', name: 'Claude Code', path: paths.claudecode },
  { id: 'powerbi', name: 'Power BI', mark: 'PBI' },
  { id: 'excel', name: 'Excel', mark: 'XLS' },
  { id: 'sql', name: 'SQL', mark: 'SQL' },
  { id: 'github', name: 'GitHub', path: paths.github },
];

function Mark({ tool }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      {tool.path ? (
        <path fill="currentColor" d={tool.path} />
      ) : (
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="700"
          fill="currentColor"
          fontFamily="ui-monospace, monospace"
        >
          {tool.mark}
        </text>
      )}
    </svg>
  );
}

function Row({ hidden }) {
  return (
    <ul
      className="flex shrink-0 items-start gap-10 pr-10"
      aria-hidden={hidden ? 'true' : undefined}
    >
      {tools.map((tool) => (
        <li
          key={`${hidden ? 'copy' : 'main'}-${tool.id}`}
          title={tool.name}
          className="flex w-24 shrink-0 flex-col items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <Mark tool={tool} />
          <span className="text-center text-[11px] font-medium leading-tight">{tool.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ToolMarquee({ lang }) {
  return (
    <section
      id="herramientas"
      aria-labelledby="herramientas-titulo"
      className="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <h2
        id="herramientas-titulo"
        className="px-4 text-center text-xs font-medium uppercase tracking-[0.14em] text-zinc-500 dark:text-zinc-400"
      >
        {copy[lang] || copy.es}
      </h2>
      <div className="tool-marquee-wrap group mt-8 overflow-hidden">
        <div className="tool-marquee flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
