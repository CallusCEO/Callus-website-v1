import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/callus-website-v1/",
  build: {
    outDir: 'dist', // The directory where the build files go
    assetsDir: 'assets', // Directory for assets
  },
})
