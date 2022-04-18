import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@pages/Home.vue");
const Status = () => import("@pages/Status.vue");
const Login = () => import("@pages/Login.vue");
const Profile = () => import("@pages/Profile.vue");
const Settings = () => import("@pages/Settings.vue");

export const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
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
      meta: { timeline: { exclude_replies: true } },
    },
    {
      name: "Settings",
      path: getPath("settings"),
      component: Settings,
    },
    {
      name: "Status",
      path: getPath(":screen_name/status/:id"),
      component: Status,
    },
    {
      name: "Profile",
      path: getPath(":screen_name"),
      component: Profile,
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
