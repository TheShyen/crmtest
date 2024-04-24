<template>
  <q-tabs
    v-model="tab"
    inline-label
    align="left"
    class="bg-white shadow-2 q-mb-md q-pa-xs rounded-borders"
  >
    <div v-for="tab in tabs" :key="tab.id">
      <q-tab v-if="tab.type === 'tab'" :name="tab.text" :label="tab.text" />
      <q-btn-dropdown v-else auto-close stretch flat :label="tab.text">
        <q-list>
          <q-item
            v-for="option in tab.selectItems"
            clickable
            @click="tab = 'movies'"
          >
            <q-item-section>{{ option.text }}</q-item-section></q-item
          >
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-tabs>
</template>

<script setup>
import { ref, defineProps } from "vue";

const tab = ref("mails");
const props = defineProps({
  tabs: Array /* Передаём в виде [
  { text: "Структура компании", type: "tab", route: "/", id: 1 },
  { text: "Сотрудники", type: "tab", route: "/", id: 2 },
  {
    text: "Время и отчёты",
    type: "btn-dropdown",
    id: 3,
    selectItems: [
      { text: "Собрания и планерки", route: "/", id: 1 },
      { text: "График отсутствий", route: "/", id: 2 },
      { text: "История входов", route: "/", id: 3 },
    ],
  },
]; */,
});
</script>

<style lang="scss" scoped></style>
