<template>
  <q-dialog no-backdrop-dismiss maximized :model-value="isOpen" position="right">
    <q-card class="bg-white" style="width: 90vw">
      <q-btn dense class="close-button" flat rounded @click="$emit('close', !isOpen)" icon="close"></q-btn>
      <div>
        <slot/>
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup>
const emit = defineEmits(['close'])
const props = defineProps({
  isOpen: Boolean
})

function getWindowWidth() {
  return window.innerWidth - 200
}
</script>

<style lang="scss" scoped>
.close-button {
 position: fixed;
}
</style>