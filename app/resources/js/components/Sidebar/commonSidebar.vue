<template>
  <q-drawer
    show-if-above
    :model-value="isSidebarOpen"
    width="250"
    side="left"
    behavior="desktop"
  >
    <q-tabs align="left" vertical>
      <q-route-tab no-caps to="/company">
        Компания
      </q-route-tab>
    </q-tabs>
  </q-drawer>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});

</script>

<style lang="scss" scoped></style>
