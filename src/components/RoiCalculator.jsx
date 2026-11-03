import React, { useState } from 'react';
import { Calculator, Clock, Calendar, ArrowRight, Zap, TrendingUp, Sparkles } from 'lucide-react';

export default function RoiCalculator({ lang = 'es' }) {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  // Cálculos matemáticos
  const totalManualMonthlyHours = Math.round(teamSize * hoursPerWeek * 4.3);
  const savedMonthlyHours = Math.round(totalManualMonthlyHours * 0.7);
  const savedDays = (savedMonthlyHours / 8).toFixed(1);

  const isEs = lang === 'es';

  return (
    <section id="calculadora-roi" className="py-24 border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            <span>{isEs ? 'Simulador de Retorno (ROI)' : 'ROI & Impact Simulator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            {isEs ? 'Calculá el impacto de automatizar tu área' : 'Calculate the Impact of Automating Your Team'}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-zinc-600">
            {isEs
              ? 'Estimá cuántas horas operativas y días hábiles al mes puede recuperar tu equipo al eliminar la carga manual de conciliaciones, reportes y seguimiento.'
              : 'Estimate how many hours and business days your team can reclaim each month by eliminating repetitive reconciliations, reporting, and tracking.'}
          </p>
        </div>

        {/* Contenedor Principal: 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Columna Izquierda: Sliders Interactivos */}
          <div className="lg:col-span-6 rounded-3xl border border-zinc-200/90 bg-white p-7 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-zinc-950 mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>{isEs ? 'Parámetros de tu operación actual' : 'Your Current Operational Parameters'}</span>
            </h3>

            {/* Slider 1: Tamaño del equipo */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="team-size-slider" className="text-xs sm:text-sm font-semibold text-zinc-800">
                  {isEs ? 'Tamaño del equipo administrativo / operativo' : 'Administrative / Operations team size'}
                </label>
                <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs sm:text-sm font-mono font-bold bg-zinc-100 text-zinc-900 border border-zinc-200">
                  {teamSize} {teamSize === 1 ? (isEs ? 'persona' : 'person') : (isEs ? 'personas' : 'people')}
                </span>
              </div>
              <input
                id="team-size-slider"
                type="range"
                min="1"
                max="20"
                step="1"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1.5">
                <span>1 {isEs ? 'persona' : 'person'}</span>
                <span>10</span>
                <span>20 {isEs ? 'personas' : 'people'}</span>
              </div>
            </div>

            {/* Slider 2: Horas semanales manuales */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="hours-slider" className="text-xs sm:text-sm font-semibold text-zinc-800">
                  {isEs ? 'Horas semanales manuales por persona' : 'Weekly manual hours per person'}
                </label>
                <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs sm:text-sm font-mono font-bold bg-zinc-100 text-zinc-900 border border-zinc-200">
                  {hoursPerWeek} h/{isEs ? 'sem' : 'wk'}
                </span>
              </div>
              <input
                id="hours-slider"
                type="range"
                min="2"
                max="30"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1.5">
                <span>2 h/{isEs ? 'sem' : 'wk'}</span>
                <span>15 h</span>
                <span>30 h/{isEs ? 'sem' : 'wk'}</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                {isEs
                  ? 'Incluye conciliaciones bancarias, cruce de planillas, armado de informes y reclamo manual.'
                  : 'Includes bank reconciliations, spreadsheet matching, management reporting, and follow-ups.'}
              </p>
            </div>
          </div>

          {/* Columna Derecha: Métricas Dinámicas de Salida */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Tarjeta 1: Horas Ahorradas */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-2xl pointer-events-none rounded-full" />
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 mb-2">
                <Clock className="w-4 h-4" />
                <span>{isEs ? 'Tiempo Operativo Ahorrado' : 'Operational Time Recovered'}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight transition-all duration-300">
                  ~{savedMonthlyHours}
                </span>
                <span className="text-base sm:text-lg text-zinc-400 font-semibold">
                  {isEs ? 'horas / mes' : 'hours / month'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                {isEs
                  ? `Reducción estimada del 70% sobre las ${totalManualMonthlyHours} horas manuales totales dedicadas al mes.`
                  : `Estimated 70% reduction over the ${totalManualMonthlyHours} total monthly manual hours.`}
              </p>
            </div>

            {/* Tarjeta 2: Días Hábiles & Eficiencia */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{isEs ? 'Días Devueltos' : 'Days Returned'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-zinc-950">
                  {savedDays}
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {isEs ? 'días laborales al mes para análisis' : 'business days/mo for strategic work'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
                  <span>{isEs ? 'Eficiencia' : 'Efficiency'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600">
                  -70%
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {isEs ? 'en fricción manual y errores' : 'in manual friction & errors'}
                </p>
              </div>
            </div>

            {/* CTA Contextual */}
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-sky-950">
                  {isEs
                    ? '¿Querés recuperar estas horas en tu operación?'
                    : 'Want to reclaim these hours in your operation?'}
                </div>
                <div className="text-[11px] text-sky-800">
                  {isEs
                    ? 'Diseñemos un circuito automatizado a medida de tus sistemas.'
                    : "Let's design an automated workflow tailored to your systems."}
                </div>
              </div>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-xs transition-all shrink-0 group"
              >
                <span>{isEs ? 'Conversar sobre mi proceso' : 'Discuss My Process'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
