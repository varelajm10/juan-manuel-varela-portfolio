import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';

export default function Collaboration({ lang, onSelectDemo }) {
  const t = content[lang].collaboration;

  return (
    <section id="colaboracion" className="scroll-mt-24 border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
            {t.text}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
            {t.text2}
          </p>
          <a
            href="#contacto"
            onClick={(event) => {
              track('cta_click', { location: 'collaboration', target: 'contact' });
              if (onSelectDemo) {
                event.preventDefault();
                onSelectDemo(t.subject, t.subject);
              }
            }}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
          >
            <span>{t.cta}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
