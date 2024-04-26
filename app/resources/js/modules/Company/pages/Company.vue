<template>
  <div class="q-pa-md">
    <MainTabOnModule :tabs="tabs"></MainTabOnModule>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/MainTabOnModule.vue";
import tabs from "../routes/companyTabs.js";
</script>
