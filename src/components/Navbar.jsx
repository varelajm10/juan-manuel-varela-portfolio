import React, { useState, useEffect } from 'react';
import {
  Download,
  Eye,
  Menu,
  X,
  Share2,
  Check,
  Globe,
} from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';

export default function Navbar({ lang, setLang, onOpenCvModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    const url = window.location.origin;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const navLinks = [
    { name: t.impact, href: '#impacto' },
    { name: t.projects, href: '#proyectos' },
    { name: t.skills, href: '#habilidades' },
    { name: t.experience, href: '#trayectoria' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-3'
          : 'bg-white/40 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Marca */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-zinc-950 to-zinc-700 text-white flex items-center justify-center font-mono font-bold text-sm tracking-tight shadow-sm group-hover:from-sky-600 group-hover:to-indigo-600 transition-all">
              JV
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base tracking-tight text-zinc-950 flex items-center gap-1.5">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 -mt-0.5">
                Finance Ops · Automation · Analytics
              </div>
            </div>
          </a>

          {/* Navegación Desktop Tipo Pill */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-100/90 border border-zinc-200/80 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-white hover:shadow-xs transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-700 hover:text-sky-800 hover:bg-white transition-all"
            >
              {t.contact}
            </a>
          </nav>

          {/* Acciones: Idioma (ES / EN), Compartir y CV */}
          <div className="hidden md:flex items-center gap-2">
            {/* Selector de Idioma */}
            <div className="flex items-center p-0.5 rounded-xl border border-zinc-200 bg-white">
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'es'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Botón Compartir Perfil */}
            <button
              type="button"
              onClick={handleShare}
              title={t.shareProfile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-all shadow-xs"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{t.shareProfile}</span>
                </>
              )}
            </button>

            {/* Ver CV Online Modal */}
            <button
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-50 transition-all shadow-xs"
            >
              <Eye className="w-3.5 h-3.5 text-sky-600" />
              <span>{t.viewCv}</span>
            </button>

            {/* Descargar CV PDF */}
            <a
              href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
              download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-zinc-950 hover:bg-zinc-800 shadow-sm transition-all group"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          {/* Botones Mobile: Idioma + Menú */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="px-2.5 py-1.5 rounded-xl border border-zinc-200 bg-white text-xs font-bold text-zinc-800 flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-sky-600" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-200 bg-white text-zinc-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl px-5 py-4 space-y-3 mt-3 animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-700 hover:bg-sky-50"
            >
              {t.contact}
            </a>
          </div>
          <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
            <button
              onClick={() => {
                handleShare();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-zinc-200 text-xs font-semibold text-zinc-800"
            >
              <Share2 className="w-4 h-4 text-sky-600" />
              <span>{t.shareProfile}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-800"
            >
              <Eye className="w-4 h-4 text-sky-600" />
              <span>{t.viewCv}</span>
            </button>
            <a
              href={lang === 'es' ? personalInfo.cvUrl : personalInfo.cvUrlEn}
              download={lang === 'es' ? personalInfo.cvFileName : personalInfo.cvFileNameEn}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-950 text-xs font-semibold text-white"
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
