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
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({ submitted: false, message: '' });

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    'Hola Juan Manuel, vi tu portfolio y me gustaría conversar sobre una oportunidad en finanzas y automatización.'
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
      message: 'Abriendo tu correo para enviar el mensaje...',
    });

    window.open(`mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`, '_self');

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ submitted: false, message: '' });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-24 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Canales Directos */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contacto Directo</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Hablemos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Si en tu equipo están perdiendo horas con planillas manuales, querés optimizar cobranzas o tenés una oportunidad laboral para un perfil de finanzas y código, escribime directamente.
            </p>

            <div className="mt-8 space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-emerald-900/60 bg-emerald-950/30 hover:border-emerald-700/60 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-emerald-400 font-medium">WhatsApp Directo</div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 group-hover:underline">
                  Chatear →
                </span>
              </a>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 group flex-1"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 text-zinc-400 flex items-center justify-center group-hover:text-zinc-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">Correo Electrónico</div>
                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-500 hover:text-zinc-200"
                  title="Copiar email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-zinc-400 flex items-center justify-center group-hover:text-sky-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500">LinkedIn</div>
                  <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    linkedin.com/in/juan-m-varela1984
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-zinc-400 flex items-center justify-center group-hover:text-zinc-200">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-500">GitHub</div>
                  <div className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                    github.com/varelajm10
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-zinc-100 mb-1">
                Enviar mensaje
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Completá los datos y te respondo a la brevedad.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@empresa.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Asunto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Motivo de contacto"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contame brevemente sobre tu equipo, circuito a mejorar o la posición..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 text-sm focus:outline-none focus:border-zinc-600 resize-none"
                  />
                </div>

                {status.submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-zinc-100 hover:bg-white text-zinc-950 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
