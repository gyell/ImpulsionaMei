import React from 'react';
import { MapPin, Award, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow rounded-tl-3xl z-0"></div>
                <img 
                  src="https://picsum.photos/seed/elza/500/600" 
                  alt="Elza Maria Consultora" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-24 bg-brand-purple/10 -z-0 rounded-br-3xl"></div>
             </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-sm font-bold text-brand-purple tracking-widest uppercase">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Conheça <span className="text-brand-purple">Elza Maria</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Administradora apaixonada pelo desenvolvimento de pequenos negócios, Elza Maria transformou sua experiência em uma missão: impulsionar microempreendedores a alcançarem a sustentabilidade financeira.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-purple/10 rounded-lg text-brand-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Atuação Regional</h4>
                  <p className="text-gray-600">Forte presença no Norte e Noroeste Fluminense, além de atuar há anos na capital do Rio de Janeiro.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-purple/10 rounded-lg text-brand-purple">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expertise Comprovada</h4>
                  <p className="text-gray-600">Anos de experiência transformando MEIs em gestores de sucesso.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="italic text-gray-500 border-l-4 border-brand-yellow pl-4">
                "Meu objetivo não é apenas organizar números, mas dar clareza para que o empreendedor possa sonhar mais alto."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};