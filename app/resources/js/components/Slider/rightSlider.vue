<template>
  <q-drawer :model-value="isOpen" side="right" :width="getWindowWidth()" overlay bordered>
    <slot></slot>
  </q-drawer>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})
function getWindowWidth() {
  return window.innerWidth - 200
}
</script>

<style lang="scss" scoped>

</style>