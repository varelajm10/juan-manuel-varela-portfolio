import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';

export default function Hero({ lang }) {
  const t = content[lang].hero;
  const metrics = content[lang].metrics;

  return (
    <section id="sobre-mi" className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.badge}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{personalInfo.location[lang]}</span>
              </div>
            </div>

            <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
              {t.headline}
              {t.headlineSub ? (
                <span className="text-zinc-500 dark:text-zinc-400">{t.headlineSub}</span>
              ) : null}
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {t.subheadline || t.storyP1}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 shadow-xs transition-all group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <span>{t.ctaContact}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <span>{t.ctaProjects}</span>
              </a>
            </div>
          </div>

          <div className="order-first md:order-none md:col-span-5 lg:col-span-4">
            <img
              src="/profile.jpg"
              alt="Juan Manuel Varela"
              width="1024"
              height="1024"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-auto md:aspect-square rounded-2xl object-cover object-top border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-900"
            />
          </div>
        </div>

        <div className="mt-20 sm:mt-28 border-t border-zinc-200 dark:border-zinc-800 pt-10">
          <p className="mb-4 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {t.metricsLabel}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
}
