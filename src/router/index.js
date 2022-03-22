import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import Login from "../views/Login/index.vue";
import Logon from "../views/Logon/index.vue";
import Home from "../views/Home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logon",
    name: "Logon",
    component: Logon,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
