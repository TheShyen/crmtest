<template>
  <q-drawer
    show-if-above
    :model-value="isSidebarOpen"
    width="250"
    side="left"
    behavior="desktop"
  >
    <q-tabs align="left" vertical>
      <q-route-tab v-for="tab in routeTabs" no-caps :to="tab.route">
        {{ tab.text }}
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
    route: "/crm/lead",
    id: 1,
    type: "tab",
  },
  {
    text: "Компания",
    route: "/company",
    id: 2,
    type: "tab",
  },
];
</script>

<style lang="scss" scoped></style>
