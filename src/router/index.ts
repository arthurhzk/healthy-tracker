import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/system",
      name: "System",
      component: () => import("@/views/SystemView.vue"),
      meta: {},
    },
    {
      path: "/monitoring",
      name: "Monitoring",
      component: () => import("@/views/MonitoringView.vue"),
      meta: {},
    },
    {
      path: "/mass",
      name: "MassMonitoring",
      component: () => import("@/views/MassView.vue"),
    },
    {
      path: "/size",
      name: "SizeMonitoring",
      component: () => import("@/views/SizeView.vue"),
    },
  ],
  linkActiveClass: "active-lki",
});

// router.beforeEach((to, from, next) => {
//   const store = useCredentialsStore();
//   if (to.meta.requiresAuth && !store.authenticated) {
//     next("/login");
//   }
//   next();
// });

export default router;
