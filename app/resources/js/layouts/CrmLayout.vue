<template>
  <CreateButtons @click="isRightSliderOpen = !isRightSliderOpen"/>
  <q-separator/>
  <div class="page-tabs">
    <ViewTypeTabs/>
    <SearchTagTabs/>
  </div>
  <slot></slot>
  <RightSlider :isOpen="isRightSliderOpen">
    <q-btn class="absolute-top-left q-ma-xs" dense flat rounded @click="isRightSliderOpen = !isRightSliderOpen" style="z-index: 999" icon="close"></q-btn>
  </RightSlider>

</template>

<script setup>
import ViewTypeTabs from "@/components/Tabs/viewTypeTabs.vue";
import CreateButtons from "@/components/Buttons/createButtons.vue";
import SearchTagTabs from "@/components/Tabs/searchTagTabs.vue";
import RightSlider from "../components/Slider/rightSlider.vue";
import EntityCard from "../modules/Crm/components/entityCard.vue";
import {ref} from "vue";

const isRightSliderOpen = ref(false)
</script>

<style lang="scss" scoped>
.page-tabs {
  display: flex;
}
</style>