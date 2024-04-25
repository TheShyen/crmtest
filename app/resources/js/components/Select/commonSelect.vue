<template>
  <q-select
    outlined
    v-model="value"
    @update:model-value="$emit('onSelectChange', $event, id)"
    :options="options"
    :label="label"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";

const value = ref("");

const props = defineProps({
  label: String, // название
  options: Array, // Пример [ '', '', '']
});
</script>
