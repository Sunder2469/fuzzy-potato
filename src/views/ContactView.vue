<script setup lang="ts">
import AppTable from '@/components/sidebar/AppTable.vue'
import { fetchWrapper, baseUrl } from '@/helpers/fetch-wraper'
import { onMounted, ref } from 'vue'
import type TableHeader from '@/interfaces/TableHeader'
import type Contact from '@/interfaces/Contact'

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
  <AppTable :headers="headers" :items="contacts" />
</template>

<style scoped>

</style>