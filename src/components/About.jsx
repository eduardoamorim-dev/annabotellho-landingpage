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
    const mm = gsap.matchMedia();
    
    // Pin only on desktop
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageRef.current,
        scrub: true
      });
    });

    // Parallax on background image
    gsap.to(".about-bg-image", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -100,
      scale: 1.1,
      ease: "none"
    });

    // Text reveal - "Mente & Corpo"
    gsap.from(".about-title-line", {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 60%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Right side content reveal
    gsap.from(".about-content > *", {
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    // Counter animation
    const counters = gsap.utils.toArray(".counter-number");
    counters.forEach((counter) => {
      const target = counter.getAttribute("data-target");
      const isDecimal = target.includes("2.5");
      const isPercent = target.includes("%");
      const endValue = isDecimal ? 2.5 : isPercent ? 98 : parseFloat(target);
      
      const obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
        },
        val: endValue,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (isDecimal) {
            counter.textContent = obj.val.toFixed(1) + "k+";
          } else if (isPercent) {
            counter.textContent = Math.floor(obj.val) + "%";
          } else {
            counter.textContent = Math.floor(obj.val);
          }
        }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <section id="manifesto" ref={container} className="relative w-full flex flex-col md:flex-row bg-brand-bg">
      
      {/* Lado Esquerdo (Sticky Imagem) */}
      <div ref={imageRef} className="w-full md:w-1/2 h-[50vh] md:h-screen bg-brand-dark relative overflow-hidden flex items-center justify-center">
        {/* Background image with parallax */}
        <div
          className="about-bg-image absolute inset-0 opacity-65 mix-blend-overlay bg-cover bg-center grayscale scale-110"
          style={{ backgroundImage: `url(${annaTestmonial})` }}
        ></div>
        <div className="relative z-10 text-center p-10">
          <h2 className="text-6xl md:text-8xl font-serif text-brand-bg italic">
            <span className="about-title-line block">Mente</span>
            <span className="about-title-line block">& Corpo</span>
          </h2>
        </div>
      </div>

      {/* Lado Direito (Texto Scrollável) */}
      <div className="about-content w-full md:w-1/2 py-32 px-10 md:px-24 flex flex-col justify-center space-y-20">
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
              <span className="counter-number block text-4xl font-bold text-brand-dark mb-1" data-target="2.5k+">2.5k+</span>
              <span className="text-xs uppercase tracking-widest text-brand-dark/50">Pacientes Atendidos</span>
            </div>
            <div>
              <span className="counter-number block text-4xl font-bold text-brand-dark mb-1" data-target="98%">98%</span>
              <span className="text-xs uppercase tracking-widest text-brand-dark/50">Taxa de Adesão</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default About;