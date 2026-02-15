import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import annaBotelho from '../assets/anna-botelho.png';
import avatar from '../assets/avatar.jpg';

const Hero = () => {
  const container = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. ANIMAÇÃO DE TEXTO
    tl.from(".hero-line-inner", {
      yPercent: 100,
      duration: 1.2,
      stagger: 0.15,
      rotateX: 10,
      opacity: 0,
    });

    // 2. DESCRIÇÃO E BOTÃO
    tl.from(".hero-fade", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1
    }, "-=0.6");

    // 3. IMAGEM
    tl.from(".hero-img-container", {
      x: 100,
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.0");

    // 4. BADGE FLUTUANTE
    tl.from(".hero-badge", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.5");

  }, { scope: container });

  // Efeito Magnético Refinado no Botão
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Atualiza variáveis CSS para o gradiente de luz
      btn.style.setProperty('--mouse-x', `${x}px`);
      btn.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
      gsap.to(btn, { 
        scale: 1.02, 
        duration: 0.4, 
        ease: "power2.out" 
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, { 
        scale: 1, 
        duration: 0.4, 
        ease: "power2.out" 
      });
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="inicio" ref={container} className="relative w-full min-h-screen lg:min-h-[110vh] flex items-center bg-brand-bg overflow-hidden pt-24 pb-8 lg:pt-20 lg:pb-0">
      
      {/* Decoração de Fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4E6C8] rounded-full blur-[120px] opacity-40 pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 h-full items-center relative z-10">
        
        {/* --- COLUNA ESQUERDA (Texto + CTA) --- */}
        <div className="lg:col-span-7 flex flex-col justify-center z-20 pt-10 lg:pt-0">
          
          {/* Tag Superior */}
          <div className="hero-fade mb-8 flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full border border-brand-dark/20 bg-white/50 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-brand-dark">
              Nutrição Clínica & Esportiva
            </div>
            <span className="h-px w-10 bg-brand-dark/20"></span>
            <span className="text-xs font-bold text-brand-dark/50 uppercase tracking-widest">CRN9 13730</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] text-brand-dark font-sans tracking-tight mb-8">
            
            {/* Linha 1 */}
            <div className="overflow-hidden pb-3"> {/* Padding para não cortar descidas */}
              <span className="hero-line-inner block font-bold">
                Construa o corpo
              </span>
            </div>
            
            {/* Linha 2 */}
            <div className="overflow-hidden pb-3">
              <div className="hero-line-inner block">
                <span className="font-bold">que você </span>
                <span className="font-serif italic font-normal text-brand-accent pr-4">deseja.</span>
              </div>
            </div>
            
            {/* Linha 3 */}
            <div className="overflow-hidden mt-2 pb-3">
               <span className="hero-line-inner block text-2xl md:text-4xl lg:text-[2.8rem] font-medium leading-tight text-brand-dark/80 max-w-2xl">
                Sem sofrer, comendo o que gosta!
               </span>
            </div>
          </h1>

          {/* Botão Premium */}
          <div className="hero-fade mt-6 flex flex-col md:flex-row items-start md:items-center gap-8">
            <a 
              href="https://wa.me/5534988437882?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noreferrer"
              ref={btnRef} 
              className="group relative bg-brand-dark hover:bg-brand-accent text-white rounded-full px-9 py-4 shadow-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 overflow-hidden"
              style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
            >
              {/* Glow effect que segue o mouse */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div 
                  className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full blur-xl"
                  style={{ left: 'var(--mouse-x)', top: 'var(--mouse-y)' }}
                />
              </div>
              
              {/* Borda brilhante no hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-brand-accent/0 via-brand-accent/50 to-brand-accent/0 blur-sm" />
              
              {/* Conteúdo */}
              <span className="relative z-10 flex items-center gap-4 font-bold text-lg tracking-wide">
                Agendar Consulta
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>

            <p className="text-sm text-brand-dark/60 max-w-[200px] leading-relaxed font-medium">
              Atendimento presencial e online para todo o Brasil.
            </p>
          </div>
        </div>

        {/* --- COLUNA DIREITA (Imagem Grande) --- */}
        <div className="lg:col-span-5 relative h-auto lg:h-full flex items-end justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Container da imagem */}
            <div className="hero-img-container relative z-10 w-[280px] sm:w-[350px] lg:w-[130%] lg:max-w-[800px] lg:absolute lg:bottom-0 lg:right-[-5%] lg:translate-y-16">
                <img 
                    src={annaBotelho} 
                    alt="Nutricionista Anna Botelho" 
                    className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none"
                    style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />

                {/* Badge ajustado para mobile e desktop */}
                <a
                  href="https://www.instagram.com/nutriannabotelho/"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-badge absolute bottom-[15%] sm:bottom-[12%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:-left-12 lg:bottom-10 bg-white/90 backdrop-blur-md p-2 sm:p-3 lg:p-4 pr-3 sm:pr-4 lg:pr-6 rounded-xl lg:rounded-2xl flex items-center gap-2 sm:gap-3 lg:gap-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white z-50 animate-float cursor-pointer [&_*]:pointer-events-none"
                >
                    <div className="relative">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-brand-bg">
                          <img src={avatar} alt="Avatar" className="w-full h-full object-cover"/>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-brand-dark text-xs sm:text-sm lg:text-lg leading-none mb-0.5 lg:mb-1">Anna Botelho</span>
                        <span className="text-[9px] sm:text-[10px] lg:text-xs text-brand-dark/60 font-medium uppercase tracking-wider">@nutriannabotelho</span>
                    </div>
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;