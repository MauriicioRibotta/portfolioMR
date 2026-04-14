import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="font-mono text-4xl md:text-6xl font-bold text-primary-container tracking-tighter mb-4 break-all md:break-normal">
          {t('about.title')}
        </h1>
        <div className="h-px w-full bg-outline-variant/15"></div>
      </div>

      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Terminal Window Frame */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-surface-container-high shadow-none ring-1 ring-outline-variant/20">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 bg-error/40"></div>
                <div className="w-2.5 h-2.5 bg-secondary-container/40"></div>
                <div className="w-2.5 h-2.5 bg-primary-container/40"></div>
              </div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">{t('about.avatar_label')}</div>
              <div className="w-12"></div>
            </div>

            {/* Terminal Content (Inset) */}
            <div className="bg-surface-container-lowest p-1 aspect-square relative group">
              <img 
                alt="Mauricio Ribotta" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]" 
                src="/recibidamauri.jpeg"
              />
              <div className="absolute inset-0 pointer-events-none border border-primary-container/10"></div>
              <div className="absolute top-4 left-4 font-mono text-[10px] text-primary-container bg-background/80 px-1">
                {t('about.scanning')}
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary-container bg-background/80 px-1">
                {t('about.locked')}
              </div>
            </div>
          </div>
          <div className="mt-4 font-mono text-[10px] text-on-surface-variant flex justify-between uppercase">
            <span>{t('about.size')}</span>
            <span>{t('about.format')}</span>
          </div>
        </div>

        {/* Right Side: Bio as Code */}
        <div className="lg:col-span-7 space-y-8">
          <div className="font-mono text-sm leading-relaxed text-on-surface-variant">
            {/* Section 1 */}
            <div className="mb-8">
              <span className="text-primary-container font-bold">{t('about.who_title')}</span>
              <p className="mt-4 pl-4 border-l-2 border-outline-variant/30 text-on-surface">
                {t('about.who_text')}
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <span className="text-secondary-container font-bold">{t('about.approach_title')}</span>
              <div className="mt-4 pl-4 space-y-4">
                <p>{t('about.approach_1')}</p>
                <p>{t('about.approach_2')}</p>
                <p>{t('about.approach_3')}</p>
              </div>
            </div>

            {/* Section 3: Technical Stack Output */}
            <div className="bg-surface-container-low p-6 ring-1 ring-outline-variant/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary-container text-xs">terminal</span>
                <span className="text-on-surface text-xs font-bold uppercase tracking-widest">{t('about.stack_cmd')}</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="text-primary-container">█</span>
                  <span>RUST / WASM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container">█</span>
                  <span>TYPESCRIPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container">█</span>
                  <span>POSTGRESQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary-container">█</span>
                  <span>NEOVIM_V0.10</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary-container">█</span>
                  <span>KUBERNETES</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary-container">█</span>
                  <span>DOCKER</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex flex-col md:flex-row gap-4">
              <Link to="/contact" className="bg-primary-container text-on-primary-fixed px-6 py-3 font-mono font-bold text-sm uppercase transition-all hover:translate-x-1 hover:-translate-y-1 inline-block text-center shadow-[4px_4px_0px_0px_#00FF41]">
                {t('about.cta_collaborate')}
              </Link>
              <Link to="/projects" className="border border-primary-container text-primary-container px-6 py-3 font-mono font-bold text-sm uppercase transition-all hover:bg-primary-container hover:text-on-primary-fixed inline-block text-center">
                {t('about.cta_view_logs')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
