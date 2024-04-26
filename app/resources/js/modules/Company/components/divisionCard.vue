<template>
  <q-card
    :bordered="true"
    class="column"
    style="
      width: 207px;
      height: 137px;
      border-radius: 10px;
      justify-content: space-between;
    "
    :style="{ 'border-color': color }"
  >
    <q-card-section class="q-pa-none">
      <p class="q-pa-sm q-ma-none text-blue">{{ name }}</p></q-card-section
    >
    <q-separator />
    <q-card-section class="q-pa-sm" style="font-size: 12px">{{
      manager
    }}</q-card-section>
    <q-card-section class="q-pa-none text-orange" style="font-size: 12px"
      >Сотрудники {{ staff }}</q-card-section
    >
    <q-card-section class="q-pa-none" style="align-self: center; height: 18px">
      <a style="height: 20px" color="brown text-lowercase"
        >{{ staff.length + " сотрудника" }}
        <q-menu max-height="130px">
          <q-list style="min-width: 100px">
            <q-item v-for="worker in staff" clickable>
              <q-item-section>{{ worker.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </a>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  name: String, // название отдела
  manager: String, // Руководитель
  staff: Array, // сотрудники
  color: String, // цвет фона
});
</script>

<style scoped></style>
