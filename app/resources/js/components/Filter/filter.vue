<template>
  <q-chip
    removable
    v-model="eclair"
    @remove="console.log('Icecream')"
    color="teal"
    text-color="white"
  >
    <slot></slot>
  </q-chip>
</template>

<script setup>
import { ref } from "vue";

const eclair = ref(true);
</script>
