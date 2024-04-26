<template>
  <CreateButtons @click="store.state.crm.isRightSliderOpen= !store.state.crm.isRightSliderOpen"/>
  <q-separator/>
  <div class="page-tabs">
    <ViewTypeTabs/>
    <SearchTagTabs/>
  </div>
  <slot></slot>

</template>

<script setup>
import ViewTypeTabs from "@/components/Tabs/viewTypeTabs.vue";
import CreateButtons from "@/components/Buttons/createButtons.vue";
import SearchTagTabs from "@/components/Tabs/searchTagTabs.vue";
import {useStore} from "vuex";

const store = useStore()
console.log(store)


</script>

<style lang="scss" scoped>
.page-tabs {
  display: flex;
}
</style>