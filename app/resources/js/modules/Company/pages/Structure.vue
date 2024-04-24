<template>
  <div>
    <MainTabOnModule :tabs="tabs"></MainTabOnModule>
  </div>
</template>

<script setup>
import Alert from "@/components/Alert/commonAlert.vue";
import Counter from "@/components/Counter/commonCounter.vue";
import MainTabOnModule from "@/components/Tabs/MainTabOnModule.vue";

const tabs = [
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
];
</script>
