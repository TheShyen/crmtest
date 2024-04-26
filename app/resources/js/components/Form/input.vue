<template>
  <q-input outlined v-model="text" @update:model-value="$emit('change-input', text)" dense/>
</template>

<script setup>
import {ref} from "vue";

defineEmits(['change-input'])
const text = ref('')
</script>

<style lang="scss" scoped>

</style>