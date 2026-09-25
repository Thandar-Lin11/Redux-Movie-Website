import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Vite 4's "modules" target; keeps browser support unchanged after the Vite 7 upgrade.
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
  },
})
