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



import ViewTypeTabs from "@/components/Tabs/ViewTypeTabs.vue";
import MainTabOnModule from "@/components/Tabs/MainTabOnModule.vue";
import CreateButtons from "@/components/Buttons/CreateButtons.vue";
import SearchTagTabs from "@/components/Tabs/SearchTagTabs.vue";
</script>

<style lang="scss" scoped>
.page-tabs {
  display: flex;
}
</style>