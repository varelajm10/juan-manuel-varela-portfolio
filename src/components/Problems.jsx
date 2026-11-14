import React from 'react';
import { content } from '../data/portfolioData';

export default function Problems({ lang }) {
  const t = content[lang].problems;

  return (
    <section id="problemas" className="scroll-mt-24 border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          {t.title}
        </h2>
        <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.items.map((item, index) => (
            <li key={item.id} className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">0{index + 1}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
