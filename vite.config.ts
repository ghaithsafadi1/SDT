import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // This tells Vite your site is hosted at /SDT/ instead of the root
  base: mode === "production" ? "/SDT/" : "/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  // Simplified plugins list to ensure a clean production build
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
