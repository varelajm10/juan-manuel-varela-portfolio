import React, { useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Briefcase,
  TrendingUp,
  Cpu,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import {
  personalInfo,
  experienceData,
  skillsCategories,
} from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-zinc-200 bg-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                <span>Vista Previa del Currículum Vitae</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {personalInfo.name} — Formato Ejecutivo
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Descargar PDF</span>
            </a>

            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir PDF en pestaña nueva"
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={onClose}
              title="Cerrar"
              className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenido CV */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white">
          <div className="border-b border-zinc-100 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-sky-700 mt-1">
              {personalInfo.role}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>linkedin.com/in/juan-m-varela1984</span>
            </div>
          </div>

          {/* Resumen */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold mb-2 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-sky-600" />
              <span>Resumen Ejecutivo</span>
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Experiencia */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold mb-4 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-sky-600" />
              <span>Experiencia Laboral & Logros</span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-zinc-950">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-sky-700 mb-2">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-600">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competencias */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-600" />
              <span>Habilidades y Tecnologías</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs"
                >
                  <div className="font-bold text-zinc-900 mb-1">
                    {cat.name}
                  </div>
                  <div className="text-zinc-600">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formación */}
          <div className="border-t border-zinc-100 pt-5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-800 font-bold mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-sky-600" />
              <span>Formación Continua</span>
            </h2>
            <p className="text-xs text-zinc-600">
              Formación Universitaria en Administración y Finanzas · Especializaciones en Ingeniería de Software, Arquitectura de APIs con FastAPI, Power BI / DAX y React.
            </p>
          </div>
        </div>

        {/* Footer Modal */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 text-xs text-zinc-500">
          <span>Ruta directa: /public/cv-juan-manuel-varela.pdf</span>
          <a
            href={personalInfo.cvUrl}
            download={personalInfo.cvFileName}
            className="font-bold text-sky-700 hover:underline flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" /> Descargar copia oficial
          </a>
        </div>
      </div>
    </div>
  );
}
