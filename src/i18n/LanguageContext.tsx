import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { en } from './en';
import { es } from './es';
import type { Translations } from './en';

type Lang = 'en' | 'es';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const dictionaries: Record<Lang, Translations> = { en, es };

const LanguageContext = createContext<LanguageContextType | null>(null);

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[part];
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'es') ? saved : 'en';
  });

  const toggleLang = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  }, []);

  const t = useCallback((key: string): string => {
    return getNestedValue(dictionaries[lang] as unknown as Record<string, unknown>, key);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
