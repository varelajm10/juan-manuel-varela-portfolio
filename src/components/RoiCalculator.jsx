import React, { useState } from 'react';
import { Calculator, Clock, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import { content } from '../data/portfolioData';

export default function RoiCalculator({ lang }) {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  const t = content[lang].calculator;

  // Cálculos dinámicos
  const totalManualMonthlyHours = Math.round(teamSize * hoursPerWeek * 4.3);
  const savedMonthlyHours = Math.round(totalManualMonthlyHours * 0.7);
  const savedDays = (savedMonthlyHours / 8).toFixed(1);

  return (
    <section id="calculadora-roi" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Contenedor Sliders + Métricas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders */}
          <div className="lg:col-span-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-8 shadow-xs">
            {/* Slider 1 */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="team-size" className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {t.teamLabel}
                </label>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
                  {teamSize} {teamSize === 1 ? t.personLabel : t.peopleLabel}
                </span>
              </div>
              <input
                id="team-size"
                type="range"
                min="1"
                max="20"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-sky-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                <span>1 {t.personLabel}</span>
                <span>10</span>
                <span>20 {t.peopleLabel}</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="hours-per-week" className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {t.hoursLabel}
                </label>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
                  {hoursPerWeek} {t.hoursSuffix}
                </span>
              </div>
              <input
                id="hours-per-week"
                type="range"
                min="2"
                max="30"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-600 dark:accent-sky-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                <span>2 {t.hoursSuffix}</span>
                <span>15 h</span>
                <span>30 {t.hoursSuffix}</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">
                {t.hoursNote}
              </p>
            </div>
          </div>

          {/* Métricas Dinámicas */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
                <Clock className="w-4 h-4" />
                <span>{t.savedMonthlyTitle}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold font-mono tracking-tight">
                  ~{savedMonthlyHours}
                </span>
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                  hours / month
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
                {t.savedMonthlyDesc(savedMonthlyHours, totalManualMonthlyHours)}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.daysLabel}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                  {savedDays}
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {t.daysDesc}
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                  <span>{t.efficiencyLabel}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  -70%
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {t.efficiencyDesc}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/30 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {t.ctaQuestion}
              </span>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 transition-all shrink-0 shadow-xs"
              >
                <span>{t.ctaBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
