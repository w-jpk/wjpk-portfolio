import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
    meta: {
      title: "W-jpk - Home",
    },
  },
  {
    path: "/project",
    name: "Project",
    component: () => import("../pages/SimpleProject.vue"),
    meta: {
      title: "W-jpk - Project",
    },
  },
  {
    path: "/adm-login",
    name: "AdmLogin",
    component: () => import("../admin/pages/AdmLogin.vue"),
    meta: {
      title: "W-jpk - Admin Login",
    },
  },
  {
    path: "/adm-page",
    name: "AdmPage",
    component: () => import("../admin/pages/AdmPage.vue"),
    meta: {
      title: "W-jpk - Admin Page",
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
    meta: {
      title: "W-jpk - Not Found",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

router.beforeEach((to, from, next) => {
  if (store.getters.isLoading) {
    next();
    return;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ name: "AdmLogin" }); // Перенаправление на страницу авторизации
    } else {
      next(); // Если аутентифицирован, продолжаем
    }
  } else {
    next(); // Если маршрут не требует аутентификации
  }
});

export default router;
