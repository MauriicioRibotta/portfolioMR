export function Experience() {
  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="font-mono text-4xl font-bold text-primary-container mb-2 tracking-tighter uppercase">
          &gt;_ git log --oneline --graph --experience
        </h1>
        <p className="font-mono text-xs text-on-surface-variant opacity-70">Showing active development history for $USER. Current branch: career/master</p>
      </div>

      {/* Git Log Timeline */}
      <div className="relative font-mono space-y-0">
        {/* Vertical Line (Graph Branch) */}
        <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-outline-variant/30"></div>
        
        {/* Entry 1 */}
        <div className="relative pl-10 pb-16 group">
          {/* Node */}
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-primary-container z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">f7a2b91</span>
            <span className="text-primary-container font-bold text-lg uppercase">Lead Systems Architect @ Neural-Grid Corp</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">JAN_2022 - PRESENT</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-primary-container/20 group-hover:border-primary-container transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Orchestrated the migration of legacy monolith to microservices architecture, reducing deployment cycles by <span className="text-secondary-container font-mono">65%</span>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Implemented automated CI/CD pipelines using GitHub Actions and Kubernetes, achieving <span className="text-secondary-container font-mono">99.99%</span> uptime across 4 global regions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Mentored a team of 12 developers, establishing rigorous PR review standards and TDD workflows.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ GO_LANG ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ K8S ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ TERRAFORM ]</span>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative pl-10 pb-16 group">
          {/* Node */}
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-secondary-container z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">e4d1c02</span>
            <span className="text-primary-container font-bold text-lg uppercase">Senior Backend Developer @ BitStream.io</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">MAR_2019 - DEC_2021</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-secondary-container/20 group-hover:border-secondary-container transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Optimized SQL query performance for high-traffic endpoints, resulting in a <span className="text-secondary-container font-mono">400ms</span> reduction in average response latency.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Architected a real-time analytics dashboard processing over <span className="text-secondary-container font-mono">1.2M</span> events per second via Apache Kafka.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ RUST ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ POSTGRES ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ KAFKA ]</span>
            </div>
          </div>
        </div>

        {/* Entry 3 */}
        <div className="relative pl-10 pb-16 group">
          {/* Node */}
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-outline z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">b2a8f33</span>
            <span className="text-primary-container font-bold text-lg uppercase">Software Engineer @ Proto-Systems</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">JUN_2017 - FEB_2019</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-outline/20 group-hover:border-outline transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Developed cross-platform internal tooling using Python, increasing internal operational efficiency by <span className="text-secondary-container font-mono">30%</span>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary-container mt-1 shrink-0">█</span>
                <span>Integrated third-party APIs for secure payment processing and identity verification protocols.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ PYTHON ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ REACT ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ AWS ]</span>
            </div>
          </div>
        </div>

        {/* Final Node (Init) */}
        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary-container z-10"></div>
          <div className="flex items-center gap-2">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">0000000</span>
            <span className="text-on-surface-variant font-mono text-xs uppercase">Initial commit: Graduation [B.Sc Computer Science]</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Extra Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <div className="bg-surface-container-high p-6 border-b-4 border-primary-container">
          <h3 className="font-mono text-xs font-bold text-primary-container mb-4 uppercase flex items-center">
            <span className="material-symbols-outlined text-sm mr-2">terminal</span> Stack_Profile
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>BACKEND</span>
              <span className="text-primary-container">████████░░ 80%</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>DEVOPS</span>
              <span className="text-primary-container">██████░░░░ 60%</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>SECURITY</span>
              <span className="text-primary-container">████░░░░░░ 40%</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-surface-container-lowest p-6 flex flex-col justify-center">
          <h3 className="font-mono text-xs font-bold text-secondary-container mb-2 uppercase">Current_Objective</h3>
          <p className="font-body text-sm text-on-surface leading-relaxed italic">
            "Seeking to leverage 7+ years of distributed systems experience to architect the next generation of privacy-preserving computing environments."
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-outline-variant/20"></div>
            <span className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">status: active_search</span>
          </div>
        </div>
      </div>
    </div>
  );
}
