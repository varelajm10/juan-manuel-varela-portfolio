import React, { useEffect, useRef } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Github,
  ExternalLink,
} from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { track } from '../lib/track';
import ProjectVisual from './ProjectVisual';

const STATUS_BADGE_MAP = {
  'portal-rrhh': 'bg-petrol-tint text-petrol border-petrol-border',
  gladys: 'bg-petrol-tint text-petrol border-petrol-border',
  ascensort: 'bg-petrol-tint text-petrol border-petrol-border',
  cubo: 'bg-brass-tint text-brass border-brass-border',
  'cubo-inspecta': 'bg-brass-tint text-brass border-brass-border',
};

export default function ProjectDetailModal({
  isOpen,
  onClose,
  project,
  lang = 'es',
  onSelectDemo,
}) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Manejo de ESC, Focus Trap y bloqueo de scroll del body
  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
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
  const badgeClasses =
    STATUS_BADGE_MAP[project.id] || 'bg-sage-tint text-sage border-sage-border';
  const repoUrl = project.repoUrl || project.githubUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex justify-end bg-obsidian/60 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-full w-full max-w-2xl flex-col border-l border-gridline bg-paper shadow-2xl"
      >
        {/* Cabecera Dossier */}
        <div className="flex items-start justify-between gap-4 border-b border-gridline bg-white px-5 py-5 sm:px-7">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center border px-2.5 py-0.5 font-mono text-xs font-semibold ${badgeClasses}`}
              >
                {project.statusLabel
                  ? project.statusLabel
                  : project.isPrivate
                    ? t.privateProject
                    : t.codeAvailable}
              </span>
              <span className="font-mono text-xs text-ink-muted">{project.category}</span>
            </div>
            <h2
              id="modal-project-title"
              className="font-display text-2xl font-normal leading-tight text-obsidian sm:text-3xl"
            >
              {project.title}
            </h2>
            {project.client && (
              <p className="mt-1 font-mono text-xs text-ink-muted">{project.client}</p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.closeDialog}
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center border border-gridline bg-paper text-obsidian transition-colors hover:bg-obsidian hover:text-paper"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Cuerpo desplazable */}
        <div
          tabIndex={0}
          role="region"
          aria-label={t.scrollDetails}
          className="flex-1 space-y-6 overflow-y-auto px-5 py-6 text-sm text-ink-body sm:px-7"
        >
          <ProjectVisual project={project} lang={lang} compact />

          {/* 1. Problema */}
          <div>
            <h3 className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
              {t.modalProblem}
            </h3>
            <p className="border border-gridline bg-white p-4 leading-relaxed text-obsidian">
              {project.problem}
            </p>
          </div>

          {/* 2. Solución */}
          <div>
            <h3 className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
              {t.modalSolution}
            </h3>
            <p className="border border-gridline bg-white p-4 leading-relaxed text-obsidian">
              {project.solution}
            </p>
          </div>

          {/* Qué hace el sistema (features) */}
          {project.features?.length > 0 && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
                {t.modalFeatures}
              </h3>
              <ul className="space-y-2 border border-gridline bg-white p-4 leading-relaxed text-obsidian">
                {project.features.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. Stack Tecnológico */}
          <div>
            <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
              {t.modalStack}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gridline bg-white px-2.5 py-1 font-mono text-xs text-obsidian"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Mi Rol */}
          {project.role && (
            <div>
              <h3 className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
                {t.modalRole}
              </h3>
              <p className="border border-gridline bg-white p-4 leading-relaxed text-obsidian">
                {project.role}
              </p>
            </div>
          )}

          {/* Decisiones técnicas verificables */}
          {project.engineering?.length > 0 && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
                {t.engineeringLabel}
              </h3>
              <ul className="space-y-2 border border-gridline bg-white p-4 text-xs leading-relaxed text-obsidian">
                {project.engineering.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="font-mono text-petrol" aria-hidden="true">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Métricas del prototipo */}
          {project.flagshipMetrics?.length > 0 && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
                {t.flagshipMetricsTitle}
              </h3>
              <div className="grid grid-cols-1 gap-px border border-gridline bg-gridline sm:grid-cols-2">
                {project.flagshipMetrics.map((metric) => (
                  <div key={metric.label} className="bg-white p-4">
                    <span className="block font-mono text-sm font-semibold text-petrol">
                      {metric.value}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-obsidian">
                      {metric.label}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-ink-body">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pipeline */}
          {project.pipeline?.length > 0 && (
            <div>
              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-ink-muted">
                {t.flagshipPipelineTitle}
              </h3>
              <ol className="grid grid-cols-2 gap-px border border-gridline bg-gridline">
                {project.pipeline.map((step) => (
                  <li key={step.step} className="bg-white p-3.5">
                    <span className="block font-mono text-xs font-semibold text-petrol">
                      {step.step}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-obsidian">
                      {step.name}
                    </span>
                    <span className="block text-xs text-ink-muted">{step.desc}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Verificado */}
          {project.impactMetric && project.cardProof !== false && (
            <div>
              <h3 className="mb-1.5 font-mono text-xs font-semibold uppercase tracking-[0.11em] text-petrol">
                {t.modalImpact}
              </h3>
              <div className="flex items-start gap-2.5 border border-petrol-border bg-petrol-tint p-4 text-obsidian">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-petrol" aria-hidden="true" />
                <span className="text-xs font-medium leading-relaxed sm:text-sm">
                  {project.impactMetric}
                </span>
              </div>
            </div>
          )}

          {/* Nota de privacidad */}
          {project.isPrivate && (
            <p className="border-l-2 border-gridline pl-3 text-xs leading-relaxed text-ink-muted">
              {project.privacyNote || t.privacyNote}
            </p>
          )}

          {/* Enlaces a repositorios si existen */}
          {repoUrl && (
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 border border-gridline bg-white px-3.5 py-2 text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{t.btnViewRepo}</span>
                <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
              </a>
              {project.extraRepoUrl && (
                <a
                  href={project.extraRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 border border-gridline bg-white px-3.5 py-2 text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{project.extraRepoLabel}</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Footer Dossier con CTA */}
        <div className="flex flex-col items-stretch justify-between gap-3 border-t border-gridline bg-white px-5 py-4 sm:flex-row sm:items-center sm:px-7">
          <span className="text-xs text-ink-muted">
            {project.consultLabel ? t.consultPrompt : t.demoPrompt}
          </span>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.whatsappText && (
              <a
                href={`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
                  project.whatsappText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track('contact_whatsapp', { location: 'project_modal', project: project.id })
                }
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 border border-sage-border bg-sage-tint px-3.5 py-2 text-xs font-semibold text-sage transition-colors hover:bg-sage hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            )}

            <a
              href="#contacto"
              onClick={(e) => {
                track('cta_click', {
                  location: 'project_modal',
                  project: project.id,
                  target: 'contact',
                });
                onClose();
                if (onSelectDemo) {
                  e.preventDefault();
                  onSelectDemo(project.title, project.contactSubject);
                }
              }}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 bg-petrol px-5 py-2.5 text-xs font-semibold text-paper transition-colors hover:bg-petrol-dark sm:flex-initial"
            >
              <span>{project.consultLabel || t.requestDemo}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
