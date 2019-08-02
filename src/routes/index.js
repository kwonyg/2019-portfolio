import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/",
      name: "home",
      component: HomeView
    }
  ]
});
