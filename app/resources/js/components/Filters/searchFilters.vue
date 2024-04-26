<template>
  <q-btn-group>
    <q-btn :color="color" class="text-capitalize"><slot></slot> </q-btn>
    <q-btn :color="color" class="text-lowercase">x</q-btn>
  </q-btn-group>
</template>

<script setup>
const props = defineProps({
  color: String,
});
</script>