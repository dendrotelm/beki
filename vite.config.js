import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <--- TO JEST KLUCZOWE! Zmienia ścieżki z "/assets/..." na "./assets/..."
})
