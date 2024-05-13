<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);
</script>

<template>
  <div>
    <h1>Hi {{authUser?.firstName}}!</h1>
  </div>
</template>