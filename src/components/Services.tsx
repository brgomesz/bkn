import React from 'react';
import { Brain, Zap, Cog as Cogs, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Consultoria em IA",
      description: "Análise estratégica e implementação de soluções de Inteligência Artificial personalizadas para seu negócio."
    },
    {
      icon: <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes para criar um ecossistema tecnológico integrado e eficiente."
    },
    {
      icon: <Cogs className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Automação de Processos",
      description: "Automatizamos fluxos de trabalho complexos para aumentar produtividade e reduzir custos operacionais."
    },
    {
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />,
      title: "Suporte e Treinamento",
      description: "Capacitamos sua equipe e oferecemos suporte contínuo para maximizar o retorno sobre investimento."
    }
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-[#f4f6f9] font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#032d60] mb-3 sm:mb-4">Nossos Serviços</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#032d60]/80 max-w-3xl mx-auto">Oferecemos soluções completas para transformar sua empresa através da tecnologia</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-[#eaf5fe] hover:shadow-xl transition-shadow duration-300 flex flex-col h-auto sm:h-80">
              <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#032d60] mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-[#032d60]/80 flex-1">{service.description}</p>
              <button className="mt-4 text-[#00A1E0] hover:text-[#0176d3] font-medium transition-colors duration-300">Saiba Mais →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;