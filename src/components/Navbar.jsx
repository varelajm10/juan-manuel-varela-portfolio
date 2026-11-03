import React, { useState, useEffect } from 'react';
import {
  Download,
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  FileText,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Simulador', href: '#calculadora-roi' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Trayectoria', href: '#trayectoria' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-md'
          : 'bg-zinc-950/40 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Nombre */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 flex items-center justify-center font-mono font-bold text-sm tracking-tight group-hover:border-zinc-500 transition-colors">
              JV
            </div>
            <div>
              <div className="font-semibold text-sm sm:text-base tracking-tight text-zinc-100 flex items-center gap-2">
                <span>{personalInfo.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-[11px] font-mono text-zinc-400">
                Finanzas Corporativas · Python & Datos
              </div>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-900/90 border border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 hover:text-sky-300 hover:bg-zinc-800 transition-all"
            >
              Contacto
            </a>
          </nav>

          {/* Acciones directas: Redes y Descarga de CV */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 hover:bg-white text-zinc-950 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV (PDF)</span>
            </a>
          </div>

          {/* Botón Mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-xl px-5 py-4 space-y-3 mt-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-sky-400 hover:bg-zinc-900"
            >
              Contacto
            </a>
          </div>
          <div className="pt-3 border-t border-zinc-800">
            <a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFileName}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 text-xs font-semibold text-zinc-950"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
