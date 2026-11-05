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
import { downloadCv } from '../lib/downloadCv';

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
      ? 'Hola Juan Manuel, vi tu sitio y quiero comentarte un problema operativo de mi empresa.'
      : 'Hi Juan Manuel, I saw your site and would like to talk about an operational problem in my company.';

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <section id="sobre-mi" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
        <div className="md:col-span-7 lg:col-span-8">
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
        <div>
          <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
            {t.headline}
            {t.headlineSub ? (
              <span className="text-zinc-500 dark:text-zinc-400">{t.headlineSub}</span>
            ) : null}
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {t.subheadline || t.storyP1}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 shadow-xs transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <span>{t.ctaProjects}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              <span>{t.ctaContact}</span>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => downloadCv(lang)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
            >
              <Download className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>{t.ctaCv}</span>
            </button>

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
                  aria-label="LinkedIn"
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
                  aria-label="GitHub"
                  className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copiar email"
                aria-label={lang === 'es' ? `Copiar ${personalInfo.email}` : `Copy ${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                    <span className="text-emerald-700 dark:text-emerald-400">
                      {lang === 'es' ? 'Copiado' : 'Copied'}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-500" />
                    <span>{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        </div>

        <div className="order-first md:order-none md:col-span-5 lg:col-span-4 md:pt-2">
          <img
            src="/profile.jpg"
            alt="Juan Manuel Varela"
            width="1024"
            height="1024"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto md:aspect-square rounded-2xl object-cover object-top border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-900"
          />
        </div>
        </div>

        {/* Bloque de Métricas Reales */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-sm"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono leading-none tracking-tight whitespace-nowrap text-zinc-900 dark:text-zinc-100">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                {metric.label}
              </div>
              <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
