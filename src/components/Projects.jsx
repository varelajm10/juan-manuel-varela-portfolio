import React, { useState, useRef } from 'react';
import {
  Github,
  Lock,
  Layers,
  FolderGit2,
  FileText,
  Mail,
  Sparkles,
} from 'lucide-react';
import { content } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

const FEATURED_PROJECT_IDS = ['conciliacion-bancaria', 'agente-cobranzas-ia', 'cubo'];

export default function Projects({ lang, onSelectDemo }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const triggerRefs = useRef({});

  const t = content[lang].projects;
  const featuredProjects = FEATURED_PROJECT_IDS
    .map((id) => t.items.find((project) => project.id === id))
    .filter(Boolean);
  const otherProjects = t.items.filter((project) => !FEATURED_PROJECT_IDS.includes(project.id));

  const openModal = (project) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    const closedId = activeModalProject?.id;
    setActiveModalProject(null);
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 50);
    }
  };

  const renderProjectCard = (project, featured) => {
    const isPrivate =
      project.isPrivate !== undefined
        ? project.isPrivate
        : project.isPublic === false ||
          project.state === 'private_case' ||
          (!project.repoUrl && !project.githubUrl);
    const repoUrl = project.repoUrl || project.githubUrl;
    const impactText = project.impact || project.impactMetric;

    return (
      <article
        key={project.id}
        className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-xs transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 sm:p-7"
      >
        <div>
          <div className={`project-media mb-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 ${project.imageFit === 'contain' ? 'bg-white' : 'bg-zinc-100 dark:bg-zinc-900'}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
                className={project.imageFit === 'contain' ? `h-full w-full object-contain bg-white ${project.imagePad === false ? '' : 'p-4'}` : 'h-full w-full object-cover'}
              />
            ) : null}
          </div>
          <div className="mb-4 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              <Layers className="h-3 w-3 text-sky-700 dark:text-sky-400" />
              <span>{project.category}</span>
            </span>

            {project.statusLabel ? (
              <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">{project.statusLabel}</span>
            ) : isPrivate ? (
              <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                <Lock className="h-3 w-3" /> {t.statusPrivate}
              </span>
            ) : (
              <span className="font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                {t.statusPublic}
              </span>
            )}
          </div>

          {featured && (
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-sky-300 bg-sky-100 px-2.5 py-1 font-mono text-[11px] font-semibold text-sky-800 dark:border-sky-800 dark:bg-sky-950/80 dark:text-sky-300">
              <Sparkles className="h-3 w-3" />
              {t.flagshipBadge}
            </span>
          )}

          <h3 className="mb-1 text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          {project.client && (
            <p className="mb-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {project.client}
            </p>
          )}
          {project.problem && (
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{t.problemLabel} </span>
              {project.problem}
            </p>
          )}
          {project.summaryCase && (
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{t.valueLabel} </span>
              {project.summaryCase}
            </p>
          )}
          {impactText && !(featured && project.cardProof === false) && (
            <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {featured && (
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">{t.impactLabel} </span>
              )}
              {impactText}
            </p>
          )}
          {featured && project.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-zinc-200 bg-zinc-100 px-2 py-1 font-mono text-[11px] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          <div className="flex flex-col justify-between gap-2.5 text-xs sm:flex-row sm:items-center">
            {isPrivate ? (
              <button
                ref={(el) => { triggerRefs.current[project.id] = el; }}
                type="button"
                onClick={() => openModal(project)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 px-3 py-2 font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-sky-500 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>{t.btnCaseDetails}</span>
              </button>
            ) : repoUrl ? (
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 px-3 py-2 font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-sky-500 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>{t.btnViewRepo}</span>
                </a>
                {project.extraRepoUrl && (
                  <a
                    href={project.extraRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-300 px-3 py-2 font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-sky-500 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{project.extraRepoLabel}</span>
                  </a>
                )}
              </div>
            ) : (
              <button
                ref={(el) => { triggerRefs.current[project.id] = el; }}
                type="button"
                onClick={() => openModal(project)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 px-3 py-2 font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>{t.btnCaseDetails}</span>
              </button>
            )}

            {project.consultLabel && (
              <a
                href="#contacto"
                onClick={(event) => {
                  track('cta_click', { location: 'project', project: project.id, target: 'contact' });
                  if (onSelectDemo) {
                    event.preventDefault();
                    onSelectDemo(project.title, project.contactSubject);
                  }
                }}
                className="inline-flex items-center justify-center gap-1 rounded py-1 font-semibold text-zinc-700 transition-colors hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-zinc-300 dark:hover:text-sky-400 sm:justify-start"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{project.consultLabel}</span>
              </a>
            )}

            {!isPrivate && (
              <button
                ref={(el) => { triggerRefs.current[project.id] = el; }}
                type="button"
                onClick={() => openModal(project)}
                className="inline-flex items-center justify-center gap-1 rounded py-1 font-semibold text-zinc-600 transition-colors hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-500 dark:text-zinc-400 dark:hover:text-sky-400 sm:justify-start"
              >
                <FileText className="h-3 w-3" />
                <span>{t.btnCaseDetails}</span>
              </button>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id="proyectos" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="project-grid grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => renderProjectCard(project, true))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-8">
            <button
              type="button"
              aria-expanded={showAllProjects}
              aria-controls="resto-proyectos"
              onClick={() => setShowAllProjects((current) => !current)}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              {showAllProjects ? t.showFeaturedOnly : t.viewAllProjects}
            </button>
            {showAllProjects && (
              <div id="resto-proyectos" className="project-grid mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                {otherProjects.map((project) => renderProjectCard(project, false))}
              </div>
            )}
          </div>
        )}
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
