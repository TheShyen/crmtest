<template>
  <q-drawer show-if-above :model-value="isSidebarOpen" width="250" side="left" behavior="desktop">
    <q-list padding class="menu-list">
      <q-item clickable v-ripple v-for="link in routes">
        <q-item-section>
          {{link.name}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean
})

const routes = [
  {
    name: 'CRM',
    route: '/crm'
  },
  {
    name: 'Задачи и проекты',
    route: '/crm'
  },
  {
    name: 'Структура компании',
    route: '/crm'
  },

]
</script>

<style lang="scss" scoped>

</style>