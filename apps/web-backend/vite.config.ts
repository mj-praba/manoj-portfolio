import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  plugins: [react()],
  server: { port: 5173 },
  // Served at custom domain phoenix.is-a.dev, at root — no repo-name prefix needed.
  base: '/',
}));
