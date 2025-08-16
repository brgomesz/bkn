
import React from 'react';

const HeroSection = () => {
  return (
    <>
      {/* Hero principal */}
      <section className="bg-white h-screen flex items-center justify-center font-sans">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center px-6 py-12">
          {/* Texto à esquerda */}
          <div className="flex-1 flex flex-col items-start justify-center md:pr-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#032d60] leading-tight text-left" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
              Transforme seu negócio com soluções inteligentes
            </h1>
            <p className="text-lg md:text-xl mb-8 text-[#032d60]/80 text-left max-w-md" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
              Aplicamos Inteligência Artificial para gerar eficiência e crescimento sustentável para sua empresa
            </p>
            <div className="flex gap-4 mt-2">
              <button className="bg-[#00A1E0] text-white px-8 py-4 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 text-lg" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
                Saiba Mais
              </button>
              <button className="bg-[#FFB900] text-[#032d60] px-8 py-4 rounded font-medium hover:bg-[#ffe066] transition-colors duration-300 text-lg" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
                Agende uma Demo
              </button>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
            <div className="w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-[#eaf5fe]">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Business AI"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção explicativa centralizada */}
      <section className="w-full flex items-center justify-center py-20 bg-[#f4f6f9] font-sans">
        <div className="max-w-3xl w-full mx-auto flex flex-col items-center px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#032d60] leading-tight" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
            Como nosso projeto funciona
          </h2>
          <p className="text-lg md:text-xl mb-6 text-[#032d60]/80 max-w-2xl" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
            Utilizamos Inteligência Artificial para automatizar processos, analisar dados e personalizar experiências. Nossa solução permite que seu comércio cresça de forma rápida, inteligente e sustentável, conectando você aos clientes de uma maneira totalmente nova.
          </p>
          <button className="bg-[#00A1E0] text-white px-8 py-4 rounded font-medium hover:bg-[#0176d3] transition-colors duration-300 text-lg mt-4" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
            Saiba como a IA pode ajudar seu comércio
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;