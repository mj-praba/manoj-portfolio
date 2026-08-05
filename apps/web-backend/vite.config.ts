import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  server: { port: 5173 },
  // Served at mj-praba.github.io/manoj-portfolio/ (project page, no custom domain yet) —
  // asset URLs need the repo-name prefix, but the local dev server should stay at root.
  base: command === 'build' ? '/manoj-portfolio/' : '/',
}));
