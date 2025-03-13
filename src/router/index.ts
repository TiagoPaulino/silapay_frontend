import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CreateProductView from '../views/CreateProductView.vue'
import EditProductView from '../views/EditProductView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      children: [
        {
          path:":id",
          name:"product",
          component: ProductView,
        },
        {
          path:"create",
          name:"create",
          component: CreateProductView,
        }, 
        {
          path:"edit/:id",
          name:"edit",
          component: EditProductView,
        }
      ]
    },
  ],
})

export default router
