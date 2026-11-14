import React from 'react';
import { ArrowRight, Bot, Layers, Workflow } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';

const icons = {
  automatizacion: Workflow,
  aplicaciones: Layers,
  ia: Bot,
};

export default function Services({ lang, onSelectDemo }) {
  const t = content[lang].services;

  return (
    <section
      id="soluciones"
      className="scroll-mt-24 border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="mb-2 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            <Layers className="h-3.5 w-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.items.map((item) => {
            const Icon = icons[item.id] || Layers;
            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-7"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {item.kicker}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {item.examples.map((example) => (
                    <li key={example} className="flex gap-2">
                      <span aria-hidden="true" className="text-zinc-400">·</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  onClick={(event) => {
                    track('cta_click', { location: 'service', service: item.id, target: 'contact' });
                    if (onSelectDemo) {
                      event.preventDefault();
                      onSelectDemo(item.kicker, item.subject);
                    }
                  }}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-zinc-100 dark:hover:text-sky-400"
                >
                  <span>{t.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
