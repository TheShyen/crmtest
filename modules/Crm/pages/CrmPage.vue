<template>
  <div class="q-ma-md">
    <MainTabOnModule/>
    <CreateButtons/>
    <q-separator/>
    <div class="page-tabs">
      <ViewTypeTabs/>
      <SearchTagTabs/>
    </div>
  </div>
</template>

<script setup>



import ViewTypeTabs from "@/components/Tabs/viewTypeTabs.vue";
import MainTabOnModule from "@/components/Tabs/mainTabOnModule.vue";
import CreateButtons from "@/components/Buttons/createButtons.vue";
import SearchTagTabs from "@/components/Tabs/searchTagTabs.vue";
</script>

<style lang="scss" scoped>
.page-tabs {
  display: flex;
}
</style>