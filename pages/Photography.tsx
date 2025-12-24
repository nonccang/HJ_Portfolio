
import React from 'react';
import { PHOTOGRAPHY } from '../constants';
import { Theme } from '../types';

interface PhotographyProps {
  theme: Theme;
}

const Photography: React.FC<PhotographyProps> = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in duration-1000">
      <header className={`mb-20 md:mb-40 pb-16 md:pb-24 transition-all duration-500 flex flex-col md:flex-row md:items-end md:justify-between gap-12 ${isLight ? 'border-b border-black' : ''}`}>
        <div>
          <h1 className={`text-6xl md:text-[7rem] font-bold tracking-tighter leading-none ${isLight ? 'font-garamond' : 'font-sans uppercase'}`}>
            Fragments
          </h1>
          <p className="text-[16pt] opacity-60 mt-8 max-w-md leading-relaxed">
            Finding silence in the noise. Capturing light as it falls on the ordinary. 35mm film studies.
          </p>
        </div>
        <div className="text-[12pt] tracking-[0.5em] opacity-30 uppercase font-bold hidden md:block">
          VOLUME_01 [ 21—24 ]
        </div>
      </header>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 transition-all duration-500 ${isLight ? 'pb-20 md:pb-40 mb-20 md:mb-40' : ''}`}>
        {PHOTOGRAPHY.map((src, i) => {
          const isHero = i % 5 === 0;
          return (
            <div 
              key={i} 
              className={`overflow-hidden group transition-all duration-700 ${isHero ? 'md:col-span-2 aspect-[16/8]' : 'aspect-[4/5]'} ${!isLight ? 'rounded-[2rem] shadow-2xl' : 'shadow-sm hover:shadow-xl'}`}
            >
              <img 
                src={src} 
                alt={`Photo ${i}`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                loading="lazy" 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Photography;
