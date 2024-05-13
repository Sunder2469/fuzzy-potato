import { defineStore } from 'pinia';
import { fetchWrapper } from '@/helpers/fetch-wraper';
import { router} from '@/router/routes'

const baseUrl: string = `${import.meta.env.VITE_BASE_API_URL}`;

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(`${localStorage.getItem('user')}`),
    returnUrl: null
  }),
  actions: {
    async login(email: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}/login`, { username: email, password });
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      await router.push(this.returnUrl || '/');
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user');
      router.push('/login');
    }
  }
});