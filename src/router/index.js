import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Clothes from "../views/Clothes.vue"
import Shoes from "../views/Shoes.vue"
import Furniture from "../views/Furniture.vue"
import Electronics from "../views/Electronics.vue"
import Others from "../views/Others.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/clothes",
    name: "clothes",
    component: Clothes,
  },
  {
    path: "/shoes",
    name: "shoes",
    component: Shoes,
  },
  {
    path: "/electronics",
    name: "electronics",
    component: Electronics,
  },
  {
    path: "/furniture",
    name: "furniture",
    component: Furniture,
  },
  {
    path: "/others",
    name: "Others",
    component: Others,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
