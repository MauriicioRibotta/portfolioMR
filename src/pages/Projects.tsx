import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  // Helper to get array translations
  const tArray = (key: string): string[] => {
    const val = t(key);
    // If it returns the key itself, it means the lookup failed for arrays
    // We handle arrays specially
    return Array.isArray(val) ? val : [val];
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="mb-12">
        <div className="font-mono text-primary-container text-sm mb-2">{t('projects.running')}</div>
        <h2 className="font-mono font-extrabold text-5xl md:text-6xl text-on-surface tracking-tighter mb-4 flex items-center">
          {t('projects.title')}<span className="animate-pulse">_</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed">
          {t('projects.subtitle')}
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Card 1 */}
        <div className="group">
          <div className="bg-surface-container-high ring-1 ring-outline-variant/15 overflow-hidden">
            <div className="h-8 bg-surface-container-high flex items-center justify-between px-3 border-b border-outline-variant/10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 bg-[#27c93f]"></div>
                <span className="font-mono text-[10px] text-on-surface-variant ml-2">~/projects/neural_node_v1</span>
              </div>
              <div className="flex space-x-4">
                <button className="font-mono text-[10px] text-primary-container hover:bg-primary-container/10 px-2">[TECHNICAL]</button>
                <button className="font-mono text-[10px] text-on-surface-variant/60 hover:text-primary-container px-2">PRODUCT</button>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 min-h-[300px] flex flex-col">
              <div className="mb-6">
                <img 
                  alt="abstract glowing code lines"
                  className="w-full h-48 object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZEg-EeUOmZK4gcxS4NvoMwzBGdXXEqJ5PV1YUr2G3gdKBIRYV-mDElCa_8dQf5BgV-zJBv-p9HLuHd6pSBLp__mOwagT018Q879dvrxG2g4EjTuG3X6Tm8mKaWueDFNuBq5DfrTfOImoCzluBIfIQUHwB9VNaAUjPxKX_U6pRt8_5rmWpOf_FonG76E8CozP3cJ7UVcW09zydp_TMYwUjqHWz7kVdyc62HJVkKZ_9oWczOP4rW8vHnKyBiOkS_LrdFNAK-FSgTmvP"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-mono font-bold text-xl text-primary-container mb-1">{t('projects.p1_name')}</h3>
                  <p className="text-xs font-mono text-on-surface-variant">{t('projects.p1_hash')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-secondary-container uppercase tracking-widest">{t('projects.p1_stack_label')}</div>
                    <ul className="text-xs font-mono text-on-surface space-y-1">
                      {tArray('projects.p1_stack_items').map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-secondary-container uppercase tracking-widest">{t('projects.p1_arch_label')}</div>
                    <p className="text-xs font-mono text-on-surface">{t('projects.p1_arch_text')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <a className="font-mono text-xs text-primary-container hover:underline flex items-center" href="#">
                  <span className="material-symbols-outlined text-sm mr-1">link</span> {t('projects.p1_link')}
                </a>
                <span className="font-mono text-[10px] text-on-surface-variant">{t('projects.p1_uptime')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group">
          <div className="bg-surface-container-high ring-1 ring-outline-variant/15 overflow-hidden">
            <div className="h-8 bg-surface-container-high flex items-center justify-between px-3 border-b border-outline-variant/10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 bg-[#27c93f]"></div>
                <span className="font-mono text-[10px] text-on-surface-variant ml-2">~/projects/fin_secure_shield</span>
              </div>
              <div className="flex space-x-4">
                <button className="font-mono text-[10px] text-on-surface-variant/60 hover:text-primary-container px-2">TECHNICAL</button>
                <button className="font-mono text-[10px] text-primary-container hover:bg-primary-container/10 px-2">[PRODUCT]</button>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-6 min-h-[300px] flex flex-col">
              <div className="mb-6">
                <img 
                  alt="geometric blockchain structure"
                  className="w-full h-48 object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsskunHGu_iE7oa_oSZduukVpU7h2JfgFyz9jEkkIOutwiVuO5OPiWubBzg8Z6OD7l0ubjnnUsLEAOcVZgXsqpx_TSw3DALnzRM8poVk6pnq3h1Rtox3BvCr6LO_zX8Q889sy_lOj0D0UHJlOYwFgOyDRDinByfTa-pUF2JsdYI1sBFs8IkLge_o0c0Mb8uPDX_x6mw3obSQi1Pelob1fgsNQ9HioJ04TCyof0NDiYXGwZpxlRsi9FXMkIV2pCOMI_aU4vzlLQqhn"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-mono font-bold text-xl text-primary-container mb-1">{t('projects.p2_name')}</h3>
                  <p className="text-xs font-mono text-on-surface-variant">{t('projects.p2_status')}</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] font-mono text-secondary-container uppercase tracking-widest mb-1">{t('projects.p2_problem_label')}</div>
                    <p className="text-xs font-body text-on-surface">{t('projects.p2_problem_text')}</p>
                  </div>
                  <div className="bg-surface-container-low p-3">
                    <div className="text-[10px] font-mono text-secondary-container uppercase tracking-widest mb-1">{t('projects.p2_impact_label')}</div>
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl font-mono text-primary-container">{t('projects.p2_impact_value')}</div>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase">{t('projects.p2_impact_desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/10 flex justify-between items-center">
                <button className="bg-primary-container text-on-primary-fixed px-4 py-1 font-mono text-[10px] font-bold hover:shadow-[4px_4px_0px_0px_#00ff41] transition-all">{t('projects.p2_cta')}</button>
                <span className="font-mono text-[10px] text-on-surface-variant">{t('projects.p2_rev')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="group lg:col-span-2">
          <div className="bg-surface-container-high ring-1 ring-outline-variant/15 overflow-hidden">
            <div className="h-8 bg-surface-container-high flex items-center justify-between px-3 border-b border-outline-variant/10">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 bg-[#27c93f]"></div>
                <span className="font-mono text-[10px] text-on-surface-variant ml-2">~/projects/kernel_module_X</span>
              </div>
              <div className="flex space-x-4">
                <button className="font-mono text-[10px] text-primary-container hover:bg-primary-container/10 px-2">[TECHNICAL]</button>
                <button className="font-mono text-[10px] text-on-surface-variant/60 hover:text-primary-container px-2">PRODUCT</button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <img 
                  alt="macro photography of a computer circuit board"
                  className="w-full h-full min-h-[200px] object-cover opacity-80 grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApxSHiTMHMEbnaIVCzsnYrCuRtBIMPiGcI_J9eUSyNZRYQPi3nzlGlU_aCOthq7erMLIuWeZ6vTlHbxmt-kufCHarNopZDGzyfzCDlW-cutrkTBy_-q3KShWB_xn6CmaJ4lUJ8tFhgGp0JaTzXNcUiid083JFZQIi4l9Q7cUyu0Kvd_hqfPiLn70Vh_YhmThIJojo61Q5wLwx-3XMxV8kkRb2JnMOhppGdYau0u6zTMQt-PhWU6AYozdsE7pKv-BADf3192LDfTkSx"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-mono font-bold text-2xl text-primary-container mb-2">{t('projects.p3_name')}</h3>
                  <p className="text-xs font-mono text-on-surface-variant">{t('projects.p3_level')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                  <div className="bg-surface-container-low p-4">
                    <h4 className="text-[10px] font-mono text-secondary-container mb-2 uppercase">{t('projects.p3_core_label')}</h4>
                    <p className="text-xs font-mono leading-relaxed">{t('projects.p3_core_text')}</p>
                  </div>
                  <div className="bg-surface-container-low p-4">
                    <h4 className="text-[10px] font-mono text-secondary-container mb-2 uppercase">{t('projects.p3_perf_label')}</h4>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span>LATENCY</span>
                        <span className="text-primary-container">0.02ms</span>
                      </div>
                      <div className="w-full h-1 bg-surface-container-highest">
                        <div className="bg-primary-container h-full w-[95%]"></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-mono">
                        <span>CPU_LOAD</span>
                        <span className="text-secondary-container">1.2%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-4">
                    <h4 className="text-[10px] font-mono text-secondary-container mb-2 uppercase">{t('projects.p3_env_label')}</h4>
                    <p className="text-xs font-mono whitespace-pre-line">{t('projects.p3_env_text')}</p>
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <button className="bg-transparent border border-primary-container text-primary-container hover:bg-primary-container hover:text-on-primary-fixed px-6 py-2 font-mono text-xs transition-all">{t('projects.p3_cta_paper')}</button>
                  <button className="font-mono text-xs text-on-surface-variant hover:text-primary-container">{t('projects.p3_cta_source')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
