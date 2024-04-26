<template>
  <q-drawer
    show-if-above
    :mini="!isSidebarOpen"
    :width='250'
    side="left"
    style="background-color: aliceblue"
  >
    <q-tabs align="left" vertical active-bg-color="grey-3">
      <q-route-tab v-for="tab in routeTabs" no-caps :to="tab.route">
        <q-icon v-if="!isSidebarOpen" name="delete"></q-icon>
        <template v-else>
          {{ tab.text }}
        </template>


      </q-route-tab>
    </q-tabs>
  </q-drawer>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});

const routeTabs = [
  {
    text: "CRM",
    route: "/crm",
    id: 1,
    type: "tab",
  },
  {
    text: "Компания",
    route: "/company/structure",
    id: 2,
    type: "tab",
  },
];

</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
