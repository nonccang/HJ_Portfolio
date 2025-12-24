
import React from 'react';
import { Link } from 'react-router-dom';
import { MOTION_WORKS } from '../constants';
import { Theme } from '../types';

interface MotionProps { theme: Theme; }

const Motion: React.FC<MotionProps> = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in fade-in duration-1000">
      <header className={`mb-24 md:mb-40 pb-16 md:pb-24 transition-all duration-500 ${isLight ? 'border-b border-black' : ''}`}>
        <h1 className={`text-6xl md:text-[7rem] font-bold tracking-tighter mb-10 leading-none ${isLight ? 'font-garamond' : 'font-sans uppercase'}`}>
          Motion <br className="hidden md:block"/>Storytelling
        </h1>
        <p className={`text-[16pt] md:text-[18pt] max-w-2xl opacity-70 leading-relaxed ${isLight ? 'font-garamond' : 'font-sans'}`}>
          Exploring the boundaries between time and visual space. Every movement is a deliberate stroke in a larger narrative.
        </p>
      </header>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 transition-all duration-500 ${isLight ? 'pb-20 md:pb-40 mb-20 md:mb-40' : ''}`}>
        {MOTION_WORKS.map((work, idx) => (
          <Link 
            key={work.id} 
            to={`/work/${work.id}`}
            className={`group relative transition-all duration-700 mb-8 md:mb-0 ${isLight ? 'hover:translate-y-[-8px]' : 'rounded-[2.5rem] bg-ios-card p-4 hover:shadow-2xl'}`}
          >
            <div className={`overflow-hidden mb-6 md:mb-10 transition-all duration-700 ${isLight ? 'shadow-lg' : 'rounded-[2rem]'}`}>
              <img 
                src={work.heroImage} 
                alt={work.title} 
                className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className={`flex justify-between items-start ${isLight ? 'px-0 pt-4 border-t border-black/10' : 'px-6 pb-6'}`}>
              <div className="space-y-2">
                <h2 className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${isLight ? 'font-garamond tracking-tighter' : 'font-sans'}`}>
                  {work.title}
                </h2>
                <p className="text-[14pt] opacity-40 uppercase tracking-widest font-calibri">2D / 3D Animation</p>
              </div>
              
              <div className={`transition-all duration-500 ${isLight ? 'group-hover:translate-x-3' : 'w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black'}`}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                  <path d="M3 12H21M21 12L15 6M21 12L15 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Motion;
