import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    component: () => import('layouts/AuthorizedLayout.vue'),
    children: [
      {
        name: "Authorization",
        path: "/authorization",
        component: () => import("src/pages/AuthorizationPage.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: '/',
        component: () => import('src/pages/MainPage.vue'),
        name: 'MainPage',
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
