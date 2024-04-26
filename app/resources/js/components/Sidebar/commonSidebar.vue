<template>
  <q-drawer
    show-if-above
    :model-value="isSidebarOpen"
    :width='250'
    side="left"
    behavior="desktop"
  >
<<<<<<< HEAD
    <q-tabs align="left" vertical active-bg-color="grey-3">
      <q-route-tab v-for="tab in routeTabs" no-caps :to="tab.route">
        {{tab.text}}
=======
    <q-tabs align="left" vertical>
      <q-route-tab v-for="tab in routeTabs" no-caps :to="tab.route">
        {{ tab.text }}
>>>>>>> remotes/origin/vadim
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
<<<<<<< HEAD
    route: "/crm",
=======
    route: "/crm/lead",
>>>>>>> remotes/origin/vadim
    id: 1,
    type: "tab",
  },
  {
    text: "Компания",
    route: "/company",
    id: 2,
    type: "tab",
  },
<<<<<<< HEAD
]
=======
];
>>>>>>> remotes/origin/vadim
</script>

<style lang="scss" scoped></style>
