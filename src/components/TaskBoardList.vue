<template>
  <div class="task-list">
    <div class="task-header">
      <h2>{{ title }}</h2>
      <button class="add-task" @click="addTask">+</button>
    </div>
    <div v-for="task in props.tasks" :key="task.id" class="task">
      {{ task.name }}
      {{ task.email }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type Task from '@/interfaces/Task';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: Array as PropType<Task[]>,
    required: true
  }
})
const addTask = () => {
  //logic
}

</script>

<style scoped>
.task-list {
  background-color: #f1f1f1;
  padding: 1rem;
  border-radius: 5px;
}
</style>
