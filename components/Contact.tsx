import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
                <img 
                  src="Generated image 2.png" 
                  alt="ImpulsaMEI" 
                  className="h-20 w-auto object-contain rounded-lg bg-white p-2" 
                />
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              Sua parceira estratégica no crescimento do seu negócio. Do planejamento à precificação correta.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-purple/50 rounded-lg flex items-center justify-center text-brand-yellow">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-300">Whatsapp</h4>
                  <p>(22) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-purple/50 rounded-lg flex items-center justify-center text-brand-yellow">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-300">Email</h4>
                  <p>contato@impulsamei.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-purple/50 rounded-lg flex items-center justify-center text-brand-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-300">Localização</h4>
                  <p>Rio de Janeiro (Capital) & Norte/Noroeste Fluminense</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-purple transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-purple transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-brand-purple">Fale com a Elza</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-1">Nome Completo</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-purple transition" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-purple transition" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Mensagem</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 h-32 focus:outline-none focus:border-brand-purple transition" placeholder="Como podemos ajudar seu negócio?"></textarea>
              </div>
              <button className="w-full bg-brand-purple text-white font-bold py-4 rounded-lg hover:bg-purple-900 transition shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ImpulsaMEI. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};