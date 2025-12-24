
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GRAPHIC_WORKS, MOTION_WORKS } from '../constants';
import { Theme } from '../types';

interface ProjectDetailProps {
  theme: Theme;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ theme }) => {
  const { id } = useParams<{ id: string }>();
  const isLight = theme === 'light';

  const project = [...GRAPHIC_WORKS, ...MOTION_WORKS].find(p => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) return (
    <div className="py-40 text-center animate-pulse">
      <h1 className="text-5xl mb-8 font-bold">Project Not Found</h1>
      <Link to="/" className="text-xl border-b border-current pb-2 hover:opacity-50 transition-all">Return to Archive</Link>
    </div>
  );

  if (isLight) {
    // Light Mode: Minimalist Magazine Layout
    return (
      <div className="animate-in fade-in duration-1000 max-w-5xl mx-auto px-4 md:px-0">
        <nav className="mb-12 md:mb-20">
          <Link to={project.category === 'graphic' ? '/' : '/motion'} className="text-[14pt] font-bold tracking-widest opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
            <span>←</span> INDEX
          </Link>
        </nav>

        <header className="mb-16 md:mb-24 border-b border-black pb-8 md:pb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-6 md:gap-8">
            <h1 className="text-4xl md:text-7xl font-garamond font-bold tracking-tighter leading-none">
              {project.title}
            </h1>
            <div className="flex gap-6 md:gap-8 text-[12pt] md:text-[14pt] font-bold opacity-60 uppercase tracking-widest font-calibri">
              <span>{project.category}</span>
              <span>2024</span>
            </div>
          </div>
        </header>

        <div className="w-full mb-16 md:mb-32 bg-slate-50 overflow-hidden shadow-sm">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="mb-24 md:mb-40 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-8">
            <p className="text-[16pt] md:text-[20pt] leading-snug font-garamond font-medium mb-8 md:mb-12 opacity-90">
              {project.description}
            </p>
            <div className="text-[14pt] leading-relaxed opacity-70 space-y-6 font-calibri max-w-2xl">
              <p>
                Our approach focused on creating a design system that balances editorial elegance with functional clarity. Every element was carefully placed to ensure a seamless visual journey across all touchpoints.
              </p>
              <p>
                By utilizing a disciplined typographic hierarchy and a restrained color palette, we established a brand identity that feels both contemporary and timeless.
              </p>
            </div>
          </div>
          <div className="md:col-span-4 md:border-l md:border-black/10 md:pl-8 pt-2">
             <div className="space-y-8 md:space-y-10">
               <div>
                 <h4 className="text-[10pt] uppercase tracking-[0.2em] font-bold opacity-40 mb-2">Service</h4>
                 <p className="text-[13pt] md:text-[14pt] font-bold font-garamond">Brand Identity / Strategy</p>
               </div>
               <div>
                 <h4 className="text-[10pt] uppercase tracking-[0.2em] font-bold opacity-40 mb-2">Team</h4>
                 <p className="text-[13pt] md:text-[14pt] font-bold font-garamond">H_Jeong Collective</p>
               </div>
               <div>
                 <h4 className="text-[10pt] uppercase tracking-[0.2em] font-bold opacity-40 mb-2">Duration</h4>
                 <p className="text-[13pt] md:text-[14pt] font-bold font-garamond">6 Months</p>
               </div>
             </div>
          </div>
        </section>

        <section className="space-y-16 md:space-y-24">
          {project.galleryImages.map((img, index) => (
            <div key={index} className="w-full">
              <img 
                src={img} 
                alt={`${project.title} detail ${index + 1}`} 
                className="w-full h-auto grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              />
              <div className="mt-4 text-[10pt] uppercase tracking-widest opacity-30 font-bold flex justify-between">
                <span>Figure No.0{index + 1}</span>
                <span className="hidden md:block">{project.title} Archive</span>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-32 md:mt-56 pt-12 border-t border-black flex justify-between items-center text-[12pt] md:text-[14pt] font-bold uppercase tracking-[0.3em]">
          <Link to="/" className="opacity-40 hover:opacity-100 transition-opacity">Prev</Link>
          <Link to="/" className="opacity-40 hover:opacity-100 transition-opacity">Next</Link>
        </footer>
      </div>
    );
  }

  // Dark Mode: Immersive iOS-style Layout
  return (
    <div className="animate-in slide-in-from-bottom-12 duration-1000">
      <Link to={project.category === 'graphic' ? '/' : '/motion'} className="inline-block mb-12 md:mb-16 opacity-60 hover:opacity-100 transition-all uppercase tracking-[0.2em] text-[14pt] font-bold px-4 md:px-0">
        ← Back to Index
      </Link>

      <div className="w-full mb-16 md:mb-24 overflow-hidden shadow-2xl rounded-[2rem] md:rounded-[3rem]">
        <img 
          src={project.heroImage} 
          alt={project.title} 
          className="w-full aspect-[16/10] md:aspect-[21/9] object-cover hover:scale-105 transition-transform duration-[3s]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-24 md:mb-40 px-4 md:px-0">
        <div className="md:col-span-8">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 md:mb-12 leading-[0.9] font-sans uppercase">
            {project.title}
          </h1>
          <div className="text-[14pt] md:text-[18pt] leading-relaxed max-w-3xl opacity-90 space-y-6 md:space-y-8 font-sans">
            <p>{project.description}</p>
            <p className="opacity-60">
              The challenge was to create a cohesive visual ecosystem that feels both timeless and innovative. By stripping away the unnecessary, we revealed the core essence of the brand and its unique positioning in the market.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-8 md:gap-10 pt-4 font-sans">
          <div className="pb-6 border-b border-white/10">
            <span className="block opacity-60 text-[10pt] md:text-[12pt] uppercase tracking-widest mb-3 font-bold">Discipline</span>
            <span className="text-[16pt] md:text-[18pt] font-bold">Visual Identity / Strategy</span>
          </div>
          <div className="pb-6 border-b border-white/10">
            <span className="block opacity-60 text-[10pt] md:text-[12pt] uppercase tracking-widest mb-3 font-bold">Agency</span>
            <span className="text-[16pt] md:text-[18pt] font-bold">H_Jeong Studio</span>
          </div>
          <div className="pb-6 border-b border-white/10">
            <span className="block opacity-60 text-[10pt] md:text-[12pt] uppercase tracking-widest mb-3 font-bold">Year</span>
            <span className="text-[16pt] md:text-[18pt] font-bold">2024</span>
          </div>
        </div>
      </div>

      <div className="space-y-12 md:space-y-16 px-4 md:px-0">
        {project.galleryImages.map((img, index) => (
          <div 
            key={index} 
            className="w-full group overflow-hidden transition-all duration-700 rounded-[2rem] md:rounded-[3rem]"
          >
            <img 
              src={img} 
              alt={`${project.title} detail ${index + 1}`} 
              className="w-full h-auto transition-all duration-[2s] group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-32 md:mt-64 pt-16 border-t border-white/20 flex justify-between items-center text-[14pt] md:text-[16pt] uppercase tracking-[0.4em] font-bold opacity-60 px-4 md:px-0">
        <Link to="/" className="hover:opacity-100 transition-opacity">Prev</Link>
        <Link to="/" className="hover:opacity-100 transition-opacity">Next</Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
