<template>
  <q-badge rounded :color="color"><slot></slot></q-badge>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: String, // цвет фона. Передавать как :color="'red'"
});
</script>
