import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';

export default function Services({ lang, onSelectDemo }) {
  const t = content[lang].services;

  return (
    <section id="soluciones" className="scroll-mt-20 border-b border-gridline bg-white">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="grid grid-cols-1 gap-5 border-b border-gridline px-4 py-12 sm:px-6 lg:grid-cols-12 lg:items-end lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
              {t.tag}
            </p>
            <h2 className="font-display text-[2.25rem] font-normal leading-[1.03] tracking-[-0.02em] text-obsidian sm:text-[2.75rem]">
              {t.title}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink-body sm:text-base lg:col-span-5">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-gridline lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {t.items.map((item, idx) => (
            <article
              key={item.id}
              className="flex flex-col justify-between p-6 transition-colors hover:bg-paper/65 sm:p-8"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-petrol">
                    0{idx + 1} · {item.kicker}
                  </span>
                </div>

                <h3 className="font-display text-[1.65rem] font-normal leading-[1.12] text-obsidian">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-body">
                  {item.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="border border-gridline bg-paper px-2.5 py-1 font-mono text-xs text-ink-body"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contacto"
                onClick={(event) => {
                  track('cta_click', { location: 'service', service: item.id, target: 'contact' });
                  if (onSelectDemo) {
                    event.preventDefault();
                    onSelectDemo(item.kicker, item.subject);
                  }
                }}
                className="group mt-7 inline-flex min-h-[44px] items-center justify-between border-t border-gridline pt-4 text-xs font-semibold text-petrol transition-colors hover:text-petrol-dark"
              >
                <span>{t.cta}</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
