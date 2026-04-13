export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-8 flex justify-between items-center px-6 bg-[#10141a] z-50 font-mono text-[10px] tracking-widest">
      <div className="text-[#b9ccb2] uppercase">
        (C) {new Date().getFullYear()} TERMINAL_OS [BUILD_429]
      </div>
      <div className="flex gap-6">
        <a className="text-[#b9ccb2] hover:text-[#00FF41] cursor-pointer animate-pulse-slow" href="https://github.com/MauriicioRibotta">GITHUB</a>
        <a className="text-[#b9ccb2] hover:text-[#00FF41] cursor-pointer" href="https://www.linkedin.com/in/mauricio-ribotta-83139327a/">LINKEDIN</a>
      </div>
      <div className="text-[#ffa504] flex items-center gap-2">
        <span className="w-2 h-2 bg-[#ffa504]"></span>
        SERVER_STATUS: OPTIMAL
      </div>
    </footer>
  );
}
