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
      path: "/home/index",//首页
      name: "Index",
      component: () => import("@/views/home/index"),
    },
    {
      path: "/about/index",//关于我们
      name: "About",
      component: () => import("@/views/about/index"),
    },
    {
      path: "/detail/index",//市场优势、详情
      name: "Detail",
      component: () => import("@/views/detail/index"),
    },
    {
      path: '/service/index',//服务流程
      name: 'Service',
      component: () => import('@/views/service/index'),
    },
    {
      path: "/develop/index",//发展前景
      name: "Develop",
      component: () => import("@/views/develop/index"),
    },
    {
      path: "/brand/index",//品牌文化
      name: "Brand",
      component: () => import("@/views/brand/index"),
    },
    {
      path: '/contact/index',//联系我们
      name: 'Contact',
      component: () => import('@/views/contact/index'),
    },
    {
      path: '/CustomerManage/index',//客户管理系统
      name: 'CustomerManage',
      component: () => import('@/views/CustomerManage/index'),
    },
    // Login,
    ...auit
  ],
});
