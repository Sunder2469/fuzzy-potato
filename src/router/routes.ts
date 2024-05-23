import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import routesEnum from '@/enums/routesEnum'
import ContactsView from '@/views/ContactView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: routesEnum.HomeRoute,
      component: HomeView
    },
    {
      path: routesEnum.AboutUsRoute,
      component: AboutUsView
    },
    {
      path: routesEnum.ContactsIndexRoute,
      component: ContactsView
    },
    {
      path: routesEnum.LoginRoute,
      name: 'Login',
      component: LoginView
    },
    {
      path: routesEnum.LogoutRoute,
      name: 'Logout',
      component: {
        beforeRouteEnter() {
          useAuthStore().logout();
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach(async (to) => {
  const publicPages: string[] = ['/login']
  const isAuthRequired: boolean = !publicPages.includes(to.path)
  const authStore = useAuthStore()

  if (isAuthRequired && !authStore.user) {
    return {
      path: '/login'
    }
  }
  if (to.path === routesEnum.LoginRoute && authStore.user) {
    return {
      path: '/'
    }
  }
})