<template>
  <div class="row items-center">
    <h6 class="q-my-sm q-mr-lg">Сотрудники</h6>
    <Search
      :outlined="true"
      :bg="'primary'"
      :placeholder="'Фильтр + поиск'"
    ></Search>
  </div>

  <q-table :rows="rows" :columns="columns" />
</template>

<script setup>
import Search from "@/components/Search/commonSearch.vue";

const columns = [
  {
    name: "photo",
    required: true,
    label: "Фото",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
  },
  {
    name: "name",
    align: "center",
    label: "Имя и фамилия",
    field: "name",
    sortable: true,
  },
  { name: "Email", label: "E-Mail", field: "Email", sortable: true },
  { name: "workPhone", label: "Рабочий телефон", field: "workPhone" },
  { name: "post", label: "Должность", field: "post" },
  { name: "sodium", label: "Подразделение", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
];
</script>
