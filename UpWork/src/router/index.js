import { createRouter, createWebHistory } from "vue-router";
import dropdown from "../components/dropdown.vue";
import index from "../views/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dropdown",
      name: "dropdown",
      component: dropdown,
    },
    {
      path: "/",
      name: "index",
      component: index,
    },
  ],
});

export default router;
