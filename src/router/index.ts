import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@pages/Home.vue");
const Status = () => import("@pages/Status.vue");
const Login = () => import("@pages/Login.vue");
const Profile = () => import("@pages/Profile.vue");
const Settings = () => import("@pages/Settings.vue");
const List = () => import("@pages/List.vue");
const Lists = () => import("@pages/Lists.vue");

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
      name: "Lists",
      path: getPath("lists/all"),
      component: Lists,
    },
    {
      name: "List",
      path: getPath("i/lists/:id"),
      component: List,
    },
    {
      name: "Status",
      path: getPath(":username/status/:id"),
      component: Status,
    },
    {
      name: "Profile",
      path: getPath(":username"),
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
  return "/" + path;
}
