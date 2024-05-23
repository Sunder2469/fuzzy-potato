<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import type TableHeader from '@/interfaces/TableHeader';

interface Item {
  [key: string]: any;
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true
  },
  headers: {
    type: Array as PropType<TableHeader[]>,
    required: true
  }
})

const sortKey = ref<keyof Item | ''>('');
const sortOrders = ref<Record<keyof Item, number>>({});

props.headers.forEach((header) => {
  sortOrders.value[header.key] = 1;
});

const sort = (key: keyof Item) => {
  if (sortKey.value === key) {
    sortOrders.value[key] = -sortOrders.value[key];
  } else {
    sortKey.value = key;
  }
};

const filteredData = computed<Item[]>(() => { // any fix item.id
  let filtered = [...props.items];
  if (sortKey.value) {
    filtered = filtered.sort((a, b) => {
      const order = sortOrders.value[sortKey.value];
      if (a[sortKey.value] > b[sortKey.value]) {
        return order;
      } else if (a[sortKey.value] < b[sortKey.value]) {
        return -order;
      }
      return 0;
    });
  }

  return filtered;
});

</script>

<template>
  <table>
    <thead>
    <tr>
      <th
        v-for="header in headers"
        :key="header.key"
        @click="sort(header.key)"
      >
        {{ header.label }}
        <i
          class="fas" style="vertical-align: 0"
          :class="[sortOrders[header.key] > 0 ? 'fa-sort-down' : 'fa-sort-up']"
        ></i>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="item in filteredData"
      :key="item.id"
    >
      <td
        v-for="header in headers"
        :key="header.key"
      >
        {{ item[header.key] }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}

th {
  cursor: pointer;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th:hover {
  background-color: #f1f1f1;
}
</style>