import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' gera caminhos relativos para os assets (necessário na HostGator/cPanel)
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
})
