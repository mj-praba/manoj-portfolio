import { createContext, useContext } from 'react';
import type { ThemeMode } from './theme';

export interface ThemeModeContextValue {
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export function useThemeModeContext(): ThemeModeContextValue {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeModeContext must be used within a PortfolioThemeProvider');
  }
  return context;
}
