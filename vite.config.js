import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    rollupOptions: {
      external: ['postcss', 'autoprefixer'],
    },
  },
  server: {
    port: 3000
  }
});