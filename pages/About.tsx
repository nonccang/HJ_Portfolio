
import React from 'react';
import { Theme } from '../types';

interface AboutProps {
  theme: Theme;
}

const About: React.FC<AboutProps> = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <div className="animate-in slide-in-from-left-12 duration-1000">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start transition-all duration-500 ${isLight ? 'pb-20 md:pb-40 mb-20 md:mb-40' : ''}`}>
        <div className="lg:col-span-8">
          <h1 className={`text-5xl md:text-[7rem] font-bold tracking-tighter leading-[0.85] mb-12 md:mb-16 ${isLight ? 'font-garamond' : 'font-sans uppercase'}`}>
            Design <br className="hidden md:block"/>As Language.
          </h1>
          <div className={`space-y-10 md:space-y-12 text-2xl md:text-4xl leading-snug font-medium ${isLight ? 'font-calibri' : 'font-sans'}`}>
            <p className="max-w-4xl">
              I am a visual designer based in Seoul. I navigate the intersection of brand strategy and artistic expression, creating digital and physical experiences that resonate.
            </p>
            <p className="opacity-70 max-w-3xl leading-relaxed text-xl md:text-2xl font-normal">
              My practice is a continuous dialogue between the precision of code and the warmth of traditional typography. I believe that every pixel should serve a purpose and every white space should breathe.
            </p>
          </div>
          
          <div className="mt-20 md:mt-32">
             <img 
              src="https://picsum.photos/id/445/1200/600" 
              alt="Studio context" 
              className={`w-full aspect-[21/9] object-cover filter transition-all duration-[3s] hover:grayscale-0 ${isLight ? 'grayscale brightness-105' : 'rounded-[3rem]'}`} 
            />
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-40">
          <div className={`p-8 md:p-12 transition-all duration-500 ${isLight ? 'border-t md:border-t-0 md:border-l border-black' : 'bg-ios-card rounded-[3rem] shadow-2xl p-16'}`}>
            {/* 14pt 기준 준수를 위해 text-xs에서 text-lg로 변경, 대비 향상을 위해 opacity 증가 */}
            <h2 className="text-lg font-bold mb-10 md:mb-16 uppercase tracking-[0.4em] opacity-60">Contact & Info</h2>
            <div className="space-y-16 md:space-y-24">
              <div className={isLight ? 'border-b border-black/20 pb-8' : ''}>
                <p className="text-lg uppercase opacity-60 mb-3 tracking-widest font-bold font-calibri">Inquiries</p>
                <a href="mailto:hello@h-jeong.design" className={`text-xl md:text-3xl font-bold hover:opacity-50 transition-opacity pb-1 break-words ${isLight ? 'font-garamond italic' : ''}`}>hello@h-jeong.design</a>
              </div>
              <div className={isLight ? 'border-b border-black/20 pb-8' : ''}>
                <p className="text-lg uppercase opacity-60 mb-3 tracking-widest font-bold font-calibri">Location</p>
                <p className={`text-xl md:text-2xl font-medium leading-tight ${isLight ? 'font-garamond' : ''}`}>Gangnam District,<br/>Seoul, KR</p>
              </div>
              <div>
                <p className="text-lg uppercase opacity-60 mb-6 tracking-widest font-bold font-calibri">Elsewhere</p>
                <div className="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-4 text-xl font-bold">
                  <a href="#" className="hover:opacity-40 transition-opacity underline decoration-1 underline-offset-4">IG</a>
                  <a href="#" className="hover:opacity-40 transition-opacity underline decoration-1 underline-offset-4">BE</a>
                  <a href="#" className="hover:opacity-40 transition-opacity underline decoration-1 underline-offset-4">LI</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 px-6 text-lg opacity-60 uppercase tracking-[0.2em] font-bold leading-loose">
            <p>OPEN FOR PROJECTS — Q1 2025</p>
            <p>LAST UPDATED: NOV 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
