import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../components/pages/LoginPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/components/pages/DashboardPage.vue'),
    meta: {
      title: 'Dashboard',
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'Login',
      layout: 'Welcome',
      requiresAuth: false
    }
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Check if the user is authenticated
  if (to.meta.requiresAuth) {
    next('/login'); // Todo implement login func
  } else {
    // Set page title on route change
    document.title = to.meta.title ? to.meta.title + ' | ' + process.env.VUE_APP_TITLE : process.env.VUE_APP_TITLE;
    next();
  }
});

export default router;
