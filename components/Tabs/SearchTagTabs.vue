<template>
  <q-tabs
      v-model="tab"
      class="tabs bg-grey-3 text-secondary"
      dense
      align="justify"
  >
    <q-tab name="mails" label="Mails" class="tab">
        <q-badge color="grey" rounded floating transparent>2</q-badge>
    </q-tab>
    <q-tab name="alarms" label="Alarms">
      <q-badge color="grey" rounded floating transparent>10+</q-badge>
    </q-tab>
    <q-tab alert name="movies" label="Movies">
      <q-badge color="grey" rounded floating transparent>5</q-badge>
    </q-tab>
  </q-tabs>
</template>

<script setup>
import {ref} from "vue";

const tab = ref('mails')
</script>

<style lang="scss" scoped>
.tabs {
  border-radius: 10px;
  margin-top: 10px;
}

</style>