import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#0a0e14] p-1 md:p-1.5 border border-[#3b4b37]/20 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-[#262a31] flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#ffb4ab]/40 border border-[#ffb4ab]/60"></span>
          <span className="w-3 h-3 bg-[#ffa504]/40 border border-[#ffa504]/60"></span>
          <span className="w-3 h-3 bg-[#00ff41]/40 border border-[#00ff41]/60"></span>
          <span className="ml-4 font-mono text-[10px] tracking-tight text-[#b9ccb2] opacity-60 uppercase">bash — 80x24</span>
        </div>
        <div className="font-mono text-[10px] text-[#b9ccb2]/40">SSH-PROT_v4.2</div>
      </div>
      
      {/* Terminal Body */}
      <div className="bg-[#0a0e14] p-8 md:p-16 min-h-[400px] flex flex-col justify-center">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-[#00ff41] font-headline text-2xl md:text-4xl">$</span>
            <h1 className="font-headline text-3xl md:text-6xl text-[#ebffe2] font-extrabold tracking-tight break-words md:break-normal">
              {t('hero.greeting')} <span className="text-[#00ff41]">&gt;</span> {t('hero.tagline')}<span className="inline-block w-4 h-8 md:w-8 md:h-12 bg-[#00ff41] ml-2 cursor-blink"></span>
            </h1>
          </div>
          <div className="max-w-2xl mt-8">
            <p className="text-[#b9ccb2] text-sm md:text-base leading-relaxed font-body">
              {t('hero.log1')} <br/>
              {t('hero.log2')}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-12">
            <Link 
              to="/projects"
              className="group relative px-6 py-3 bg-[#00ff41] text-[#002203] font-headline font-bold text-sm flex items-center gap-3 transition-transform hover:translate-x-1 hover:-translate-y-1"
              style={{ boxShadow: '4px 4px 0px 0px #00FF41' }}
            >
              <span className="material-symbols-outlined text-base">terminal</span>
              {t('hero.cta_projects')}
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-6 py-3 border border-[#00ff41] text-[#00ff41] font-headline font-bold text-sm flex items-center gap-3 hover:bg-[#00ff41] hover:text-[#002203] transition-all"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              {t('hero.cta_contact')}
            </Link>
          </div>
        </div>
        
        {/* Bottom Specs Grid */}
        <div className="mt-20 pt-8 border-t border-[#3b4b37]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-mono text-[10px] text-[#b9ccb2] uppercase opacity-50 mb-1">{t('hero.spec_arch')}</p>
            <p className="font-mono text-xs text-[#00ff41]">X86_64_UI</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#b9ccb2] uppercase opacity-50 mb-1">{t('hero.spec_perf')}</p>
            <p className="font-mono text-xs text-[#00ff41]">99.9% UP</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#b9ccb2] uppercase opacity-50 mb-1">{t('hero.spec_lang')}</p>
            <p className="font-mono text-xs text-[#00ff41]">TYPESCRIPT++</p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-[#b9ccb2] uppercase opacity-50 mb-1">{t('hero.spec_status')}</p>
            <p className="font-mono text-xs text-[#ffa504]">OPEN_TO_WORK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
