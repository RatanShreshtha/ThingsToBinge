import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Content from "../views/Content.vue";
import Details from "../views/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/",
    name: "About",
    component: About
  },
  {
    path: "/content/:type/",
    name: "Content",
    component: Content
  },
  {
    path: "/:type/details/:name/",
    name: "Details",
    component: Details
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
