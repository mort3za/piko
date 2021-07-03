import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      path: "/",
      redirect: (to) => {
        return { name: "Home" };
      },
    },
  ],
});

export default router;
