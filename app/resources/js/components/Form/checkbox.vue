<template>
  <q-checkbox v-model="checkboxValue" @update:model-value="changeCheckbox" :val="radioValue"/>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['change-checkbox'])
const props = defineProps({
  radioValue: String
})

const checkboxValue = ref('')

function changeCheckbox() {
  emit('change-checkbox', checkboxValue.value)
}
</script>

<style lang="scss" scoped>

</style>