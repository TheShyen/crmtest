<template>
  <q-form
    @submit="$emit('formSubmit', $event, id)"
    @reset="$emit('formReset', $event, id)"
    class="q-gutter-md"
    ><slot></slot><q-btn label="Submit" type="submit" color="primary"
  /></q-form>
</template>

<script setup></script>
