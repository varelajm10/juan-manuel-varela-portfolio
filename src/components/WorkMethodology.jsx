import React from 'react';
import { Search, Layers, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WorkMethodology({ lang = 'es' }) {
  const isEs = lang === 'es';

  const steps = [
    {
      number: '01',
      title: isEs ? 'Diagnóstico & Cuantificación' : 'Diagnosis & Quantification',
      icon: Search,
      accentColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200/80',
      description: isEs
        ? 'Relevamiento integral del circuito administrativo (Order-to-Cash, conciliaciones, compras). Detección de cuellos de botella, riesgos operativos y horas hombre invertidas.'
        : 'End-to-end mapping of administrative workflows (Order-to-Cash, reconciliations, billing). Identification of operational bottlenecks, risks, and wasted labor hours.',
      deliverable: isEs ? 'Mapa de fricción y cuantificación de horas' : 'Friction map & quantified hour loss',
    },
    {
      number: '02',
      title: isEs ? 'Arquitectura & Normalización de Datos' : 'Architecture & Data Normalization',
      icon: Layers,
      accentColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200/80',
      description: isEs
        ? 'Conexión y saneamiento de fuentes dispersas (ERPs como SAP/Odoo, extractos bancarios, bases SQL y hojas de cálculo) para asegurar trazabilidad y datos limpios.'
        : 'Connecting and cleaning fragmented sources (ERPs like SAP/Odoo, bank statements, SQL databases, spreadsheets) to guarantee traceability and pristine data.',
      deliverable: isEs ? 'Esquema relacional y datos validados' : 'Relational schema & validated data',
    },
    {
      number: '03',
      title: isEs ? 'Automatización de Flujos' : 'Workflow Automation',
      icon: Zap,
      accentColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200/80',
      description: isEs
        ? 'Implementación de scripts y pipelines en Python / herramientas digitales que procesan, concilian y alertan sin intervención manual ni margen de error.'
        : 'Deploying Python scripts and automated pipelines that process, reconcile, and trigger alerts without manual intervention or human error.',
      deliverable: isEs ? 'Pipelines en ejecución desatendida' : 'Unattended automated pipelines',
    },
    {
      number: '04',
      title: isEs ? 'Adopción, Dashboards & Autonomía' : 'Adoption, Dashboards & Autonomy',
      icon: CheckCircle2,
      accentColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200/80',
      description: isEs
        ? 'Tableros ejecutivos en Power BI para control en tiempo real, documentación clara y acompañamiento del equipo para garantizar una adopción fluida.'
        : 'Executive Power BI dashboards for real-time visibility, standard operating documentation, and team enablement for frictionless long-term adoption.',
      deliverable: isEs ? 'Tableros en vivo y documentación SOP' : 'Live dashboards & SOP documentation',
    },
  ];

  return (
    <section id="metodologia" className="py-24 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>{isEs ? 'Rigor Metodológico' : 'Methodological Rigor'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              {isEs ? 'Metodología de Trabajo en 4 Pasos' : '4-Step Operational Framework'}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              {isEs
                ? 'El código y los dashboards responden a una arquitectura de procesos sólida. Cómo transformo una operación manual en un sistema autónomo y escalable.'
                : 'Every line of code and dashboard follows structured process architecture. How I turn complex manual operations into scalable, autonomous systems.'}
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 transition-all self-start md:self-auto group"
          >
            <span>{isEs ? 'Consultar por tu circuito' : 'Inquire About Your Workflow'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Grid de 4 Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-zinc-50/50 p-6 sm:p-7 hover:border-zinc-300 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Número grande y sutil + Icono */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-zinc-300 group-hover:text-zinc-400 transition-colors">
                      {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center ${step.accentColor} shadow-xs`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-base font-bold text-zinc-950 group-hover:text-sky-700 transition-colors mb-3 leading-snug">
                    {step.title}
                  </h3>

                  {/* Bajada */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Entregable clave al pie */}
                <div className="mt-6 pt-4 border-t border-zinc-200/70">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                    {isEs ? 'Entregable:' : 'Key Deliverable:'}
                  </span>
                  <div className="text-xs font-semibold text-zinc-800 mt-0.5">
                    {step.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
