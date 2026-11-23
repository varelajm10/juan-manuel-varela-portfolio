import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Services from './components/Services';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import WorkMethodology from './components/WorkMethodology';
import ToolMarquee from './components/ToolMarquee';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { content } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = localStorage.getItem('lang');
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  // Garantiza identidad editorial clara única (limpia cualquier clase dark heredada)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    localStorage.setItem('lang', lang);

    const seo = content[lang].seo;
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', seo.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'en' ? 'en_US' : 'es_AR');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', seo.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', seo.description);
  }, [lang]);

  const [contactSubject, setContactSubject] = useState('');

  const handleSelectDemo = (projectName, subjectOverride) => {
    const subjectPrefix = lang === 'es' ? 'Solicitud de Demo - ' : 'Demo Request - ';
    setContactSubject(subjectOverride || `${subjectPrefix}${projectName}`);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }

    setTimeout(() => {
      const messageInput = document.getElementById('contact-message');
      if (messageInput) {
        messageInput.focus();
      }
    }, prefersReducedMotion ? 50 : 350);
  };

  return (
    <div className="min-h-screen bg-paper text-obsidian flex flex-col font-sans antialiased">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-petrol focus:px-4 focus:py-2.5 focus:text-xs focus:font-semibold focus:text-paper"
      >
        {lang === 'en' ? 'Skip to main content' : 'Saltar al contenido principal'}
      </a>

      <Navbar lang={lang} setLang={setLang} />

      <main id="contenido-principal" className="flex-grow flex flex-col">
        <Hero lang={lang} />
        <Problems lang={lang} />
        <Services lang={lang} onSelectDemo={handleSelectDemo} />
        <Projects lang={lang} onSelectDemo={handleSelectDemo} />
        <Collaboration lang={lang} onSelectDemo={handleSelectDemo} />
        <WorkMethodology lang={lang} />
        <ToolMarquee lang={lang} />
        <Testimonials lang={lang} />
        <Experience lang={lang} />
        <Contact
          lang={lang}
          contactSubject={contactSubject}
          onClearSubject={() => setContactSubject('')}
        />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
