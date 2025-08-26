import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AIFeature = () => {
  const features = [
    {
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=280&h=200&fit=crop",
      title: "IA Generativa",
      description: "Crie conteúdo automatizado e personalizado"
    },
    {
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=280&h=200&fit=crop",
      title: "Machine Learning",
      description: "Análise preditiva e insights automáticos"
    },
    {
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=280&h=200&fit=crop",
      title: "Processamento de Linguagem",
      description: "Chatbots inteligentes e análise de sentimentos"
    },
    {
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=280&h=200&fit=crop",
      title: "Visão Computacional",
      description: "Reconhecimento de imagens e automação visual"
    }
  ];

  return (
    <section id="aifeature" className="py-16 sm:py-20 md:py-24 bg-[#f4f6f9] font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#032d60] mb-3 sm:mb-4">Tecnologias de IA Avançadas</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#032d60]/80 max-w-3xl mx-auto">Explore nossas soluções de Inteligência Artificial desenvolvidas para revolucionar seu negócio</p>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full sm:w-80 md:w-auto" style={{ height: 'auto', minHeight: '360px', maxHeight: '400px' }}>
                <img src={feature.image} alt={feature.title} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-[#032d60] mb-2 sm:mb-3">{feature.title}</h3>
                  <p className="text-[#032d60]/80 mb-4 flex-grow">{feature.description}</p>
                  <button className="bg-[#00A1E0] text-white px-4 py-2 rounded hover:bg-[#0176d3] transition-colors duration-300 shadow mt-auto self-start">Saiba Mais</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-2 sm:mt-4">
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"><ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#032d60]" /></button>
            <button className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"><ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#032d60]" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;