import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import RoiCalculator from './components/RoiCalculator';
import WorkMethodology from './components/WorkMethodology';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans antialiased">
      {/* Navegación fija con enlace a CV y redes */}
      <Navbar />

      {/* Flujo principal */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <RoiCalculator />
        <WorkMethodology />
        <Experience />
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
