import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/home",
      name: "home",
      component: HomeView
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    }
  ]
});
