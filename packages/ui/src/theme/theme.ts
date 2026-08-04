import { createTheme, responsiveFontSizes, type Theme } from '@mui/material/styles';

export function createPortfolioTheme(accentColor: string): Theme {
  const base = createTheme({
    palette: {
      mode: 'light',
      primary: { main: accentColor },
      background: { default: '#f7f8fa', paper: '#ffffff' },
      text: { primary: '#1a1f2b', secondary: '#4b5565' },
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'sans-serif',
      ].join(','),
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiContainer: {
        defaultProps: { maxWidth: 'md' },
      },
    },
  });

  return responsiveFontSizes(base);
}
