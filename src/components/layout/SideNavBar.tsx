import { Link } from 'react-router-dom';

export function SideNavBar() {
  return (
    <aside className="fixed left-0 top-10 h-[calc(100vh-4.5rem)] w-16 md:w-64 bg-[#0a0e14] z-40 hidden md:flex flex-col">
      <div className="p-6 border-b border-outline-variant/10">
        <div className="font-mono text-sm text-[#00FF41] uppercase font-bold tracking-widest">SYS_ARCH</div>
        <div className="font-mono text-[10px] text-on-surface-variant opacity-60">V2.0.4-STABLE</div>
      </div>
      <nav className="flex-1 font-mono text-xs mt-4">
        <Link to="/" className="bg-[#00FF41] text-[#10141a] flex items-center p-3 font-bold active:translate-x-1 transition-transform cursor-pointer">
          <span className="material-symbols-outlined mr-3">folder</span>
          <span className="hidden md:inline">ROOT</span>
        </Link>
        <div className="text-[#b9ccb2] flex items-center p-3 opacity-60 hover:bg-[#262a31] hover:text-[#00FF41] active:translate-x-1 transition-transform cursor-pointer">
          <span className="material-symbols-outlined mr-3">code</span>
          <span className="hidden md:inline">SRC</span>
        </div>
        <div className="text-[#b9ccb2] flex items-center p-3 opacity-60 hover:bg-[#262a31] hover:text-[#00FF41] active:translate-x-1 transition-transform cursor-pointer">
          <span className="material-symbols-outlined mr-3">data_object</span>
          <span className="hidden md:inline">VAR</span>
        </div>
        <div className="text-[#b9ccb2] flex items-center p-3 opacity-60 hover:bg-[#262a31] hover:text-[#00FF41] active:translate-x-1 transition-transform cursor-pointer">
          <span className="material-symbols-outlined mr-3">terminal</span>
          <span className="hidden md:inline">BIN</span>
        </div>
      </nav>
      <div className="p-4 bg-surface-container-low hidden md:block">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-container/20 flex items-center justify-center border border-primary-container/30">
            <span className="material-symbols-outlined text-primary-container">person</span>
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] font-mono text-primary-container truncate">OP_0429</p>
            <p className="text-[8px] font-mono text-on-surface-variant opacity-50 uppercase">Session: Active</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
