import React, { useState, useMemo } from 'react';
import {
  Github,
  Lock,
  TrendingUp,
  Layers,
  Sparkles,
  ArrowUpRight,
  Workflow,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { content } from '../data/portfolioData';

export default function Projects({ lang }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [expandedArchitecture, setExpandedArchitecture] = useState({});

  const t = content[lang].projects;
  const categories = ['Todos', 'SaaS / Full Stack', 'Automatización / Data', 'Desktop App'];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Todos') return t.items;
    return t.items.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, t.items]);

  const toggleArchitecture = (id) => {
    setExpandedArchitecture((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="proyectos" className="py-24 border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              {t.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* Filtros */}
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
                  {category === 'Todos' ? t.filterAll : category}
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
                {/* Categoría y Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                    <Layers className="w-3 h-3 text-sky-600" />
                    <span>{project.category}</span>
                  </span>

                  {project.featured && (
                    <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                      {t.strategicCase}
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
                    <span className="font-semibold text-zinc-900">{t.problemLabel}</span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">{t.solutionLabel}</span>
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
                      {t.impactLabel}
                    </span>
                    <p className="text-sm font-bold text-zinc-900 mt-0.5">
                      {project.impactMetric}
                    </p>
                  </div>
                </div>

                {/* MEJORA 2: Visor de Flujo de Arquitectura Interactiva */}
                {project.architecture && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => toggleArchitecture(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100/70 border border-sky-200/80 px-3 py-1.5 rounded-xl transition-all"
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>
                        {expandedArchitecture[project.id]
                          ? t.hideArchitecture
                          : t.viewArchitecture}
                      </span>
                      {expandedArchitecture[project.id] ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {expandedArchitecture[project.id] && (
                      <div className="mt-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs animate-fade-in">
                        <div className="font-mono text-[10px] uppercase font-bold text-zinc-400 mb-2">
                          Pipeline & Data Flow:
                        </div>
                        {project.architecture.map((arch, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-white border border-zinc-200 flex items-center justify-center font-mono text-[10px] font-bold text-sky-600 shrink-0">
                              {i + 1}
                            </span>
                            <div>
                              <span className="font-bold text-zinc-900">{arch.step}: </span>
                              <span className="text-zinc-600">{arch.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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
                        <span>{t.viewDemo}</span>
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
                        <span>{t.viewCode}</span>
                      </a>
                    )}
                  </div>

                  {project.isConfidential && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200">
                      <Lock className="w-3 h-3 text-amber-600" />
                      <span>{project.confidentialLabel || t.privateBadge}</span>
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
