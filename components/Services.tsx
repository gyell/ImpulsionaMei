import React from 'react';
import { ServiceItem } from '../types';
import { Calculator, TrendingUp, Users, FileText, PieChart, Lightbulb } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: 'Planejamento Estratégico',
    description: 'Definição de metas claras e planos de ação para o crescimento sustentável do seu negócio.',
    icon: TrendingUp
  },
  {
    title: 'Precificação Inteligente',
    description: 'Análise de custos e margens para garantir que você não perca dinheiro na venda.',
    icon: Calculator
  },
  {
    title: 'Regularização de MEI',
    description: 'Auxílio completo na burocracia para manter sua empresa em dia com a Receita.',
    icon: FileText
  },
  {
    title: 'Gestão Financeira',
    description: 'Organização de fluxo de caixa, separação de contas PF/PJ e análise de lucro.',
    icon: PieChart
  },
  {
    title: 'Treinamento de Equipes',
    description: 'Capacitação para colaboradores focada em atendimento e processos eficientes.',
    icon: Users
  },
  {
    title: 'Mentoria Personalizada',
    description: 'Acompanhamento próximo com Elza Maria para destravar o potencial do seu negócio.',
    icon: Lightbulb
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-4">
            Como Podemos Ajudar
          </h2>
          <p className="text-gray-600">
            Soluções desenhadas especificamente para as dores e necessidades do Microempreendedor Individual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-brand-yellow group"
            >
              <div className="w-14 h-14 bg-brand-purple text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-yellow group-hover:text-brand-purple transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};