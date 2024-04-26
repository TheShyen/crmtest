<template>
  <q-btn-dropdown push rounded dense no-caps flat :label="label" icon="arrow">
    <slot></slot>
  </q-btn-dropdown>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  label: String,
});
</script>

<style lang="scss" scoped></style>
