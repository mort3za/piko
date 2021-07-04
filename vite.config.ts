import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { ViteAliases } from "vite-aliases";
import vue from "@vitejs/plugin-vue";

const viteAliasesOptions = {
  dir: "src",
  // to update tsconfig paths:
  // useTypescript: true,
  // useConfig: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteAliases(viteAliasesOptions), VitePWA()],
});
