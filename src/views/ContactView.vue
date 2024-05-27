<script setup lang="ts">
import AppTable from '@/components/AppTable.vue'
import { fetchWrapper, baseUrl } from '@/helpers/fetch-wraper'
import { onMounted, ref } from 'vue'
import type TableHeader from '@/interfaces/TableHeader'
import type Contact from '@/interfaces/Contact'
import TaskBoard from '@/components/TaskBoard.vue'

const headers: TableHeader[] = [
  { label: 'ID', key: 'id' },
  { label: 'Email', key: 'email' },
  { label: 'Created Date', key: 'created_at' }
]

const contacts = ref<Contact[]>([])

onMounted(async () => {
  contacts.value = await fetchWrapper.get(`${baseUrl}/contacts`)
})

</script>

<template>
<!--  <TaskBoard />-->
  <AppTable :headers="headers" :items="contacts" />
</template>

<style scoped>

</style>