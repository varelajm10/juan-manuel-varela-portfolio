import React from 'react';
import { Star } from 'lucide-react';
import { demoTestimonials } from '../data/demoTestimonials';

function Stars({ rating, label }) {
  const value = Math.max(1, Math.min(5, Number(rating) || 0));

  return (
    <div className="flex items-center gap-1" role="img" aria-label={label(value)}>
      {Array.from({ length: 5 }, (_, index) => {
        const active = index < value;
        return (
          <Star
            key={index}
            className={`h-4 w-4 ${active ? 'fill-petrol text-petrol' : 'text-gridline'}`}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

export default function Testimonials({ lang }) {
  const items = demoTestimonials.filter((item) => item.verified === true && item.demo !== true);
  if (items.length === 0) return null;

  const copy =
    lang === 'en'
      ? {
          tag: 'References',
          title: 'What clients say about the work',
          rating: (value) => `${value} out of 5 stars`,
        }
      : {
          tag: 'Referencias',
          title: 'Lo que dicen quienes contrataron el trabajo',
          rating: (value) => `${value} de 5 estrellas`,
        };

  return (
    <section id="referencias" className="scroll-mt-20 border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="border-b border-gridline px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
            {copy.tag}
          </p>
          <h2 className="font-display text-[2.25rem] font-normal leading-[1.04] tracking-[-0.02em] text-obsidian sm:text-[2.7rem]">
            {copy.title}
          </h2>
        </div>

        <ul className="grid grid-cols-1 divide-y divide-gridline bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col justify-between p-6 sm:p-7">
              <div>
                <Stars rating={item.rating} label={copy.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-body">
                  {item.quote[lang] || item.quote.es}
                </blockquote>
              </div>
              <footer className="mt-5 border-t border-gridline pt-4">
                <p className="text-sm font-semibold text-obsidian">{item.company}</p>
                <p className="mt-0.5 font-mono text-xs text-ink-muted">
                  {item.sector[lang] || item.sector.es}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
