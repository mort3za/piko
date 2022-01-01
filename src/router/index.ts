import { createRouter, createWebHistory } from "vue-router";
import Home from "@pages/Home.vue";
import Status from "@pages/Status.vue";
import Login from "@pages/Login.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Login",
      path: getPath("login"),
      component: Login,
    },
    {
      name: "Home",
      path: getPath("home"),
      component: Home,
    },
    {
      name: "Status",
      path: getPath(":username/status/:id"),
      component: Status,
    },
    {
      path: getPath(),
      redirect: (to) => {
        return { name: "Home" };
      },
    },
  ],
});

function getPath(path = "") {
  return import.meta.env.BASE_URL + path;
}
