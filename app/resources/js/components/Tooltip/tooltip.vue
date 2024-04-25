<template>
  <q-tooltip :delay="delay" v-if="show" :class="`bg-${bg} text-${color}`"
    ><slot></slot
  ></q-tooltip>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean, // true если нужно показать
  delay: Number, // задержка до появления
  bg: String, // цвет фона
  color: String, // цвет текста
});
</script>
