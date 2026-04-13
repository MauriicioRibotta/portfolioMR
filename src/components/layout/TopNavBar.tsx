import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export function TopNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { lang, toggleLang, t } = useLanguage();

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
    <header className="fixed top-0 w-full h-10 flex items-center border-b-0 bg-[#262a31] z-50">
      <div className="flex justify-between items-center w-full px-2">
        <div className="font-mono font-bold text-[#00FF41] px-4 tracking-tighter uppercase text-xs">
          &gt;_USER@ROOT:~
        </div>
        <nav className="hidden md:flex h-full items-center font-mono tracking-tighter uppercase text-xs">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
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
        <div className="flex gap-2 px-4 items-center">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="font-mono text-[10px] tracking-widest px-3 py-1 border border-[#00FF41]/40 text-[#00FF41] hover:bg-[#00FF41]/15 transition-colors uppercase flex items-center gap-1.5"
            aria-label="Toggle language"
          >
            <span className="material-symbols-outlined text-[14px]">translate</span>
            {lang === 'en' ? 'EN' : 'ES'}
          </button>
          <span className="material-symbols-outlined text-sm text-[#00FF41]">terminal</span>
        </div>
      </div>
    </header>
  );
}
