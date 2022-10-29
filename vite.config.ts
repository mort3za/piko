import path from "path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import SvgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd());
  // console.log({ env });

  return {
    // base: "/piko/",
    resolve: {
      alias: {
        "@twitter": path.resolve(__dirname, "./node_modules/twitter-api-sdk/dist/gen/openapi-types"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@mixins": path.resolve(__dirname, "./src/mixins"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@router": path.resolve(__dirname, "./src/router"),
        "@stores": path.resolve(__dirname, "./src/stores"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@types": path.resolve(__dirname, "./src/types"),
      },
    },
    plugins: [vue(), SvgLoader()],
  };
});
