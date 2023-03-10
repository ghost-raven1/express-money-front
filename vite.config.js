import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react({
      babel: {
        babelrc: true,
        configFile: true,
      },
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 8000,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    chunkSizeWarningLimit: 150,
    outDir: "./build",
  },
});
