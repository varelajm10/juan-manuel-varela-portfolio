import React from 'react';
import { Search, Layers, Zap, CheckCircle2 } from 'lucide-react';

export default function WorkMethodology() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico & Detección de Fricción',
      icon: Search,
      description:
        'Relevamiento del circuito administrativo (Order-to-Cash, conciliaciones, facturación). Identificación de cuellos de botella, riesgos de error y horas invertidas.',
    },
    {
      number: '02',
      title: 'Limpieza e Integración de Datos',
      icon: Layers,
      description:
        'Conexión y saneamiento de fuentes dispersas (ERPs, extractos bancarios, bases SQL, hojas de cálculo) para asegurar trazabilidad y datos limpios.',
    },
    {
      number: '03',
      title: 'Automatización de Flujos',
      icon: Zap,
      description:
        'Implementación de scripts y pipelines en Python / herramientas digitales que procesan, concilian y alertan sin intervención manual ni margen de error.',
    },
    {
      number: '04',
      title: 'Dashboards & Adopción en Equipo',
      icon: CheckCircle2,
      description:
        'Tableros ejecutivos en Power BI para control en tiempo real, documentación clara y acompañamiento del equipo para garantizar una adopción fluida.',
    },
  ];

  return (
    <section id="metodologia" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Estructura de Trabajo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Metodología de trabajo en 4 pasos
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400">
            El código y los reportes responden a una arquitectura de procesos bien pensada. Cómo transformo una operación manual en un circuito ordenado y escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-zinc-600">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-zinc-100 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
