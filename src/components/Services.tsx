import React from 'react';
import { Brain, Zap, Cog as Cogs, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-16 h-18 text-blue-600" />,
      title: "Consultoria em IA",
      description: "Análise estratégica e implementação de soluções de Inteligência Artificial personalizadas para seu negócio."
    },
    {
      icon: <Zap className="w-16 h-18 text-blue-600" />,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes para criar um ecossistema tecnológico integrado e eficiente."
    },
    {
      icon: <Cogs className="w-16 h-18 text-blue-600" />,
      title: "Automação de Processos",
      description: "Automatizamos fluxos de trabalho complexos para aumentar produtividade e reduzir custos operacionais."
    },
    {
      icon: <Users className="w-16 h-18 text-blue-600" />,
      title: "Suporte e Treinamento",
      description: "Capacitamos sua equipe e oferecemos suporte contínuo para maximizar o retorno sobre investimento."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para transformar sua empresa através da tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-80 flex flex-col"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-1">
                {service.description}
              </p>
              <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                Saiba Mais →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;