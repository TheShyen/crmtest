<template>
  <q-card v-if="show" class="bg-primary">
    <q-card-section>
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup>

const props = defineProps({
  show: Boolean,
});
</script>
