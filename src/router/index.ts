import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Status from "../pages/Status.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      name: "Status",
      path: "/:username/status/:id",
      component: Status,
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
