<template>
  <MainTabOnModule :tabs="tabs"></MainTabOnModule>
  <router-view></router-view>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/MainTabOnModule.vue";
import Counter from "@/components/Counter/Counter.vue";
import Alert from "@/components/Alert/Alert.vue";
import tabs from "../routes/companyTabs.js";
</script>
