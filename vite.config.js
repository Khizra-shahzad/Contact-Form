import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Process from 'process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: Process.env.VITE_BASE_PATH || '/Contact-Form'
})
