<template>
  <q-card>
    <q-card-section horizontal>
      <q-card-section class="card">
        <div class="card__title">dsdfsfsfsfsfsfssf</div>
        <div class="card__transaction-type">dsdfsfsfsfsfsfssf</div>
        <div class="card__owner">dsdfsfsfsfsfsfssf</div>
        <div class="card__create-date">dsdfsfsfsfsfsfssf</div>
        <div class="card__status"></div>
        <div>dsdfsfsfsfsfsfsfdsf</div>
      </q-card-section>

      <q-card-actions vertical class="justify-start">
        <q-btn size="xs" flat round color="blue" icon="call"/>
        <q-btn size="xs" flat round color="grey-5" icon="message"/>
        <q-btn size="xs" flat round color="grey-5" icon="share"/>
      </q-card-actions>
    </q-card-section>
    <q-card-section class="row justify-between center">
      <q-btn class="text-grey-6" size="12px" dense no-caps icon="add" label="Дело" flat rounded></q-btn>
      <div class="last-modified-date text-grey-6">12 minutes ago</div>
    </q-card-section>
  </q-card>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.card {
  min-width: 225px;
}

.last-modified-date {
  text-align: center;
  align-content: center;
  font-size: 12px;
}
</style>