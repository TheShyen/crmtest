<template>
  <q-radio v-model="radioValue" @update:model-value="changeCheckbox" :val="radioValue"/>
</template>

<script setup>
import {ref} from "vue";

const emit = defineEmits(['change-radio'])
const props = defineProps({
  radioValue: String
})

const radioValue = ref('')

function changeCheckbox() {
  emit('change-radio', radioValue.value)
}
</script>

<style lang="scss" scoped>

</style>