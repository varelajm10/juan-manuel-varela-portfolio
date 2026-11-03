import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Manejo de clase 'dark' en el elemento raíz <html> y persistencia
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const [contactSubject, setContactSubject] = useState('');

  const handleSelectDemo = (projectName) => {
    const subjectPrefix = lang === 'es' ? 'Solicitud de Demo - ' : 'Demo Request - ';
    setContactSubject(`${subjectPrefix}${projectName}`);

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
    <div className="min-h-screen bg-[#fafafa] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans antialiased transition-colors duration-300">
      {/* Header con switch de idioma (ES/EN) y switch de tema (Dark/Light) */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Flujo principal bilingüe con soporte completo de tema */}
      <main className="flex-grow">
        <Hero lang={lang} />
        <Projects lang={lang} onSelectDemo={handleSelectDemo} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Contact
          lang={lang}
          contactSubject={contactSubject}
          onClearSubject={() => setContactSubject('')}
        />
      </main>

      {/* Pie de página */}
      <Footer lang={lang} />
    </div>
  );
}
