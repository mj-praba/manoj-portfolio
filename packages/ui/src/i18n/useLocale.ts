import { useCallback, useEffect, useState } from 'react';
import i18next from 'i18next';
import type { LocaleCode } from '@manoj-portfolio/data';

const STORAGE_KEY = 'portfolio:locale';
const DEFAULT_LOCALE: LocaleCode = 'en';

function readStoredLocale(): LocaleCode {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return (stored as LocaleCode | null) ?? DEFAULT_LOCALE;
}

export interface UseLocaleResult {
  readonly locale: LocaleCode;
  readonly setLocale: (locale: LocaleCode) => void;
}

export function useLocale(): UseLocaleResult {
  const [locale, setLocaleState] = useState<LocaleCode>(() => readStoredLocale());

  useEffect(() => {
    void i18next.changeLanguage(locale);
  }, [locale]);

  const setLocale = useCallback((next: LocaleCode) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }, []);

  return { locale, setLocale };
}
