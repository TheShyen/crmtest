<template>
  <q-header reveal class="bg-grey-8 text-white">
    <q-toolbar class="justify-start">
      <q-btn dense flat round icon="menu" @click="toggleSidebar"/>
      <q-toolbar-title class="title">
        <q-avatar>
          <img
              src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              alt="logo"
          />
        </q-avatar>
        Title
      </q-toolbar-title>

      <DropdownButton label="Филиалы" rounded dense no-caps flat>
        <FilialsList/>
      </DropdownButton>
      <CommonSearch :placeholder="'искать сотрудника, документ, прочее...'"/>


    </q-toolbar>
  </q-header>
</template>

<script setup>
import FilialsList from "@/modules/Filials/components/FilialsList.vue";
import CommonSearch from "@/components/Search/commonSearch.vue";
import DropdownButton from "../Buttons/dropdownButton.vue";

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
