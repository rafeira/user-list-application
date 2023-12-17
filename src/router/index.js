import { createRouter, createWebHistory } from "vue-router";
import UsersView from "../views/UsersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "users",
      component: UsersView,
    },
    {
      path: "/users/new",
      name: "create-user",
      component: () => import("../views/CreateUser.vue"),
    },
    {
      path: "/users/:id",
      name: "show-user",
      component: () => import("../views/ShowUser.vue"),
    },
  ],
});

export default router;
