<template>
  <div class="q-mt-md row items-start">
    <EntityCard/>
  </div>
  <Input @change-input='(value)=> console.log(value)'/>
  <Radio
      v-for="checkbox in checkboxValues"
      :label="checkbox.text"
      :val="checkbox.value"
      v-model="radioValue"
      @change-radio="(val)=>console.log(val)"
  />
  <Checkbox
      v-for="checkbox in checkboxValues"
      :label="checkbox.text"
      :val="checkbox.value"
      v-model="checkboxValuesArray"
      @change-checkbox="(val)=>console.log(val)"
  />


</template>

<script setup>
import EntityCard from "../components/entityCard.vue";
import Input from "../../../components/Form/input.vue";
import Checkbox from "../../../components/Form/checkbox.vue";
import {ref} from "vue";
import Radio from "../../../components/Form/radio.vue";

const checkboxValuesArray = ref([])
const radioValue = ref('')
const checkboxValues = [
  {
    text: 'не выбрано',
    value: 1
  }, {
    text: '3000-5000',
    value: 2
  },
]
</script>

<style lang="scss" scoped>

</style>