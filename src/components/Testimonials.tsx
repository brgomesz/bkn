import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A BKN Digital transformou completamente nossos processos internos. A implementação de IA reduziu nossos custos em 40% e aumentou nossa produtividade significativamente.",
      author: "Maria Silva",
      position: "CEO, TechCorp Brasil",
      company: "TechCorp"
    },
    {
      quote: "Excelente trabalho de consultoria! A equipe da BKN nos ajudou a integrar sistemas complexos de forma seamless. O ROI foi visível em apenas 3 meses.",
      author: "João Santos",
      position: "CTO, Innovation Labs",
      company: "Innovation Labs"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos reais de empresas que transformaram seus negócios conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold text-lg">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;