<template>
  <q-tabs
    v-model="tab"
    inline-label
    align="left"
    class="bg-white shadow-6 q-mb-md q-pa-xs rounded-borders"
  >
    <div v-for="tab in tabs" :key="tab.id">
      <q-route-tab
        :to="tab.route"
        v-if="tab.type === 'tab'"
        :name="tab.text"
        :label="tab.text"
      >
      </q-route-tab>

      <q-btn-dropdown
        v-if="tab.type === 'select'"
        auto-close
        stretch
        flat
        :label="tab.text"
      >
        <q-list>
          <q-item
            v-for="selectItems in tab.options"
            clickable
            :key="selectItems.id"
          >
            <q-item-section>{{ selectItems.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-tabs>
</template>

<script setup>
import { ref, defineProps } from "vue";

const tab = ref("mails");
const props = defineProps({
  tabs: Array,
});
/*
[
  {
    text: "Структура компании",
    route: "/company/structure",
    id: 1,
    type: "tab",
  },
  { text: "Сотрудники", route: "/company/users", id: 2, type: "tab" },
  {
    text: "Время и отчёты",
    route: "/",
    id: 3,
    type: "select",
    options: [
      {
        text: "Собрания и планерки",
        id: 1,
        route: "/",
      },
      {
        text: "График отсутствий",
        id: 2,
        route: "/",
      },
      {
        text: "История входов",
        id: 3,
        route: "/",
      },
    ],
  },
];
*/
</script>

<style lang="scss" scoped></style>
