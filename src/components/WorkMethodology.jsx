import React from 'react';
import { Search, Layers, Zap, CheckCircle2 } from 'lucide-react';
import { content } from '../data/portfolioData';

const iconMap = [Search, Layers, Zap, CheckCircle2];

export default function WorkMethodology({ lang }) {
  const t = content[lang].methodology;

  return (
    <section id="metodologia" className="py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.steps.map((step, idx) => {
            const Icon = iconMap[idx] || Search;
            return (
              <div
                key={step.number}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-zinc-500 dark:text-zinc-500">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shadow-xs">
                      <Icon className="w-4 h-4 text-sky-700 dark:text-sky-400" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
