import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PortfolioThemeProvider } from '@manoj-portfolio/ui';
import { App } from './App';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioThemeProvider accentColor="#0f9d7c">
      <App />
    </PortfolioThemeProvider>
  </StrictMode>,
);
