import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { track } from '../lib/track';

export default function Footer({ lang }) {
  const t = content[lang].footer;

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl border-gridline px-4 py-10 sm:px-6 lg:px-8 xl:border-x">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-gridline pb-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-obsidian font-mono text-xs font-medium text-paper">
              JV
            </div>
            <div>
              <div className="text-sm font-semibold text-obsidian">{personalInfo.name}</div>
              <div className="font-mono text-xs text-ink-muted">
                {personalInfo.brand[lang]}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center border border-gridline bg-white text-ink-body transition-colors hover:border-obsidian hover:text-obsidian"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center border border-gridline bg-white text-ink-body transition-colors hover:border-obsidian hover:text-obsidian"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label={content[lang].ui.sendEmail}
              onClick={() => track('contact_email', { location: 'footer' })}
              className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center border border-gridline bg-white text-ink-body transition-colors hover:border-obsidian hover:text-obsidian"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex min-h-[40px] items-center gap-1.5 border border-gridline bg-white px-3 font-mono text-xs text-ink-body transition-colors hover:border-obsidian hover:text-obsidian"
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t.backToTop}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-6 font-mono text-xs text-ink-muted sm:flex-row sm:items-center">
          <div>
            © {currentYear} {personalInfo.name}. {t.location}
          </div>
          <div className="flex items-center gap-2">
            <span>{t.title}</span>
            <span aria-hidden="true">·</span>
            <span>{t.vercel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
