import React, { useState, useRef } from 'react';
import { ArrowRight, Mail, MessageCircle, Play } from 'lucide-react';
import { personalInfo, content } from '../data/portfolioData';
import { track } from '../lib/track';
import InstitutionalVideoModal from './InstitutionalVideoModal';

const HERO_BLUEPRINTS = {
  es: {
    prompt: 'Mirá 3 soluciones reales:',
    ariaTabs: 'Ejemplos de soluciones desarrolladas',
    portraitNote: '+10 años en créditos, cobranzas y operaciones (Saputo, DACAS, CNH, CCU).',
    proofs: [
      { value: '+10 años', label: 'En procesos empresariales desde 2014' },
      { value: 'En producción', label: 'CoopMora, SECSA, RB&LCA y Portal RRHH' },
      { value: '97,2 %', label: 'Conciliación verificada en extracto de prueba' },
    ],
    tabs: [
      {
        id: 'conciliacion',
        tabLabel: '01 Conciliación',
        status: 'Proyecto técnico verificable · Código público',
        title: 'Motor de Conciliación Bancaria',
        summary: '97,2 % del importe total de créditos conciliado automáticamente en extracto de prueba (11 tests con pytest).',
      },
      {
        id: 'cobranzas',
        tabLabel: '02 Cobranzas IA',
        status: 'Prototipo funcional · Código público',
        title: 'Agente de IA de Cobranzas & Scoring',
        summary: 'Scoring 0–100 explicable en 4 variables, guardrails anti-alucinación, 16 tests y fallback 100 % offline.',
      },
      {
        id: 'portal',
        tabLabel: '03 Portal RRHH',
        status: 'Implementación empresarial · En uso',
        title: 'Portal Comunidad — Intranet & RRHH',
        summary: 'Vacaciones con saldo visible, adelantos de sueldo, comunicados oficiales, credencial ART y mesa de ayuda IT.',
      },
    ],
  },
  en: {
    prompt: 'Explore 3 real solutions:',
    ariaTabs: 'Examples of real built solutions',
    portraitNote: '10+ years in credit, collections, and operations (Saputo, DACAS, CNH, CCU).',
    proofs: [
      { value: '+10 years', label: 'In business processes since 2014' },
      { value: 'In production', label: 'CoopMora, SECSA, RB&LCA, and HR Portal' },
      { value: '97.2%', label: 'Auto-reconciled on sample bank statement' },
    ],
    tabs: [
      {
        id: 'conciliacion',
        tabLabel: '01 Reconciliation',
        status: 'Verifiable technical project · Public code',
        title: 'Automated Bank Reconciliation Engine',
        summary: '97.2% of total credit amount automatically matched on a sample bank statement (11 pytest unit tests).',
      },
      {
        id: 'cobranzas',
        tabLabel: '02 Collections AI',
        status: 'Working prototype · Public code',
        title: 'AI Collections Agent & Risk Scoring',
        summary: 'Explainable 0–100 risk score across 4 variables, anti-hallucination guardrails, 16 tests, and 100% offline fallback.',
      },
      {
        id: 'portal',
        tabLabel: '03 HR Intranet',
        status: 'Business implementation · Live',
        title: 'Community Portal — HR Self-Service',
        summary: 'Leave requests with live balances, salary advances, announcements, ART credentials, and IT support desk.',
      },
    ],
  },
};

function BlueprintDiagram({ id, lang }) {
  const isEn = lang === 'en';

  if (id === 'conciliacion') {
    return (
      <svg
        viewBox="0 0 460 124"
        className="my-2 h-auto w-full"
        role="img"
        aria-label={isEn ? '5-rule bank reconciliation pipeline diagram' : 'Esquema de conciliación bancaria en 5 reglas'}
      >
        <rect x="4" y="12" width="128" height="98" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.9" />
        <text x="14" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#526067">
          {isEn ? '01 · INPUT' : '01 · ENTRADA'}
        </text>
        <text x="14" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#0E171B">
          {isEn ? 'Bank + ERP' : 'Extracto + ERP'}
        </text>
        <text x="14" y="68" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
          {isEn ? 'Incomplete refs' : 'Refs. incompletas'}
        </text>
        <text x="14" y="84" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
          {isEn ? 'Batched / partials' : 'Agrupados / FIFO'}
        </text>

        <line x1="132" y1="61" x2="162" y2="61" stroke="#0F4C54" strokeWidth="1.5" />
        <polygon points="162,57 168,61 162,65" fill="#0F4C54" />

        <rect x="168" y="12" width="132" height="98" fill="#0F4C54" />
        <text x="178" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#A7E3CE">
          {isEn ? '02 · 5 RULES' : '02 · 5 REGLAS'}
        </text>
        <text x="178" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#FFFFFF">
          {isEn ? 'Python Engine' : 'Motor Python'}
        </text>
        <text x="178" y="68" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#DCE7E5">
          {isEn ? 'Invoice -> Tax ID' : 'Factura -> CUIT'}
        </text>
        <text x="178" y="84" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#DCE7E5">
          RapidFuzz -&gt; FIFO
        </text>

        <line x1="300" y1="61" x2="330" y2="61" stroke="#0E171B" strokeWidth="1.5" />
        <polygon points="330,57 336,61 330,65" fill="#0E171B" />

        <rect x="336" y="12" width="120" height="98" fill="#FFFFFF" stroke="#0F4C54" strokeWidth="1.2" />
        <text x="346" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0F4C54">
          {isEn ? '03 · OUTPUT' : '03 · SALIDA'}
        </text>
        <text x="346" y="62" fontFamily="Instrument Serif, Georgia, serif" fontSize="28" fill="#0F4C54">
          {isEn ? '97.2%' : '97,2%'}
        </text>
        <text x="346" y="81" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#0E171B">
          {isEn ? 'Formatted Excel' : 'Excel semáforo'}
        </text>
        <text x="346" y="96" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#526067">
          {isEn ? 'Auditable close' : 'Cierre auditable'}
        </text>
      </svg>
    );
  }

  if (id === 'cobranzas') {
    return (
      <svg
        viewBox="0 0 460 124"
        className="my-2 h-auto w-full"
        role="img"
        aria-label={isEn ? 'AI collections scoring and guardrails pipeline' : 'Esquema de scoring y guardrails de cobranzas'}
      >
        <rect x="4" y="12" width="136" height="98" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.9" />
        <text x="14" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#526067">
          01 · SCORING 0–100
        </text>
        <text x="14" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#0E171B">
          {isEn ? '4 Weighted Factors' : '4 Variables Reales'}
        </text>
        <text x="14" y="68" fontFamily="JetBrains Mono, monospace" fontSize="8.8" fill="#435057">
          {isEn ? '40% Delay · 25% Bal.' : '40% Atraso · 25% Saldo'}
        </text>
        <text x="14" y="84" fontFamily="JetBrains Mono, monospace" fontSize="8.8" fill="#435057">
          {isEn ? '20% Hist · 15% Prom.' : '20% Hist · 15% Prom.'}
        </text>

        <line x1="140" y1="61" x2="166" y2="61" stroke="#0F4C54" strokeWidth="1.5" />
        <polygon points="166,57 172,61 166,65" fill="#0F4C54" />

        <rect x="172" y="12" width="136" height="98" fill="#0E171B" />
        <text x="182" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#A7E3CE">
          02 · GUARDRAILS
        </text>
        <text x="182" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#FFFFFF">
          {isEn ? 'Claude + Checks' : 'Claude + Control'}
        </text>
        <text x="182" y="68" fontFamily="JetBrains Mono, monospace" fontSize="8.8" fill="#DCE7E5">
          {isEn ? 'Validates amounts' : 'Valida importes'}
        </text>
        <text x="182" y="84" fontFamily="JetBrains Mono, monospace" fontSize="8.8" fill="#A7E3CE">
          {isEn ? '100% offline mode' : 'Fallback offline'}
        </text>

        <line x1="308" y1="61" x2="334" y2="61" stroke="#0F4C54" strokeWidth="1.5" />
        <polygon points="334,57 340,61 334,65" fill="#0F4C54" />

        <rect x="340" y="12" width="116" height="98" fill="#FFFFFF" stroke="#0F4C54" strokeWidth="1.2" />
        <text x="350" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0F4C54">
          {isEn ? '03 · ACTION' : '03 · ACCIÓN'}
        </text>
        <text x="350" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="600" fill="#0E171B">
          {isEn ? '4 Strategies' : '4 Estrategias'}
        </text>
        <text x="350" y="68" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
          WhatsApp / Email
        </text>
        <text x="350" y="85" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#3F6656">
          16 tests pytest
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 460 124"
      className="my-2 h-auto w-full"
      role="img"
      aria-label={isEn ? 'Community Portal HR self-service workflow' : 'Esquema de autogestión en Portal Comunidad'}
    >
      <rect x="4" y="12" width="136" height="98" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.9" />
      <text x="14" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#526067">
        {isEn ? 'BEFORE' : 'ANTES'}
      </text>
      <text x="14" y="50" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="600" fill="#0E171B">
        {isEn ? 'Scattered requests' : 'Trámites sueltos'}
      </text>
      <text x="14" y="68" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
        {isEn ? 'Emails & sheets' : 'Mails y planillas'}
      </text>
      <text x="14" y="84" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
        {isEn ? 'No visible balance' : 'Sin saldo visible'}
      </text>

      <line x1="140" y1="61" x2="168" y2="61" stroke="#0F4C54" strokeWidth="1.5" />
      <polygon points="168,57 174,61 168,65" fill="#0F4C54" />

      <rect x="174" y="12" width="282" height="98" fill="#FFFFFF" stroke="#0F4C54" strokeWidth="1.2" />
      <rect x="174" y="12" width="282" height="22" fill="#0F4C54" />
      <text x="184" y="27" fontFamily="JetBrains Mono, monospace" fontSize="8.8" fill="#A7E3CE">
        {isEn ? 'COMMUNITY PORTAL · REACT + TAILWIND' : 'PORTAL COMUNIDAD · REACT + TAILWIND'}
      </text>
      <rect x="186" y="43" width="122" height="25" fill="#F5F5F0" stroke="#DCE2DE" />
      <text x="194" y="59" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#0E171B">
        {isEn ? 'Leave & balances' : 'Licencias y saldos'}
      </text>
      <rect x="318" y="43" width="126" height="25" fill="#F5F5F0" stroke="#DCE2DE" />
      <text x="326" y="59" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#0E171B">
        {isEn ? 'Salary advances' : 'Adelantos de sueldo'}
      </text>
      <rect x="186" y="75" width="122" height="25" fill="#F5F5F0" stroke="#DCE2DE" />
      <text x="194" y="91" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#0E171B">
        {isEn ? 'ART credential' : 'Credencial ART'}
      </text>
      <rect x="318" y="75" width="126" height="25" fill="#E6F0EE" stroke="#B9D3D0" />
      <text x="326" y="91" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fontWeight="600" fill="#0F4C54">
        {isEn ? 'IT help desk' : 'Mesa de ayuda IT'}
      </text>
    </svg>
  );
}

function renderEditorialHeadline(headline, lang) {
  const accentPhrase = lang === 'en' ? 'digital tools.' : 'soluciones digitales.';
  const idx = headline.toLowerCase().indexOf(accentPhrase);
  if (idx === -1) return headline;

  const before = headline.slice(0, idx);
  const accent = headline.slice(idx, idx + accentPhrase.length);
  const after = headline.slice(idx + accentPhrase.length);

  return (
    <>
      {before}
      <span className="italic text-petrol">{accent}</span>
      {after}
    </>
  );
}

export default function Hero({ lang }) {
  const t = content[lang].hero;
  const bpData = HERO_BLUEPRINTS[lang] || HERO_BLUEPRINTS.es;
  const [activeTabId, setActiveTabId] = useState('conciliacion');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoTriggerRef = useRef(null);

  const activeTab = bpData.tabs.find((item) => item.id === activeTabId) || bpData.tabs[0];

  const videoButtonLabel =
    lang === 'en'
      ? 'Watch JMV overview (Spanish, < 1 min)'
      : 'Conocé JMV en menos de un minuto';

  const handleOpenVideo = () => {
    track('video_modal_open', { location: 'hero', lang });
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
    setTimeout(() => {
      videoTriggerRef.current?.focus();
    }, 30);
  };

  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(
    content[lang].contact.whatsappPrefill
  )}`;

  return (
    <section id="sobre-mi" className="border-b border-gridline bg-paper">
      <div className="mx-auto max-w-6xl border-gridline xl:border-x">
        {/* Etapa 1: Propuesta ejecutiva directa arriba del pliegue */}
        <div className="border-b border-gridline px-4 pt-8 pb-7 sm:px-6 sm:pt-9 sm:pb-8 lg:px-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.11em] text-petrol">
              {t.eyebrow}
            </p>
            <p className="hidden font-mono text-xs text-ink-muted sm:block">
              {personalInfo.location[lang]}
            </p>
          </div>

          <h1 className="max-w-4xl font-display text-[2.65rem] font-normal leading-[0.99] tracking-[-0.026em] text-obsidian sm:text-[3.75rem] lg:text-[4.35rem]">
            {renderEditorialHeadline(t.headline, lang)}
          </h1>

          <div className="mt-6 grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end">
            <div className="space-y-4 lg:col-span-7">
              <p className="max-w-2xl text-[15.5px] leading-[1.68] text-ink-body sm:text-base">
                {t.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-ink-body">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => track('contact_email', { location: 'hero' })}
                  className="inline-flex min-h-[36px] items-center gap-2 transition-colors hover:text-petrol"
                >
                  <Mail className="h-3.5 w-3.5 text-petrol" aria-hidden="true" />
                  <span>{personalInfo.email}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('contact_whatsapp', { location: 'hero' })}
                  className="inline-flex min-h-[36px] items-center gap-2 transition-colors hover:text-petrol"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-sage" aria-hidden="true" />
                  <span>
                    {t.ctaWhatsapp} · {personalInfo.phone}
                  </span>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                <a
                  href="#contacto"
                  onClick={() => track('cta_click', { location: 'hero', target: 'contact' })}
                  className="group inline-flex min-h-[44px] items-center justify-center gap-2 bg-petrol px-5 py-3 text-xs font-semibold tracking-wide text-paper transition-colors hover:bg-petrol-dark"
                >
                  <span>{t.ctaContact}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform motion-safe:group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#proyectos"
                  onClick={() => track('cta_click', { location: 'hero', target: 'projects' })}
                  className="inline-flex min-h-[44px] items-center justify-center border border-obsidian/25 bg-white px-5 py-3 text-xs font-semibold tracking-wide text-obsidian transition-colors hover:bg-stone"
                >
                  <span>{t.ctaProjects}</span>
                </a>
              </div>

              <button
                ref={videoTriggerRef}
                type="button"
                onClick={handleOpenVideo}
                aria-haspopup="dialog"
                aria-expanded={isVideoOpen}
                className="group inline-flex min-h-[40px] w-fit items-center gap-2 text-xs font-medium text-petrol transition-colors hover:text-obsidian"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center border border-petrol-border bg-petrol-tint text-petrol transition-colors group-hover:border-petrol group-hover:bg-petrol group-hover:text-paper">
                  <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                </span>
                <span className="underline decoration-petrol/35 underline-offset-4 group-hover:decoration-obsidian">
                  {videoButtonLabel}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Etapa 2: Escena Asimétrica 4 / 8 — Retrato Editorial Limpio + Plano Operativo Interactivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Retrato de galería (4 cols) */}
          <div className="flex flex-col justify-between border-b border-gridline bg-stone lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="flex-1 overflow-hidden bg-stone">
              <img
                src="/profile.jpg"
                alt="Juan Manuel Varela"
                width="1024"
                height="1024"
                fetchPriority="high"
                decoding="async"
                className="h-64 w-full object-cover object-top sm:h-72 lg:h-full lg:max-h-[325px]"
              />
            </div>
            <div className="bg-obsidian px-5 py-4 text-paper">
              <div className="text-xs font-semibold">{t.badge}</div>
              <p className="mt-1 font-mono text-xs leading-relaxed text-[#C6D5D9]">
                {bpData.portraitNote}
              </p>
            </div>
          </div>

          {/* Plano Operativo Interactivo (8 cols) */}
          <div className="flex flex-col justify-between bg-white lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gridline bg-paper/75 px-5 pt-3">
              <span className="pb-3 font-mono text-xs font-medium text-ink-muted">
                {bpData.prompt}
              </span>
              <div
                className="flex flex-wrap items-center gap-1 font-mono text-xs"
                role="tablist"
                aria-label={bpData.ariaTabs}
              >
                {bpData.tabs.map((tab) => {
                  const isSelected = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={`hero-tab-${tab.id}`}
                      aria-selected={isSelected}
                      aria-controls="hero-blueprint-panel"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`min-h-[40px] border-b-2 px-3 py-2 transition-colors ${
                        isSelected
                          ? 'border-petrol font-semibold text-obsidian'
                          : 'border-transparent text-ink-muted hover:text-obsidian'
                      }`}
                    >
                      {tab.tabLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id="hero-blueprint-panel"
              role="tabpanel"
              aria-labelledby={`hero-tab-${activeTab.id}`}
              key={`${lang}-${activeTab.id}`}
              className="blueprint-grid fade-swap flex flex-1 flex-col justify-between p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-petrol">
                  {activeTab.status}
                </span>
                <span className="text-sm font-semibold text-obsidian">{activeTab.title}</span>
              </div>

              <BlueprintDiagram id={activeTab.id} lang={lang} />

              <p className="border-t border-gridline pt-2.5 text-xs leading-relaxed text-ink-body">
                {activeTab.summary}
              </p>
            </div>

            {/* Franja de Respaldo Verificado */}
            <div className="grid grid-cols-1 divide-y divide-gridline border-t border-gridline bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {bpData.proofs.map((proof, index) => (
                <div key={proof.value} className="px-5 py-3.5">
                  <div
                    className={`font-display text-2xl leading-none ${
                      index === 0 ? 'text-petrol' : 'text-obsidian'
                    }`}
                  >
                    {proof.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-ink-body">{proof.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <InstitutionalVideoModal
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
        lang={lang}
      />
    </section>
  );
}
