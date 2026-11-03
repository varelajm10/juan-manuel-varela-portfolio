import React, { useState, useEffect } from 'react';
import {
  Download,
  Menu,
  X,
  Linkedin,
  Github,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';

export default function Navbar({ lang, setLang, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = content[lang].nav;
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: '#sobre-mi' },
    { name: t.projects, href: '#proyectos' },
    { name: t.skills, href: '#habilidades' },
    { name: t.experience, href: '#trayectoria' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-3 shadow-xs'
          : 'bg-white/50 dark:bg-zinc-950/40 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nombre */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white dark:bg-zinc-800 dark:border dark:border-zinc-700 flex items-center justify-center font-mono font-bold text-sm tracking-tight transition-colors">
              JV
            </div>
            <div>
              <div className="font-semibold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                {personalInfo.role[lang]}
              </div>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-white dark:hover:bg-zinc-800 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-600 dark:text-sky-400 hover:bg-white dark:hover:bg-zinc-800 transition-all"
            >
              {t.contact}
            </a>
          </nav>

          {/* Acciones: Switch Idioma + Switch Tema + CV */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Switch Idioma ES / EN */}
            <div className="flex items-center p-0.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <button
                type="button"
                onClick={() => setLang('es')}
                aria-label="ES - Cambiar idioma a Español"
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="EN - Switch language to English"
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Switch Dark / Light Mode */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-600" />
              )}
            </button>

            {/* Redes */}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {/* Descarga de CV en el idioma actual */}
            <a
              href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
              download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          {/* Botones Mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              aria-label={lang === 'es' ? 'Cambiar idioma a Inglés' : 'Switch to Spanish'}
              className="px-2.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200"
            >
              {lang.toUpperCase()}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-5 py-4 space-y-3 mt-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-600 dark:text-sky-400"
            >
              {t.contact}
            </a>
          </div>
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
              download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 text-xs font-semibold"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
