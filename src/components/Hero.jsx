import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail,
  Eye,
  Check,
  Copy,
  MapPin,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import {
  personalInfo,
  content,
} from '../data/portfolioData';

export default function Hero({ lang, onOpenCvModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const t = content[lang].hero;
  const metricsData = content[lang].impact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(t.whatsappMsg)}`;

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-mesh-gradient bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Banner Pill de Presentación */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.badge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-600 bg-white border border-zinc-200 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t.location}</span>
          </div>
        </div>

        {/* Grilla Principal del Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Izquierdo: Titular & Pitch */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-md border border-sky-200/80 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
              {t.headlinePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-emerald-600">
                {t.headlineHighlight}
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              {t.subtitle}
            </p>

            {/* CTAs Ejecutivos con Botón Destacado de WhatsApp */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all group"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.whatsappBtn}</span>
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-zinc-950 hover:bg-zinc-800 text-white shadow-md transition-all group"
              >
                <span>{t.ctaProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
                download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-800 hover:bg-zinc-50 shadow-xs transition-all"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>{t.ctaCv}</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-3.5 rounded-xl text-sm font-medium text-zinc-600 hover:text-zinc-900 bg-zinc-100/80 hover:bg-zinc-200/80 transition-all"
              >
                <Eye className="w-4 h-4 text-sky-600" />
                <span>{t.ctaPreview}</span>
              </button>
            </div>

            {/* Badges de Verificación Rápida */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.badgeTrust1}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>{t.badgeTrust2}</span>
              </span>
            </div>
          </div>

          {/* Lado Derecho: Tarjeta Perfil Profesional */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 opacity-20 blur-xl"></div>

              <div className="relative rounded-3xl border border-zinc-200/90 bg-white/95 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-4 pb-5 border-b border-zinc-100">
                  <div className="relative">
                    <img
                      src="/profile.jpg"
                      alt={personalInfo.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md ring-2 ring-sky-500/20"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-zinc-950 flex items-center gap-1.5">
                      {personalInfo.name}
                      <ShieldCheck className="w-4 h-4 text-sky-500" />
                    </h2>
                    <p className="text-xs font-medium text-sky-700">
                      {t.cardRole}
                    </p>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="py-4 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span className="text-zinc-500 font-medium">{t.cardFocusLabel}</span>
                    <span className="font-semibold text-zinc-800">{t.cardFocusValue}</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span className="text-zinc-500 font-medium">{t.cardTechLabel}</span>
                    <span className="font-semibold text-zinc-800 font-mono">Python · SQL · Power BI · APIs</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                    <span className="text-zinc-500 font-medium">{t.cardMethodLabel}</span>
                    <span className="font-semibold text-zinc-800">{t.cardMethodValue}</span>
                  </div>
                </div>

                {/* Acciones directas de contacto */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-all"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-700" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-sky-700 hover:border-sky-300 hover:bg-sky-50/50 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:border-zinc-300 hover:bg-zinc-50 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copiar email"
                    className="p-2.5 rounded-xl border border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50 transition-all"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Métricas Cuantitativas */}
        <div id="impacto" className="mt-16 sm:mt-24 pt-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold">
              {metricsData.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1">
              {metricsData.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metricsData.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-zinc-950 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-zinc-700 group-hover:from-sky-700 group-hover:to-indigo-700 transition-all">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-bold text-zinc-900">
                  {metric.label}
                </div>
                <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
