import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(
      /* webpackChunkName: "layouts-default-index" */
      '@/layouts/default/Index'
    ),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import(
          /* webpackChunkName: "views-dashboard" */
          '@/views/Dashboard'
        )
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: () => import(
          /* webpackChunkName: "views-grid-system" */
          '@/views/GridSystem'
        )
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: () => import(
          /* webpackChunkName: "views-grid-list-page" */
          '@/views/GridListPage'
        )
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: () => import(
          /* webpackChunkName: "views-breakpoints" */
          '@/views/Breakpoints'
        )
      },
      {
        path: '/typography',
        name: 'Typography',
        component: () => import(
          /* webpackChunkName: "views-typography" */
          '@/views/Typography'
        )
      },
      {
        path: '/tables/app-table',
        name: 'AppTables',
        component: () => import(
          /* webpackChunkName: "views-app-tables" */
          '@/views/table/AppTables'
        )
      },
      {
        path: '/tables/basic-table',
        name: 'BasicTables',
        component: () => import(
          /* webpackChunkName: "views-basic-tables" */
          '@/views/table/BasicTables'
        )
      },
      {
        path: '/forms/validation-form',
        name: 'ValidationForm',
        component: () => import(
          /* webpackChunkName: "views-validation-forms" */
          '@/views/form/ValidationForms'
        )
      },
      {
        path: '/forms/app-form',
        name: 'AppForm',
        component: () => import(
          /* webpackChunkName: "views-app-forms" */
          '@/views/form/AppForms'
        )
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: () => import(
          /* webpackChunkName: "views-buttons" */
          '@/views/Buttons'
        )
      },
      {
        path: '/icons',
        name: 'Icons',
        component: () => import(
          /* webpackChunkName: "views-icons" */
          '@/views/Icons'
        )
      },
    ]
  },
  {
    path: '/authentication',
    component: () => import(
      /* webpackChunkName: "layouts-authentication-index" */
      '@/layouts/authentication/Index'
    ),
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: () => import(
          /* webpackChunkName: "views-sign-in" */
          '@/views/authentication/SignIn'
        )
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(
          /* webpackChunkName: "views-sign-up" */
          '@/views/authentication/SignUp'
        )
      },
    ]
  },
  {
    path: '/page',
    component: () => import(
      /* webpackChunkName: "layouts-page-index" */
      '@/layouts/page/Index'
    ),
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: () => import(
          /* webpackChunkName: "views-product-list" */
          '@/views/page/ProductList'
        )
      },
    ]
  }
]
const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
