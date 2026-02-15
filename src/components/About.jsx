import React, { useRef } from 'react';
import annaTestmonial from '../assets/anna-testmonial.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Só aplica o pin no desktop (md: 768px+)
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageRef.current,
        scrub: true
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section id="manifesto" ref={container} className="relative w-full flex flex-col md:flex-row bg-brand-bg">
      
      {/* Lado Esquerdo (Sticky Imagem) */}
      <div ref={imageRef} className="w-full md:w-1/2 h-[50vh] md:h-screen bg-brand-dark relative overflow-hidden flex items-center justify-center">
        {/* Placeholder artistico para outra foto ou textura */}
        <div
          className="absolute inset-0 opacity-65 mix-blend-overlay bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${annaTestmonial})` }}
        ></div>
        <div className="relative z-10 text-center p-10">
          <h2 className="text-6xl md:text-8xl font-serif text-brand-bg italic">Mente<br/>& Corpo</h2>
        </div>
      </div>

      {/* Lado Direito (Texto Scrollável) */}
      <div className="w-full md:w-1/2 py-32 px-10 md:px-24 flex flex-col justify-center space-y-20">
        <div>
          <h3 className="text-brand-accent font-bold uppercase tracking-widest mb-6 text-sm">O Manifesto</h3>
          <p className="text-2xl md:text-3xl font-serif leading-snug text-brand-dark">
            "Não acredito em dietas que têm data para acabar. Acredito em construir uma autonomia alimentar que dura a vida toda."
          </p>
        </div>

        <div className="space-y-8 text-brand-dark/70 font-sans text-lg leading-relaxed">
          <p>
            Minha jornada na nutrição começou quando percebi que a maioria das abordagens focava apenas na caloria, ignorando o comportamento humano.
          </p>
          <p>
            Sou formada em Nutrição pelo UNICERP e especialista em nutrição esportiva. Meu trabalho é unir a precisão técnica da bioquímica com a flexibilidade necessária para a vida moderna, ajudando você a alcançar seus objetivos de forma sustentável.
          </p>
        </div>

        <div className="pt-10 border-t border-brand-dark/10">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="block text-4xl font-bold text-brand-dark mb-1">2.5k+</span>
              <span className="text-xs uppercase tracking-widest text-brand-dark/50">Pacientes Atendidos</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-brand-dark mb-1">98%</span>
              <span className="text-xs uppercase tracking-widest text-brand-dark/50">Taxa de Adesão</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default About;