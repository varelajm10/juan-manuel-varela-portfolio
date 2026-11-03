import React from 'react';
import { Calendar, CheckCircle2, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="trayectoria" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Experiencia corporativa y logros concretos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Más de una década de gestión en consumo masivo, maquinaria y distribución de tecnología.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
          {experienceData.map((item, idx) => (
            <div key={item.company} className="relative">
              {/* Nodo */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 rounded-full border-2 ${
                  idx === 0
                    ? 'bg-sky-400 border-zinc-950 ring-4 ring-sky-500/10'
                    : 'bg-zinc-800 border-zinc-950'
                }`}
              />

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-400 mt-0.5">
                      {item.company} · <span className="text-zinc-500 font-normal">{item.location}</span>
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-800/80 text-xs font-mono text-zinc-400 border border-zinc-700/60 self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed my-3">
                  {item.summary}
                </p>

                <ul className="space-y-2 mb-4">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/70">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/60 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
