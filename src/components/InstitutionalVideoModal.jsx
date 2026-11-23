import React, { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { track } from '../lib/track';

const COPY = {
  es: {
    eyebrow: 'Presentación institucional · 0:10',
    title: 'Juan Manuel Varela — JMV',
    closeAria: 'Cerrar reproductor de video',
    playAria: 'Reproducir video institucional de JMV',
    playLabel: 'Reproducir presentación',
    disclosure: 'Presentación institucional realizada con avatar digital.',
    meta: 'HD 16:9 · Subtítulos en español',
    fallback: 'Tu navegador no soporta la reproducción de video HTML5.',
  },
  en: {
    eyebrow: 'Institutional overview · Spanish · 0:10',
    title: 'Juan Manuel Varela — JMV',
    closeAria: 'Close video player',
    playAria: 'Play JMV institutional video in Spanish',
    playLabel: 'Play overview (Spanish)',
    disclosure: 'Institutional presentation in Spanish, created with a digital avatar.',
    meta: 'HD 16:9 · Spanish captions',
    fallback: 'Your browser does not support HTML5 video playback.',
  },
};

export default function InstitutionalVideoModal({ isOpen, onClose, lang = 'es' }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const t = COPY[lang] || COPY.es;

  const stopAndClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 0;
      } catch {
        // Ignora si el recurso aún no inició la carga
      }
    }
    setHasStarted(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        stopAndClose();
        return;
      }

      if (event.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], video, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartPlayback = () => {
    setHasStarted(true);
    track('video_play', { location: 'hero_modal', lang });
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Si el navegador bloquea la reproducción programática, los controles nativos quedan visibles
      });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="institutional-video-title"
      aria-describedby="institutional-video-disclosure"
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/80 p-3 backdrop-blur-[2px] sm:p-6"
      onClick={stopAndClose}
    >
      <div
        ref={modalRef}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-4xl overflow-hidden border border-gridline bg-paper shadow-2xl"
      >
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between gap-4 border-b border-gridline bg-white px-4 py-3.5 sm:px-6">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.11em] text-petrol">
              {t.eyebrow}
            </p>
            <h2
              id="institutional-video-title"
              className="truncate font-display text-xl font-normal leading-tight text-obsidian sm:text-2xl"
            >
              {t.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={stopAndClose}
            aria-label={t.closeAria}
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center border border-gridline bg-paper text-obsidian transition-colors hover:bg-obsidian hover:text-paper"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Reproductor 16:9 */}
        <div className="relative aspect-video w-full bg-obsidian">
          <video
            ref={videoRef}
            controls={hasStarted}
            playsInline
            preload="none"
            poster="/media/jmv-institucional-poster.jpg"
            onPlay={() => setHasStarted(true)}
            onEnded={() => setHasStarted(false)}
            className="h-full w-full object-contain"
          >
            <source src="/media/jmv-institucional.mp4" type="video/mp4" />
            <track
              kind="captions"
              src="/media/jmv-institucional-es.vtt"
              srcLang="es"
              label="Español"
              default
            />
            {t.fallback}
          </video>

          {!hasStarted && (
            <button
              type="button"
              onClick={handleStartPlayback}
              aria-label={t.playAria}
              className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-obsidian/55 via-transparent to-transparent pb-6 transition-colors hover:from-obsidian/65 sm:pb-8"
            >
              <span className="inline-flex min-h-[48px] items-center gap-2.5 border border-white/30 bg-obsidian/90 px-5 py-3 text-xs font-semibold tracking-wide text-paper shadow-lg transition-colors group-hover:bg-petrol">
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                <span>{t.playLabel}</span>
              </span>
            </button>
          )}
        </div>

        {/* Pie sobrio de transparencia */}
        <div className="flex flex-col justify-between gap-1 border-t border-gridline bg-white px-4 py-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:px-6">
          <p id="institutional-video-disclosure">{t.disclosure}</p>
          <span className="shrink-0 font-mono text-[11px] text-ink-muted">{t.meta}</span>
        </div>
      </div>
    </div>
  );
}
