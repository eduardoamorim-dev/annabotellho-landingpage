import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComparisonSlider from './ComparisonSlider'; // Importe o componente que criamos

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  {
    id: 1,
    name: "Juliana Mendes",
    result: "-12kg",
    time: "4 Meses de Acompanhamento",
    // Use imagens reais ou placeholders de alta qualidade
    before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", 
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ricardo Alves",
    result: "+8kg",
    time: "6 Meses (Hipertrofia)",
    before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1780&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Animação de entrada do título
    gsap.from(".title-reveal", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    });
  }, { scope: container });

  return (
    <section id="historias" ref={container} className="relative py-32 bg-brand-dark text-white overflow-hidden">
      
      {/* Background Noise/Texture específica desta seção */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header da Seção */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <span className="title-reveal block text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4">
            Transformações
          </span>
          <h2 className="title-reveal text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Resultados que <span className="italic text-brand-gold/80">falam</span> por si mesmos.
          </h2>
          <p className="title-reveal text-white/60 text-lg md:text-xl font-light">
            Não é mágica, é fisiologia aplicada. Veja o que acontece quando unimos ciência e constância.
          </p>
        </div>

        {/* Grid de Antes/Depois */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {transformations.map((item) => (
            <ComparisonSlider 
              key={item.id}
              name={item.name}
              result={item.result}
              time={item.time}
              before={item.before}
              after={item.after}
            />
          ))}
        </div>

        {/* Citação Final */}
        <div className="mt-32 text-center border-t border-white/10 pt-20">
          <p className="text-2xl md:text-4xl font-serif italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            "Eu achava impossível ter o corpo que queria sem passar fome. A Anna me mostrou um caminho de liberdade."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <span className="block font-bold text-white">Mariana S.</span>
              <span className="text-xs text-brand-accent uppercase tracking-widest">Paciente há 2 anos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;