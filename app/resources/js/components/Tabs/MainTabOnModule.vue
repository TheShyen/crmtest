<template>
  <q-tabs
    v-model="tab"
    inline-label
    align="left"
    class="tabs shadow-2 bg-white q-ma-md q-pa-xs"
  >
    <div v-for="tab in tabs" :key="tab.id">
      <q-route-tab
        :to="tab.route"
        v-if="tab.type === 'tab'"
        :name="tab.text"
        :label="tab.text"
        style="text-transform: math-auto"
      >
      </q-route-tab>

      <q-btn-dropdown
        v-if="tab.type === 'select'"
        auto-close
        stretch
        flat
        :label="tab.text"
        style="text-transform: math-auto"
      >
        <q-list>
          <q-item
            v-for="selectItems in tab.options"
            clickable
          >
            <q-item-section>{{ selectItems.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-tabs>
</template>

<script setup>
import {ref} from "vue";

const tab = ref("mails");
const props = defineProps({
  tabs: Array,
});
</script>

<style lang="scss" scoped>
.tabs {
  border-radius: 10px;
}
</style>
