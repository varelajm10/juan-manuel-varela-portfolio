import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  MessageCircle,
} from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';

export default function Contact({ lang }) {
  const t = content[lang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({ submitted: false, message: '' });

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    lang === 'es'
      ? 'Hola Juan Manuel, vi tu portfolio online y me gustaría conversar sobre una oportunidad.'
      : 'Hi Juan Manuel, I viewed your portfolio and would like to connect regarding an opportunity.'
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      formData.subject || `Contacto desde Portfolio - ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );

    setStatus({
      submitted: true,
      message: '¡Abriendo tu cliente de correo para enviar el mensaje...',
    });

    window.open(`mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`, '_self');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ submitted: false, message: '' });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-24 border-t border-zinc-200/80 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Canales Directos */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-700 font-bold mb-2 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/70">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              {t.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              {/* MEJORA 1: Tarjeta Destacada de WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-300 hover:border-emerald-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <MessageCircle className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                      {t.whatsappCardTitle}
                    </div>
                    <div className="text-sm font-bold text-zinc-950 group-hover:text-emerald-700">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:underline">
                  {t.whatsappAction} →
                </span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-zinc-200 hover:border-sky-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">{t.directEmail}</div>
                    <div className="text-sm font-bold text-zinc-900 group-hover:text-sky-700">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyEmail();
                  }}
                  className="p-2 text-zinc-400 hover:text-zinc-900"
                  title="Copiar"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-sky-300 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">{t.directLinkedin}</div>
                  <div className="text-sm font-bold text-zinc-900 group-hover:text-sky-700">
                    LinkedIn / Juan Manuel Varela
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">{t.directGithub}</div>
                  <div className="text-sm font-bold text-zinc-900 group-hover:text-zinc-600">
                    GitHub / varelajm10
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 sm:p-9 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-950 mb-1">
                {t.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mb-6">
                {t.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    {t.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                  />
                </div>

                {status.submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-zinc-950 hover:bg-zinc-800 text-white shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendBtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
