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
      manualChunks(id) {
        if (id.includes("react")) {
          return "react";
        }

        if (id.includes("@tanstack/react-virtual")) {
          return "virtualizer";
        }

        if (id.includes("lodash")) {
          return "lodash";
        }
      }
    }
  }
},

  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 5173
  }
});