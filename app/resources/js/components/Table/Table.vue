<template>
  <q-table
    :rows="rows"
    :columns="columns"
    row-key="name"
    style="border: 1px solid black"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rows: Array,
  columns: Array,
});
</script>
