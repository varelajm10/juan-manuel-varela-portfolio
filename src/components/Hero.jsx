import React, { useState } from 'react';
import {
  Download,
  Linkedin,
  Github,
  Copy,
  Check,
  MapPin,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import {
  personalInfo,
  content,
} from '../data/portfolioData';

export default function Hero({ lang }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const t = content[lang].hero;
  const metrics = content[lang].metrics;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMsg =
    lang === 'es'
      ? 'Hola Juan Manuel, vi tu portfolio y me gustaría conversar sobre una oportunidad en finanzas y automatización.'
      : 'Hi Juan Manuel, I saw your portfolio and would like to connect regarding an opportunity in finance and automation.';

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <section id="sobre-mi" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de Disponibilidad y Ubicación */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.badge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{personalInfo.location[lang]}</span>
          </div>
        </div>

        {/* Encabezado Principal Directo */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
            {t.headline}
            <span className="text-zinc-500 dark:text-zinc-400">{t.headlineSub}</span>
          </h1>

          {/* SOBRE MÍ — Historia real en 3 párrafos honestos */}
          <div className="mt-8 space-y-4 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal border-l-2 border-zinc-300 dark:border-zinc-800 pl-5 sm:pl-6">
            <p>{t.storyP1}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{t.storyP2}</p>
            <p className="text-zinc-900 dark:text-zinc-100 font-medium">{t.storyP3}</p>
          </div>

          {/* Acciones Principales y Contacto */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 shadow-xs transition-all group"
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
              download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.ctaCv}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.ctaWhatsapp}</span>
            </a>

            {/* Separador */}
            <div className="hidden sm:block h-8 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

            {/* Redes */}
            <div className="flex items-center gap-2">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}

              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copiar email"
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {lang === 'es' ? 'Copiado' : 'Copied'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bloque de Métricas Reales */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                {metric.label}
              </div>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
