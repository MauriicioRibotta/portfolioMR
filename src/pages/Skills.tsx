export function Skills() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <header className="mb-16">
        <h1 className="font-mono text-4xl md:text-6xl font-extrabold text-primary-container tracking-tighter mb-4 uppercase">
          &gt;_SYSTEM_CAPABILITIES
        </h1>
        <p className="text-on-surface-variant font-mono text-sm uppercase tracking-widest">
          [SECTION: SKILLS_AND_STACK] // [STATUS: DEPLOYED]
        </p>
      </header>

      {/* Main Layout: Bento Grid Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Dev Skills */}
        <section className="lg:col-span-6 bg-surface-container-low p-8 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
          <div className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
            <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-primary">Dev Skills</h2>
          </div>

          <div className="space-y-8">
            {/* Skill Item */}
            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">JavaScript/TypeScript</span>
                <span className="text-primary-container">92%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-primary-container text-lg leading-none">██████████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">██</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">React/Next.js</span>
                <span className="text-primary-container">88%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-primary-container text-lg leading-none">████████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">████</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">Node.js/Express</span>
                <span className="text-primary-container">75%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-primary-container text-lg leading-none">████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">████████</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">PostgreSQL/Redis</span>
                <span className="text-primary-container">70%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-primary-container text-lg leading-none">██████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">██████████</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-surface-container-lowest p-4">
            <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
              // ADDITIONAL_STACK_LOG:<br/>
              DOCKER, KUBERNETES, AWS_S3, TRPC, PRISMA, TAILWIND_CSS, VITEST
            </p>
          </div>
        </section>

        {/* Right Column: Product Owner Skills */}
        <section className="lg:col-span-6 bg-surface-container-low p-8 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary-container"></div>
          <div className="flex items-center gap-3 mb-10">
            <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <h2 className="font-mono text-xl font-bold uppercase tracking-tight text-primary">Product Owner Skills</h2>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">Agile/Scrum Methodologies</span>
                <span className="text-secondary-container">95%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-secondary-container text-lg leading-none">███████████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">█</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">Jira / Backlog Mgmt</span>
                <span className="text-secondary-container">90%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-secondary-container text-lg leading-none">█████████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">███</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">Stakeholder Management</span>
                <span className="text-secondary-container">82%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-secondary-container text-lg leading-none">██████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">██████</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-tighter">
                <span className="text-on-surface">Notion / Documentation</span>
                <span className="text-secondary-container">88%</span>
              </div>
              <div className="h-6 bg-surface-container-lowest flex items-center px-1">
                <div className="flex gap-0.5 w-full">
                  <span className="text-secondary-container text-lg leading-none">████████████████████████████</span>
                  <span className="text-surface-container-high text-lg leading-none">████</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-surface-container-lowest p-4">
            <p className="font-mono text-[10px] text-on-surface-variant leading-relaxed">
              // PRODUCT_MGMT_LOG:<br/>
              USER_STORIES, ROADMAPPING, KPI_TRACKING, A/B_TESTING, MIRO, FIGMA
            </p>
          </div>
        </section>

        {/* Bottom Tech Visual Block */}
        <section className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-high p-6">
            <div className="text-primary-container font-mono text-xs mb-4">LOG_STREAM_01</div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-primary-container/20 overflow-hidden">
                <div className="w-2/3 h-full bg-primary-container"></div>
              </div>
              <div className="w-full h-1 bg-primary-container/20 overflow-hidden">
                <div className="w-1/2 h-full bg-primary-container"></div>
              </div>
              <div className="w-full h-1 bg-primary-container/20 overflow-hidden">
                <div className="w-4/5 h-full bg-primary-container"></div>
              </div>
            </div>
            <p className="mt-4 font-mono text-[9px] text-on-surface-variant uppercase">Optimizing core throughput...</p>
          </div>

          <div className="bg-surface-container-high p-6 flex flex-col justify-center items-center text-center">
            <h3 className="font-mono text-lg font-bold text-on-surface mb-2 uppercase">Hybrid Profile</h3>
            <p className="text-xs text-on-surface-variant leading-tight font-body">Bridging technical architecture with strategic product vision since 2018.</p>
          </div>

          <div className="bg-surface-container-high p-6 flex items-center justify-between">
            <div>
              <div className="text-secondary-container font-mono text-xs mb-1">SYSTEM_UPTIME</div>
              <div className="font-mono text-2xl font-bold text-primary">99.98%</div>
            </div>
            <div className="h-12 w-12 border border-primary-container/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-container animate-pulse">memory</span>
            </div>
          </div>
        </section>
      </div>

      {/* Terminal Output Simulator */}
      <section className="mt-16 bg-surface-container-lowest p-6 font-mono text-xs text-on-surface-variant border border-outline-variant/20 shadow-2xl ring-1 ring-outline-variant/10">
        <div className="flex items-center gap-2 mb-4 border-b border-outline-variant/10 pb-2">
          <div className="w-2 h-2 bg-error"></div>
          <div className="w-2 h-2 bg-secondary-container"></div>
          <div className="w-2 h-2 bg-primary-container"></div>
          <span className="ml-2 text-[10px] opacity-50">console@root: ~/skills</span>
        </div>
        <div>
          <p className="text-primary-container">$ analyze --profile hybrid</p>
          <p className="mt-2 text-[#00FF41]/80">&gt;&gt; Loading kernel modules...</p>
          <p className="text-[#00FF41]/80">&gt;&gt; DevStack verified: 12 modules active.</p>
          <p className="text-[#00FF41]/80">&gt;&gt; ProductStack verified: 8 modules active.</p>
          <p className="text-secondary-container">&gt;&gt; Warning: Coffee levels critical.</p>
          <p className="mt-2 text-on-surface">Analysis complete. System ready for full-stack engagement.</p>
          <div className="mt-4 flex items-center gap-1">
            <span>$</span>
            <span className="w-2 h-4 bg-primary-container animate-pulse"></span>
          </div>
        </div>
      </section>
    </div>
  );
}
