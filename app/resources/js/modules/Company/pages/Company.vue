<template>
  <MainTabOnModule :tabs="companyTabs"></MainTabOnModule>
  <router-view></router-view>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/mainTabOnModule.vue";
import {companyTabs} from "../routes/companyTabs.js";
</script>
