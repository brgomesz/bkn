import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pioneiros em Transformação Digital
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A BKN Digital é uma empresa especializada em soluções tecnológicas avançadas, 
              focada em aplicar Inteligência Artificial para transformar processos empresariais 
              e impulsionar o crescimento dos nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é democratizar o acesso à tecnologia de ponta, oferecendo 
              consultoria estratégica e implementação de sistemas que realmente fazem a diferença 
              nos resultados do seu negócio.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-medium">+5 anos</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-medium">+200 projetos</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-medium">+100 clientes</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Tecnologia e Inovação"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500 rounded-lg opacity-80"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-lg opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;