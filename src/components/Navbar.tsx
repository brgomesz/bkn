import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        <div className="flex items-center">
          <img 
            src="https://images.pexels.com/photos/3694869/pexels-photo-3694869.jpeg?auto=compress&cs=tinysrgb&w=160&h=40&fit=crop" 
            alt="BKN Digital" 
            className="w-40 h-10 object-cover rounded"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-300">
            Sobre
          </a>
          <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-300">
            Serviços
          </a>
          <a href="#casos" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-300">
            Casos
          </a>
          <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium text-base transition-colors duration-300">
            Contato
          </a>
          <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors duration-300">
            Fale Conosco
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <a href="#sobre" className="block text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
            <a href="#servicos" className="block text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
            <a href="#casos" className="block text-gray-700 hover:text-blue-600 font-medium">Casos</a>
            <a href="#contato" className="block text-gray-700 hover:text-blue-600 font-medium">Contato</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;