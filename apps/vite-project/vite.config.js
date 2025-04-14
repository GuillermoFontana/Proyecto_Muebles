import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/static/',
  plugins: [react()],
  build: {
    manifest: true,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      //override default .html entry
      input: './src/main.jsx',
      assetFileNames: 'assets/[name].[hash].[ext]',
      entryFileNames: 'assets/[name].[hash].js',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}) 
