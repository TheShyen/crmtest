<template>
  <q-btn-dropdown
    :color="color"
    push
    glossy
    no-caps
    :label="label"
    @click="$emit('onMainClick', $event)"
  >
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
