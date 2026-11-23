import React from 'react';
import { content } from '../data/portfolioData';

export default function WorkMethodology({ lang }) {
  const t = content[lang].methodology;

  return (
    <section id="metodologia" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="grid grid-cols-1 gap-5 border-b border-gridline px-4 py-12 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
              {t.tag}
            </p>
            <h2 className="font-display text-[2.25rem] font-normal leading-[1.04] tracking-[-0.02em] text-obsidian sm:text-[2.7rem]">
              {t.title}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink-body sm:text-base lg:col-span-5">
            {t.subtitle}
          </p>
        </div>

        <ol className="grid grid-cols-1 divide-y divide-gridline md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {t.steps.map((step, idx) => (
            <li
              key={step.number}
              className={`bg-white/75 p-6 transition-colors hover:bg-white sm:p-7 ${
                idx >= 2 ? 'md:border-t md:border-gridline lg:border-t-0' : ''
              } ${idx % 2 === 1 ? 'md:border-l md:border-gridline lg:border-l-0' : ''}`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-3xl leading-none text-petrol">
                  {step.number}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-obsidian sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-body sm:text-sm">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
