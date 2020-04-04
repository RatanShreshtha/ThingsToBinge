import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Genres from "./views/Genres.vue";
import Suggestion from "./views/Suggestion.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about/",
    name: "about",
    component: About
  },
  {
    path: "/list/:type/genres",
    name: "genres",
    component: Genres
  },
  {
    path: "/suggestion/:genre/:type",
    name: "suggestion",
    component: Suggestion
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
