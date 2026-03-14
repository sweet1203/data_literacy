import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages 사용 시: base: '/data_literacy/'
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@docs': path.resolve(process.cwd(), 'docs') },
  },
  server: {
    port: 4010,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          plotly: ['plotly.js-dist-min'],
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
