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
            className={`h-4 w-4 ${active ? 'fill-amber-400 text-amber-500' : 'text-zinc-300 dark:text-zinc-700'}`}
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

  const copy = lang === 'en'
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
    <section id="referencias" className="scroll-mt-24 border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
            {copy.tag}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            {copy.title}
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-7"
            >
              <Stars rating={item.rating} label={copy.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.quote[lang] || item.quote.es}
              </blockquote>
              <footer className="mt-5 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.company}</p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.sector[lang] || item.sector.es}</p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
