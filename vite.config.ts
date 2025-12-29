import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable source maps for production to reduce bundle size
    cssCodeSplit: true, // Split CSS into separate files
    rollupOptions: {
      output: {
        // Manual chunking strategies for optimal caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/analytics'],
          'vendor-ui': ['lucide-react']
        }
      }
    },
    // Increase chunk size warning limit since we are splitting manually
    chunkSizeWarningLimit: 1000
  }
})
