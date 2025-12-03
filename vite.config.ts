import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Defines process.env for compatibility with the Gemini SDK code used in the web environment
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});