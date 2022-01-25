import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import("../views/AddCustomer.vue"),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import("../views/EditCustomer.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
