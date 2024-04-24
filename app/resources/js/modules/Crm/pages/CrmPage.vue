<template>
  <div class="q-ma-md">
    <MainTabOnModule :tabs="crmTabs"/>
    <CrmLayout>
      <RouterView/>
    </CrmLayout>

  </div>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/mainTabOnModule.vue";
import {crmTabs} from "../routes/crmTabs.js";
import CrmLayout from "@/layouts/CrmLayout.vue";
</script>

<style lang="scss" scoped>

</style>