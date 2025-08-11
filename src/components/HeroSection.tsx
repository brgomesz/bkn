import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transforme seu negócio com soluções inteligentes
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
          Aplicamos Inteligência Artificial para gerar eficiência e crescimento sustentável para sua empresa
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-orange-500 text-white px-8 py-4 rounded font-medium hover:bg-orange-600 transition-colors duration-300 text-lg">
            Saiba Mais
          </button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded font-medium hover:bg-blue-700 transition-colors duration-300 text-lg">
            Agende uma Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;