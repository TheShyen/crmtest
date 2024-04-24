<template>
  <MainTabOnModule :tabs="tabs"></MainTabOnModule>

  <Counter :color="'red'">1</Counter>

  <div>
    <Alert :textColor="'white'">Привет!</Alert>
  </div>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/MainTabOnModule.vue";
import Counter from "@/components/Counter/Counter.vue";
import Alert from "@/components/Alert/Alert.vue";

const tabs = [
  { text: "Структура компании", route: "/", id: 1, type: "tab" },
  { text: "Сотрудники", route: "/", id: 2, type: "tab" },
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
</script>
