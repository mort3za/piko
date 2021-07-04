import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import vue from "@vitejs/plugin-vue";

const viteAliasesOptions = {
  dir: "src",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ViteAliases(viteAliasesOptions)],
});
