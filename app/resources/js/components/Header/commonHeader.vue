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
<<<<<<< HEAD
      <DropdownButton label="Филиалы" rounded dense no-caps flat>
        <FilialsList/>
      </DropdownButton>
      <CommonSearch/>
=======
      <FillialsButton>
        <FilialsList />
      </FillialsButton>
      <CommonSearch :placeholder="'искать сотрудника, документ, прочее...'" />
>>>>>>> remotes/origin/vadim
    </q-toolbar>
  </q-header>
</template>

<script setup>
<<<<<<< HEAD
import FillialsButton from "@/components/Buttons/dropdownButton.vue";
import FilialsList from "@/modules/Filials/components/FilialsList.vue";
import CommonSearch from "@/components/Search/commonSearch.vue";
import DropdownButton from "../Buttons/dropdownButton.vue";

const emit = defineEmits(['toggleSidebar'])

=======
import FillialsButton from "@/components/Buttons/FillialsButton.vue";
import FilialsList from "@/modules/Filials/components/FilialsList.vue";
import CommonSearch from "@/components/Search/CommonSearch.vue";

const emit = defineEmits(["toggleSidebar"]);
>>>>>>> remotes/origin/vadim
function toggleSidebar() {
  emit("toggleSidebar");
}
</script>

<style lang="scss" scoped>
.title {
  max-width: 10vw;
}
</style>
