
import React from 'react';
import { Link } from 'react-router-dom';
import { GRAPHIC_WORKS } from '../constants';
import { Theme } from '../types';

interface HomeProps {
  theme: Theme;
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  const isLight = theme === 'light';

  /**
   * Professional Rhythmic Layout for Light Mode
   * Updated spacing for mobile (mb-12) vs desktop (mb-40)
   */
  const getLightLayoutProps = (idx: number) => {
    const layoutMap: Record<number, { span: string, mb: string, aspect: string }> = {
      0: { span: 'md:col-span-12', mb: 'mb-12 md:mb-40', aspect: 'aspect-[21/9]' },       // 1: Hero
      1: { span: 'md:col-span-6', mb: 'mb-12 md:mb-40', aspect: 'aspect-[4/5]' },        // 2: Duo Left
      2: { span: 'md:col-span-6', mb: 'mb-12 md:mb-40', aspect: 'aspect-[4/5]' },        // 3: Duo Right
      3: { span: 'md:col-span-10 md:col-start-2', mb: 'mb-12 md:mb-40', aspect: 'aspect-[21/10]' }, // 4: Inset Hero
      4: { span: 'md:col-span-4', mb: 'mb-12 md:mb-40', aspect: 'aspect-square' },       // 5: Trio 1
      5: { span: 'md:col-span-4', mb: 'mb-12 md:mb-40', aspect: 'aspect-square' },       // 6: Trio 2
      6: { span: 'md:col-span-4', mb: 'mb-12 md:mb-40', aspect: 'aspect-square' },       // 7: Trio 3
      7: { span: 'md:col-span-8', mb: 'mb-12 md:mb-40', aspect: 'aspect-[16/9]' },       // 8: Wide
      8: { span: 'md:col-span-4', mb: 'mb-12 md:mb-40', aspect: 'aspect-[3/4]' },        // 9: Slim
      9: { span: 'md:col-span-12', mb: 'mb-12 md:mb-40', aspect: 'aspect-[21/7]' },      // 10: Full Width
      10: { span: 'md:col-span-6', mb: 'mb-12 md:mb-40', aspect: 'aspect-video' },       // 11: Duo A
      11: { span: 'md:col-span-6', mb: 'mb-12 md:mb-40', aspect: 'aspect-video' },       // 12: Duo B
    };
    return layoutMap[idx] || { span: 'md:col-span-6', mb: 'mb-12 md:mb-40', aspect: 'aspect-video' };
  };

  return (
    <div className="animate-in fade-in duration-1000">
      <header className={`mb-24 md:mb-56 pb-16 md:pb-24 transition-all duration-500 ${isLight ? 'border-b border-black relative' : ''}`}>
        {isLight && (
          <div className="absolute top-0 right-0 text-[14pt] tracking-[0.2em] uppercase font-bold opacity-60 mt-[-2.5rem] hidden md:block">
            Selected Archive / 2025
          </div>
        )}
        <h1 className={`text-6xl md:text-[7.5rem] font-bold tracking-tighter mb-10 leading-[0.85] ${isLight ? 'font-garamond' : 'font-sans uppercase'}`}>
          Work
        </h1>
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-8`}>
          <p className={`text-[18pt] md:text-[22pt] max-w-2xl opacity-80 leading-tight ${isLight ? 'font-garamond' : 'font-sans'}`}>
            Curating visual narratives through brand systems and editorial precision.
          </p>
          <div className={`text-[14pt] tracking-[0.2em] opacity-60 uppercase font-bold ${isLight ? 'font-garamond' : 'font-sans'}`}>
            INDEX 21—24
          </div>
        </div>
      </header>

      {/* Grid Section */}
      <section className="transition-all duration-500">
        <div className={`grid grid-cols-1 md:grid-cols-12 ${isLight ? 'gap-x-12 gap-y-8 md:gap-y-12' : 'gap-x-16 gap-y-16'}`}>
          {GRAPHIC_WORKS.map((work, idx) => {
            const hasBlackLine = isLight && (idx === 1 || idx === 2 || idx === 4 || idx === 5);
            
            if (isLight) {
              const layout = getLightLayoutProps(idx);
              return (
                <div 
                  key={work.id} 
                  className={`${layout.span} ${layout.mb} flex flex-col group`}
                >
                  <Link 
                    to={`/work/${work.id}`}
                    className={`w-full relative transition-all duration-700 flex flex-col h-full ${hasBlackLine ? 'pb-10 md:pb-20 border-b border-black' : ''}`}
                  >
                    <div className={`overflow-hidden relative shadow-sm mb-6 md:mb-10 bg-slate-50 ${layout.aspect}`}>
                      <img 
                        src={work.heroImage} 
                        alt={work.title} 
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                      />
                    </div>

                    <div className="mt-auto flex flex-col space-y-3 md:space-y-5">
                      <div className="flex justify-between items-baseline">
                        <h2 className="text-3xl md:text-5xl font-garamond font-bold tracking-tighter group-hover:tracking-normal transition-all duration-700">
                          {work.title}
                        </h2>
                      </div>
                      <div className="flex justify-between items-center text-[14pt] uppercase tracking-[0.1em] font-bold opacity-60 border-t border-black/10 pt-3 md:pt-5">
                        <span className="font-calibri">Identity / Branding</span>
                        <span className="group-hover:translate-x-3 transition-transform duration-500">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <path d="M3 12H21M21 12L15 6M21 12L15 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }

            // Dark Mode Layout (Clean iOS-style 2-column)
            return (
              <Link 
                key={work.id} 
                to={`/work/${work.id}`}
                className="md:col-span-6 group relative rounded-[2rem] bg-ios-card overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl mb-8 md:mb-0"
              >
                <div className="aspect-[1.5/1] overflow-hidden relative">
                  <img 
                    src={work.heroImage} 
                    alt={work.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 transition-all duration-500 flex flex-col items-center justify-center p-12 text-center bg-black/70 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4 uppercase tracking-tighter text-white">
                        {work.title}
                      </h2>
                      <div className="w-12 h-0.5 bg-white/40 mx-auto mb-4"></div>
                      <p className="text-[14pt] uppercase tracking-[0.3em] opacity-80 text-white">Art Direction — 2024</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
