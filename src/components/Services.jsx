import React, { useRef, useState } from 'react';

const servicesData = [
  { id: '01', title: 'Hipertrofia Cognitiva', category: 'Performance', desc: 'Protocolos de ganho de massa alinhados ao pico de performance mental.' },
  { id: '02', title: 'Emagrecimento Metabólico', category: 'Saúde', desc: 'Estratégias hormonais para queima de gordura sem perda de energia.' },
  { id: '03', title: 'Reeducação Comportamental', category: 'Hábito', desc: 'Ferramentas da neurociência para mudar sua relação com o prato.' },
  { id: '04', title: 'Nutrição Esportiva', category: 'Atleta', desc: 'Suporte nutricional completo para pré, intra e pós treino.' },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="metodologia" className="py-32 px-6 md:px-12 bg-brand-dark text-brand-bg relative z-20 rounded-t-[4rem] -mt-20">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-serif">Expertise.</h2>
          <p className="md:w-1/3 mt-6 md:mt-0 text-white/60 font-sans">
            Métodos validados cientificamente, aplicados de forma personalizada para sua biologia única.
          </p>
        </div>

        <div className="flex flex-col">
          {servicesData.map((s, i) => (
            <div 
              key={s.id}
              className="group border-b border-white/10 py-10 cursor-pointer transition-all duration-500 hover:bg-white/5 px-4"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center">
                <span className="text-xs font-bold text-brand-accent tracking-widest mb-2 md:mb-0">{s.id} / {s.category}</span>
                <h3 className="text-3xl md:text-5xl font-serif md:absolute md:left-1/3 transition-transform duration-500 group-hover:translate-x-4">
                  {s.title}
                </h3>
                <div className={`md:max-w-xs text-right mt-4 md:mt-0 overflow-hidden transition-all duration-500 ${active === i ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 md:opacity-100 md:max-h-20 md:text-white/40'}`}>
                   <p className="text-sm text-brand-bg/70">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default Services;