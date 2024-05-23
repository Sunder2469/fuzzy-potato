import { ref, computed } from 'vue'

export const isCollapsed = ref(false)
export const toggleSidebar = () => (isCollapsed.value = !isCollapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 50
export const sidebarWidth = computed(
  () => `${isCollapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)