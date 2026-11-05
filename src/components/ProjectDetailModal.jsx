import React, { useEffect, useRef } from 'react';
import { X, Layers, CheckCircle2, ArrowRight, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';

export default function ProjectDetailModal({ isOpen, onClose, project, lang = 'es', onSelectDemo }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Manejo de ESC, Focus Trap y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    // Bloqueo de scroll del body
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Foco automático en el botón cerrar
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const t = content[lang].projects;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/75 backdrop-blur-xs motion-safe:transition-opacity motion-safe:duration-200"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden motion-safe:animate-fade-in"
      >
        {/* Cabecera Accesible */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300">
                <Layers className="w-3 h-3 text-sky-700 dark:text-sky-400" />
                <span>{project.category}</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                <span>
                  {project.statusLabel
                    ? project.statusLabel
                    : project.isPrivate
                      ? t.privateProject
                      : t.codeAvailable}
                </span>
              </span>
            </div>
            <h2
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 leading-snug"
            >
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.closeDialog}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-sky-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido Estructurado: Problema -> Solución -> Stack -> Rol -> Impacto -> Estado */}
        <div
          tabIndex={0}
          role="region"
          aria-label={t.scrollDetails}
          className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-zinc-700 dark:text-zinc-300 focus-visible:outline-none"
        >
          {project.image && project.imageRole === 'screenshot' && (
            <img
              src={project.image}
              alt={project.imageAlt || ''}
              width="1024"
              height="454"
              className="w-full rounded-xl border border-zinc-200 bg-white dark:border-zinc-800"
            />
          )}

          {project.image && project.imageRole === 'logo' && (
            <div className="rounded-xl border border-zinc-200 bg-white px-6 py-5 dark:border-zinc-800">
              <img
                src={project.image}
                alt={project.imageAlt || ''}
                width="1024"
                height="384"
                className={project.logoSize === 'lg' ? 'mx-auto h-24 w-auto max-w-full object-contain sm:h-28' : 'mx-auto h-16 w-auto max-w-full object-contain sm:h-20'}
              />
            </div>
          )}

          {/* 1. Problema de Negocio */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              {t.modalProblem}
            </h3>
            <p className="leading-relaxed bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
              {project.problem}
            </p>
          </div>

          {/* 2. Solución Técnica */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
              {t.modalSolution}
            </h3>
            <p className="leading-relaxed bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
              {project.solution}
            </p>
          </div>

          {project.features?.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                {t.modalFeatures}
              </h3>
              <ul className="space-y-2 leading-relaxed bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
                {project.features.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. Stack Tecnológico */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
              {t.modalStack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Mi Rol */}
          {project.role && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                {t.modalRole}
              </h3>
              <p className="leading-relaxed bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
                {project.role}
              </p>
            </div>
          )}

          {project.engineering?.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2">
                {t.engineeringLabel}
              </h3>
              <ul className="space-y-2 leading-relaxed bg-zinc-50 dark:bg-zinc-950/40 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80">
                {project.engineering.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.isPrivate && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {project.privacyNote || t.privacyNote}
            </p>
          )}

          {project.impactMetric && (
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-1.5">
                {t.modalImpact}
              </h3>
              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-semibold">{project.impactMetric}</span>
              </div>
            </div>
          )}

          {/* 6. Estado */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-600 dark:text-zinc-400">{t.modalStatus}</span>
            <span className={`px-2.5 py-1 rounded-md font-bold border ${
              project.isPrivate
                ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
                : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
            }`}>
              {project.statusLabel
                ? project.statusLabel
                : project.isPrivate
                  ? t.privateDemo
                  : t.publicCode}
            </span>
          </div>
        </div>

        {/* Footer con CTA funcional (scroll a contacto) */}
        <div className="p-4 sm:p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-600 dark:text-zinc-400 text-center sm:text-left">
            {project.consultLabel ? t.consultPrompt : t.demoPrompt}
          </span>

          <a
            href="#contacto"
            onClick={(e) => {
              onClose();
              if (onSelectDemo) {
                e.preventDefault();
                onSelectDemo(project.title, project.contactSubject);
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white shadow-xs transition-colors"
          >
            <span>{project.consultLabel || t.requestDemo}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          {project.whatsappText && (
            <a
              href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(project.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

