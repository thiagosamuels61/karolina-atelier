import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@bento': path.resolve(__dirname, './BentoCakes'),
      '@bolos': path.resolve(__dirname, './Bolos confeitados'),
      '@kits': path.resolve(__dirname, './Kit festa'),
      '@brigadeiros': path.resolve(__dirname, './Brigadeiros'),
      '@logo': path.resolve(__dirname, './logo e favicon'),
      '@images': path.resolve(__dirname, '.'),
    },
  },
})
