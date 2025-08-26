import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Função para scroll suave
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Fechar o menu mobile se estiver aberto
      if (isOpen) setIsOpen(false);
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset para a altura da navbar
        behavior: 'smooth'
      });
    } else if (targetId === 'home') {
      // Se estamos tentando ir para o topo e o elemento não foi encontrado
      if (isOpen) setIsOpen(false);
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50 h-20 font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        <div className="flex items-center">
          {/* Logo Salesforce style - agora clicável */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, 'home')} 
            className="text-[#032d60] text-2xl font-bold tracking-tight hover:text-[#00A1E0] transition-colors duration-300 cursor-pointer"
          >
            BKN Digital
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" 
             onClick={(e) => handleSmoothScroll(e, 'sobre')} 
             className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">
            Sobre
          </a>
          <a href="#servicos" 
             onClick={(e) => handleSmoothScroll(e, 'servicos')} 
             className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">
            Serviços
          </a>
          <a href="#aifeature" 
             onClick={(e) => handleSmoothScroll(e, 'aifeature')} 
             className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">
            IA
          </a>
          <a href="#testimonials" 
             onClick={(e) => handleSmoothScroll(e, 'testimonials')} 
             className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">
            Depoimentos
          </a>
          <a href="#contato" 
             onClick={(e) => handleSmoothScroll(e, 'contato')} 
             className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">
            Contato
          </a>
          <button className="bg-[#00A1E0] text-white px-6 py-3 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 shadow" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>Fale Conosco</button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <a href="#home" 
               onClick={(e) => handleSmoothScroll(e, 'home')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              Início
            </a>
            <a href="#sobre" 
               onClick={(e) => handleSmoothScroll(e, 'sobre')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              Sobre
            </a>
            <a href="#servicos" 
               onClick={(e) => handleSmoothScroll(e, 'servicos')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              Serviços
            </a>
            <a href="#aifeature" 
               onClick={(e) => handleSmoothScroll(e, 'aifeature')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              IA
            </a>
            <a href="#testimonials" 
               onClick={(e) => handleSmoothScroll(e, 'testimonials')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              Depoimentos
            </a>
            <a href="#contato" 
               onClick={(e) => handleSmoothScroll(e, 'contato')} 
               className="block text-[#032d60] hover:text-[#00A1E0] font-medium">
              Contato
            </a>
            <button className="w-full bg-[#00A1E0] text-white px-6 py-3 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 shadow" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>Fale Conosco</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;