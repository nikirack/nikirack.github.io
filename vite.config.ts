import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// Source - https://stackoverflow.com/a/76734768
// Posted by alvescleiton
// Retrieved 2026-06-22, License - CC BY-SA 4.0

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
