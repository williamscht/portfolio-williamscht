import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration optimisée pour build, performance & SEO
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "terser", // compression plus efficace
    sourcemap: false, // pas besoin en production
    chunkSizeWarningLimit: 600, // évite les warnings inutiles
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // sépare les dépendances
          }
        },
      },
    },
  },
  server: {
    compress: true, // active la compression gzip/brotli en dev
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Encoding": "br",
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },

  define: {
  "process.env.NODE_ENV": JSON.stringify("production"),
},

});
