import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/piko/",
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@functions": path.resolve(__dirname, "./src/functions"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  plugins: [vue()],
});
