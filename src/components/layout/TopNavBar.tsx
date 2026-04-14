import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export function TopNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { lang, toggleLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  const navLinks = [
    { to: '/', label: t('nav.root') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/experience', label: t('nav.experience') },
    { to: '/skills', label: t('nav.skills') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <header className="fixed top-0 w-full h-10 flex items-center border-b-0 bg-[#262a31] z-50">
        <div className="flex justify-between items-center w-full px-2">
          
          <div className="font-mono font-bold text-[#00FF41] px-4 tracking-tighter uppercase text-xs">
            &gt;_USER@ROOT:~
          </div>

          <nav className="hidden md:flex h-full items-center font-mono tracking-tighter uppercase text-xs" role="navigation" aria-label="Main Navigation">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                aria-current={isActive(to) ? 'page' : undefined}
                className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
                  isActive(to)
                    ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                    : 'text-[#b9ccb2] opacity-70'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 px-2 items-center">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="font-mono text-[10px] tracking-widest px-3 py-1 border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/15 transition-colors uppercase flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-[#00FF41]"
              aria-label={`Toggle language to ${lang === 'en' ? 'Español' : 'English'}`}
            >
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">translate</span>
              {lang === 'en' ? 'EN' : 'ES'}
            </button>
            <span className="material-symbols-outlined text-sm text-[#00FF41] hidden md:block" aria-hidden="true">terminal</span>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-[#00FF41] p-1 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden fixed top-10 left-0 w-full bg-[#1e2126] border-b border-[#3b4b37]/30 z-40 shadow-xl shadow-black/50">
          <nav className="flex flex-col font-mono text-sm py-2" role="navigation" aria-label="Mobile Navigation">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(to) ? 'page' : undefined}
                className={`flex items-center px-6 py-3 transition-colors ${
                  isActive(to)
                    ? 'text-[#00FF41] bg-[#00FF41]/10 border-l-2 border-[#00FF41]'
                    : 'text-[#b9ccb2] hover:bg-white/5'
                }`}
              >
                &gt; {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
