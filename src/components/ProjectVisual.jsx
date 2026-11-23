import React from 'react';

export default function ProjectVisual({ project, lang = 'es', compact = false }) {
  const isEn = lang === 'en';

  // Activos reales auténticos: captura real y logos verificados
  if (project.id === 'portal-rrhh') {
    return (
      <div className="project-media overflow-hidden border border-gridline bg-stone p-2">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          width="1024"
          height="454"
          loading="lazy"
          decoding="async"
          className={`w-full bg-white object-contain ${compact ? 'h-40 sm:h-44' : 'h-48 sm:h-52'}`}
        />
      </div>
    );
  }

  if (project.id === 'ascensort' || project.id === 'cubo-inspecta') {
    return (
      <div className="project-media flex h-36 items-center justify-center border border-gridline bg-white p-6 sm:h-40">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          width="800"
          height="360"
          loading="lazy"
          decoding="async"
          className={
            project.logoSize === 'lg'
              ? 'max-h-24 w-auto max-w-full object-contain'
              : 'max-h-16 w-auto max-w-full object-contain'
          }
        />
      </div>
    );
  }

  // Esquemas SVG editoriales claros a medida para los 5 sistemas técnicos
  if (project.id === 'conciliacion-bancaria') {
    return (
      <div
        className={`project-media blueprint-grid flex flex-col justify-between p-5 sm:p-6 ${
          compact ? 'border border-gridline' : 'h-full'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="font-medium text-ink-muted">
            {isEn ? 'DETERMINISTIC 5-RULE CASCADE' : 'CASCADA DETERMINÍSTICA · 5 REGLAS'}
          </span>
          <span className="font-semibold text-petrol">
            {isEn ? '97.2% matched' : '97,2 % conciliado'}
          </span>
        </div>

        <svg
          viewBox="0 0 380 152"
          className="my-5 h-auto w-full"
          role="img"
          aria-label={isEn ? '5-rule bank reconciliation cascade diagram' : 'Diagrama de cascada de 5 reglas de conciliación'}
        >
          <rect x="0" y="6" width="218" height="22" fill="#0E171B" />
          <text x="10" y="20" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F5F5F0">
            {isEn ? '01 · EXACT INVOICE #' : '01 · Nº FACTURA EXACTO'}
          </text>
          <rect x="0" y="34" width="196" height="22" fill="#0F4C54" />
          <text x="10" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F5F5F0">
            {isEn ? '02 · TAX ID MATCH' : '02 · COINCIDENCIA CUIT'}
          </text>
          <rect x="0" y="62" width="174" height="22" fill="#296B68" />
          <text x="10" y="76" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F5F5F0">
            {isEn ? '03 · FUZZY RAPIDFUZZ' : '03 · MATCHING RAPIDFUZZ'}
          </text>
          <rect x="0" y="90" width="152" height="22" fill="#3F6656" />
          <text x="10" y="104" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#F5F5F0">
            {isEn ? '04 · GROUPED PAYMENTS' : '04 · PAGOS AGRUPADOS'}
          </text>
          <rect x="0" y="118" width="130" height="22" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.8" />
          <text x="10" y="132" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#0E171B">
            {isEn ? '05 · PARTIAL FIFO' : '05 · PARCIAL FIFO'}
          </text>

          <rect x="238" y="6" width="142" height="134" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.9" />
          <text x="250" y="27" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#526067">
            {isEn ? 'SAMPLE DATASET' : 'EXTRACTO DE PRUEBA'}
          </text>
          <text x="250" y="70" fontFamily="Instrument Serif, Georgia, serif" fontSize="36" fill="#0F4C54">
            {isEn ? '97.2%' : '97,2%'}
          </text>
          <text x="250" y="88" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9.5" fill="#435057">
            {isEn ? 'of credit amount' : 'importe de créditos'}
          </text>
          <line x1="250" y1="102" x2="368" y2="102" stroke="#DCE2DE" />
          <text x="250" y="121" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#3F6656">
            {isEn ? '11 PYTEST · EXCEL' : '11 PYTEST · EXCEL'}
          </text>
        </svg>

        <p className="font-mono text-xs text-ink-muted">
          Python · Pandas · RapidFuzz · openpyxl · Pytest
        </p>
      </div>
    );
  }

  if (project.id === 'agente-cobranzas-ia') {
    return (
      <div className="project-media blueprint-grid border border-gridline p-4">
        <svg
          viewBox="0 0 360 112"
          className="h-auto w-full"
          role="img"
          aria-label={isEn ? '0-100 risk scoring and guardrails schematic' : 'Esquema de scoring 0-100 y guardrails'}
        >
          <rect x="4" y="6" width="150" height="100" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.8" />
          <text x="16" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#526067">
            SCORING 0–100
          </text>
          <path d="M 32 78 A 42 42 0 0 1 124 78" fill="none" stroke="#DCE2DE" strokeWidth="8" strokeLinecap="round" />
          <path d="M 32 78 A 42 42 0 0 1 106 44" fill="none" stroke="#0F4C54" strokeWidth="8" strokeLinecap="round" />
          <text x="64" y="76" fontFamily="Instrument Serif, Georgia, serif" fontSize="22" fill="#0E171B">
            74
          </text>
          <text x="16" y="96" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#3F6656">
            {isEn ? '4 factors · 16 tests' : '4 variables · 16 tests'}
          </text>

          <rect x="166" y="6" width="190" height="100" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.8" />
          <text x="178" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#526067">
            {isEn ? 'STRATEGIES + GUARDRAILS' : 'ESTRATEGIAS + GUARDRAILS'}
          </text>
          <rect x="178" y="34" width="166" height="16" fill="#EAF3EE" />
          <text x="184" y="45" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#3F6656">
            {isEn ? '1. Preventive · 2. Friendly' : '1. Preventivo · 2. Amigable'}
          </text>
          <rect x="178" y="55" width="166" height="16" fill="#E6F0EE" />
          <text x="184" y="66" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#0F4C54">
            {isEn ? '3. Firm · 4. Pre-legal' : '3. Firme · 4. Pre-judicial'}
          </text>
          <rect x="178" y="76" width="166" height="20" fill="#0E171B" />
          <text x="184" y="89" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#A7E3CE">
            {isEn ? '✓ 100% Offline Fallback' : '✓ Fallback 100% offline'}
          </text>
        </svg>
      </div>
    );
  }

  if (project.id === 'cubo') {
    return (
      <div className="project-media blueprint-grid border border-gridline p-4">
        <svg
          viewBox="0 0 360 112"
          className="h-auto w-full"
          role="img"
          aria-label={isEn ? 'Order-to-Cash aging buckets and Telegram alerts' : 'Esquema de antigüedad de deuda Order-to-Cash y alertas Telegram'}
        >
          <rect x="4" y="6" width="196" height="100" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.8" />
          <text x="16" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#526067">
            {isEn ? 'RECEIVABLES AGING' : 'ANTIGÜEDAD DE DEUDA'}
          </text>
          <rect x="20" y="68" width="28" height="22" fill="#DCE2DE" />
          <rect x="60" y="54" width="28" height="36" fill="#7B9584" />
          <rect x="100" y="42" width="28" height="48" fill="#296B68" />
          <rect x="140" y="30" width="28" height="60" fill="#0F4C54" />
          <text x="27" y="100" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#526067">30</text>
          <text x="67" y="100" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#526067">60</text>
          <text x="107" y="100" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#526067">90</text>
          <text x="144" y="100" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#0F4C54">90+</text>

          <rect x="212" y="6" width="144" height="100" fill="#FFFFFF" stroke="#8C4B28" strokeWidth="0.9" />
          <text x="224" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#8C4B28">
            ORDER-TO-CASH
          </text>
          <text x="224" y="46" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10.5" fontWeight="600" fill="#0E171B">
            FastAPI + MongoDB
          </text>
          <text x="224" y="64" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#435057">
            {isEn ? '· Multi-company' : '· Multiempresa'}
          </text>
          <text x="224" y="79" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#435057">
            {isEn ? '· Collection alerts' : '· Alertas de cobro'}
          </text>
          <text x="224" y="94" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fill="#435057">
            {isEn ? '· Telegram queries' : '· Consultas Telegram'}
          </text>
        </svg>
      </div>
    );
  }

  if (project.id === 'gladys') {
    return (
      <div className="project-media blueprint-grid border border-gridline p-4">
        <svg
          viewBox="0 0 360 112"
          className="h-auto w-full"
          role="img"
          aria-label={isEn ? 'Daily BCRA and insolvency radar pipeline' : 'Pipeline diario de alertas BCRA y concursos'}
        >
          <rect x="4" y="6" width="114" height="100" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.8" />
          <text x="14" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#526067">
            {isEn ? 'PUBLIC SOURCES' : 'FUENTES DIARIAS'}
          </text>
          <circle cx="60" cy="64" r="24" fill="none" stroke="#0F4C54" strokeWidth="1.1" />
          <circle cx="60" cy="64" r="13" fill="none" stroke="#7B9584" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="72" cy="54" r="3" fill="#0F4C54" />
          <circle cx="48" cy="70" r="3" fill="#8C4B28" />
          <text x="14" y="98" fontFamily="JetBrains Mono, monospace" fontSize="7.8" fill="#0F4C54">
            BCRA · BOLETINES
          </text>

          <line x1="118" y1="56" x2="142" y2="56" stroke="#0F4C54" strokeWidth="1.3" />
          <polygon points="142,52 148,56 142,60" fill="#0F4C54" />

          <rect x="148" y="6" width="208" height="100" fill="#FFFFFF" stroke="#0F4C54" strokeWidth="0.9" />
          <text x="160" y="24" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#0F4C54">
            {isEn ? 'DAILY CREDIT REPORT' : 'INFORME DIARIO CRÉDITOS'}
          </text>
          <rect x="160" y="34" width="184" height="18" fill="#E6F0EE" />
          <text x="168" y="46" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#0F4C54">
            {isEn ? '● BCRA rating changes' : '● Cambios situación BCRA'}
          </text>
          <rect x="160" y="57" width="184" height="18" fill="#F7EFEA" />
          <text x="168" y="69" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#8C4B28">
            {isEn ? '● Bankruptcy / insolvency' : '● Alertas de concursos'}
          </text>
          <rect x="160" y="80" width="184" height="18" fill="#F5F5F0" />
          <text x="168" y="92" fontFamily="JetBrains Mono, monospace" fontSize="8.2" fill="#435057">
            {isEn ? '→ Email + Streamlit panel' : '→ Correo + panel Streamlit'}
          </text>
        </svg>
      </div>
    );
  }

  // Metanoia (prototipo ERP + panel con IA)
  return (
    <div
      className={`project-media blueprint-grid flex flex-col justify-between p-5 sm:p-6 ${
        compact ? 'border border-gridline' : 'h-full'
      }`}
    >
      <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
        <span>{isEn ? 'TWO PUBLIC REPOSITORIES' : 'DOS REPOSITORIOS PÚBLICOS'}</span>
        <span className="font-semibold text-sage">Next.js · TypeScript</span>
      </div>
      <svg
        viewBox="0 0 380 112"
        className="my-4 h-auto w-full"
        role="img"
        aria-label={isEn ? 'Metanoia modular ERP and AI assistant panel architecture' : 'Arquitectura de Metanoia ERP modular y panel con IA'}
      >
        <rect x="4" y="8" width="174" height="96" fill="#FFFFFF" stroke="#0E171B" strokeWidth="0.9" />
        <rect x="4" y="8" width="174" height="22" fill="#0E171B" />
        <text x="14" y="23" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#A7E3CE">
          Metanoia.v1.0.1
        </text>
        <text x="14" y="48" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10.5" fontWeight="600" fill="#0E171B">
          {isEn ? 'Multi-tenant ERP' : 'ERP modular multi-tenant'}
        </text>
        <text x="14" y="67" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#435057">
          Prisma · PostgreSQL
        </text>
        <text x="14" y="85" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8.8" fill="#526067">
          {isEn ? 'Open structure prototype' : 'Estructura abierta'}
        </text>

        <rect x="202" y="8" width="174" height="96" fill="#FFFFFF" stroke="#0F4C54" strokeWidth="0.9" />
        <rect x="202" y="8" width="174" height="22" fill="#0F4C54" />
        <text x="212" y="23" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#FFFFFF">
          metanoia-app
        </text>
        <text x="212" y="48" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10.5" fontWeight="600" fill="#0E171B">
          {isEn ? 'AI Assistant Panel' : 'Panel con asistentes IA'}
        </text>
        <text x="212" y="67" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="#435057">
          Firebase · Genkit / Gemini
        </text>
        <text x="212" y="85" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8.8" fill="#526067">
          {isEn ? 'Live ops repo stays private' : 'Operación real en privado'}
        </text>
      </svg>
      <p className="font-mono text-xs text-ink-muted">
        Next.js · TypeScript · Prisma · PostgreSQL · Firebase
      </p>
    </div>
  );
}
