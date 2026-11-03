import React, { useState } from 'react';
import {
  Terminal,
  Database,
  Code2,
  Briefcase,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const iconMap = {
  Terminal: Terminal,
  Database: Database,
  Code2: Code2,
  Briefcase: Briefcase,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const visibleCategories =
    activeTab === 'all'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="habilidades" className="py-24 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
              <Cpu className="w-3.5 h-3.5" />
              <span>Stack Integral</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Competencias Técnicas y Criterio Financiero
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              La ventaja de hablar fluido el lenguaje financiero de un CFO y el código de un equipo de ingeniería de software.
            </p>
          </div>

          {/* Filtros Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 border border-zinc-200/80 self-start">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-zinc-950 shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Todo
            </button>
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Competencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Terminal;
            return (
              <div
                key={category.id}
                className="rounded-3xl border border-zinc-200/90 bg-zinc-50/50 p-7 hover:border-zinc-300 transition-all"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-sky-600 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950">
                      {category.name}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white border border-zinc-200/80 flex items-center justify-between gap-3 shadow-xs hover:border-sky-300 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <div>
                          <div className="text-xs sm:text-sm font-semibold text-zinc-900">
                            {skill.name}
                          </div>
                          <div className="text-[11px] text-zinc-500">
                            {skill.detail}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                          skill.level === 'Core'
                            ? 'bg-sky-50 text-sky-700 border border-sky-200'
                            : 'bg-zinc-100 text-zinc-600'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
