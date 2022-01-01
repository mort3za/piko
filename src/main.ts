import { createApp } from "vue";
import App from "./App.vue";
import "@styles/index.css";
import { router } from "@router/index";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
