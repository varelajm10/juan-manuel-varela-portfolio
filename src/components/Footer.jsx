import React from 'react';
import {
  Linkedin,
  Github,
  Mail,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center font-mono font-bold text-xs">
              JV
            </div>
            <div>
              <div className="font-bold text-sm text-zinc-900">
                {personalInfo.name}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Finance Ops · Automation · Software
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-500 hover:text-sky-600 hover:bg-zinc-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-zinc-500 hover:text-emerald-600 hover:bg-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 text-xs font-mono text-zinc-600 hover:bg-zinc-50 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div>
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span>Diseño Ejecutivo Moderno</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Optimizado para Vercel</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
