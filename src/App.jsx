import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoiCalculator from './components/RoiCalculator';
import Projects from './components/Projects';
import WorkMethodology from './components/WorkMethodology';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CvSection from './components/CvSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [lang, setLang] = useState('es');
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col font-sans antialiased">
      {/* Header con switch de idioma y botón de compartir */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Contenido principal bilingüe */}
      <main className="flex-grow">
        <Hero
          lang={lang}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <RoiCalculator lang={lang} />
        <Projects lang={lang} />
        <WorkMethodology lang={lang} />
        <Skills />
        <Experience />
        <CvSection
          lang={lang}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
        <Contact lang={lang} />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Modal de previsualización rápida de CV */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
