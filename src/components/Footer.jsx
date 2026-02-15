import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Split "Vamos Conversar?" - cada palavra revela separado
    gsap.from(".footer-word", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      yPercent: 100,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });

    // Efeito zoom quando entra na viewport (scroll-triggered) - responsivo
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      gsap.to(".footer-cta-text h2", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
        scale: 1.15,
        transformOrigin: "left center",
        ease: "power2.out"
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(".footer-cta-text h2", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
        scale: 1.08,
        transformOrigin: "center center",
        ease: "power2.out"
      });
    });

    // Parallax sutil no texto grande conforme scrolla
    gsap.to(".footer-cta-text", {
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      },
      y: -80,
      ease: "none"
    });

    // Subtitle e botão
    gsap.from(".footer-subtitle", {
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 90%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".footer-btn", {
      scrollTrigger: {
        trigger: ".footer-content",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out"
    });

    // Bottom bar
    gsap.from(".footer-bar > *", {
      scrollTrigger: {
        trigger: ".footer-bar",
        start: "top 95%",
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

  }, { scope: container });

  // Efeito hover no botão
  useEffect(() => {
    const btn = document.querySelector(".footer-btn");
    if (!btn) return;

    const handleEnter = () => gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    const handleLeave = () => gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <footer id="contato" ref={container} className="bg-brand-bg pt-24 md:pt-40 pb-10 px-6 md:px-12 border-t border-brand-dark/5 relative overflow-hidden">

      <div className="container mx-auto relative z-10">
        
        {/* BIG CTA */}
        <div className="mb-20 md:mb-32 text-center md:text-left">
          <div className="footer-cta-text">
            <h2 ref={textRef} className="text-[11vw] md:text-[11vw] leading-[1.1] font-serif italic text-brand-dark origin-center md:origin-left">
              <span className="inline md:block" style={{ clipPath: 'inset(-20% -10% -20% -10%)' }}><span className="footer-word inline-block">Vamos</span></span>
              <span className="inline md:block" style={{ clipPath: 'inset(-20% -10% -20% -10%)' }}><span className="footer-word inline-block text-brand-accent"> Conversar?</span></span>
            </h2>
          </div>
          <div className="footer-content flex flex-col md:flex-row justify-between items-start md:items-end mt-10 gap-8">
            <p className="footer-subtitle text-xl md:w-1/3 text-brand-dark/60">
              Dê o primeiro passo para sua melhor versão. Agende sua avaliação inicial.
            </p>
            <a href="https://wa.me/5534988437882?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noreferrer" className="footer-btn inline-flex items-center gap-4 px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-lg hover:bg-brand-accent transition-colors duration-300">
              Agendar no WhatsApp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        {/* Rodapé Info */}
        <div className="footer-bar flex flex-col md:flex-row justify-between items-center border-t border-brand-dark/10 pt-10 text-sm font-medium text-brand-dark/50 uppercase tracking-widest">
          <p>© 2026 Anna Botelho.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://www.instagram.com/nutriannabotelho/" target="_blank" rel="noreferrer" className="hover:text-brand-dark transition-colors">Instagram</a>
          </div>
          <p className="mt-4 md:mt-0">Desenvolvido por <a href="https://www.instagram.com/eduardoamorim.dev/" target="_blank" rel="noreferrer" className="hover:text-brand-dark font-bold transition-colors">Eduardo Amorim</a></p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;