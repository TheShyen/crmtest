<template>
  <MainTabOnModule :tabs="crmTabs"/>
  <div class="q-ma-md">
    <CrmLayout>
      <RightSlider :isOpen="store.state.crm.isRightSliderOpen" @close="(val) => store.state.crm.isRightSliderOpen = val">
        <FormGroup :formConfig='formConfig'/>
      </RightSlider>
      <RouterView/>
    </CrmLayout>
  </div>
</template>

<script setup>
import MainTabOnModule from "@/components/Tabs/mainTabOnModule.vue";
import {crmTabs} from "../routes/crmTabs.js";
import CrmLayout from "@/layouts/CrmLayout.vue";
import RightSlider from "../../../components/Slider/rightSlider.vue";
import FormGroup from "../../../components/Form/formGroup.vue";
import {useStore} from "vuex";

const store = useStore()

const formConfig = [
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: false,
    type: 'input',
    data: 'name',
  },
  {
    withSelect: false,
    type: 'dateInput',
    data: 'name',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'email',
    select: {},
    addBtn: true
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },
  {
    withSelect: true,
    type: 'input',
    data: 'phone',
    select: {},
    addBtn: true
  },
  {
    withSelect: false,
    type: 'input',
    data: 'secondName',
  },


]
</script>


<style lang="scss" scoped>
.page-tabs {
  display: flex;
}
</style>

