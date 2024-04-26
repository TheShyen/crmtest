<template>
  <q-card
    class="bg-yellow-5 rounded-borders"
    bordered
    style="width: 207px; height: 137px"
  >
    <q-card-section>{{ name }}</q-card-section>
    <q-separator />
    <q-card-section>{{ manager }}</q-card-section>
    <q-card-section>{{ staff }}</q-card-section>
    <q-card-section>{{ staff.length }} сотрудника</q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  name: String,
  manager: String,
  staff: Array,
});
</script>

<style scoped>
* {
  padding: 0;
}
</style>
