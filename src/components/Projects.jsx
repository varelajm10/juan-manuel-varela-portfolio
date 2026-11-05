import React, { useState, useRef } from 'react';
import {
  Github,
  Lock,
  Layers,
  FolderGit2,
  FileText,
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { content } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects({ lang, onSelectDemo }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const triggerRefs = useRef({});

  const t = content[lang].projects;
  const flagshipProject = t.items.find((p) => p.isFlagship) || t.items[0];
  const standardProjects = t.items.filter((p) => p.id !== flagshipProject?.id);

  const openModal = (project, id) => {
    setActiveModalProject(project);
  };

  const closeModal = () => {
    const closedId = activeModalProject?.id;
    setActiveModalProject(null);
    // Retorno accesible de foco al botón que abrió el modal
    if (closedId && triggerRefs.current[closedId]) {
      setTimeout(() => {
        triggerRefs.current[closedId]?.focus();
      }, 50);
    }
  };

  return (
    <section id="proyectos" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* CARD FLAGSHIP (PROYECTO DESTACADO FULL-WIDTH) */}
        {flagshipProject && (() => {
          const repoUrl = flagshipProject.repoUrl || flagshipProject.githubUrl;
          return (
            <article
              key={flagshipProject.id}
              className="relative mb-10 overflow-hidden rounded-3xl border-2 border-sky-600/30 dark:border-sky-500/25 bg-white dark:bg-zinc-900/80 p-6 sm:p-8 lg:p-10 shadow-sm"
            >
              {/* Línea de acento superior */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600" />

              {/* Cabecera del Flagship */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-800">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{t.flagshipBadge}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    <Layers className="w-3 h-3 text-sky-700 dark:text-sky-400" />
                    <span>{flagshipProject.category}</span>
                  </span>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.statusPublic}</span>
                </span>
              </div>

              {flagshipProject.image && (
                <img
                  src={flagshipProject.image}
                  alt=""
                  width="1200"
                  height="675"
                  className="project-media mt-6 w-full aspect-video object-cover rounded-2xl border border-zinc-200 dark:border-zinc-800"
                />
              )}

              {/* Contenido Principal en 2 Columnas Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                {/* Columna Izquierda: Problema, Solución y Stack */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-snug">
                      {flagshipProject.title}
                    </h3>

                    <div className="mt-5 space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      <div>
                        <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-1">
                          {t.problemLabel}
                        </span>
                        <p>{flagshipProject.problem}</p>
                      </div>

                      <div>
                        <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-1">
                          {t.solutionLabel}
                        </span>
                        <p>{flagshipProject.solution}</p>
                      </div>

                      {flagshipProject.role && (
                        <div>
                          <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-1">
                            {t.roleLabel}
                          </span>
                          <p>{flagshipProject.role}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {flagshipProject.engineering?.length > 0 && (
                    <div>
                      <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-2">
                        {t.engineeringLabel}
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {flagshipProject.engineering.map((item) => (
                          <li key={item} className="pl-3 border-l-2 border-sky-600/40">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Badges del Stack Tecnológico del Flagship */}
                  <div>
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-2">
                      {t.stackLabel}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {flagshipProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Métricas Clave y Pipeline Visual */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  {/* Cuadrícula de 4 Métricas Clave */}
                  <div>
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-3">
                      {t.flagshipMetricsTitle}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {flagshipProject.flagshipMetrics?.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                        >
                          <span className="text-sm sm:text-base font-bold font-mono text-sky-800 dark:text-sky-300">
                            {metric.value}
                          </span>
                          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 mt-1">
                            {metric.label}
                          </span>
                          <span className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5 leading-tight">
                            {metric.detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini-Pipeline de Arquitectura */}
                  <div className="p-4 rounded-xl bg-zinc-50/80 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-semibold text-zinc-950 dark:text-zinc-100 block text-xs uppercase font-mono tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                      <span>{t.flagshipPipelineTitle}</span>
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                      {flagshipProject.pipeline?.map((step, idx) => (
                        <div
                          key={idx}
                          className="relative p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                        >
                          <span className="text-[10px] font-mono font-bold text-sky-700 dark:text-sky-400 block">
                            {step.step}
                          </span>
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200 block mt-0.5 leading-tight">
                            {step.name}
                          </span>
                          <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block leading-tight mt-0.5">
                            {step.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botonera Principal del Flagship */}
              <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  {repoUrl && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-sky-500"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t.btnViewRepo}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    ref={(el) => (triggerRefs.current[flagshipProject.id] = el)}
                    type="button"
                    onClick={() => openModal(flagshipProject, flagshipProject.id)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t.btnCaseDetails}</span>
                  </button>
                </div>

                <a
                  href="#contacto"
                  onClick={(e) => {
                    if (onSelectDemo) {
                      e.preventDefault();
                      onSelectDemo(flagshipProject.title);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-400 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-sky-500 rounded"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.btnRequestDemo}</span>
                </a>
              </div>
            </article>
          );
        })()}

        {/* GRILLA SIMÉTRICA 2x2 PARA LOS 4 PROYECTOS RESTANTES */}
        <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardProjects.map((project) => {
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
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-7 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs"
              >
                <div>
                  <div className={`project-media mb-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 ${project.imageFit === 'contain' ? 'bg-white' : 'bg-zinc-100 dark:bg-zinc-900'}`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.imageAlt || ''}
                        width="1200"
                        height="675"
                        className={project.imageFit === 'contain' ? 'h-full w-full object-contain p-4 bg-white' : 'h-full w-full object-cover'}
                      />
                    ) : null}
                  </div>
                  {/* Categoría */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      <Layers className="w-3 h-3 text-sky-700 dark:text-sky-400" />
                      <span>{project.category}</span>
                    </span>

                    {isPrivate ? (
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        <Lock className="w-3 h-3" /> {t.statusPrivate}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                        {t.statusPublic}
                      </span>
                    )}
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 leading-snug">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="mb-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      {project.client}
                    </p>
                  )}
                  <p className={`text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed ${project.client ? '' : 'mt-3'}`}>
                    {impactText}
                  </p>
                </div>

                <div className="mt-5 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                    {/* Acción Primaria */}
                    {isPrivate ? (
                      <button
                        ref={(el) => (triggerRefs.current[project.id] = el)}
                        type="button"
                        onClick={() => openModal(project, project.id)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{t.btnCaseDetails}</span>
                      </button>
                    ) : repoUrl ? (
                      <div className="flex flex-wrap items-center gap-2">
                        <a
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>{t.btnViewRepo}</span>
                        </a>
                        {project.extraRepoUrl && (
                          <a
                            href={project.extraRepoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-2 focus-visible:outline-sky-500"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>{project.extraRepoLabel}</span>
                          </a>
                        )}
                      </div>
                    ) : (
                      <button
                        ref={(el) => (triggerRefs.current[project.id] = el)}
                        type="button"
                        onClick={() => openModal(project, project.id)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{t.btnCaseDetails}</span>
                      </button>
                    )}

                    {!isPrivate && (
                      <button
                        ref={(el) => (triggerRefs.current[project.id] = el)}
                        type="button"
                        onClick={() => openModal(project, project.id)}
                        className="inline-flex items-center justify-center sm:justify-start gap-1 font-semibold text-zinc-600 dark:text-zinc-400 hover:text-sky-700 dark:hover:text-sky-400 transition-colors py-1 focus-visible:outline-2 focus-visible:outline-sky-500 rounded"
                      >
                        <FileText className="w-3 h-3" />
                        <span>{t.btnCaseDetails}</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal Accesible de Detalles Técnicos */}
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
