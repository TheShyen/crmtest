<template>
  <q-badge rounded :color="color">
    <slot></slot>
  </q-badge>
</template>

<script setup>
const props = defineProps({
  color: String, // Цвет фона
});
</script>
