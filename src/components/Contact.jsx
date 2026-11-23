import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { downloadCv } from '../lib/downloadCv';
import { track } from '../lib/track';

export default function Contact({ lang, contactSubject = '', onClearSubject }) {
  const t = content[lang].contact;
  const ui = content[lang].ui;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: contactSubject,
    message: '',
  });

  useEffect(() => {
    if (contactSubject) {
      setFormData((prev) => ({ ...prev, subject: contactSubject }));
    }
  }, [contactSubject]);

  const [formStarted] = useState(() => Date.now());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [phase, setPhase] = useState('idle');
  const sendingRef = useRef(false);

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    t.whatsappPrefill
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const updateField = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
    setPhase((current) => (current === 'sending' ? current : 'idle'));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sendingRef.current) return;

    sendingRef.current = true;
    setPhase('sending');

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      company_website: companyWebsite,
      form_started: formStarted,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        setPhase('error');
        return;
      }

      setPhase('success');
      track('form_submit_success', { location: 'contact' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCompanyWebsite('');
      if (onClearSubject) onClearSubject();
    } catch {
      setPhase('error');
    } finally {
      sendingRef.current = false;
    }
  };

  return (
    <section id="contacto" className="scroll-mt-20 border-b border-gridline bg-white">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Canales Directos */}
          <div className="flex flex-col justify-between gap-8 border-b border-gridline px-4 py-12 sm:px-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-petrol">
                {t.tag}
              </p>
              <h2 className="font-display text-[2.2rem] font-normal leading-[1.05] tracking-[-0.02em] text-obsidian sm:text-[2.55rem]">
                {t.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-body sm:text-base">
                {t.subtitle}
              </p>
            </div>

            <div className="space-y-2.5">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('contact_whatsapp', { location: 'contact' })}
                className="group flex min-h-[60px] items-center justify-between border border-petrol-border bg-petrol-tint/65 p-4 transition-colors hover:bg-petrol-tint"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-petrol text-paper">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-petrol">
                      {t.whatsappTitle}
                    </div>
                    <div className="text-sm font-semibold text-obsidian">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-petrol group-hover:underline">
                  {t.whatsappBtn}
                </span>
              </a>

              {/* Email + Copiar */}
              <div className="flex min-h-[60px] items-center justify-between border border-gridline bg-paper p-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex flex-1 items-center gap-3.5 min-w-0"
                  onClick={() => track('contact_email', { location: 'contact' })}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-gridline bg-white text-obsidian">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs text-ink-muted">{t.emailTitle}</div>
                    <div className="truncate text-sm font-semibold text-obsidian group-hover:text-petrol">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={ui.copyEmailAddress}
                  title={ui.copyEmail}
                  className="inline-flex min-h-[40px] min-w-[40px] shrink-0 items-center justify-center gap-1.5 border border-gridline bg-white px-2.5 font-mono text-xs text-ink-body transition-colors hover:border-obsidian hover:text-obsidian"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-petrol" aria-hidden="true" />
                      <span className="text-petrol">{t.copiedEmail}</span>
                    </>
                  ) : (
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* LinkedIn y GitHub */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[48px] items-center justify-between border border-gridline bg-white px-4 py-3 text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-petrol" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                  </a>
                )}

                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[48px] items-center justify-between border border-gridline bg-white px-4 py-3 text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4 text-obsidian" aria-hidden="true" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Descargar CV */}
              <button
                type="button"
                onClick={() => downloadCv(lang)}
                className="flex min-h-[48px] w-full items-center justify-between border border-obsidian/25 bg-white px-4 py-3 text-left text-xs font-semibold text-obsidian transition-colors hover:bg-stone"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Download className="h-4 w-4 text-petrol" aria-hidden="true" />
                  <span>{content[lang].nav.downloadCv}</span>
                </span>
                <span className="font-mono text-xs text-petrol">PDF</span>
              </button>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-paper/65 px-4 py-12 sm:px-6 lg:col-span-7 lg:p-10">
            <h3 className="text-lg font-semibold text-obsidian">{t.formTitle}</h3>
            <p className="mt-1 mb-6 text-xs text-ink-muted sm:text-sm">{t.formSubtitle}</p>

            <form onSubmit={handleSubmit} className="relative space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-semibold text-obsidian"
                  >
                    {t.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={80}
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => updateField({ name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="min-h-[44px] w-full border border-gridline bg-white px-3.5 py-2.5 text-sm text-obsidian placeholder:text-ink-muted/70 transition-colors focus:border-petrol focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-semibold text-obsidian"
                  >
                    {t.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => updateField({ email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="min-h-[44px] w-full border border-gridline bg-white px-3.5 py-2.5 text-sm text-obsidian placeholder:text-ink-muted/70 transition-colors focus:border-petrol focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-xs font-semibold text-obsidian"
                >
                  {t.subjectLabel}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  maxLength={120}
                  value={formData.subject}
                  onChange={(e) => updateField({ subject: e.target.value })}
                  placeholder={t.subjectPlaceholder}
                  className="min-h-[44px] w-full border border-gridline bg-white px-3.5 py-2.5 text-sm text-obsidian placeholder:text-ink-muted/70 transition-colors focus:border-petrol focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-semibold text-obsidian"
                >
                  {t.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={4000}
                  value={formData.message}
                  onChange={(e) => updateField({ message: e.target.value })}
                  placeholder={t.messagePlaceholder}
                  className="w-full resize-none border border-gridline bg-white px-3.5 py-2.5 text-sm text-obsidian placeholder:text-ink-muted/70 transition-colors focus:border-petrol focus:outline-none"
                />
              </div>

              {/* Honeypot anti-spam */}
              <div
                aria-hidden="true"
                className="absolute m-0 h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
              >
                <label htmlFor="contact-company-website">Website</label>
                <input
                  id="contact-company-website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={companyWebsite}
                  onChange={(e) => setCompanyWebsite(e.target.value)}
                />
              </div>

              <div aria-live="polite">
                {phase === 'success' && (
                  <div className="flex items-center gap-2 border border-sage-border bg-sage-tint p-3.5 text-xs font-medium text-sage">
                    <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{t.statusAccepted}</span>
                  </div>
                )}
                {phase === 'error' && (
                  <div className="border border-brass-border bg-brass-tint p-3.5 text-xs font-medium text-brass">
                    {t.statusError}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={phase === 'sending'}
                aria-busy={phase === 'sending'}
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-petrol px-5 py-3 text-xs font-semibold tracking-wide text-paper transition-colors hover:bg-petrol-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span>{phase === 'sending' ? t.sending : t.sendBtn}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
