import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

// Create an array of dependency names from package.json
const dependencies = Object.keys(pkg.dependencies || {});

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      external: dependencies,
    },
  },
});
