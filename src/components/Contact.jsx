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
  MessageSquare,
  MessageCircle,
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

  const whatsappMsg = t.whatsappPrefill;

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    whatsappMsg
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
    <section id="contacto" className="scroll-mt-24 py-24 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Canales Directos */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 font-semibold mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {t.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('contact_whatsapp', { location: 'contact' })}
                className="flex items-center justify-between p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/30 hover:border-emerald-400 dark:hover:border-emerald-700/60 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-900/60 text-white dark:text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-800 dark:text-emerald-400 font-medium">{t.whatsappTitle}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:underline">
                  {t.whatsappBtn}
                </span>
              </a>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 group flex-1"
                  onClick={() => track('contact_email', { location: 'contact' })}
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 flex items-center justify-center group-hover:text-zinc-950 dark:group-hover:text-zinc-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">{t.emailTitle}</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-sky-700 dark:group-hover:text-white">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={ui.copyEmailAddress}
                  className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                  title={ui.copyEmail}
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 flex items-center justify-center group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">LinkedIn</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-sky-600 dark:group-hover:text-white">
                      {personalInfo.name}
                    </div>
                  </div>
                </a>
              )}

              {/* GitHub */}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 flex items-center justify-center group-hover:text-zinc-950 dark:group-hover:text-zinc-200">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">GitHub</div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white">
                      github.com/varelajm10
                    </div>
                  </div>
                </a>
              )}

              <button
                type="button"
                onClick={() => downloadCv(lang)}
                className="flex w-full items-center gap-3.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-400 flex items-center justify-center">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">CV</div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200">
                    {content[lang].nav.downloadCv}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                {t.formTitle}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="relative space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:border-zinc-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    maxLength={4000}
                    value={formData.message}
                    onChange={(e) => updateField({ message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:border-zinc-500 resize-none"
                  />
                </div>

                <div aria-hidden="true" className="absolute m-0 h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
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
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{t.statusAccepted}</span>
                    </div>
                  )}
                  {phase === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/70 text-rose-800 dark:text-rose-200 text-xs">
                      {t.statusError}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={phase === 'sending'}
                  aria-busy={phase === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-xs disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{phase === 'sending' ? t.sending : t.sendBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
