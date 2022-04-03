import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("@pages/Home.vue");
const Status = () => import("@pages/Status.vue");
const Login = () => import("@pages/Login.vue");
const Profile = () => import("@pages/Profile.vue");

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
