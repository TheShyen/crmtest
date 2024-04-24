<template>
  <q-input dark dense rounded standout v-model="text" placeholder="искать сотрудника, документ, прочее..." class="search">
    <template v-slot:append>
      <q-icon v-if="text === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
    </template>
  </q-input>
</template>

<script setup>
import {ref} from "vue";

const text = ref('')
</script>

<style lang="scss" scoped>
.search {
  width: 30vw;
}
</style>