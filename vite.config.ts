import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@com': resolve(__dirname, 'src/components'),
      '@ass': resolve(__dirname, 'src/assets'),
      '@sas': resolve(__dirname, 'src/sass'),
      '@vie': resolve(__dirname, 'src/view'),
    },
  }
})
