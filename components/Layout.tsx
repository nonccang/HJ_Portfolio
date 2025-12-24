
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Theme } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  theme: Theme;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'WORK', path: '/' },
    { label: 'MOTION', path: '/motion' },
    { label: 'ILLUSTRATION', path: '/illustration' },
    { label: 'PHOTOGRAPHY', path: '/photography' },
    { label: 'ABOUT', path: '/about' },
  ];

  const isLight = theme === 'light';

  // 여백을 대폭 확장: 초대형 화면(2xl)에서 px-80 적용
  const sidePadding = "px-10 md:px-24 lg:px-48 xl:px-64 2xl:px-80";

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-ios-blue selection:text-white ${isLight ? 'bg-white text-slate-900 font-calibri' : 'bg-black text-ios-text font-sans'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 py-10 flex justify-center backdrop-blur-md transition-all duration-300 ${isLight ? '' : 'border-b border-white/5'}`}>
        <div className={`w-full max-w-[1600px] flex justify-between items-center ${sidePadding}`}>
          <div>
            <Link to="/" className={`text-2xl font-bold tracking-tighter transition-all ${isLight ? 'font-garamond text-4xl' : 'font-sans'}`}>
              H_Jeong
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-16 items-center text-[14pt]">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`transition-all duration-300 hover:opacity-100 relative group font-bold tracking-widest ${location.pathname === item.path ? 'opacity-100' : 'opacity-60'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isLight ? 'bg-black' : 'bg-white'}`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 z-50 transition-transform active:scale-90"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isLight ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} ${isLight ? 'bg-black' : 'bg-white'}`}></span>
              <span className={`w-full h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''} ${isLight ? 'bg-black' : 'bg-white'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-inherit transition-all duration-500 ease-in-out flex flex-col items-center justify-center gap-12 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className={`text-6xl font-bold tracking-tighter transform transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${location.pathname === item.path ? 'opacity-100' : 'opacity-60'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Persistent Floating Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className={`fixed bottom-12 right-12 z-50 w-20 h-20 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center transform hover:scale-110 active:scale-95 group ${
          isLight ? 'bg-slate-900 text-white hover:bg-black' : 'bg-white text-black hover:bg-slate-100'
        }`}
        aria-label="Toggle Theme"
      >
        {isLight ? (
          <svg className="group-hover:rotate-12 transition-transform" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        ) : (
          <svg className="group-hover:rotate-90 transition-transform" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        )}
      </button>

      {/* Main Content Area */}
      <main className={`pt-48 pb-40 max-w-[1600px] mx-auto overflow-hidden ${sidePadding}`}>
        {children}
      </main>

      {/* Refined Footer */}
      <footer className={`flex justify-center py-32 text-[14pt] border-t transition-all duration-300 ${isLight ? 'border-black opacity-100 font-garamond' : 'border-white/10 opacity-80'}`}>
        <div className={`w-full max-w-[1600px] ${sidePadding}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold tracking-tighter">H_Jeong</h3>
              <p className="opacity-80 max-w-sm text-xl">A collection of visual experiments and refined design systems, navigating the boundaries of digital space.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 font-bold">
              <div className="flex flex-col gap-3">
                <span className="text-lg uppercase tracking-[0.3em] opacity-60 mb-4">Connect</span>
                <a href="#" className="hover:underline transition-all">INSTAGRAM</a>
                <a href="#" className="hover:underline transition-all">BEHANCE</a>
                <a href="#" className="hover:underline transition-all">LINKEDIN</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-lg uppercase tracking-[0.3em] opacity-60 mb-4">Say Hello</span>
                <a href="mailto:hello@h-jeong.design" className="hover:underline transition-all text-xl">hello@h-jeong.design</a>
              </div>
            </div>
          </div>
          <div className={`mt-24 pt-10 border-t text-lg opacity-60 uppercase tracking-[0.3em] font-bold ${isLight ? 'border-black/10' : 'border-current/5'}`}>
            © {new Date().getFullYear()} DESIGNER PORTFOLIO — ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
