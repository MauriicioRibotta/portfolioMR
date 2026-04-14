import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LanguageProvider, useLanguage } from './LanguageContext';

// Mock analytics to avoid console spam in tests
vi.mock('../utils/analytics', () => ({
  trackEvent: vi.fn()
}));

const TestComponent = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <div>
      <span data-testid="current-lang">{lang}</span>
      <span data-testid="nav-root">{t('nav.root')}</span>
      <button onClick={toggleLang}>Toggle</button>
    </div>
  );
};

describe('LanguageContext', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('defaults to english (en)', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    expect(screen.getByTestId('current-lang')).toHaveTextContent('en');
    expect(screen.getByTestId('nav-root')).toHaveTextContent('/');
  });

  it('toggles language to spanish (es)', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    const button = screen.getByText('Toggle');
    fireEvent.click(button);
    
    expect(screen.getByTestId('current-lang')).toHaveTextContent('es');
    expect(screen.getByTestId('nav-root')).toHaveTextContent('/');
  });

  it('reads from localStorage if available', () => {
    localStorage.setItem('portfolio-lang', 'es');
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    expect(screen.getByTestId('current-lang')).toHaveTextContent('es');
  });
});
