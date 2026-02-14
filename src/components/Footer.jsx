import React from 'react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-bg pt-40 pb-10 px-6 md:px-12 border-t border-brand-dark/5">
      <div className="container mx-auto">
        
        {/* BIG CTA */}
        <div className="mb-32 text-center md:text-left">
          <h2 className="text-[12vw] leading-none font-serif text-brand-dark hover:italic transition-all duration-500 cursor-pointer">
            Vamos <span className="text-brand-accent">Conversar?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-end mt-10">
            <p className="text-xl md:w-1/3 text-brand-dark/60">
              Dê o primeiro passo para sua melhor versão. Agende sua avaliação inicial.
            </p>
            <a href="https://wa.me/5534988437882?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noreferrer" className="mt-8 md:mt-0 inline-flex items-center gap-4 px-10 py-5 bg-brand-dark text-white rounded-full font-bold text-lg hover:bg-brand-accent transition-colors duration-300">
              Agendar no WhatsApp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        {/* Rodapé Info */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-dark/10 pt-10 text-sm font-medium text-brand-dark/50 uppercase tracking-widest">
          <p>© 2026 Anna Botelho.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-dark">Instagram</a>
            <a href="#" className="hover:text-brand-dark">Linkedin</a>
          </div>
          <p className="mt-4 md:mt-0">Desenvolvido por <a href="https://www.instagram.com/eduardoamorim.dev/" target="_blank" rel="noreferrer" className="hover:text-brand-dark font-bold">Eduardo Amorim</a></p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;