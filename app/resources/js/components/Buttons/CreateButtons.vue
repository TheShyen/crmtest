<template>
  <q-btn-dropdown
      split
      text-color="white"
      color="green"
      label="Создать"
      size="14px"
      class="q-mb-md"
      @click="createEntity"
  >
    <q-list>
      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Photos</q-item-label>
          <q-item-label caption>February 22, 2016</q-item-label>
        </q-item-section>

      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>Vacation</q-item-label>
          <q-item-label caption>February 22, 2016</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
function() {
  createEntity
}
</script>

<style lang="scss" scoped>

</style>