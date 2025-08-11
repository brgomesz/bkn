import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Agende uma consulta gratuita e descubra como a BKN Digital pode 
          acelerar o crescimento da sua empresa através da tecnologia
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded font-medium hover:bg-gray-50 transition-colors duration-300 text-lg">
            Experimente Grátis
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
            Fale com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;