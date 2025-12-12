import React from 'react';
import { CheckCircle, Smartphone } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  return (
    <section id="app" className="py-20 bg-brand-purple overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                  {/* Mock App Interface */}
                  <div className="bg-brand-purple h-full w-full flex flex-col">
                      <div className="h-16 flex items-center justify-center border-b border-purple-800">
                         <span className="text-white font-bold">ImpulsaMEI App</span>
                      </div>
                      <div className="flex-1 p-4 flex flex-col items-center justify-center space-y-4">
                         <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                           <span className="text-3xl font-bold text-brand-purple">R$</span>
                         </div>
                         <h3 className="text-white text-lg font-bold">Calcule seu Preço</h3>
                         <div className="w-full bg-white/10 p-4 rounded-lg">
                            <div className="text-gray-300 text-xs">Custo Material</div>
                            <div className="text-white font-bold">R$ 15,00</div>
                         </div>
                         <div className="w-full bg-white/10 p-4 rounded-lg">
                            <div className="text-gray-300 text-xs">Mão de Obra</div>
                            <div className="text-white font-bold">R$ 30,00</div>
                         </div>
                         <button className="w-full bg-brand-yellow text-brand-purple py-3 rounded-lg font-bold shadow-lg">
                            Calcular Lucro
                         </button>
                      </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              A Precificação na Palma da Sua Mão
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              A ImpulsaMEI desenvolveu um aplicativo exclusivo para acabar com a dúvida na hora de colocar preço no seu produto. Chega de "chutar" valores e ter prejuízo.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Cálculo automático de custos e despesas',
                'Definição de margem de lucro ideal',
                'Interface simples e intuitiva',
                'Relatórios rápidos de viabilidade'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-yellow shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-white text-brand-purple px-8 py-3 rounded-lg font-bold hover:bg-brand-yellow transition duration-300 flex items-center gap-2 shadow-lg">
              <Smartphone size={20} />
              Baixar Aplicativo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};