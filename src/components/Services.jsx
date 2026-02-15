import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { id: '01', title: 'Hipertrofia Cognitiva', category: 'Performance', desc: 'Protocolos de ganho de massa alinhados ao pico de performance mental.' },
  { id: '02', title: 'Emagrecimento Metabólico', category: 'Saúde', desc: 'Estratégias hormonais para queima de gordura sem perda de energia.' },
  { id: '03', title: 'Reeducação Comportamental', category: 'Hábito', desc: 'Ferramentas da neurociência para mudar sua relação com o prato.' },
  { id: '04', title: 'Nutrição Esportiva', category: 'Atleta', desc: 'Suporte nutricional completo para pré, intra e pós treino.' },
];

const Services = () => {
  const [active, setActive] = useState(null);
  const container = useRef(null);

  useGSAP(() => {
    // Header reveal com clip-path
    gsap.from(".services-header", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      yPercent: 100,
      duration: 1.2,
      ease: "power4.out"
    });

    gsap.from(".services-subtitle", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Service items - reveal com linha expandindo
    const items = gsap.utils.toArray(".service-item");
    items.forEach((item, i) => {
      const title = item.querySelector(".service-title");
      const line = item.querySelector(".service-line");
      const num = item.querySelector(".service-num");
      
      // Entrada inicial
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power2.out"
      });

      gsap.from(title, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        yPercent: 100,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
      });

      // Hover effect
      item.addEventListener("mouseenter", () => {
        gsap.to(title, { x: 30, duration: 0.5, ease: "power3.out" });
        gsap.to(line, { scaleX: 1, duration: 0.5, ease: "power3.out" });
        gsap.to(num, { scale: 1.2, color: "#D4A373", duration: 0.3 });
      });
      
      item.addEventListener("mouseleave", () => {
        gsap.to(title, { x: 0, duration: 0.5, ease: "power3.out" });
        gsap.to(line, { scaleX: 0, duration: 0.5, ease: "power3.out" });
        gsap.to(num, { scale: 1, color: "#D4A373", duration: 0.3 });
      });
    });

  }, { scope: container });

  return (
    <section id="metodologia" ref={container} className="py-32 px-6 md:px-12 bg-brand-dark text-brand-bg relative z-10 rounded-t-[4rem] -mt-20 overflow-hidden">
      
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-b border-white/10 pb-8">
          <div style={{ clipPath: 'inset(-10% -10% -20% -10%)' }}>
            <h2 className="services-header text-5xl md:text-7xl font-serif">Expertise.</h2>
          </div>
          <p className="services-subtitle md:w-1/3 mt-6 md:mt-0 text-white/60 font-sans">
            Métodos validados cientificamente, aplicados de forma personalizada para sua biologia única.
          </p>
        </div>

        <div className="services-list flex flex-col">
          {servicesData.map((s, i) => (
            <div 
              key={s.id}
              className="service-item group border-b border-white/10 py-8 md:py-10 cursor-pointer relative"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Linha de hover que expande */}
              <div className="service-line absolute bottom-0 left-0 w-full h-[1px] bg-brand-accent origin-left scale-x-0"></div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="service-num text-sm font-bold text-brand-accent tracking-widest w-32 shrink-0">{s.id} / {s.category}</span>
                <div className="flex-1" style={{ clipPath: 'inset(-20% -10% -20% -10%)' }}>
                  <h3 className="service-title text-3xl md:text-5xl font-serif">
                    {s.title}
                  </h3>
                </div>
                <div className={`md:w-64 transition-all duration-500 ${active === i ? 'opacity-100' : 'opacity-0 md:opacity-40'}`}>
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