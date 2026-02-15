import React, { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -100, duration: 1.5 });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      {/* Container Principal "Cápsula" */}
      <div 
        className={`w-[95%] md:w-[90%] max-w-7xl flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-brand-bg/80 backdrop-blur-xl border border-brand-dark/5 shadow-sm' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        
        {/* 1. LOGO */}
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
          <div className="w-35 h-35 rounded-full flex items-center justify-center">
            {/* Ícone ou Logo */}
            <span className="relative z-10 group-hover:scale-110 transition-transform"><img src={logo} alt="Logo Anna Botelho" className="w-8 h-8 sm:w-10 sm:h-10" /></span> 
          </div>
          <span className="font-serif font-bold text-base sm:text-xl tracking-tight text-brand-dark">
            Anna Botelho<span className="text-brand-accent">.</span>
          </span>
        </a>

        {/* 2. MENU CENTRAL */}
        <div className="hidden md:flex items-center gap-1 bg-brand-dark/5 p-1 rounded-full border border-brand-dark/5">
          {[
            { label: 'Metodologia', href: '#metodologia' },
            { label: 'Manifesto', href: '#manifesto' },
            { label: 'Histórias', href: '#historias' },
            { label: 'Contato', href: '#contato' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-brand-dark/70 hover:text-brand-dark hover:bg-white transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* 3. BOTÃO AGENDAR (Corrigido: Verde -> Vermelho) */}
        <div className="hidden md:block">
          <a href="https://wa.me/5534988437882?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noreferrer" className="rounded-full bg-brand-dark px-8 py-3 text-white shadow-lg hover:bg-brand-accent transition-colors duration-300 inline-flex">
            <span className="flex items-center gap-2 font-bold text-xs tracking-widest uppercase">
              Agendar
            </span>
          </a>
        </div>

        {/* Menu Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-brand-dark p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>

      </div>

      {/* Menu Mobile Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full px-4 transition-all duration-300 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-brand-dark/5 p-6 mt-2">
          <div className="flex flex-col gap-2">
            {[
              { label: 'Metodologia', href: '#metodologia' },
              { label: 'Manifesto', href: '#manifesto' },
              { label: 'Histórias', href: '#historias' },
              { label: 'Contato', href: '#contato' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest text-brand-dark/70 hover:text-brand-dark hover:bg-brand-dark/5 transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5534988437882?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank" 
              rel="noreferrer" 
              className="mt-4 rounded-full bg-brand-dark px-6 py-3 text-white text-center font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors duration-300"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;