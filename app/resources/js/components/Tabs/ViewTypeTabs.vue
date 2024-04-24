<template>
  <q-tabs
    v-model="tab"
    narrow-indicator
    dense
    align="justify"
    class="tabs text-secondary bg-grey-3"
  >
    <q-tab :ripple="{ color: 'orange' }" name="mails" label="Mails" />
    <q-tab :ripple="{ color: 'orange' }" name="alarms" label="Alarms" />
    <q-tab :ripple="{ color: 'orange' }" name="movies" label="Movies" />
  </q-tabs>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("mails");
</script>

<style lang="scss" scoped>
.tabs {
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 20px;
}
</style>
