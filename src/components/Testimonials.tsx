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
    <section id="testimonials" className="py-20 bg-[#f4f6f9] font-sans" style={{fontFamily: 'Salesforce Sans, Arial, sans-serif'}}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#032d60] mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-[#032d60]/80">Depoimentos reais de empresas que transformaram seus negócios conosco</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-[#00A1E0] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <blockquote className="text-[#032d60] text-lg mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#eaf5fe] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#00A1E0] font-semibold text-lg">{testimonial.author.split(' ').map(name => name[0]).join('')}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#032d60] text-lg">{testimonial.author}</p>
                  <p className="text-[#032d60]/80">{testimonial.position}</p>
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