import React from 'react';
import { ArrowRight, Bot, Layers, Workflow } from 'lucide-react';
import { content } from '../data/portfolioData';

const icons = {
  automatizacion: Workflow,
  aplicaciones: Layers,
  ia: Bot,
};

export default function Services({ lang }) {
  const t = content[lang].services;

  return (
    <section
      id="soluciones"
      className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item) => {
            const Icon = icons[item.id] || Layers;
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-7"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
                  {item.problem}
                </p>
                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.solution}
                </p>
                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.benefit}
                </p>
                <p className="mt-5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {item.tools}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-sky-700 dark:hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  <span>{t.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
