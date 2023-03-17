import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
      }
    }
  },
  plugins: [react()],
  base:'/Motivational_Quotes/',
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
