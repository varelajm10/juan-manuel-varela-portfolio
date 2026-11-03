import React from 'react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CvSection({ onOpenCvModal }) {
  return (
    <section className="py-20 border-t border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white p-8 sm:p-12 shadow-2xl">
          {/* Acentos de luz sutiles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Currículum Vitae Ejecutivo Oficial</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                ¿Revisando perfiles para tu equipo u organización?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
                Descargá el documento PDF estructurado para reclutadores de finanzas y tecnología, o previsualizalo al instante. Contiene antecedentes detallados, métricas de mora, conciliación y stacks técnicos aplicados.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Optimizado para ATS corporativos</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Actualizado 2026</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={personalInfo.cvUrl}
                download={personalInfo.cvFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-white text-zinc-950 hover:bg-zinc-100 shadow-lg hover:shadow-xl transition-all"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Descargar CV (Español)</span>
              </a>

              <a
                href={personalInfo.cvUrlEn}
                download={personalInfo.cvFileNameEn}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold border border-zinc-700 bg-zinc-800/80 text-zinc-200 hover:bg-zinc-800 transition-all"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download CV (English)</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-all"
              >
                <Eye className="w-4 h-4 text-sky-400" />
                <span>Previsualizar en pantalla</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
