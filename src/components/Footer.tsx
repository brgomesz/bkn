import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#032d60] text-white pt-16 pb-8 font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-[#FFB900] text-lg font-semibold mb-6">Sobre BKN Digital</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/80">
              Especialistas em transformação digital, aplicando IA para gerar eficiência e crescimento sustentável para empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#00A1E0] hover:text-[#FFB900] transition-colors duration-300"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-[#00A1E0] hover:text-[#FFB900] transition-colors duration-300"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-[#00A1E0] hover:text-[#FFB900] transition-colors duration-300"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-[#FFB900] text-lg font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Consultoria em IA</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Integração de Sistemas</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Automação de Processos</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Suporte e Treinamento</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFB900] text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Documentação</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Casos de Sucesso</a></li>
              <li><a href="#" className="hover:text-[#FFB900] transition-colors duration-300">Whitepapers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFB900] text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start"><MapPin className="w-4 h-4 mt-1 mr-3 flex-shrink-0" /><span>Av. Paulista, 1000<br />São Paulo, SP - 01310-100</span></li>
              <li className="flex items-center"><Mail className="w-4 h-4 mr-3 flex-shrink-0" /><a href="mailto:contato@bkndigital.com.br" className="hover:text-[#FFB900] transition-colors duration-300">contato@bkndigital.com.br</a></li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-3 flex-shrink-0" /><a href="tel:+551140044000" className="hover:text-[#FFB900] transition-colors duration-300">(11) 4004-4000</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#00A1E0] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">© 2024 BKN Digital. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/70 hover:text-[#FFB900] transition-colors duration-300">Política de Privacidade</a>
            <a href="#" className="text-sm text-white/70 hover:text-[#FFB900] transition-colors duration-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;