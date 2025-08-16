import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-[#032d60] font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFB900] mb-6">Pronto para transformar seu negócio?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Agende uma consulta gratuita e descubra como a BKN Digital pode acelerar o crescimento da sua empresa através da tecnologia</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#00A1E0] text-white px-8 py-4 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 text-lg shadow">Experimente Grátis</button>
          <button className="border-2 border-[#FFB900] text-[#FFB900] px-8 py-4 rounded font-medium hover:bg-[#FFB900] hover:text-[#032d60] transition-colors duration-300 text-lg shadow">Fale com Especialista</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;