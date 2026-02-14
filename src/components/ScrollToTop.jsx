import React, { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const checkSection = () => {
      setVisible(window.scrollY > 400);
      
      // Detecta se está em seção escura
      const darkSections = document.querySelectorAll('#metodologia, #historias');
      const buttonY = window.innerHeight - 80; // posição do botão na tela
      
      let inDark = false;
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < buttonY && rect.bottom > buttonY) {
          inDark = true;
        }
      });
      setIsDarkSection(inDark);
    };
    
    window.addEventListener('scroll', checkSection);
    checkSection();
    return () => window.removeEventListener('scroll', checkSection);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${
        isDarkSection 
          ? 'bg-brand-bg text-brand-dark hover:bg-white' 
          : 'bg-brand-dark text-white hover:bg-brand-accent'
      }`}
      aria-label="Voltar ao topo"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="currentColor" 
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
