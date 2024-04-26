<template>
  <MainTabOnModule :tabs="crmTabs"/>
  <div class="q-ma-md">
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
.page-tabs {
  display: flex;
}
</style>

