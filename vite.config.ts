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
      '@bento': path.resolve(__dirname, './src/assets/BentoCakes'),
      '@bolos': path.resolve(__dirname, './src/assets/Bolos confeitados'),
      '@kits': path.resolve(__dirname, './src/assets/Kit festa'),
      '@brigadeiros': path.resolve(__dirname, './src/assets/Brigadeiros'),
      '@logo': path.resolve(__dirname, './src/assets/logo e favicon'),
      '@images': path.resolve(__dirname, './src/assets'),
    },
  },
})
