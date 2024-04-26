<template>
  <q-tabs
<<<<<<< HEAD
      v-model="tab"
      inline-label
      align="left"
      class="tabs shadow-2 bg-white q-ma-md q-pa-xs"
=======
    v-model="tab"
    inline-label
    align="left"
    class="bg-white shadow-6 q-mb-md q-pa-xs rounded-borders"
>>>>>>> remotes/origin/vadim
  >
    <div v-for="tab in tabs" :key="tab.id">
      <q-route-tab
        :to="tab.route"
        v-if="tab.type === 'tab'"
        :name="tab.text"
        :label="tab.text"
      >
      </q-route-tab>

      <q-btn-dropdown
        v-if="tab.type === 'select'"
        auto-close
        stretch
        flat
        :label="tab.text"
      >
        <q-list>
          <q-item
<<<<<<< HEAD
              v-for="selectItems in tab.options"
              clickable
=======
            v-for="selectItems in tab.options"
            clickable
            :key="selectItems.id"
>>>>>>> remotes/origin/vadim
          >
            <q-item-section>{{ selectItems.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-tabs>
</template>

<script setup>
<<<<<<< HEAD
import {ref} from "vue";
=======
import { ref, defineProps } from "vue";
>>>>>>> remotes/origin/vadim

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
