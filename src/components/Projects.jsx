import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Lock,
  Layers,
  ChevronDown,
  ChevronUp,
  FolderGit2,
} from 'lucide-react';
import { realProjects } from '../data/portfolioData';

export default function Projects() {
  const [expandedCase, setExpandedCase] = useState({});

  const toggleCase = (id) => {
    setExpandedCase((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="proyectos" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Casos Reales con Prueba de Negocio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Herramientas construidas para resolver fricción operativa
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Cada proyecto responde a una necesidad concreta: eliminar horas manuales, evitar errores en conciliaciones o monitorear deudores en tiempo real.
          </p>
        </div>

        {/* Fichas de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {realProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-7 hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Categoría */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                    <Layers className="w-3 h-3 text-sky-400" />
                    <span>{project.category}</span>
                  </span>

                  {project.isPrivate ? (
                    <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Privado
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400">
                      Código Disponible
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-zinc-100 mb-4 leading-snug">
                  {project.title}
                </h3>

                {/* Estructura Rígida de 3 Puntos */}
                <div className="space-y-3.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  <div>
                    <span className="font-semibold text-zinc-200 block text-xs uppercase font-mono tracking-wider mb-1">
                      El Problema:
                    </span>
                    <p>{project.problem}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-zinc-200 block text-xs uppercase font-mono tracking-wider mb-1">
                      La Solución:
                    </span>
                    <p>{project.solution}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800">
                    <span className="font-semibold text-emerald-400 block text-xs uppercase font-mono tracking-wider mb-0.5">
                      El Impacto / Métrica:
                    </span>
                    <p className="text-zinc-200 font-medium text-xs">
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
                      className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-200"
                    >
                      <span>
                        {expandedCase[project.id] ? 'Cerrar detalle' : 'Ver resumen de caso'}
                      </span>
                      {expandedCase[project.id] ? (
                        <ChevronUp className="w-3 h-3" />
                      ) : (
                        <ChevronDown className="w-3 h-3" />
                      )}
                    </button>
                    {expandedCase[project.id] && (
                      <p className="mt-2 text-xs text-zinc-400 p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 leading-relaxed">
                        {project.summaryCase}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Tags & Acciones */}
              <div className="mt-6 pt-5 border-t border-zinc-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{project.privateLabel}</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-zinc-200 hover:text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Ver Repositorio</span>
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
