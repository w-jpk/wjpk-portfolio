import { createRouter, createWebHistory } from "vue-router";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
