import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
        configFile: true,
      },
    }),
  ],
  mode: "development",
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  },
  css: {
    devSourcemap: true,
  },
  build: {
    chunkSizeWarningLimit: 150,
    outDir: './build'
  },
});
