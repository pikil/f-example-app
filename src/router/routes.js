const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'admin/',
        component: () => import('src/containers/AdminContainer.vue'),
        children: [
          { path: '', name: 'Admin page', component: () => import('pages/admin/AdminPage.vue') },
          { path: 'jobs', name: 'Your jobs', component: () => import('pages/admin/JobsList.vue') },
          { path: 'job/:id', name: 'Job edit', component: () => import('pages/admin/JobPage.vue') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
