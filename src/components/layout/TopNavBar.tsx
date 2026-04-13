import { Link, useLocation } from 'react-router-dom';

export function TopNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="fixed top-0 w-full h-10 flex items-center border-b-0 bg-[#262a31] z-50">
      <div className="flex justify-between items-center w-full px-2">
        <div className="font-mono font-bold text-[#00FF41] px-4 tracking-tighter uppercase text-xs">
          &gt;_USER@ROOT:~
        </div>
        <nav className="hidden md:flex h-full items-center font-mono tracking-tighter uppercase text-xs">
          <Link
            to="/about"
            className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
              isActive('/about')
                ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                : 'text-[#b9ccb2] opacity-70'
            }`}
          >
            ./ABOUT
          </Link>
          <Link
            to="/projects"
            className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
              isActive('/projects')
                ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                : 'text-[#b9ccb2] opacity-70'
            }`}
          >
            ./PROJECTS
          </Link>
          <Link
            to="/experience"
            className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
              isActive('/experience')
                ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                : 'text-[#b9ccb2] opacity-70'
            }`}
          >
            ./EXPERIENCE
          </Link>
          <Link
            to="/skills"
            className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
              isActive('/skills')
                ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                : 'text-[#b9ccb2] opacity-70'
            }`}
          >
            ./SKILLS
          </Link>
          <Link
            to="/contact"
            className={`h-full flex items-center px-4 transition-colors duration-150 ease-in-out hover:bg-[#00FF41]/10 hover:text-[#00FF41] ${
              isActive('/contact')
                ? 'text-[#ebffe2] border-b-2 border-[#00FF41] opacity-100'
                : 'text-[#b9ccb2] opacity-70'
            }`}
          >
            ./CONTACT
          </Link>
        </nav>
        <div className="flex gap-2 px-4 text-[#00FF41]">
          <span className="material-symbols-outlined text-sm">terminal</span>
          <span className="material-symbols-outlined text-sm">settings</span>
        </div>
      </div>
    </header>
  );
}
