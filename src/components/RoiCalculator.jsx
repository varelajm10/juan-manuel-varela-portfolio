import React, { useState } from 'react';
import { Calculator, Clock, Calendar, ArrowRight, TrendingUp } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);

  // Cálculos dinámicos
  const totalManualMonthlyHours = Math.round(teamSize * hoursPerWeek * 4.3);
  const savedMonthlyHours = Math.round(totalManualMonthlyHours * 0.7);
  const savedDays = (savedMonthlyHours / 8).toFixed(1);

  return (
    <section id="calculadora-roi" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Impacto Operativo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            ¿Cuántas horas pierde tu equipo en tareas manuales?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            Calculá el tiempo operativo y las jornadas que se pueden recuperar al mes eliminando planillas manuales, conciliaciones repetitivas y armado manual de reportes.
          </p>
        </div>

        {/* Contenedor Sliders + Métricas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Sliders */}
          <div className="lg:col-span-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
            {/* Slider 1 */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="team-size" className="text-xs sm:text-sm font-semibold text-zinc-200">
                  Tamaño del equipo administrativo / operativo
                </label>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-zinc-800 text-zinc-100 border border-zinc-700">
                  {teamSize} {teamSize === 1 ? 'persona' : 'personas'}
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
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>1 persona</span>
                <span>10</span>
                <span>20 personas</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="hours-per-week" className="text-xs sm:text-sm font-semibold text-zinc-200">
                  Horas semanales manuales por persona
                </label>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold bg-zinc-800 text-zinc-100 border border-zinc-700">
                  {hoursPerWeek} h/semana
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
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 mt-1">
                <span>2 h/sem</span>
                <span>15 h</span>
                <span>30 h/sem</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-3 leading-relaxed">
                Conciliaciones bancarias, cruce de planillas Excel, bajada de comprobantes y armado de reportes periódicos.
              </p>
            </div>
          </div>

          {/* Métricas Dinámicas */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-800 bg-zinc-900/80 text-zinc-100">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">
                <Clock className="w-4 h-4" />
                <span>Horas Operativas Ahorrables al Mes</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold font-mono text-zinc-100 tracking-tight">
                  ~{savedMonthlyHours}
                </span>
                <span className="text-sm font-semibold text-zinc-400">horas / mes</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Reducción estimada del 70% sobre las {totalManualMonthlyHours} horas manuales totales dedicadas al mes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Días Laborales</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100">
                  {savedDays}
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  días devueltos al equipo al mes
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                  <span>Eficiencia</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                  -70%
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  en fricción manual y errores
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-zinc-300">
                ¿Querés recuperar estas horas en tu operación?
              </span>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-white text-zinc-950 transition-all shrink-0"
              >
                <span>Hablemos de tu proceso</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
