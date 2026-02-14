import React, { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-35 h-35 rounded-full flex items-center justify-center">
            {/* Ícone ou Logo */}
            <span className="relative z-10 group-hover:scale-110 transition-transform"><img src={logo} alt="Logo Anna Botelho" className="w-10 h-10" /></span> 
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-brand-dark hidden md:block">
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
        <button className="md:hidden text-brand-dark p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;