<template>
  <q-chat-message sent :bg-color="color"
    ><div><slot></slot></div
  ></q-chat-message>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: Array, // Текст сообщения. Передаётся как ['текст']
  color: String, // Цвет фона.
});
</script>

<style></style>
