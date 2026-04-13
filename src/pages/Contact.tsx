export function Contact() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header className="mb-12">
        <h1 className="font-label text-4xl md:text-6xl font-extrabold text-primary-container tracking-tighter mb-4">
          &gt;_ ESTABLISH_CONNECTION
        </h1>
        <p className="font-mono text-on-surface-variant text-sm md:text-base max-w-2xl">
          // INITIALIZING SECURE COMMUNICATION PROTOCOL...<br/>
          // READY FOR INPUT. PLEASE DEFINE PARAMETERS BELOW.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-outline-variant/15 shadow-2xl">
        {/* Terminal Form */}
        <div className="lg:col-span-2 bg-surface-container-high relative">
          {/* Window Controls */}
          <div className="h-8 bg-surface-container-highest flex items-center justify-between px-4">
            <div className="font-mono text-[10px] text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[12px]">terminal</span>
              sh --session contact-v2.sh
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-surface-variant border border-outline-variant/30"></div>
              <div className="w-3 h-3 bg-surface-variant border border-outline-variant/30"></div>
              <div className="w-3 h-3 bg-secondary-container"></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 md:p-8 font-mono space-y-6">
            {/* Instructions */}
            <div className="text-on-surface-variant text-xs opacity-60">
              [SESSION_ID: 0xFD429A] [ENCRYPTION: AES-256]
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <label className="block text-primary-container text-sm mb-2">&gt; enter your name:</label>
                <div className="flex items-center border-b-0">
                  <span className="text-primary-container mr-2">$</span>
                  <input autoComplete="off" className="bg-transparent border-none focus:ring-0 text-on-surface w-full p-0 font-mono outline-none" placeholder="________" type="text" />
                </div>
              </div>
              <div className="group">
                <label className="block text-primary-container text-sm mb-2">&gt; enter email_address:</label>
                <div className="flex items-center border-b-0">
                  <span className="text-primary-container mr-2">$</span>
                  <input autoComplete="off" className="bg-transparent border-none focus:ring-0 text-on-surface w-full p-0 font-mono outline-none" placeholder="user@remote_host" type="email" />
                </div>
              </div>
              <div className="group">
                <label className="block text-primary-container text-sm mb-2">&gt; input_message_body:</label>
                <div className="flex items-start border-b-0">
                  <span className="text-primary-container mr-2 mt-1">$</span>
                  <textarea className="bg-transparent border-none focus:ring-0 text-on-surface w-full p-0 font-mono resize-none outline-none" placeholder="Type your data transmission here..." rows={4}></textarea>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary-container text-on-primary-fixed font-mono px-6 py-2 text-sm font-bold uppercase hover:shadow-[4px_4px_0px_0px_#00ff41] transition-all active:translate-y-[2px] active:translate-x-[2px] active:shadow-none" type="submit">
                  EXECUTE_SEND
                </button>
                <button className="text-primary-container border-0 font-mono px-6 py-2 text-sm uppercase hover:bg-primary-container/10 transition-colors" type="reset">
                  [ CLEAR_BUFFER ]
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* System Metadata & Links */}
        <div className="bg-surface-container-low p-6 md:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-outline-variant/15">
          <div className="space-y-8">
            <div>
              <h3 className="font-mono text-xs font-bold text-secondary-container mb-4 uppercase tracking-widest">// RESOURCE_DOWNLOADS</h3>
              <button className="w-full bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-between p-4 font-mono text-xs text-primary-container group border-l-2 border-primary-container">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-on-surface-variant opacity-60">PDF_VERSION_2024</span>
                  <span className="font-bold">curl -O cv.pdf</span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">download</span>
              </button>
            </div>
            <div>
              <h3 className="font-mono text-xs font-bold text-secondary-container mb-4 uppercase tracking-widest">// EXTERNAL_NODES</h3>
              <div className="space-y-2">
                <a className="flex items-center justify-between p-3 bg-surface-container-highest/30 hover:bg-surface-container-highest font-mono text-xs text-on-surface-variant hover:text-primary-container transition-all group" href="#">
                  <span>./GITHUB</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <a className="flex items-center justify-between p-3 bg-surface-container-highest/30 hover:bg-surface-container-highest font-mono text-xs text-on-surface-variant hover:text-primary-container transition-all group" href="#">
                  <span>./LINKEDIN</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <a className="flex items-center justify-between p-3 bg-surface-container-highest/30 hover:bg-surface-container-highest font-mono text-xs text-on-surface-variant hover:text-primary-container transition-all group" href="#">
                  <span>./RSS_FEED</span>
                  <span className="material-symbols-outlined text-sm">rss_feed</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-outline-variant/15 space-y-4">
            <div className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
              <span className="text-secondary-container">STATUS:</span> LISTENING<br/>
              <span className="text-secondary-container">LATENCY:</span> 14ms<br/>
              <span className="text-secondary-container">UPTIME:</span> 99.98%
            </div>
            <div className="w-full bg-surface-container-highest h-1">
              <div className="bg-primary-container h-full w-3/4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Decoration: System Log */}
      <div className="mt-8 font-mono text-[10px] text-on-surface-variant/40 space-y-1 hidden md:block">
        <div>[14:02:11] SECURE_SOCKET_OPENED: PORT 443</div>
        <div>[14:02:11] HANDSHAKE_COMPLETE: TLS 1.3</div>
        <div>[14:02:12] SYSTEM_READY_FOR_USER_INPUT...</div>
        <div className="flex items-center">
          <span>[14:02:12] WAITING_FOR_PACKETS</span>
          <span className="ml-1 w-2 h-3 bg-primary-container cursor-blink"></span>
        </div>
      </div>
    </div>
  );
}
