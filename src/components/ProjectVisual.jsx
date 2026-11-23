import React from 'react';

export default function ProjectVisual({ project, lang = 'es', compact = false }) {
  const isEn = lang === 'en';

  // 01. Motor de Conciliación Bancaria — Consola / Salida Excel con semáforo
  if (project.id === 'conciliacion-bancaria') {
    const rows = isEn
      ? [
          { label: '01 · Exact invoice #', status: 'Automatic', cls: 'bg-sage-tint text-sage' },
          { label: '02 · Tax ID match', status: 'Automatic', cls: 'bg-sage-tint text-sage' },
          { label: '03 · Fuzzy name (RapidFuzz)', status: 'Safe match', cls: 'bg-petrol-tint text-petrol' },
          { label: '04 · Grouped payments', status: 'Allocated', cls: 'bg-petrol-tint text-petrol' },
          { label: '05 · FIFO partials / ambiguous', status: 'For review', cls: 'bg-brass-tint text-brass', highlight: true },
        ]
      : [
          { label: '01 · Nº de factura exacto', status: 'Automático', cls: 'bg-sage-tint text-sage' },
          { label: '02 · Coincidencia por CUIT', status: 'Automático', cls: 'bg-sage-tint text-sage' },
          { label: '03 · Nombre difuso (RapidFuzz)', status: 'Umbral seguro', cls: 'bg-petrol-tint text-petrol' },
          { label: '04 · Pagos agrupados', status: 'Imputado', cls: 'bg-petrol-tint text-petrol' },
          { label: '05 · Parciales FIFO / ambiguos', status: 'A revisar', cls: 'bg-brass-tint text-brass', highlight: true },
        ];

    return (
      <div
        className={`project-media blueprint-grid flex flex-col justify-between p-4 sm:p-5 ${
          compact ? 'border border-gridline' : 'h-full'
        }`}
      >
        <div className="overflow-hidden border border-[#CFD7D2] bg-white shadow-[0_12px_28px_-22px_rgba(14,23,27,0.3)]">
          <div className="flex items-center justify-between gap-2 bg-obsidian px-3.5 py-2 font-mono text-xs text-paper">
            <span className="truncate">
              {isEn ? 'conciliador/core.py · Excel output' : 'conciliador/core.py · Salida Excel'}
            </span>
            <span className="shrink-0 text-verdigris">
              {isEn ? '97.2% matched' : '97,2 % conciliado'}
            </span>
          </div>

          <div className="grid grid-cols-3 divide-x divide-gridline border-b border-gridline bg-paper py-2.5 text-center">
            <div className="px-2">
              <div className="font-display text-2xl leading-none text-petrol">
                {isEn ? '97.2%' : '97,2 %'}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-ink-muted">
                {isEn ? 'Sample run' : 'Extracto prueba'}
              </div>
            </div>
            <div className="px-2">
              <div className="font-display text-2xl leading-none text-obsidian">
                {isEn ? '5 rules' : '5 reglas'}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-ink-muted">
                {isEn ? 'Cascade' : 'En cascada'}
              </div>
            </div>
            <div className="px-2">
              <div className="font-display text-2xl leading-none text-sage">
                {isEn ? '11 tests' : '11 tests'}
              </div>
              <div className="mt-0.5 font-mono text-[11px] text-ink-muted">Pytest</div>
            </div>
          </div>

          <ul className="divide-y divide-gridline font-mono text-xs">
            {rows.map((row) => (
              <li
                key={row.label}
                className={`flex items-center justify-between gap-2 px-3.5 py-2 ${
                  row.highlight ? 'bg-brass-tint/45' : 'bg-white'
                }`}
              >
                <span className="truncate text-obsidian">{row.label}</span>
                <span className={`shrink-0 px-2 py-0.5 text-[11px] font-semibold ${row.cls}`}>
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-2.5 font-mono text-[11px] leading-snug text-ink-muted">
          {isEn
            ? 'Conceptual view based on the matching engine and multi-sheet Excel export.'
            : 'Vista conceptual basada en el motor determinístico y su exportación Excel con semáforo.'}
        </p>
      </div>
    );
  }

  // 02. Portal Comunidad — Captura real enmarcada en ventana editorial
  if (project.id === 'portal-rrhh') {
    const modules = isEn
      ? ['Leave', 'Advances', 'ART ID', 'IT Desk']
      : ['Vacaciones', 'Adelantos', 'Credencial ART', 'Soporte IT'];

    return (
      <div className="project-media border border-gridline bg-stone p-3">
        <div className="overflow-hidden border border-[#CFD7D2] bg-white shadow-[0_12px_28px_-22px_rgba(14,23,27,0.28)]">
          <div className="flex items-center justify-between border-b border-gridline bg-paper px-3 py-1.5 font-mono text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-petrol" aria-hidden="true" />
              <span>{isEn ? 'HR Intranet · Real screenshot' : 'Intranet RRHH · Captura real'}</span>
            </span>
            <span>React</span>
          </div>
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            width="1024"
            height="454"
            loading="lazy"
            decoding="async"
            className={`w-full bg-white object-contain ${compact ? 'h-40 sm:h-44' : 'h-48 sm:h-52'}`}
          />
          <div className="grid grid-cols-2 divide-x divide-y divide-gridline border-t border-gridline bg-paper text-center font-mono text-[11px] text-ink-body sm:grid-cols-4 sm:divide-y-0">
            {modules.map((mod) => (
              <span key={mod} className="px-2 py-1.5">
                {mod}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 03. G.L.A.D.Y.S. / CoopMora — Informe diario de alertas crediticias
  if (project.id === 'gladys') {
    return (
      <div className="project-media blueprint-grid border border-gridline p-3.5">
        <div className="overflow-hidden border border-[#CFD7D2] bg-white shadow-[0_12px_28px_-22px_rgba(14,23,27,0.28)]">
          <div className="flex items-center justify-between gap-2 bg-petrol px-3 py-2 font-mono text-xs text-white">
            <span>{isEn ? 'DAILY DIGEST · CREDIT TEAM' : 'INFORME DIARIO · CRÉDITOS'}</span>
            <span className="text-verdigris">{isEn ? 'BCRA + Filings' : 'BCRA + Concursos'}</span>
          </div>
          <div className="space-y-2 p-3 text-xs">
            <div className="flex items-center justify-between gap-2 border border-petrol-border bg-petrol-tint px-2.5 py-2">
              <span className="font-semibold text-obsidian">
                {isEn ? 'BCRA credit status changes' : 'Situación crediticia BCRA'}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-petrol">
                {isEn ? 'Daily scan' : 'Relevamiento diario'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 border border-brass-border bg-brass-tint px-2.5 py-2">
              <span className="font-semibold text-obsidian">
                {isEn ? 'Official gazettes & insolvency' : 'Boletines y concursos'}
              </span>
              <span className="shrink-0 font-mono text-[11px] text-brass">
                {isEn ? 'Early alert' : 'Alerta temprana'}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-gridline pt-2 font-mono text-[11px] text-ink-muted">
              <span>{isEn ? 'Output: Email + Streamlit' : 'Salida: Correo + Streamlit'}</span>
              <span className="font-semibold text-petrol">
                {isEn ? 'In daily use' : 'En uso diario'}
              </span>
            </div>
          </div>
        </div>
        <p className="mt-2 font-mono text-[11px] leading-snug text-ink-muted">
          {isEn
            ? 'Conceptual view of the daily risk pipeline built for CoopMora.'
            : 'Vista conceptual del flujo diario implementado para CoopMora.'}
        </p>
      </div>
    );
  }

  // 04. AscenSort (RB&LCA) — Logo real del cliente + consola operativa
  if (project.id === 'ascensort') {
    const blocks = isEn
      ? [
          { title: 'Incidents', desc: 'Logging & tracking', accent: false },
          { title: 'History', desc: 'By vertical unit', accent: false },
          { title: 'Charts & reports', desc: 'Operational control', accent: false },
          { title: 'AI Audit Agent', desc: 'Assists review', accent: true },
        ]
      : [
          { title: 'Incidencias', desc: 'Registro y estado', accent: false },
          { title: 'Historial', desc: 'Por equipo vertical', accent: false },
          { title: 'Gráficos y reportes', desc: 'Control operativo', accent: false },
          { title: 'Agente IA', desc: 'Asiste auditorías', accent: true },
        ];

    return (
      <div className="project-media blueprint-grid border border-gridline p-3.5">
        <div className="overflow-hidden border border-[#CFD7D2] bg-white shadow-[0_12px_28px_-22px_rgba(14,23,27,0.28)]">
          <div className="flex items-center justify-between gap-3 border-b border-gridline bg-white px-4 py-3">
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              width="800"
              height="320"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto max-w-[190px] object-contain"
            />
            <span className="shrink-0 bg-petrol-tint px-2 py-0.5 font-mono text-[11px] font-semibold text-petrol">
              {isEn ? 'Client build' : 'Cliente real'}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-gridline text-xs">
            {blocks.map((block) => (
              <div
                key={block.title}
                className={block.accent ? 'bg-petrol-tint p-2.5' : 'bg-paper p-2.5'}
              >
                <div className={`font-semibold ${block.accent ? 'text-petrol' : 'text-obsidian'}`}>
                  {block.title}
                </div>
                <div className="text-[11px] text-ink-muted">{block.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 font-mono text-[11px] leading-snug text-ink-muted">
          {isEn
            ? 'Client identity + verified system modules (operational logs stay private).'
            : 'Logo del cliente + módulos reales del sistema (registros de equipos privados).'}
        </p>
      </div>
    );
  }

  // 05. Agente de IA de Cobranzas — Scoring ponderado + Guardrails determinísticos
  if (project.id === 'agente-cobranzas-ia') {
    const weights = isEn
      ? [
          ['Days overdue', '40 %'],
          ['Balance', '25 %'],
          ['History', '20 %'],
          ['Promises', '15 %'],
        ]
      : [
          ['Atraso', '40 %'],
          ['Saldo', '25 %'],
          ['Historial', '20 %'],
          ['Promesas', '15 %'],
        ];

    const checks = isEn
      ? ['✓ Amounts verified', '✓ Non-threatening tone', '✓ Strict JSON check', '✓ 100% offline mode']
      : ['✓ Respeta importes', '✓ Sin tono amenazante', '✓ Valida JSON', '✓ Modo 100 % offline'];

    return (
      <div className="project-media blueprint-grid border border-gridline p-3.5">
        <div className="overflow-hidden border border-[#CFD7D2] bg-white shadow-[0_12px_28px_-22px_rgba(14,23,27,0.28)]">
          <div className="flex items-center justify-between gap-2 bg-obsidian px-3 py-2 font-mono text-xs text-paper">
            <span>Scoring 0–100 + Guardrails</span>
            <span className="text-verdigris">16 tests pytest</span>
          </div>
          <div className="grid grid-cols-1 divide-y divide-gridline text-xs sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="space-y-1.5 p-3">
              <div className="font-mono text-[11px] uppercase text-ink-muted">
                {isEn ? 'Weighted matrix' : 'Matriz ponderada'}
              </div>
              {weights.map(([name, pct]) => (
                <div key={name} className="flex items-center justify-between">
                  <span className="text-ink-body">{name}</span>
                  <strong className="font-mono text-petrol">{pct}</strong>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 bg-paper p-3 font-mono text-[11px]">
              <div className="uppercase text-ink-muted">
                {isEn ? 'AI guardrails' : 'Controles IA'}
              </div>
              {checks.map((item, idx) => (
                <div
                  key={item}
                  className={idx === checks.length - 1 ? 'font-semibold text-petrol' : 'text-sage'}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 font-mono text-[11px] leading-snug text-ink-muted">
          {isEn
            ? 'Conceptual view faithful to agente/riesgo.py and agente/redactor.py.'
            : 'Vista conceptual fiel a agente/riesgo.py y agente/redactor.py.'}
        </p>
      </div>
    );
  }

  // 06. CUBO — Aging Order-to-Cash + Telegram
  if (project.id === 'cubo') {
    return (
      <div className="project-media blueprint-grid border border-gridline p-3">
        <div className="flex items-end justify-between gap-3 border border-[#CFD7D2] bg-white p-3">
          <div className="flex-1">
            <div className="mb-2 font-mono text-[11px] text-ink-muted">
              {isEn ? 'ORDER-TO-CASH AGING' : 'ANTIGÜEDAD DE DEUDA'}
            </div>
            <div className="flex h-14 items-end gap-1.5" aria-hidden="true">
              <div className="h-5 flex-1 bg-gridline" />
              <div className="h-8 flex-1 bg-[#7B9584]" />
              <div className="h-11 flex-1 bg-[#296B68]" />
              <div className="h-14 flex-1 bg-petrol" />
            </div>
            <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-muted">
              <span>30</span>
              <span>60</span>
              <span>90</span>
              <span className="font-semibold text-petrol">90+</span>
            </div>
          </div>
          <div className="w-32 border border-gridline bg-paper p-2 font-mono text-[11px]">
            <div className="font-semibold text-brass">Telegram</div>
            <div className="mt-1 leading-snug text-ink-body">
              {isEn ? 'Alerts & balance queries' : 'Alertas y consulta de saldos'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 07. CUBO INSPECTA — Identidad de producto propio
  if (project.id === 'cubo-inspecta') {
    return (
      <div className="project-media flex h-[132px] flex-col items-center justify-center border border-gridline bg-white p-3">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          width="300"
          height="156"
          loading="lazy"
          decoding="async"
          className="max-h-16 w-auto max-w-full object-contain"
        />
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          {isEn
            ? 'Field checks · Findings · Reports'
            : 'Relevamiento · Observaciones · Informes'}
        </p>
      </div>
    );
  }

  // 08. Metanoia — Dos repositorios abiertos
  return (
    <div className="project-media blueprint-grid border border-gridline p-3">
      <div className="grid grid-cols-1 gap-2 font-mono text-[11px] sm:grid-cols-2">
        <div className="border border-obsidian/25 bg-white p-2.5">
          <div className="font-semibold text-obsidian">Metanoia.v1.0.1</div>
          <div className="mt-1 leading-snug text-ink-muted">
            {isEn ? 'Multi-tenant ERP · Prisma + Postgres' : 'ERP multi-tenant · Prisma + Postgres'}
          </div>
        </div>
        <div className="border border-petrol-border bg-white p-2.5">
          <div className="font-semibold text-petrol">metanoia-app</div>
          <div className="mt-1 leading-snug text-ink-muted">
            {isEn ? 'AI panel · Firebase + Gemini' : 'Panel IA · Firebase + Gemini'}
          </div>
        </div>
      </div>
    </div>
  );
}
