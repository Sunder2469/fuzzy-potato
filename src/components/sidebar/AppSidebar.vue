<script setup lang="ts">
import AppSidebarItem from '@/components/sidebar/AppSidebarItem.vue'
import { isCollapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/state'
import routesEnum from '@/enums/routesEnum'
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div class="sidebar-main-title">
      <span
        class="collapse-icon"
        :class="{ 'rotate-180': isCollapsed }"
        @click="toggleSidebar"
      >
      <i class="fas fa-angle-double-left" />
    </span>
    </div>

    <AppSidebarItem :to="routesEnum.HomeRoute" icon="fas fa-home">Home</AppSidebarItem>
    <AppSidebarItem :to="routesEnum.ContactsIndexRoute" icon="fas fa-book">Contacts</AppSidebarItem>
    <AppSidebarItem :to="routesEnum.AboutUsRoute" icon="fas fa-image">Tasks</AppSidebarItem>
    <AppSidebarItem :to="routesEnum.LogoutRoute" icon="fas fa-arrow-right-from-bracket">Logout</AppSidebarItem>
  </div>
</template>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar .sidebar-main-title {
  height: 2.5em;
  display: flex;
  justify-content: end;
}

.collapse-icon {
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
