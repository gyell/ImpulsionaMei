import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { AppShowcase } from './components/AppShowcase';
import { Contact } from './components/Contact';
import { AiAssistant } from './components/AiAssistant';

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AppShowcase />
        <Contact />
      </main>
      <AiAssistant />
    </div>
  );
}

export default App;