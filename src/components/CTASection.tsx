import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 mb-[-1px] bg-gradient-to-br from-[#0176d3] to-[#032d60] font-sans relative overflow-hidden" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFF] mb-6">Pronto para transformar seu negócio?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Agende uma consulta gratuita e descubra como a BKN Digital pode acelerar o crescimento da sua empresa através da tecnologia</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#FFF] text-[#032d60] px-8 py-4 rounded-lg font-medium hover:bg-[#F0F0F0] transition-colors duration-300 text-lg shadow-lg">Experimente Grátis</button>
          <button className="border-2 border-[#FFF] text-[#FFF] px-8 py-4 rounded-lg font-medium hover:bg-[#FFF] hover:text-[#032d60] transition-colors duration-300 text-lg shadow-lg">Fale com Especialista</button>
        </div>
      </div>
      {/* Divisor estilizado em camadas para um efeito mais elaborado */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{height: "70px"}}>
        {/* Camada de fundo com gradiente */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-white/90 via-white to-white/90" 
             style={{
               clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 0 100%)",
               filter: "drop-shadow(0 -3px 2px rgba(0,0,0,0.05))"
             }}>
        </div>
        
        {/* Onda decorativa semi-transparente */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20">
          {/* <path fill="rgba(255, 255, 255, 0.5)" 
                d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z">
          </path> */}
        </svg>
        
        {/* Onda principal */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 70" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-14">
            <path fill="#B3E0FF" 
              d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,70L1380,70C1320,70,1200,70,1080,70C960,70,840,70,720,70C600,70,480,70,360,70C240,70,120,70,60,70L0,70Z">
            </path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;