import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Wrap",
      component: () => import("../views/Chat/Chat.vue")
    }
  ]
});