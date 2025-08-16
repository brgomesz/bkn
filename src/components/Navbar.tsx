import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50 h-20 font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        <div className="flex items-center">
          {/* Logo Salesforce style */}
          <span className="text-[#032d60] text-2xl font-bold tracking-tight">BKN Digital</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">Sobre</a>
          <a href="#servicos" className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">Serviços</a>
          <a href="#casos" className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">Casos</a>
          <a href="#contato" className="text-[#032d60] hover:text-[#00A1E0] font-medium text-base transition-colors duration-300">Contato</a>
          <button className="bg-[#00A1E0] text-white px-6 py-3 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 shadow" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>Fale Conosco</button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <a href="#sobre" className="block text-[#032d60] hover:text-[#00A1E0] font-medium">Sobre</a>
            <a href="#servicos" className="block text-[#032d60] hover:text-[#00A1E0] font-medium">Serviços</a>
            <a href="#casos" className="block text-[#032d60] hover:text-[#00A1E0] font-medium">Casos</a>
            <a href="#contato" className="block text-[#032d60] hover:text-[#00A1E0] font-medium">Contato</a>
            <button className="w-full bg-[#00A1E0] text-white px-6 py-3 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 shadow" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>Fale Conosco</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;