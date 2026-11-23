import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, FileText, Github } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';
import ProjectDetailModal from './ProjectDetailModal';
import ProjectVisual from './ProjectVisual';

// Agrupación verificada según el estado real de cada proyecto
const PROJECT_GROUP = {
  'portal-rrhh': 'prod',
  gladys: 'prod',
  ascensort: 'prod',
  cubo: 'own',
  'cubo-inspecta': 'own',
  'conciliacion-bancaria': 'open',
  'agente-cobranzas-ia': 'open',
  metanoia: 'open',
};

// Orden estratégico en vista completa (destaca evidencia verificable e implementaciones reales)
const BENTO_ORDER = [
  'conciliacion-bancaria',
  'portal-rrhh',
  'gladys',
  'ascensort',
  'agente-cobranzas-ia',
  'cubo',
  'cubo-inspecta',
  'metanoia',
];

const BENTO_SPANS = {
  'conciliacion-bancaria': 'lg:col-span-12',
  'portal-rrhh': 'lg:col-span-7',
  gladys: 'lg:col-span-5',
  ascensort: 'lg:col-span-6',
  'agente-cobranzas-ia': 'lg:col-span-6',
  cubo: 'lg:col-span-6',
  'cubo-inspecta': 'lg:col-span-6',
  metanoia: 'lg:col-span-12',
};

const FILTER_LABELS = {
  es: {
    all: 'Todos',
    prod: 'Implementaciones',
    own: 'Productos propios',
    open: 'Código abierto',
    inquire: 'Consultar',
    filterAria: 'Filtrar proyectos por tipo',
  },
  en: {
    all: 'All',
    prod: 'Implementations',
    own: 'Own products',
    open: 'Open code',
    inquire: 'Inquire',
    filterAria: 'Filter projects by type',
  },
};

function getStatusBadgeClasses(group) {
  if (group === 'prod') {
    return 'bg-petrol-tint text-petrol border-petrol-border';
  }
  if (group === 'own') {
    return 'bg-brass-tint text-brass border-brass-border';
  }
  return 'bg-sage-tint text-sage border-sage-border';
}

export default function Projects({ lang, onSelectDemo }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const triggerRefs = useRef({});

  const t = content[lang].projects;
  const f = FILTER_LABELS[lang] || FILTER_LABELS.es;

  const orderedItems = BENTO_ORDER
    .map((id) => t.items.find((item) => item.id === id))
    .filter(Boolean);

  // Incluye cualquier ítem adicional si se agrega en portfolioData en el futuro
  const extraItems = t.items.filter((item) => !BENTO_ORDER.includes(item.id));
  const allItems = [...orderedItems, ...extraItems];

  const counts = {
    all: allItems.length,
    prod: allItems.filter((item) => PROJECT_GROUP[item.id] === 'prod').length,
    own: allItems.filter((item) => PROJECT_GROUP[item.id] === 'own').length,
    open: allItems.filter((item) => PROJECT_GROUP[item.id] === 'open').length,
  };

  const visibleProjects =
    activeFilter === 'all'
      ? allItems
      : allItems.filter((item) => PROJECT_GROUP[item.id] === activeFilter);

  const openModal = (project) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    const closedId = activeModalProject?.id;
    setActiveModalProject(null);
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 40);
    }
  };

  const handleConsult = (event, project) => {
    track('cta_click', { location: 'project', project: project.id, target: 'contact' });
    if (onSelectDemo) {
      event.preventDefault();
      onSelectDemo(project.title, project.contactSubject);
    }
  };

  const renderCardActions = (project) => {
    const repoUrl = project.repoUrl || project.githubUrl;

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
          <span>{project.consultLabel || f.inquire}</span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    );
  };

  const renderCardBody = (project, group) => {
    const impactText = project.impact || project.impactMetric;
    const showProofBlock = Boolean(impactText) && project.cardProof !== false;

    return (
      <div>
        <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
          <span
            className={`inline-flex items-center border px-2.5 py-0.5 font-mono text-xs font-semibold ${getStatusBadgeClasses(
              group
            )}`}
          >
            {project.statusLabel}
          </span>
          <span className="font-mono text-xs text-ink-muted">{project.category}</span>
        </div>

        <h3 className="font-display text-[1.65rem] font-normal leading-[1.12] text-obsidian sm:text-[1.85rem]">
          {project.title}
        </h3>

        {project.client && (
          <p className="mt-1 font-mono text-xs text-ink-muted">{project.client}</p>
        )}

        <div className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-ink-body">
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

          {showProofBlock && (
            <p className="border border-gridline bg-paper p-3 text-xs leading-relaxed text-obsidian">
              <strong className="font-mono font-semibold text-petrol">{t.impactLabel} </strong>
              {impactText}
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
    );
  };

  const filters = ['all', 'prod', 'own', 'open'];

  return (
    <section id="proyectos" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        {/* Cabecera + Filtros */}
        <div className="flex flex-col gap-5 border-b border-gridline px-4 pt-12 pb-7 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-lg">
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

          <div
            className="flex flex-wrap gap-1.5 font-mono text-xs lg:shrink-0 lg:flex-nowrap"
            role="group"
            aria-label={f.filterAria}
          >
            {filters.map((key) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(key)}
                  className={`min-h-[40px] whitespace-nowrap border px-2.5 py-2 transition-colors ${isActive
                      ? 'border-obsidian bg-obsidian font-semibold text-paper'
                      : 'border-gridline bg-white text-ink-body hover:border-obsidian hover:text-obsidian'
                    }`}
                >
                  {f[key]} ({counts[key]})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla Bento Asimétrica con Filetes de 1px */}
        <div className="project-grid grid grid-cols-1 lg:grid-cols-12">
          {visibleProjects.map((project, index) => {
            const group = PROJECT_GROUP[project.id] || 'open';
            const isHorizontalSpread =
              activeFilter === 'all' &&
              (project.id === 'conciliacion-bancaria' || project.id === 'metanoia');

            const colSpanClass =
              activeFilter === 'all'
                ? BENTO_SPANS[project.id] || 'lg:col-span-6'
                : visibleProjects.length % 2 === 1 && index === visibleProjects.length - 1
                  ? 'lg:col-span-12'
                  : 'lg:col-span-6';

            if (isHorizontalSpread) {
              return (
                <article
                  key={project.id}
                  className={`col-span-1 border-b border-gridline bg-white/85 transition-colors hover:bg-white ${colSpanClass}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="border-b border-gridline lg:col-span-5 lg:border-b-0 lg:border-r">
                      <ProjectVisual project={project} lang={lang} />
                    </div>
                    <div className="flex flex-col justify-between p-6 sm:p-7 lg:col-span-7">
                      {renderCardBody(project, group)}
                      {renderCardActions(project)}
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={project.id}
                className={`col-span-1 flex flex-col justify-between border-b border-gridline bg-white/85 p-6 transition-colors hover:bg-white sm:p-7 lg:border-r ${colSpanClass}`}
              >
                <div>
                  <div className="mb-5">
                    <ProjectVisual project={project} lang={lang} compact />
                  </div>
                  {renderCardBody(project, group)}
                </div>
                {renderCardActions(project)}
              </article>
            );
          })}
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
