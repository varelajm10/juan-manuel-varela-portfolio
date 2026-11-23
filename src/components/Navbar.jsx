import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowRight } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { downloadCv } from '../lib/downloadCv';
import { track } from '../lib/track';

export default function Navbar({ lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[lang].nav;
  const ui = content[lang].ui;
  const projectCount = content[lang].projects.items.length;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.solutions, href: '#soluciones' },
    { name: t.projects, href: '#proyectos', count: projectCount },
    { name: t.collaborate, href: '#colaboracion' },
    { name: t.methodology, href: '#metodologia' },
    { name: t.experience, href: '#trayectoria' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 border-b border-gridline transition-colors duration-200 ${
        isScrolled ? 'bg-paper/95 backdrop-blur-md' : 'bg-paper'
      }`}
    >
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Marca Personal */}
          <a href="#sobre-mi" className="flex min-w-0 items-center gap-3 group">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-obsidian font-mono text-xs font-medium tracking-tight text-paper transition-colors group-hover:bg-petrol">
              JV
            </div>
            <div className="min-w-0 leading-tight">
              <div className="truncate text-sm font-semibold tracking-tight text-obsidian">
                {personalInfo.name}
              </div>
              <div className="truncate font-mono text-xs text-ink-muted">
                <span className="sm:hidden">{personalInfo.brandShort[lang]}</span>
                <span className="hidden sm:inline">{personalInfo.brand[lang]}</span>
              </div>
            </div>
          </a>

          {/* Navegación Desktop (visible desde 1024px / lg) */}
          <nav
            aria-label={lang === 'en' ? 'Primary navigation' : 'Navegación principal'}
            className="hidden lg:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-baseline gap-1 py-1 text-[13px] font-medium text-ink-body transition-colors hover:text-obsidian"
              >
                <span>{link.name}</span>
                {link.count ? (
                  <span className="font-mono text-xs text-petrol">({link.count})</span>
                ) : null}
              </a>
            ))}
          </nav>

          {/* Acciones Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div
              className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted"
              role="group"
              aria-label={lang === 'en' ? 'Language selector' : 'Selector de idioma'}
            >
              <button
                type="button"
                onClick={() => setLang('es')}
                aria-label={ui.toSpanish}
                aria-pressed={lang === 'es'}
                className={`px-1.5 py-1 transition-colors ${
                  lang === 'es'
                    ? 'font-semibold text-obsidian underline decoration-petrol decoration-2 underline-offset-4'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                ES
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label={ui.toEnglish}
                aria-pressed={lang === 'en'}
                className={`px-1.5 py-1 transition-colors ${
                  lang === 'en'
                    ? 'font-semibold text-obsidian underline decoration-petrol decoration-2 underline-offset-4'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contacto"
              onClick={() => track('cta_click', { location: 'nav', target: 'contact' })}
              className="inline-flex min-h-[40px] items-center gap-2 bg-petrol px-4 py-2 text-xs font-semibold text-paper transition-colors hover:bg-petrol-dark"
            >
              <span>{t.contact}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Acciones Mobile / Tablet (< 1024px) */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              aria-label={`${lang.toUpperCase()} — ${lang === 'es' ? ui.toggleToEnglish : ui.toggleToSpanish}`}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-gridline bg-white px-2.5 font-mono text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? ui.closeMenu : ui.openMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-movil"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-gridline bg-white text-obsidian transition-colors hover:bg-stone"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div
          id="menu-movil"
          className="border-t border-gridline bg-paper px-4 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center justify-between border-b border-gridline/70 px-2 text-sm font-medium text-obsidian transition-colors hover:bg-white"
              >
                <span>{link.name}</span>
                {link.count ? (
                  <span className="font-mono text-xs text-petrol">({link.count})</span>
                ) : null}
              </a>
            ))}

            <div className="grid grid-cols-1 gap-2.5 pt-4 sm:grid-cols-2">
              <a
                href="#contacto"
                onClick={() => {
                  track('cta_click', { location: 'nav_mobile', target: 'contact' });
                  setMobileMenuOpen(false);
                }}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-petrol px-4 py-2.5 text-xs font-semibold text-paper transition-colors hover:bg-petrol-dark"
              >
                <span>{t.contact}</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => {
                  downloadCv(lang);
                  setMobileMenuOpen(false);
                }}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-obsidian/25 bg-white px-4 py-2.5 text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>{t.downloadCv}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
