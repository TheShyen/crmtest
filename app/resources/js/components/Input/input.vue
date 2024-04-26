<template>
  <q-input
    outlined
    v-model="value"
    @update:model-value="$emit('onInputChange', $event, id)"
    :label="label"
    :name="label"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";

const value = ref("");

const props = defineProps({
  label: String, // название поля
  placeholder: String,
});
</script>
