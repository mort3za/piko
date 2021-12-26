import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import "./styles/index.css";
import router from "./router";

const app = createApp(App).use(store);
app.use(router);
app.use(store);
app.mount("#app");
