import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data/portfolioData';
import { track } from '../lib/track';

const HIGHLIGHTS = {
  es: {
    kicker: 'Colaboración con agencias y equipos',
    points: [
      {
        num: '01',
        title: 'Integración directa o entregas acotadas',
        text: 'Participación en proyectos en curso o desarrollos modulares con alcance definido.',
      },
      {
        num: '02',
        title: 'Puente entre negocio e ingeniería',
        text: 'Criterio real en finanzas y operaciones para reducir fricción técnica y funcional.',
      },
    ],
  },
  en: {
    kicker: 'Collaboration with agencies and teams',
    points: [
      {
        num: '01',
        title: 'Direct integration or scoped builds',
        text: 'Joining ongoing projects or taking ownership of well-defined modules.',
      },
      {
        num: '02',
        title: 'Bridge between business and engineering',
        text: 'Hands-on operational and financial judgment that reduces back-and-forth.',
      },
    ],
  },
};

export default function Collaboration({ lang, onSelectDemo }) {
  const t = content[lang].collaboration;
  const extra = HIGHLIGHTS[lang] || HIGHLIGHTS.es;

  return (
    <section
      id="colaboracion"
      className="monolith-bg scroll-mt-20 border-b border-white/10 text-paper"
    >
      <div className="mx-auto max-w-6xl border-white/10 xl:border-x">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="border-b border-white/10 px-4 py-12 sm:px-6 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-verdigris">
              {extra.kicker}
            </p>
            <h2 className="font-display text-[2.25rem] font-normal leading-[1.03] tracking-[-0.02em] text-white sm:text-[2.85rem]">
              {t.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#D0DCE0] sm:text-base">
              {t.text}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#B6C7CC]">
              {t.text2}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-7 px-4 py-10 sm:px-6 lg:col-span-5 lg:p-12">
            <div className="space-y-5">
              {extra.points.map((point, index) => (
                <div
                  key={point.num}
                  className={index === 0 ? 'border-b border-white/10 pb-5' : ''}
                >
                  <div className="mb-1 font-mono text-xs font-semibold text-verdigris">
                    {point.num} · {point.title}
                  </div>
                  <p className="text-xs leading-relaxed text-[#DCE7EA] sm:text-sm">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              onClick={(event) => {
                track('cta_click', { location: 'collaboration', target: 'contact' });
                if (onSelectDemo) {
                  event.preventDefault();
                  onSelectDemo(t.subject, t.subject);
                }
              }}
              className="group inline-flex min-h-[44px] items-center justify-between gap-3 bg-paper px-5 py-3.5 text-xs font-semibold text-obsidian transition-colors hover:bg-verdigris"
            >
              <span>{t.cta}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
