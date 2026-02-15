import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComparisonSlider from './ComparisonSlider';

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  {
    id: 1,
    name: "Juliana Mendes",
    result: "-12kg",
    time: "4 Meses de Acompanhamento",
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
    // Texto principal - split text reveal effect
    const chars = gsap.utils.toArray(".title-char");
    
    gsap.from(".title-label", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      yPercent: 100,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".title-main", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      yPercent: 100,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(".title-sub", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Cards - entrada escalonada
    const cards = gsap.utils.toArray(".testimonial-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        delay: i * 0.15,
        ease: "power3.out"
      });
    });

    // Quote - reveal elegante
    gsap.from(".quote-text", {
      scrollTrigger: {
        trigger: ".quote-section",
        start: "top 80%",
      },
      yPercent: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(".quote-author", {
      scrollTrigger: {
        trigger: ".quote-section",
        start: "top 75%",
      },
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out"
    });

  }, { scope: container });

  return (
    <section id="historias" ref={container} className="relative py-32 bg-brand-dark text-white overflow-hidden">

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header da Seção */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <div className="mb-4" style={{ clipPath: 'inset(-20% -10% -20% -10%)' }}>
            <span className="title-label block text-brand-accent font-bold tracking-[0.2em] uppercase text-sm">
              Transformações
            </span>
          </div>
          <div className="mb-6" style={{ clipPath: 'inset(-20% -10% -20% -10%)' }}>
            <h2 className="title-main text-5xl md:text-7xl font-serif leading-tight">
              Resultados que <span className="italic">falam</span> por si mesmos.
            </h2>
          </div>
          <p className="title-sub text-white/60 text-lg md:text-xl font-light">
            Não é mágica, é fisiologia aplicada. Veja o que acontece quando unimos ciência e constância.
          </p>
        </div>

        {/* Grid de Antes/Depois */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {transformations.map((item) => (
            <div key={item.id} className="testimonial-card">
              <ComparisonSlider 
                name={item.name}
                result={item.result}
                time={item.time}
                before={item.before}
                after={item.after}
              />
            </div>
          ))}
        </div>

        {/* Citação Final */}
        <div className="quote-section mt-32 text-center border-t border-white/10 pt-20">
          <p className="quote-text text-2xl md:text-4xl font-serif italic text-white/80 max-w-3xl mx-auto leading-relaxed">
            "Eu achava impossível ter o corpo que queria sem passar fome. A Anna me mostrou um caminho de liberdade."
          </p>
          <div className="quote-author mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
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