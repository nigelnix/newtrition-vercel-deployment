import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Adjust if needed
    rollupOptions: {
      input: './src/frontend/main.jsx',  // Assuming main.jsx is your entry point
    },
  },
})
