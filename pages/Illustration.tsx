
import React from 'react';
import { ILLUSTRATIONS } from '../constants';
import { Theme } from '../types';

interface IllustrationProps {
  theme: Theme;
}

const Illustration: React.FC<IllustrationProps> = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in duration-1000">
      <header className={`mb-20 md:mb-40 pb-16 md:pb-24 transition-all duration-500 ${isLight ? 'border-b border-black' : ''}`}>
        <h1 className={`text-6xl md:text-[7rem] font-bold tracking-tighter mb-8 leading-none ${isLight ? 'font-garamond' : 'font-sans uppercase'}`}>
          Visual <br/>Notes
        </h1>
        <p className="text-[16pt] max-w-lg opacity-50 leading-relaxed">
          Daily sketches, digital brushwork, and the quiet pursuit of form. A visual diary of thoughts and textures.
        </p>
      </header>

      <div className={`columns-2 md:columns-3 lg:columns-4 gap-6 md:gap-8 space-y-6 md:space-y-8 transition-all duration-500 ${isLight ? 'pb-20 md:pb-40 mb-20 md:mb-40' : ''}`}>
        {ILLUSTRATIONS.map((src, i) => {
          const isShifted = i % 4 === 1 || i % 4 === 3;
          return (
            <div 
              key={i} 
              className={`break-inside-avoid overflow-hidden group transition-all duration-700 ${isShifted ? 'mt-6 md:mt-12' : ''} ${!isLight ? 'rounded-2xl shadow-xl' : 'hover:scale-[1.03]'}`}
            >
              <img 
                src={src} 
                alt={`Work ${i}`} 
                className="w-full h-auto object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-700" 
                loading="lazy" 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Illustration;
