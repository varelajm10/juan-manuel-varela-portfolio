import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { content } from '../data/portfolioData';

export default function Experience({ lang }) {
  const t = content[lang].experience;

  return (
    <section id="trayectoria" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Columna Izquierda: Cabecera + Formación */}
          <div className="border-b border-gridline px-4 py-10 sm:px-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-8">
            <div className="lg:sticky lg:top-24">
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
                {t.tag}
              </p>
              <h2 className="font-display text-[2.2rem] font-normal leading-[1.04] tracking-[-0.02em] text-obsidian sm:text-[2.55rem]">
                {t.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-body">
                {t.subtitle}
              </p>

              {t.education && (
                <div id="formacion" className="mt-8 border-t border-gridline pt-6">
                  <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
                    {t.education.title}
                  </h3>
                  <ul className="space-y-3">
                    {t.education.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-gridline/70 pb-3 last:border-b-0 last:pb-0"
                      >
                        <p className="text-xs font-semibold text-obsidian sm:text-sm">
                          {item.name}
                        </p>
                        {item.place && (
                          <p className="mt-0.5 font-mono text-xs text-petrol">
                            {item.place}
                          </p>
                        )}
                        {item.detail && (
                          <p className="mt-0.5 text-xs leading-relaxed text-ink-body">
                            {item.detail}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha: Ledger Cronológico de Roles */}
          <div className="divide-y divide-gridline bg-white lg:col-span-8">
            {t.items.map((item, idx) => {
              const isCurrent = idx === 0;
              return (
                <article
                  key={`${item.company}-${item.period}`}
                  className={`p-6 sm:p-8 ${isCurrent ? 'bg-petrol-tint/35' : 'bg-white'}`}
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-base font-semibold leading-snug text-obsidian sm:text-lg">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-xs font-medium text-ink-body sm:text-sm">
                        <span className="font-semibold text-obsidian">{item.company}</span>
                        {' · '}
                        <span className="text-ink-muted">{item.location}</span>
                      </p>
                    </div>

                    <span
                      className={`inline-flex shrink-0 self-start border px-2.5 py-1 font-mono text-xs ${
                        isCurrent
                          ? 'border-petrol-border bg-petrol-tint font-semibold text-petrol'
                          : 'border-gridline bg-paper text-ink-muted'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-body">
                    {item.summary}
                  </p>

                  {isCurrent && item.achievements?.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-gridline/80 pt-4">
                      {item.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-obsidian sm:text-sm"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-petrol"
                            aria-hidden="true"
                          />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-gridline bg-paper px-2 py-0.5 font-mono text-xs text-ink-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
