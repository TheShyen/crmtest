<template>
  <q-btn-dropdown color="primary" :label="label">
    <q-list class="column"><slot></slot></q-list
  ></q-btn-dropdown>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
  color: String,
});
</script>
