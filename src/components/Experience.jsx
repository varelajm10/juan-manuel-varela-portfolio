import React from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import {
  experienceData,
  educationAndCertifications,
} from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="trayectoria" className="py-24 border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Comprobada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Experiencia Profesional & Logros Cuantificables
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
            Trayectoria en roles de gestión corporativa con una transición orgánica hacia la automatización con código y la analítica estratégica.
          </p>
        </div>

        {/* Timeline Moderno */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-300 space-y-10">
          {experienceData.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Nodo */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-2 ${
                  idx === 0
                    ? 'bg-sky-600 border-white ring-4 ring-sky-500/20'
                    : 'bg-white border-zinc-400 group-hover:border-sky-500'
                }`}
              />

              <div className="rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-sky-700 mt-0.5">
                      {item.company}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-xs font-mono font-semibold text-zinc-700 border border-zinc-200 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullets de Logros */}
                <ul className="space-y-2.5 mb-5">
                  {item.achievements.map((ach, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Badges de Herramientas */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-100 text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Formación y Credenciales */}
        <div className="mt-16 pt-12 border-t border-zinc-200">
          <h3 className="text-lg font-bold text-zinc-950 mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-600" />
            <span>Formación & Especializaciones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {educationAndCertifications.map((edu) => (
              <div
                key={edu.title}
                className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs"
              >
                <div className="font-bold text-sm text-zinc-950">{edu.title}</div>
                <div className="text-xs text-sky-700 font-medium mt-1">
                  {edu.institution}
                </div>
                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
