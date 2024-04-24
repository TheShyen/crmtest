<template>
  <q-chat-message :textColor="textColor" :bgColor="bgColor"
    ><div>
      <slot></slot></div
  ></q-chat-message>
</template>

<script setup>
const props = defineProps({
  textColor: String,
  bgColor: String,
});
</script>
