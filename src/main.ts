import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import "./styles/app.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
