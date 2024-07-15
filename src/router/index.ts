const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('~/pages/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/pages/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const isAuthenticated = true

router.beforeEach((to, _, next) => {
  if (to.name !== 'Login' && !isAuthenticated)
    next({ name: 'Login' })
  else next()
})

export default router
