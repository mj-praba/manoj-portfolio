import { useCallback, useEffect, useState } from 'react';
import type { ThemeMode } from './theme';

const STORAGE_KEY = 'portfolio:themeMode';

function readStoredMode(): ThemeMode | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : null;
}

function readSystemMode(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export interface UseThemeModeResult {
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
}

export function useThemeMode(): UseThemeModeResult {
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredMode() ?? readSystemMode());

  useEffect(() => {
    if (readStoredMode()) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      setModeState(event.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setModeState(next);
  }, []);

  return { mode, setMode };
}
