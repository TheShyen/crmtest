<template>
  <h6 class="q-my-sm">Структура компании</h6>
  <q-layout container> <divisionCard></divisionCard></q-layout>

  <label class="q-field row no-wrap items-start q-field--standard q-input">
    <div class="q-field__inner relative-position col self-stretch">
      <div class="q-field__control relative-position row no-wrap">
        <div
          class="q-field__control-container col relative-position row no-wrap q-anchor--skip items-center"
        >
          <Filter :ref="filter">Привет</Filter>
          <Filter>Пока</Filter>
          <input class="q-field__native q-placeholder" type="text" />
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
import { ref } from "vue";

import Filter from "@/components/Filter/Filter.vue";


const modelMultiple = ref(["Google", "Facebook", "Twitter", "Apple", "Oracle"]);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
</script>
