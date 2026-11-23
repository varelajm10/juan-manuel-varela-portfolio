import React from 'react';
import { content } from '../data/portfolioData';

export default function Problems({ lang }) {
  const t = content[lang].problems;
  const kicker = lang === 'en' ? 'Operational diagnosis' : 'Diagnóstico operativo';

  return (
    <section id="problemas" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="border-b border-gridline px-4 py-11 sm:px-6 lg:px-8">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-ink-muted">
            {kicker}
          </p>
          <h2 className="max-w-2xl font-display text-[2.15rem] font-normal leading-[1.04] tracking-[-0.02em] text-obsidian sm:text-[2.65rem]">
            {t.title}
          </h2>
        </div>

        <ol className="divide-y divide-gridline">
          {t.items.map((item, index) => (
            <li
              key={item.id}
              className="grid grid-cols-1 gap-3 px-4 py-7 transition-colors hover:bg-white sm:px-6 md:grid-cols-12 md:items-baseline md:gap-6 lg:px-8"
            >
              <span className="font-display text-3xl leading-none text-petrol md:col-span-2">
                0{index + 1}
              </span>
              <h3 className="text-base font-semibold leading-snug text-obsidian md:col-span-5">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-body md:col-span-5">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
