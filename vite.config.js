import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["opencascade.js"],
  },
  plugins: [react()],
});
