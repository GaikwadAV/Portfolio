import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- ADD OR UPDATE THIS LINE ---
  base: '/Portfolio/', // <--- IMPORTANT: This MUST match your GitHub repository name
  // -----------------------------
})