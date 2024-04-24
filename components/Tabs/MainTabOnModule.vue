<template>
  <q-tabs
      v-model="tab"
      inline-label
      align="left"
      class="bg-white shadow-2 q-mb-md q-pa-xs rounded-borders"
  >
    <q-tab name="mails" label="Mails"/>
    <q-tab name="alarms" label="Alarms"/>
    <q-btn-dropdown auto-close stretch flat label="More...">
      <q-list>
        <q-item clickable @click="tab = 'movies'">
          <q-item-section>Movies</q-item-section>
        </q-item>

        <q-item clickable @click="tab = 'photos'">
          <q-item-section>Photos</q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </q-tabs>

</template>

<script setup>
import {ref} from "vue";

const tab = ref('mails')
</script>

<style lang="scss" scoped>

</style>