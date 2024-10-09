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
    path: "/user",
    name: "User",
    component: () => import("../admin/pages/userInfo.vue"),
    meta: {
      title: "W-jpk - User",
      requiresAuth: true,
    },
  },
  {
    path: "/feedbackTable",
    name: "FeedbackTable",
    component: () => import("../admin/pages/feedbackTable.vue"),
    meta: {
      title: "W-jpk - Feedback Table",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "AdmLogin" });
  } else {
    next();
  }
});

export default router;
