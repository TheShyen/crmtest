<template>
  <q-card v-if="show" class="bg-primary">
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean,
});
</script>
