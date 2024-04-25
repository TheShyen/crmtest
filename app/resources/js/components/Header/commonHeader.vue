<template>
  <q-header reveal class="bg-primary text-white">
    <q-toolbar class="justify-start">
      <q-btn dense flat round icon="menu" @click="toggleSidebar" />
      <q-toolbar-title class="title">
        <q-avatar>
          <img
            src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
            alt="logo"
          />
        </q-avatar>
        Title
      </q-toolbar-title>
      <FillialsButton>
        <FilialsList />
      </FillialsButton>
      <CommonSearch :placeholder="'искать сотрудника, документ, прочее...'" />
    </q-toolbar>
  </q-header>
</template>

<script setup>
import FillialsButton from "@/components/Buttons/FillialsButton.vue";
import FilialsList from "@/modules/Filials/components/FilialsList.vue";
import CommonSearch from "@/components/Search/CommonSearch.vue";

const emit = defineEmits(["toggleSidebar"]);
function toggleSidebar() {
  emit("toggleSidebar");
}
</script>

<style lang="scss" scoped>
.title {
  max-width: 10vw;
}
</style>
