import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],

  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          virtualizer: ["@tanstack/react-virtual"],
          lodash: ["lodash"]
        }
      }
    }
  },

  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173
  }
});