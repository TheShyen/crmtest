<template>
  <q-drawer
    show-if-above
    :model-value="isSidebarOpen"
    width="250"
    side="left"
    behavior="desktop"
  >
    <q-list padding class="menu-list">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="inbox" />
        </q-item-section>

        <q-item-section> Inbox </q-item-section>
      </q-item>

      <q-item active clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="star" />
        </q-item-section>

        <q-item-section> Star </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <q-item-section> Send </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="drafts" />
        </q-item-section>

        <q-item-section> Drafts </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <router-link to="/company">
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section> Компания </q-item-section>
        </router-link>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
const props = defineProps({
  isSidebarOpen: Boolean,
});

</script>

<style lang="scss" scoped></style>
