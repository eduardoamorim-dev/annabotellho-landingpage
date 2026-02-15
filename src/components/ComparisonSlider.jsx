import React, { useState, useRef, useEffect } from 'react';

const ComparisonSlider = ({ before, after, name, result, time }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(50); // Porcentagem inicial
  const sliderRef = useRef(null);

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);
  
  const handleMouseMove = (e) => {
    if (!isResizing || !sliderRef.current) return;
    const { left, width: containerWidth } = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const newWidth = (x / containerWidth) * 100;
    setWidth(Math.min(Math.max(newWidth, 0), 100)); // Trava entre 0 e 100
  };

  // Suporte a Touch (Mobile)
  const handleTouchMove = (e) => {
    if (!sliderRef.current) return;
    const { left, width: containerWidth } = sliderRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - left;
    const newWidth = (x / containerWidth) * 100;
    setWidth(Math.min(Math.max(newWidth, 0), 100));
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div className="relative mb-16 last:mb-0">
      {/* Header do Card */}
      <div className="flex justify-between items-end mb-6 px-2">
        <div>
          <h3 className="text-3xl font-serif text-white">{name}</h3>
          <p className="text-brand-accent text-sm font-bold tracking-widest uppercase">{time}</p>
        </div>
        <div className="text-right">
          <span className="block text-4xl font-bold text-white">{result}</span>
          <span className="text-xs text-white/40 uppercase tracking-widest">Resultado Total</span>
        </div>
      </div>

      {/* O Slider em si */}
      <div 
        ref={sliderRef}
        className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-col-resize select-none group"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
      >
        {/* Imagem DEPOIS (Fundo) */}
        <img 
          src={after} 
          alt="Depois" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
        <div className="absolute top-6 right-6 bg-brand-accent/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white z-10">DEPOIS</div>

        {/* Imagem ANTES (Sobreposta com Clip-path) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden w-full"
          style={{ clipPath: `inset(0 ${100 - width}% 0 0)` }}
        >
          <img 
            src={before} 
            alt="Antes" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none grayscale brightness-75 filter transition-all duration-500" 
          />
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white">ANTES</div>
        </div>

        {/* A Barra de Controle (Handle) */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white/50 cursor-col-resize z-20 hover:bg-brand-accent transition-colors"
          style={{ left: `${width}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-90 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-brand-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;