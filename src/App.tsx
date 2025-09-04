import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;