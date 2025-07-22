import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/planetary-sim/' : '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
  }
})
