import { createRouter, createWebHistory } from "vue-router";
import { useMonitoringStore } from "@/stores/monitoring";
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
      path: "/table",
      name: "Table",
      component: () => import("@/views/TableView.vue"),
      meta: {},
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useMonitoringStore();
  if (to.meta.requiresAuth && !store.accessToken) {
    next("/login");
  }
  next();
});

export default router;
