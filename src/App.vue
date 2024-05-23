<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useAuthStore } from '@/stores/authStore.js'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const authStore = useAuthStore()
</script>

<template>
  <AppHeader />
  <AppSidebar v-if="authStore.user" />
  <AppFooter />
  <div class="body-main">
    <RouterView />
  </div>
</template>

<style>
@import "assets/main.css";

.body-main {
  width: 100%;
  height: 100%;
  padding: 35px 40px 35px 40px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #42b983;
}
</style>