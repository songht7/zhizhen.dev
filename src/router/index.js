import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

//component: () => import(/* webpackChunkName: "about" */ './views/About.vue') 按需引入写法

// import Login from "./modules/login";
import auit from "./modules/auit";

export default new Router({
  // mode: "history",
  base: '/',//process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/home/index"),
      // children: [
      //   {
      //     path: "service",
      //     name: "Service",
      //     component: () => import("@/views/service/index"),
      //   },
      // ]
    },
    {
      path: "/home/index",
      name: "Index",
      component: () => import("@/views/home/index"),
    },
    {
      path: "/about/index",//
      name: "About",
      component: () => import("@/views/about/index"),
    },
    {
      path: "/detail/index",//
      name: "Detail",
      component: () => import("@/views/detail/index"),
    },
    {
      path: '/service/index',
      name: 'Service',
      component: () => import('@/views/service/index'),
    },
    {
      path: '/contact/index',
      name: 'Contact',
      component: () => import('@/views/contact/index'),
    },
    // Login,
    ...auit
  ],
});
