<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { isCollapsed } from '@/components/sidebar/state'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<template>
  <RouterLink :to="to" class="" :class="['link', { active: isActive } ]">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!isCollapsed">
        <slot />
      </span>
    </transition>
  </RouterLink>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;

  color: white;
  text-decoration: none;
  height: 2.5em;

  white-space: nowrap;
  text-overflow: ellipsis;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>