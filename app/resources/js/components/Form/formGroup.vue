<template>
  <q-form
    @submit="$emit('formSubmit')"
    @reset="$emit('formReset')"
    class="q-ma-lg"
    style="margin-top: 50px;"
  >
    <div class="q-mt-xs" style="width: 35%">
      <component class="form-input" v-for="field in formConfig" :is="formFields[field.type]" :placeholder="field.data"></component>
    </div>
  </q-form>
  <div class="form-buttons">
    <q-btn class="q-mr-md" label="Сохранить" type="submit" color="green"/>
    <q-btn label="Отменить" type="submit" color="primary"/>
  </div>
</template>

<script setup>
import Select from "./select.vue";
import Input from "./formInput.vue";

defineProps(['formConfig'])

const formFields = {
  input: Input,
  select: Select,
}
</script>

<style lang="scss" scoped>
.form-input {
  margin-top: 20px;
}
.form-buttons {
  width: 300px;
  position: fixed;
  top: 95%;
  left: 50%;
}
</style>