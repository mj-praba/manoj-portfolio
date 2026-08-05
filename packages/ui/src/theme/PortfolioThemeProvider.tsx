import { useMemo, type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createPortfolioTheme } from './theme';
import { useThemeMode } from './useThemeMode';
import { ThemeModeContext, type ThemeModeContextValue } from './ThemeModeContext';

export interface PortfolioThemeProviderProps {
  readonly accentColor: string;
  readonly children: ReactNode;
}

export function PortfolioThemeProvider({ accentColor, children }: PortfolioThemeProviderProps) {
  const { mode, setMode } = useThemeMode();
  const theme = useMemo(() => createPortfolioTheme(accentColor, mode), [accentColor, mode]);
  const contextValue = useMemo<ThemeModeContextValue>(() => ({ mode, setMode }), [mode, setMode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
