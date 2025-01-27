import React from 'react';
import Hero from '@/components/functional/Hero';
import About from '@/components/functional/About';
import Projects from '@/components/functional/Projects';
import LanguageSwitch from '@/components/functional/LenguageSwitch';
import Contact from '@/components/functional/Contact';
import Footer from '@/components/functional/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageSwitch />
      <Hero />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;