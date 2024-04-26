<template>
  <div>
    <label class="label-input" @click="input.focus()" for="input">Имя</label>
    <q-input id="input" outlined v-model="text" ref="input" @update:model-value="$emit('change-input', text)" dense/>
  </div>

</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  label: String
})
defineEmits(['change-input'])
const text = ref('')
const input=ref(null)

</script>

<style lang="scss" scoped>
.label-input {
  font-size: 12px;
  color: gray;
}

</style>