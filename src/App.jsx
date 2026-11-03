import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CvSection from './components/CvSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col font-sans antialiased">
      {/* Barra de navegación superior fija */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Contenido principal */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />
        <Projects />
        <Skills />
        <Experience />
        <CvSection onOpenCvModal={() => setCvModalOpen(true)} />
        <Contact />
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
