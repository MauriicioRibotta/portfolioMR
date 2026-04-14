import { useLanguage } from '../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  // Helper for array-based translations
  const getItems = (key: string): string[] => {
    const val = t(key);
    return Array.isArray(val) ? val : [val];
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="font-mono text-4xl font-bold text-primary-container mb-2 tracking-tighter uppercase">
          {t('experience.title')}
        </h1>
        <p className="font-mono text-xs text-on-surface-variant opacity-70">{t('experience.subtitle')}</p>
      </div>

      {/* Git Log Timeline */}
      <div className="relative font-mono space-y-0">
        <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-outline-variant/30"></div>
        
        {/* Entry 1 */}
        <div className="relative pl-10 pb-16 group">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-primary-container z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">f7a2b91</span>
            <span className="text-primary-container font-bold text-lg uppercase">{t('experience.e1_role')}</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">{t('experience.e1_period')}</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-primary-container/20 group-hover:border-primary-container transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              {getItems('experience.e1_items').map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary-container mt-1 shrink-0">█</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ C# ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ .NET ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ SQL SERVER ]</span>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div className="relative pl-10 pb-16 group">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-secondary-container z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">e4d1c02</span>
            <span className="text-primary-container font-bold text-lg uppercase">{t('experience.e2_role')}</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">{t('experience.e2_period')}</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-secondary-container/20 group-hover:border-secondary-container transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              {getItems('experience.e2_items').map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary-container mt-1 shrink-0">█</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ SCRUM ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ DISCOVERY ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ JIRA ]</span>
            </div>
          </div>
        </div>

        {/* Entry 3 */}
        <div className="relative pl-10 pb-16 group">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-outline z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">b2a8f33</span>
            <span className="text-primary-container font-bold text-lg uppercase">{t('experience.e3_role')}</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">{t('experience.e3_period')}</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-outline/20 group-hover:border-outline transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              {getItems('experience.e3_items').map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary-container mt-1 shrink-0">█</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ 5S ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ PREVENTIVE_MAIN. ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ DOCS ]</span>
            </div>
          </div>
        </div>

        {/* Entry 4 */}
        <div className="relative pl-10 pb-16 group">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-surface-container-highest border-2 border-outline z-10"></div>
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">1a7b9cc</span>
            <span className="text-primary-container font-bold text-lg uppercase">{t('experience.e4_role')}</span>
            <span className="text-on-surface-variant text-[10px] md:ml-auto">{t('experience.e4_period')}</span>
          </div>
          <div className="bg-surface-container-low p-6 border-l-2 border-outline/20 group-hover:border-outline transition-colors">
            <ul className="space-y-3 font-body text-sm leading-relaxed text-on-surface">
              {getItems('experience.e4_items').map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-secondary-container mt-1 shrink-0">█</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ NEGOTIATION ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ STAKEHOLDERS ]</span>
              <span className="px-2 py-0.5 bg-surface-container-high text-[10px] text-primary-container">[ B2C ]</span>
            </div>
          </div>
        </div>

        {/* Final Node (Init) */}
        <div className="relative pl-10 pb-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 bg-primary-container z-10"></div>
          <div className="flex items-center gap-2">
            <span className="text-secondary-container font-bold text-sm tracking-tighter">0000000</span>
            <span className="text-on-surface-variant font-mono text-xs uppercase">{t('experience.init_label')}</span>
          </div>
        </div>
      </div>

      {/* Bento Grid Extra Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        <div className="bg-surface-container-high p-6 border-b-4 border-primary-container">
          <h3 className="font-mono text-xs font-bold text-primary-container mb-4 uppercase flex items-center">
            <span className="material-symbols-outlined text-sm mr-2">terminal</span> {t('experience.stack_profile')}
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>BACKEND</span>
              <span className="text-primary-container">████████░░ 80%</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>PRODUCT OS</span>
              <span className="text-primary-container">████████░░ 80%</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span>PROCESS</span>
              <span className="text-primary-container">█████████░ 90%</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-surface-container-lowest p-6 flex flex-col justify-center">
          <h3 className="font-mono text-xs font-bold text-secondary-container mb-2 uppercase">{t('experience.current_objective_label')}</h3>
          <p className="font-body text-sm text-on-surface leading-relaxed italic">
            {t('experience.current_objective_text')}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-outline-variant/20"></div>
            <span className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">{t('experience.current_status')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
