import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, FileText, Github } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';
import ProjectDetailModal from './ProjectDetailModal';
import ProjectVisual from './ProjectVisual';

// Curaduría comercial: 5 casos principales (Nivel 1) + 3 productos/prototipos (Nivel 2)
export const PROJECT_COMMERCIAL_META = {
  'conciliacion-bancaria': {
    tier: 1,
    group: 'open',
    symbol: '○',
    tagsFilter: ['finance', 'open'],
    span: 'lg:col-span-12',
    wide: true,
    audience: {
      es: 'Administración, Tesorería y Contabilidad',
      en: 'Administration, Treasury & Accounting',
    },
    benefit: {
      es: 'Concilió automáticamente el 97,2 % del importe de créditos en un extracto de prueba. Reduce el cruce manual en cada cierre.',
      en: 'Automatically reconciled 97.2% of credit amounts on a sample bank statement, cutting manual month-end matching.',
    },
    ctaLabel: {
      es: '¿Tu cierre depende de planillas? Consultar',
      en: 'Month-end close on spreadsheets? Let’s talk',
    },
  },
  'portal-rrhh': {
    tier: 1,
    group: 'prod',
    symbol: '●',
    tagsFilter: ['prod'],
    span: 'lg:col-span-7',
    audience: {
      es: 'RRHH, Administración y Operaciones internas',
      en: 'HR, Administration & Internal Operations',
    },
    benefit: {
      es: 'Centraliza trámites internos y deja saldos y estados visibles para cada persona, evitando mails y planillas sueltas.',
      en: 'Centralizes internal requests with visible balances and status, removing email chains and scattered sheets.',
    },
    ctaLabel: {
      es: 'Consultar por una intranet interna',
      en: 'Ask about an internal portal',
    },
  },
  gladys: {
    tier: 1,
    group: 'prod',
    symbol: '●',
    tagsFilter: ['prod', 'finance'],
    span: 'lg:col-span-5',
    audience: {
      es: 'Créditos, Riesgo Crediticio y Finanzas',
      en: 'Credit, Risk & Finance Teams',
    },
    benefit: {
      es: 'Reemplaza la búsqueda manual diaria en fuentes públicas por un informe automático de alertas tempranas para el equipo de créditos.',
      en: 'Replaces daily manual checks of public registries with an automated early-warning credit digest.',
    },
    ctaLabel: {
      es: 'Consultar por alertas automáticas',
      en: 'Ask about automated alerts',
    },
  },
  ascensort: {
    tier: 1,
    group: 'prod',
    symbol: '●',
    tagsFilter: ['prod'],
    span: 'lg:col-span-6',
    audience: {
      es: 'Operaciones, Mantenimiento y Servicios técnicos',
      en: 'Operations, Maintenance & Field Services',
    },
    benefit: {
      es: 'Ordena el seguimiento operativo de equipos con historial trazable, reportes visuales y revisión asistida por IA.',
      en: 'Organizes equipment incident tracking with clear history, visual reports, and AI-assisted audit review.',
    },
    ctaLabel: {
      es: 'Consultar por un sistema a medida',
      en: 'Ask about a custom system',
    },
  },
  'agente-cobranzas-ia': {
    tier: 1,
    group: 'open',
    symbol: '○',
    tagsFilter: ['finance', 'open'],
    span: 'lg:col-span-6',
    audience: {
      es: 'Cuentas por Cobrar y Equipos de Cobranzas',
      en: 'Accounts Receivable & Collections Teams',
    },
    benefit: {
      es: 'Permite priorizar cuentas vencidas con scoring 0–100 y asistir avisos con controles determinísticos sobre importes y fechas.',
      en: 'Prioritizes overdue accounts with 0–100 scoring and assists outreach under strict deterministic guardrails.',
    },
    ctaLabel: {
      es: 'Consultar por automatización de cobranzas',
      en: 'Ask about collections automation',
    },
  },
  cubo: {
    tier: 2,
    group: 'own',
    symbol: '◆',
    tagsFilter: ['own', 'finance'],
    audience: {
      es: 'Finanzas y gestión Order-to-Cash',
      en: 'Finance & Order-to-Cash Management',
    },
    benefit: {
      es: 'Integra antigüedad de deuda multiempresa, alertas de cobro y consultas rápidas vía Telegram.',
      en: 'Brings together multi-company receivable aging, collection alerts, and quick Telegram queries.',
    },
    ctaLabel: {
      es: 'Consultar por CUBO',
      en: 'Ask about CUBO',
    },
  },
  'cubo-inspecta': {
    tier: 2,
    group: 'own',
    symbol: '◆',
    tagsFilter: ['own'],
    audience: {
      es: 'Auditorías, Calidad y Control operativo',
      en: 'Audits, Quality & Operational Control',
    },
    benefit: {
      es: 'Organiza inspecciones, hallazgos y fotografías dispersas para agilizar el seguimiento y el armado de informes.',
      en: 'Organizes scattered inspections, findings, and photos to streamline follow-up and reporting.',
    },
    ctaLabel: {
      es: 'Consultar por CUBO INSPECTA',
      en: 'Ask about CUBO INSPECTA',
    },
  },
  metanoia: {
    tier: 2,
    group: 'open',
    symbol: '○',
    tagsFilter: ['open'],
    audience: {
      es: 'Consultoras y equipos de tecnología',
      en: 'Consultancies & Engineering Teams',
    },
    benefit: {
      es: 'Estructura modular abierta en Next.js, TypeScript y PostgreSQL para revisar arquitectura de panel y ERP.',
      en: 'Open modular structure in Next.js, TypeScript, and PostgreSQL for evaluating ERP and AI panel architecture.',
    },
    ctaLabel: {
      es: 'Consultar por arquitectura web',
      en: 'Ask about web architecture',
    },
  },
};

const TIER1_ORDER = [
  'conciliacion-bancaria',
  'portal-rrhh',
  'gladys',
  'ascensort',
  'agente-cobranzas-ia',
];

const TIER2_ORDER = ['cubo', 'cubo-inspecta', 'metanoia'];

const UI_COPY = {
  es: {
    legendProd: '● Implementado / Cliente',
    legendOpen: '○ Código verificable',
    legendOwn: '◆ Producto propio',
    forLabel: 'Para:',
    impactBadge: 'Mejora:',
    filterAria: 'Filtrar proyectos por enfoque o estado',
    filters: {
      curated: 'Vista curada (5 + 3)',
      prod: 'En producción / Clientes',
      finance: 'Finanzas y Cobranzas',
      open: 'Código abierto',
      own: 'Productos propios',
    },
    tier2Kicker: 'Segundo nivel · Desarrollo independiente y arquitectura',
    tier2Title: 'Productos propios y prototipos técnicos',
    tier2Note: 'Diferenciados explícitamente de las implementaciones en clientes',
    bridgeKicker: '¿Identificaste un caso parecido en tu operación?',
    bridgeTitle: 'Contame qué proceso hoy hacen a mano y evaluemos una solución concreta.',
    bridgeCta: 'Hablar sobre mi proceso',
    bridgeSubject: 'Consulta sobre automatización o sistema para mi operación',
  },
  en: {
    legendProd: '● Live / Client build',
    legendOpen: '○ Verifiable code',
    legendOwn: '◆ Own product',
    forLabel: 'Useful for:',
    impactBadge: 'Impact:',
    filterAria: 'Filter projects by focus or status',
    filters: {
      curated: 'Curated view (5 + 3)',
      prod: 'Live / Client builds',
      finance: 'Finance & Collections',
      open: 'Open code',
      own: 'Own products',
    },
    tier2Kicker: 'Second tier · Independent products & architecture',
    tier2Title: 'Own products and technical prototypes',
    tier2Note: 'Clearly separated from client implementations',
    bridgeKicker: 'Spotted a bottleneck similar to your operation?',
    bridgeTitle: 'Tell me which process is still done by hand and let’s evaluate a concrete solution.',
    bridgeCta: 'Discuss my process',
    bridgeSubject: 'Inquiry about automating or building a tool for our operation',
  },
};

export function getStatusBadgeClasses(group) {
  if (group === 'prod') {
    return 'bg-petrol-tint text-petrol border-petrol-border';
  }
  if (group === 'own') {
    return 'bg-brass-tint text-brass border-brass-border';
  }
  return 'bg-sage-tint text-sage border-sage-border';
}

export default function Projects({ lang, onSelectDemo }) {
  const [activeFilter, setActiveFilter] = useState('curated');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const triggerRefs = useRef({});

  const t = content[lang].projects;
  const ui = UI_COPY[lang] || UI_COPY.es;

  const findProject = (id) => t.items.find((item) => item.id === id);

  const tier1Items = TIER1_ORDER.map(findProject).filter(Boolean);
  const tier2Items = TIER2_ORDER.map(findProject).filter(Boolean);
  const allOrdered = [...tier1Items, ...tier2Items];

  const counts = {
    prod: allOrdered.filter((p) => PROJECT_COMMERCIAL_META[p.id]?.tagsFilter.includes('prod')).length,
    finance: allOrdered.filter((p) => PROJECT_COMMERCIAL_META[p.id]?.tagsFilter.includes('finance')).length,
    open: allOrdered.filter((p) => PROJECT_COMMERCIAL_META[p.id]?.tagsFilter.includes('open')).length,
    own: allOrdered.filter((p) => PROJECT_COMMERCIAL_META[p.id]?.tagsFilter.includes('own')).length,
  };

  const isCurated = activeFilter === 'curated';
  const primaryProjects = isCurated
    ? tier1Items
    : allOrdered.filter((p) => PROJECT_COMMERCIAL_META[p.id]?.tagsFilter.includes(activeFilter));

  const openModal = (project) => setActiveModalProject(project);

  const closeModal = () => {
    const closedId = activeModalProject?.id;
    setActiveModalProject(null);
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 40);
    }
  };

  const handleConsult = (event, project, subjectOverride) => {
    track('cta_click', {
      location: 'project',
      project: project ? project.id : 'portfolio_bridge',
      target: 'contact',
    });
    if (onSelectDemo) {
      event.preventDefault();
      onSelectDemo(
        project ? project.title : ui.bridgeSubject,
        subjectOverride || project?.contactSubject
      );
    }
  };

  const renderActions = (project, meta) => {
    const repoUrl = project.repoUrl || project.githubUrl;
    const ctaText = project.consultLabel || meta?.ctaLabel?.[lang] || ui.bridgeCta;

    return (
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2.5 border-t border-gridline pt-4 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            ref={(el) => {
              triggerRefs.current[project.id] = el;
            }}
            type="button"
            onClick={() => openModal(project)}
            className="inline-flex min-h-[40px] items-center justify-center gap-1.5 bg-obsidian px-3.5 py-2 font-semibold text-paper transition-colors hover:bg-petrol"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.btnCaseDetails}</span>
          </button>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 border border-gridline bg-white px-3 py-2 font-semibold text-obsidian transition-colors hover:bg-stone"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.btnViewRepo}</span>
              <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
            </a>
          )}

          {project.extraRepoUrl && (
            <a
              href={project.extraRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 border border-gridline bg-white px-3 py-2 font-semibold text-obsidian transition-colors hover:bg-stone"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{project.extraRepoLabel}</span>
            </a>
          )}
        </div>

        <a
          href="#contacto"
          onClick={(event) => handleConsult(event, project)}
          className="group inline-flex min-h-[40px] items-center gap-1.5 font-semibold text-petrol transition-colors hover:text-petrol-dark hover:underline"
        >
          <span>{ctaText}</span>
          <ArrowRight
            className="h-3.5 w-3.5 shrink-0 transition-transform motion-safe:group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    );
  };

  const filterButtons = [
    { key: 'curated', label: ui.filters.curated },
    { key: 'prod', label: `${ui.filters.prod} (${counts.prod})` },
    { key: 'finance', label: `${ui.filters.finance} (${counts.finance})` },
    { key: 'open', label: `${ui.filters.open} (${counts.open})` },
    { key: 'own', label: `${ui.filters.own} (${counts.own})` },
  ];

  return (
    <section id="proyectos" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        {/* Cabecera Comercial + Leyenda de Estados + Filtros */}
        <div className="border-b border-gridline px-4 pt-12 pb-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
                {t.tag}
              </p>
              <h2 className="font-display text-[2.25rem] font-normal leading-[1.03] tracking-[-0.02em] text-obsidian sm:text-[2.75rem]">
                {t.title}
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-body sm:text-base">
                {t.subtitle}
              </p>
            </div>

            {/* Leyenda explícita de estados reales */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              <span className="inline-flex items-center border border-petrol-border bg-petrol-tint px-2.5 py-1 font-semibold text-petrol">
                {ui.legendProd}
              </span>
              <span className="inline-flex items-center border border-sage-border bg-sage-tint px-2.5 py-1 font-semibold text-sage">
                {ui.legendOpen}
              </span>
              <span className="inline-flex items-center border border-brass-border bg-brass-tint px-2.5 py-1 font-semibold text-brass">
                {ui.legendOwn}
              </span>
            </div>
          </div>

          <div
            className="mt-6 flex flex-wrap gap-1.5 font-mono text-xs"
            role="group"
            aria-label={ui.filterAria}
          >
            {filterButtons.map((btn) => {
              const isActive = activeFilter === btn.key;
              return (
                <button
                  key={btn.key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(btn.key)}
                  className={`min-h-[40px] whitespace-nowrap border px-3 py-2 transition-colors ${
                    isActive
                      ? 'border-obsidian bg-obsidian font-semibold text-paper'
                      : 'border-gridline bg-white text-ink-body hover:border-obsidian hover:text-obsidian'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Nivel 1: Casos Principales (o vista filtrada) */}
        <div className="project-grid grid grid-cols-1 lg:grid-cols-12">
          {primaryProjects.map((project, index) => {
            const meta = PROJECT_COMMERCIAL_META[project.id] || {
              group: 'open',
              symbol: '○',
              audience: { es: '', en: '' },
              benefit: { es: '', en: '' },
            };
            const isWideLead = isCurated && meta.wide;
            const colSpanClass = isCurated
              ? meta.span || 'lg:col-span-6'
              : primaryProjects.length % 2 === 1 && index === primaryProjects.length - 1
                ? 'lg:col-span-12'
                : 'lg:col-span-6';

            const badgeCls = getStatusBadgeClasses(meta.group);
            const audienceText = meta.audience?.[lang] || '';
            const benefitText = meta.benefit?.[lang] || project.impact || project.impactMetric || '';

            if (isWideLead) {
              return (
                <article
                  key={project.id}
                  className="col-span-1 border-b border-gridline bg-white lg:col-span-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="border-b border-gridline lg:col-span-5 lg:border-b-0 lg:border-r">
                      <ProjectVisual project={project} lang={lang} />
                    </div>

                    <div className="flex flex-col justify-between p-6 sm:p-7 lg:col-span-7">
                      <div>
                        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 border px-2.5 py-0.5 font-mono text-xs font-semibold ${badgeCls}`}
                          >
                            <span aria-hidden="true">{meta.symbol}</span>
                            <span>{project.statusLabel}</span>
                          </span>
                          {audienceText && (
                            <span className="font-mono text-xs text-ink-muted">
                              {ui.forLabel} {audienceText}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-[1.85rem] font-normal leading-[1.08] text-obsidian sm:text-[2.1rem]">
                          {project.title}
                        </h3>

                        {benefitText && (
                          <p className="mt-3.5 border border-petrol-border bg-petrol-tint/70 p-3.5 text-xs font-medium leading-relaxed text-obsidian sm:text-sm">
                            <strong className="mr-1 font-mono font-semibold text-petrol">
                              {ui.impactBadge}
                            </strong>
                            {benefitText}
                          </p>
                        )}

                        <div className="mt-4 grid grid-cols-1 gap-3.5 text-sm leading-relaxed text-ink-body sm:grid-cols-2">
                          {project.problem && (
                            <p>
                              <strong className="mb-0.5 block font-semibold text-obsidian">
                                {t.problemLabel}
                              </strong>
                              {project.problem}
                            </p>
                          )}
                          {project.summaryCase && (
                            <p>
                              <strong className="mb-0.5 block font-semibold text-obsidian">
                                {t.solutionLabel}
                              </strong>
                              {project.summaryCase}
                            </p>
                          )}
                        </div>

                        {project.tags?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-gridline bg-paper px-2 py-0.5 font-mono text-xs text-ink-body"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {renderActions(project, meta)}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className={`col-span-1 flex flex-col justify-between border-b border-gridline bg-white p-6 sm:p-7 lg:border-r ${colSpanClass}`}
              >
                <div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 border px-2.5 py-0.5 font-mono text-xs font-semibold ${badgeCls}`}
                    >
                      <span aria-hidden="true">{meta.symbol}</span>
                      <span>{project.statusLabel}</span>
                    </span>
                    {audienceText && (
                      <span className="font-mono text-xs text-ink-muted">{audienceText}</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <ProjectVisual project={project} lang={lang} compact />
                  </div>

                  <h3 className="font-display text-[1.6rem] font-normal leading-[1.12] text-obsidian sm:text-[1.8rem]">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="mt-1 font-mono text-xs text-ink-muted">{project.client}</p>
                  )}

                  {benefitText && (
                    <p className="mt-3 border border-gridline bg-paper p-3 text-xs font-medium leading-relaxed text-obsidian">
                      <strong className="mr-1 font-mono font-semibold text-petrol">
                        {ui.impactBadge}
                      </strong>
                      {benefitText}
                    </p>
                  )}

                  <div className="mt-3 space-y-2 text-sm leading-relaxed text-ink-body">
                    {project.problem && (
                      <p>
                        <strong className="font-semibold text-obsidian">{t.problemLabel} </strong>
                        {project.problem}
                      </p>
                    )}
                    {project.summaryCase && (
                      <p>
                        <strong className="font-semibold text-obsidian">{t.valueLabel} </strong>
                        {project.summaryCase}
                      </p>
                    )}
                  </div>

                  {project.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gridline bg-paper px-2 py-0.5 font-mono text-xs text-ink-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {renderActions(project, meta)}
              </article>
            );
          })}
        </div>

        {/* Nivel 2: Productos Propios y Prototipos Técnicos (visible en Vista Curada) */}
        {isCurated && tier2Items.length > 0 && (
          <div className="border-t-2 border-obsidian/15 bg-[#EFEFE9]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gridline px-4 py-6 sm:px-6 lg:px-8">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-brass">
                  {ui.tier2Kicker}
                </p>
                <h3 className="mt-0.5 font-display text-2xl font-normal text-obsidian sm:text-[1.75rem]">
                  {ui.tier2Title}
                </h3>
              </div>
              <span className="font-mono text-xs text-ink-muted">{ui.tier2Note}</span>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gridline lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {tier2Items.map((project) => {
                const meta = PROJECT_COMMERCIAL_META[project.id] || {
                  group: 'own',
                  symbol: '◆',
                  audience: { es: '', en: '' },
                  benefit: { es: '', en: '' },
                };
                const badgeCls = getStatusBadgeClasses(meta.group);
                const audienceText = meta.audience?.[lang] || '';
                const benefitText = meta.benefit?.[lang] || project.summaryCase || '';

                return (
                  <article
                    key={project.id}
                    className="flex flex-col justify-between bg-paper/80 p-6 transition-colors hover:bg-white"
                  >
                    <div>
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-xs font-semibold ${badgeCls}`}
                        >
                          <span aria-hidden="true">{meta.symbol}</span>
                          <span>{project.statusLabel}</span>
                        </span>
                      </div>

                      <div className="mb-4">
                        <ProjectVisual project={project} lang={lang} compact />
                      </div>

                      {audienceText && (
                        <p className="mb-1 font-mono text-xs text-ink-muted">
                          {ui.forLabel} {audienceText}
                        </p>
                      )}

                      <h4 className="font-display text-2xl font-normal leading-snug text-obsidian">
                        {project.title}
                      </h4>

                      <p className="mt-2 text-sm leading-relaxed text-ink-body">{benefitText}</p>

                      {project.tags?.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="border border-gridline bg-white px-2 py-0.5 font-mono text-xs text-ink-body"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {renderActions(project, meta)}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* Puente de Conversión Comercial al pie de Portfolio */}
        <div className="flex flex-col items-start justify-between gap-5 border-t border-petrol-border bg-petrol-tint/70 px-4 py-9 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-petrol">
              {ui.bridgeKicker}
            </p>
            <p className="font-display text-2xl font-normal leading-tight text-obsidian sm:text-3xl">
              {ui.bridgeTitle}
            </p>
          </div>
          <a
            href="#contacto"
            onClick={(event) => handleConsult(event, null, ui.bridgeSubject)}
            className="group inline-flex min-h-[46px] shrink-0 items-center gap-2 bg-petrol px-5 py-3 text-xs font-semibold text-paper transition-colors hover:bg-petrol-dark"
          >
            <span>{ui.bridgeCta}</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      <ProjectDetailModal
        isOpen={Boolean(activeModalProject)}
        onClose={closeModal}
        project={activeModalProject}
        lang={lang}
        onSelectDemo={onSelectDemo}
      />
    </section>
  );
}
