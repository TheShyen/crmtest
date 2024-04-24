<template>
  <q-list separator class="filials bg-grey1">
    <q-item class="filials-item bg-blue-1" v-for="i of 5">
      <q-avatar><img src="https://cdn.quasar.dev/img/avatar.png"></q-avatar>
      <div>
        <div>Some text</div>
        <div class="text-grey-5">Some text</div>
      </div>
      <q-badge rounded color="primary">Вы тут</q-badge>
      <q-btn rounded flat dense icon="more_horiz"></q-btn>
    </q-item>
  </q-list>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.filials {
  min-width: 400px;
  &-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

</style>