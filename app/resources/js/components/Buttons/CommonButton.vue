<template>
  <q-btn
    @click="$emit('onButtonClick', $event, id)"
    :round="mini ? true : false"
    :size="mini ? '8px' : '14px'"
    :color="color"
    :square="square"
    ><slot></slot
  ></q-btn>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: String,
  mini: Boolean, // Если нужна круглая и маленькая кнопка - true
  square: Boolean, // Если нужна квадратная кнопка
});
</script>
