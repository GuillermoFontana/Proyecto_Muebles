import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    outDir: 'dist',
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