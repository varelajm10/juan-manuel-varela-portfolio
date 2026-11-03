import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Github,
  Lock,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const categories = [
  'Todos',
  'SaaS / Full Stack',
  'Automatización / Data',
  'Desktop App',
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Todos') return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="proyectos" className="py-24 border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Casos Prácticos & Desarrollos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Proyectos Destacados con Enfoque de Retorno
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Cada desarrollo está diseñado desde el punto de vista del negocio: reducir horas manuales, acelerar cobranzas y eliminar errores operativos.
            </p>
          </div>

          {/* Filtros Modernos Tipo Píldora */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-200/60 border border-zinc-200 self-start">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-white text-zinc-950 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 hover:border-sky-300 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.12)] transition-all duration-300"
            >
              <div>
                {/* Categoría y Badge de Estado */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                    <Layers className="w-3 h-3 text-sky-600" />
                    <span>{project.category}</span>
                  </span>

                  {project.featured && (
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      ★ Caso Estratégico
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-zinc-950 group-hover:text-sky-700 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Desafío y Solución */}
                <div className="mt-4 space-y-2.5 text-sm text-zinc-600 leading-relaxed">
                  <p>
                    <span className="font-semibold text-zinc-900">Problema Operativo: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">Solución Técnica: </span>
                    {project.solution}
                  </p>
                </div>

                {/* Métrica de Impacto Destacada */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-sky-500/5 to-transparent border border-emerald-500/20 flex items-start gap-3">
                  <div className="p-1 rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800">
                      Impacto Clave
                    </span>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">
                      {project.impactMetric}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tecnologías y Botones de Acción */}
              <div className="mt-7 pt-5 border-t border-zinc-100">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-zinc-100/80 text-zinc-700 border border-zinc-200/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-950 hover:bg-zinc-800 text-white transition-all shadow-xs"
                      >
                        <span>Ver Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && !project.isConfidential && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-zinc-300 text-zinc-800 hover:bg-zinc-100 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Ver Código</span>
                      </a>
                    )}
                  </div>

                  {project.isConfidential && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200">
                      <Lock className="w-3 h-3 text-amber-600" />
                      <span>{project.confidentialLabel || 'Código Corporativo Privado'}</span>
                    </span>
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
