<template>
  <MainTabOnModule :tabs="tabs"></MainTabOnModule>

  <div class="q-px-md">
    <router-view> </router-view>
  </div>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/mainTabOnModule.vue";
import tabs from "../routes/companyTabs.js";
</script>
