<
<template>
  <q-btn
    :round="mini ? true : false"
    :size="mini ? '8px' : '14px'"
    :color="color"
    ><slot></slot
  ></q-btn>
</template>
>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  color: String,
  mini: Boolean, // Если нужна круглая и маленькая кнопка - true
});
</script>
