<template>
  <q-input
    dark
    dense
    rounded
    standout
    :bg-color="bg"
    :outlined="outlined"
    v-model="text"
    :placeholder="placeholder"
  >
    <template v-slot:append>
      <q-icon v-if="text === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
    </template>
  </q-input>
</template>

<script setup>
import { ref, defineProps } from "vue";

const text = ref("");

const props = defineProps({
  placeholder: String,
  bg: String, // фон
  outlined: Boolean,
});
</script>

<style lang="scss" scoped>
.search {
  width: 30vw;
}
</style>
