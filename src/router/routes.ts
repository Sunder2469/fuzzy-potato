import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import LoginView  from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

router.beforeEach(async (to) => {
  const publicPages: string[] = ['/login'];
  const isAuthRequired: boolean = !publicPages.includes(to.path);
  const authStore = useAuthStore();

  if (isAuthRequired && !authStore.user) {
    return {
      path: '/login'
    };
  }else {
    return {
      path: '/' // need to ADD 404 page
    };
  }

});