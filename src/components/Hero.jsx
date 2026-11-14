import React from 'react';
import { MapPin, ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { track } from '../lib/track';

export default function Hero({ lang }) {
  const t = content[lang].hero;
  const metrics = content[lang].metrics;
  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    content[lang].contact.whatsappPrefill
  )}`;

  return (
    <section id="sobre-mi" className="relative bg-dot-pattern pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{t.badge}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                <MapPin className="h-3.5 w-3.5 text-zinc-400" />
                <span>{personalInfo.location[lang]}</span>
              </div>
            </div>

            <p className="mb-4 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t.eyebrow}
            </p>

            <h1 className="max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-[3.25rem]">
              {t.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
              {t.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                onClick={() => track('cta_click', { location: 'hero', target: 'contact' })}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
              >
                <span>{t.ctaContact}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#proyectos"
                onClick={() => track('cta_click', { location: 'hero', target: 'projects' })}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition-all hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                <span>{t.ctaProjects}</span>
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => track('contact_email', { location: 'hero' })}
                className="inline-flex items-center gap-2 font-medium text-zinc-700 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-zinc-300 dark:hover:text-sky-400"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('contact_whatsapp', { location: 'hero' })}
                className="inline-flex items-center gap-2 font-medium text-zinc-700 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-zinc-300 dark:hover:text-emerald-400"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{t.ctaWhatsapp}</span>
              </a>
            </div>
          </div>

          <div className="order-first md:order-none md:col-span-5 lg:col-span-4">
            <img
              src="/profile.jpg"
              alt="Juan Manuel Varela"
              width="1024"
              height="1024"
              className="aspect-auto h-24 w-24 rounded-2xl border border-zinc-200 bg-zinc-100 object-cover object-top shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:h-28 sm:w-28 md:aspect-square md:h-auto md:w-full"
            />
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:mt-28">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t.metricsLabel}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-zinc-200/90 bg-white/80 p-6 backdrop-blur-sm dark:border-zinc-800/90 dark:bg-zinc-900/40"
              >
                <div className="whitespace-nowrap font-mono text-xl font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-300">
                  {metric.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
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
