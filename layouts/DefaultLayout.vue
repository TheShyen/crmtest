<template>
  <q-layout view="hHh LpR fFf">
    <CommonHeader @toggle-sidebar="handleSidebarToggle"/>
    <CommonSidebar :isSidebarOpen="isSidebarOpen"/>
    <q-page-container>
      <RouterView/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import CommonHeader from "../components/Header/commonHeader.vue";
import CommonSidebar from "../components/Sidebar/commonSidebar.vue";

const isSidebarOpen = ref(true);

function handleSidebarToggle() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>