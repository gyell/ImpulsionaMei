import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // URL da imagem local solicitada
  const localImage = "i1@2x.png";
  // URL de fallback caso a imagem local não carregue
  const fallbackImage = "https://picsum.photos/seed/impulsa/600/600";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-purple">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow opacity-10 rounded-l-[10rem] transform translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800 rounded-full blur-3xl opacity-50 -translate-x-20 translate-y-20"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-white">
          <div className="inline-block px-4 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-sm font-semibold mb-2">
            Consultoria Especializada
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Transforme seu <span className="text-brand-yellow">MEI</span> em um Grande Negócio
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            A orientação certa para quem quer crescer. Consultoria empresarial e ferramentas de precificação com a expertise de Elza Maria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="px-8 py-4 bg-brand-yellow text-brand-purple font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Agendar Consultoria <ArrowRight size={20} />
            </a>
            <a href="#app" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-purple transition flex items-center justify-center">
              Conhecer o App
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
           {/* Hero Image Container */}
           <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow to-purple-500 rounded-full opacity-20 animate-pulse blur-xl"></div>
              <img 
                src={imageError ? fallbackImage : localImage}
                onError={() => setImageError(true)}
                alt="App ImpulsaMEI - Gestão e Precificação" 
                className="rounded-2xl shadow-2xl object-cover relative z-10 border-4 border-brand-yellow/30 w-full h-auto"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-brand-yellow font-bold text-xl">
                  %
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Precificação</p>
                  <p className="text-brand-purple font-bold">Correta & Lucrativa</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};