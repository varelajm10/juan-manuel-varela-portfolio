import React, { useState } from 'react';
import {
  Github,
  Lock,
  Layers,
  ChevronDown,
  ChevronUp,
  FolderGit2,
} from 'lucide-react';
import { content } from '../data/portfolioData';

export default function Projects({ lang }) {
  const [expandedCase, setExpandedCase] = useState({});
  const t = content[lang].projects;

  const toggleCase = (id) => {
    setExpandedCase((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="proyectos" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold mb-2">
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

        {/* Fichas de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-7 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs"
            >
              <div>
                {/* Categoría */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    <Layers className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                    <span>{project.category}</span>
                  </span>

                  {project.isPrivate ? (
                    <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> {t.privateBadge}
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      {t.publicBadge}
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Estructura Rígida de 3 Puntos */}
                <div className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200 block text-xs uppercase font-mono tracking-wider mb-1">
                      {t.problemLabel}
                    </span>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-200 block text-xs uppercase font-mono tracking-wider mb-1">
                      {t.solutionLabel}
                    </span>
                    <p>{project.solution}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 block text-xs uppercase font-mono tracking-wider mb-0.5">
                      {t.impactLabel}
                    </span>
                    <p className="text-zinc-900 dark:text-zinc-200 font-medium text-xs">
                      {project.impactMetric}
                    </p>
                  </div>
                </div>

                {/* Resumen de Caso desplegable */}
                {project.summaryCase && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => toggleCase(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                    >
                      <span>
                        {expandedCase[project.id] ? t.hideCase : t.viewCase}
                      </span>
                      {expandedCase[project.id] ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>
                    {expandedCase[project.id] && (
                      <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 leading-relaxed">
                        {project.summaryCase}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Tags & Acciones */}
              <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{t.privateCaseLabel}</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-200 hover:text-sky-600 dark:hover:text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.viewRepo}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
