<template>
  <div class="task-header">
    <h2>Tasks</h2>
<!--    <button>+</button>-->
  </div>
  <div class="task-board">
    <div class="view-switch">
      <button @click="setView('grid')">Grid view</button>
      <button @click="setView('list')">List view</button>
    </div>
    <div v-if="view === 'grid'" class="grid-view">
      <TaskColumn
        v-for="(column, index) in columns"
        :key="index"
        :title="column.title"
        :tasks="column.tasks"
      />
    </div>
    <div v-if="view === 'list'" class="list-view">
      <TaskList
        v-for="(list, index) in columns"
        :key="index"
        :title="list.title"
        :tasks="list.tasks"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskColumn from './TaskBoardColumn.vue'
import TaskList from './TaskBoardList.vue'
import type Task from '@/interfaces/Task';

interface Tasks {
  open: Task[];
  inProgress: Task[];
  sentToClient: Task[];
  done: Task[];
}

interface ColumnData {
  title: string;
  tasks: Task[];
}

const view = ref('grid')
const tasks: Tasks = {
  open: [
    { id: 1, name: 'Task 1', email:'aaa' },
    { id: 2, name: 'Task 2', email:'sss' },
  ],
  inProgress: [
    { id: 3, name: 'Task 3', email:'ddd' },
    { id: 4, name: 'Task 4', email:'fff' },
  ],
  sentToClient: [
    { id: 5, name: 'Task 5', email:'bbb' },
  ],
  done: [
    { id: 6, name: 'Task 6', email:'eee' },
    { id: 7, name: 'Task 7', email:'qqq' },
  ],
};

const columns: ColumnData[] = [
  { title: 'Open', tasks: tasks.open },
  { title: 'In progress', tasks: tasks.inProgress },
  { title: 'Sent to Client', tasks: tasks.sentToClient },
  { title: 'Done', tasks: tasks.done },
];

const setView = (newView: string) => {
  view.value = newView;
};

</script>

<style scoped>
.task-board {
  padding: 1rem;
}

:deep(.task) {
  background-color: white;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
}

:deep(.add-task) {
  background-color: #ffa500;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
}

:deep(.task-header) {
  display: flex;
}

.view-switch {
  margin-bottom: 1rem;
}

.grid-view {
  display: flex;
}

.grid-view > * {
  margin-right: 1rem;
}

.list-view > * {
  margin-bottom: 1rem;
}
</style>
