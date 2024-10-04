import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: () => import("../views/OverView.vue"),
    },
    {
      path: "/hardware",
      component: () => import("../views/HardwareView.vue"),
    },
    {
      path: "/software",
      component: () => import("../views/SoftwareView.vue"),
    },
    {
      path: "/explainers",
      component: () => import("../views/ExplainersView.vue"),
    },
    {
      path: "/faq",
      component: () => import("../views/FAQView.vue"),
    },
    {
      path: "/donate",
      component: () => import("../views/DonateView.vue"),
    },
  ],
});

export default router;
